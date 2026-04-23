import { useEffect, useRef } from 'react'

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('webgl')
    if (!ctx) return
    const gl: WebGLRenderingContext = ctx

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = (canvas.width = canvas.offsetWidth)
    let H = (canvas.height = canvas.offsetHeight)
    const mouse = { x: W / 2, y: H / 2 }
    let rafId = 0

    // Attach to the section element (canvas parent) so events bubble up
    // from all child elements — text, buttons, everything inside the hero
    const section = canvas.parentElement!

    const handleMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    const handleMouseEnter = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
      for (const c of circles) {
        if (c.lerp !== undefined) { c.x = mouse.x; c.y = mouse.y }
      }
    }
    section.addEventListener('mousemove', handleMouseMove)
    section.addEventListener('mouseenter', handleMouseEnter)

    const ro = new ResizeObserver(() => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
      gl.viewport(0, 0, W, H)
      initCircles()
    })
    ro.observe(canvas)

    type Circle = {
      x: number; y: number; radius: number
      color: [number, number, number]
      vx: number; vy: number
      lerp?: number
      followIdx?: number   // -1 = follow mouse, N = follow circles[N]
    }

    function getBlobColors() {
      const isLight = document.documentElement.classList.contains('light')
      const amb: [number,number,number][] = isLight ? [
        [1.00, 0.88, 0.80],   // very light peach
        [1.00, 0.85, 0.74],   // soft warm peach
        [0.99, 0.91, 0.85],   // almost white blush
      ] : [
        [245/255,  94/255,   0/255],   // orange
        [232/255,   0/255,  61/255],   // red
        [ 92/255,  26/255, 110/255],   // purple
      ]
      const tail: [number,number,number][] = isLight ? [
        [1.00, 0.82, 0.55],   // soft gold      — cursor tip
        [0.98, 0.72, 0.38],   // muted orange   — mid
        [0.96, 0.65, 0.30],   // warm orange    — tail drag
      ] : [
        [255/255, 176/255,  32/255],   // amber        — cursor tip
        [245/255,  94/255,   0/255],   // orange       — mid
        [180/255,   0/255,  45/255],   // dark red     — tail drag
      ]
      return { amb, tail }
    }

    let circles: Circle[] = []

    function initCircles() {
      const { amb, tail } = getBlobColors()
      circles = []
      const base = (W + H) * 0.22
      for (let i = 0; i < 3; i++) {
        const spd = Math.random() * 2.5 + 0.4
        circles.push({
          x: Math.random() * W, y: Math.random() * H,
          radius: base, color: amb[i],
          vx: (Math.random() - 0.5) * spd,
          vy: (Math.random() - 0.5) * spd,
        })
      }
      const r0 = (W + H) * 0.075
      circles.push({ x: W / 2, y: H / 2, radius: r0 * 0.85, color: tail[0], vx: 0, vy: 0, lerp: 0.15, followIdx: -1 })
      circles.push({ x: W / 2, y: H / 2, radius: r0 * 1.05, color: tail[1], vx: 0, vy: 0, lerp: 0.08, followIdx: 3 })
      circles.push({ x: W / 2, y: H / 2, radius: r0 * 1.25, color: tail[2], vx: 0, vy: 0, lerp: 0.04, followIdx: 4 })
    }
    initCircles()

    const vert = `
      attribute vec2 a_pos; varying vec2 v_uv;
      void main(){ v_uv=a_pos*.5+.5; v_uv.y=1.-v_uv.y; gl_Position=vec4(a_pos,0,1); }`

    const frag = `
      precision mediump float;
      varying vec2 v_uv;
      uniform vec2 u_res;
      uniform int  u_count;
      uniform vec3 u_col[6];
      uniform vec3 u_pr[6];
      uniform vec3 u_topBg;
      uniform vec3 u_midBg;
      uniform vec3 u_botBg;
      void main(){
        vec2 st = v_uv*u_res;
        float t = st.y / u_res.y;
        vec3 bg = t<0.5
          ? mix(u_topBg, u_midBg, t*2.0)
          : mix(u_midBg, u_botBg, (t-0.5)*2.0);
        float field=0.; vec3 wCol=vec3(0.);
        for(int i=0;i<6;i++){
          if(i>=u_count)break;
          float d=length(st-u_pr[i].xy), sig=u_pr[i].z*.5;
          float v=exp(-(d*d)/(2.*sig*sig));
          field+=v; wCol+=u_col[i]*v;
        }
        vec3 blob=field>0.?wCol/field:vec3(0.);
        float intensity=pow(field,1.2)*0.5;
        vec3 fin=mix(bg,blob,clamp(intensity,0.,1.));
        float grey=dot(fin,vec3(0.299,0.587,0.114));
        fin=mix(fin,vec3(grey),0.5);
        gl_FragColor=vec4(fin,1.);
      }`

    function mkShader(type: number, src: string) {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }
    const prog = gl.createProgram()!
    gl.attachShader(prog, mkShader(gl.VERTEX_SHADER, vert))
    gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, frag))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes    = gl.getUniformLocation(prog, 'u_res')
    const uCount  = gl.getUniformLocation(prog, 'u_count')
    const uCol    = gl.getUniformLocation(prog, 'u_col')
    const uPR     = gl.getUniformLocation(prog, 'u_pr')
    const uTopBg  = gl.getUniformLocation(prog, 'u_topBg')
    const uMidBg  = gl.getUniformLocation(prog, 'u_midBg')
    const uBotBg  = gl.getUniformLocation(prog, 'u_botBg')
    gl.uniform2f(uRes, W, H)

    // bg color sets per theme
    const DARK_BG  = { top: [18/255, 10/255, 14/255], mid: [30/255, 16/255, 26/255], bot: [46/255, 24/255, 53/255] }
    const LIGHT_BG = { top: [253/255, 247/255, 244/255], mid: [245/255, 235/255, 229/255], bot: [237/255, 224/255, 216/255] }

    const bgRef = { current: document.documentElement.classList.contains('light') ? LIGHT_BG : DARK_BG }

    function applyBgUniforms() {
      const bg = bgRef.current
      gl.uniform3fv(uTopBg, new Float32Array(bg.top))
      gl.uniform3fv(uMidBg, new Float32Array(bg.mid))
      gl.uniform3fv(uBotBg, new Float32Array(bg.bot))
    }
    applyBgUniforms()

    const mo = new MutationObserver(() => {
      bgRef.current = document.documentElement.classList.contains('light') ? LIGHT_BG : DARK_BG
      applyBgUniforms()
      initCircles()
    })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    function draw() {
      for (let i = 0; i < circles.length; i++) {
        const c = circles[i]
        if (c.lerp === undefined) {
          // ambient drift + wrap
          c.x += c.vx; c.y += c.vy
          if (c.x - c.radius > W) c.x = -c.radius
          if (c.x + c.radius < 0) c.x = W + c.radius
          if (c.y - c.radius > H) c.y = -c.radius
          if (c.y + c.radius < 0) c.y = H + c.radius
        } else {
          // tail chain: each segment lerps toward its target
          const tx = c.followIdx === -1 ? mouse.x : circles[c.followIdx!].x
          const ty = c.followIdx === -1 ? mouse.y : circles[c.followIdx!].y
          c.x += (tx - c.x) * c.lerp
          c.y += (ty - c.y) * c.lerp
        }
      }

      gl.viewport(0, 0, W, H)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.uniform1i(uCount, circles.length)
      gl.uniform2f(uRes, W, H)

      const cols: number[] = [], prs: number[] = []
      for (let i = 0; i < 6; i++) {
        if (i < circles.length) {
          const c = circles[i]
          cols.push(...c.color)
          prs.push(c.x, c.y, c.radius)
        } else {
          cols.push(0, 0, 0)
          prs.push(0, 0, 0)
        }
      }
      gl.uniform3fv(uCol, new Float32Array(cols))
      gl.uniform3fv(uPR, new Float32Array(prs))
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      if (!prefersReduced) rafId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      mo.disconnect()
      section.removeEventListener('mousemove', handleMouseMove)
      section.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  )
}
