import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import type { ColorTheme } from '../types'
import { BookOpen, BookCheck, Sparkles, ScrollText } from 'lucide-react'

interface ThreeCanvasProps {
  colorTheme?: ColorTheme
}

const THEME_CONFIG: Record<ColorTheme, { cover: number; accent: number; ribbon: number; label: string }> = {
  royalNavy: {
    cover: 0x1e293b, // Luxury Slate Navy
    accent: 0xd97706, // Sivakasi Gold
    ribbon: 0xd97706, // Gold Ribbon
    label: 'Navy & Sivakasi Gold',
  },
  emeraldGold: {
    cover: 0x064e3b, // Deep Emerald
    accent: 0xfbbf24, // Bright Gold
    ribbon: 0x059669, // Emerald
    label: 'Emerald Hardbound',
  },
  obsidianDark: {
    cover: 0x0f172a, // Charcoal Obsidian
    accent: 0x6366f1, // Royal Indigo
    ribbon: 0x4f46e5, // Indigo
    label: 'Charcoal Executive',
  },
  crimsonRuby: {
    cover: 0x881337, // Royal Maroon / Crimson
    accent: 0xfef08a, // Champagne Gold
    ribbon: 0xb45309, // Amber
    label: 'Maroon Deluxe',
  },
  auroraRainbow: {
    cover: 0x581c87, // Vibrant Violet & Rainbow Gradient
    accent: 0xf59e0b, // Vivid Gold Wireframe
    ribbon: 0x06b6d4, // Cyan Ribbon
    label: 'Colorful Outline Edition',
  },
}


export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  colorTheme = 'royalNavy',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [bookState, setBookState] = useState<'open' | 'closed' | 'flipping' | 'scroll'>('scroll')
  const [scrollSpeedIndicator, setScrollSpeedIndicator] = useState(0)

  // Target angles for book articulation
  const targetCoverAngleRef = useRef<number>(-Math.PI * 0.85)
  const targetPage1AngleRef = useRef<number>(-Math.PI * 0.75)
  const targetPage2AngleRef = useRef<number>(-Math.PI * 0.6)
  const targetPage3AngleRef = useRef<number>(-Math.PI * 0.4)

  const coverMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null)
  const emblemMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null)
  const ribbonMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null)

  // Scroll tracking refs
  const scrollProgressRef = useRef<number>(0)
  const scrollVelocityRef = useRef<number>(0)
  const lastScrollYRef = useRef<number>(0)

  // Color theme updates
  useEffect(() => {
    const config = THEME_CONFIG[colorTheme] || THEME_CONFIG.royalNavy
    if (coverMaterialRef.current) coverMaterialRef.current.color.setHex(config.cover)
    if (emblemMaterialRef.current) emblemMaterialRef.current.color.setHex(config.accent)
    if (ribbonMaterialRef.current) ribbonMaterialRef.current.color.setHex(config.ribbon)
  }, [colorTheme])

  const setBookOpen = () => {
    setBookState('open')
    targetCoverAngleRef.current = -Math.PI * 0.88
    targetPage1AngleRef.current = -Math.PI * 0.8
    targetPage2AngleRef.current = -Math.PI * 0.65
    targetPage3AngleRef.current = -Math.PI * 0.45
  }

  const setBookClosed = () => {
    setBookState('closed')
    targetCoverAngleRef.current = 0
    targetPage1AngleRef.current = 0
    targetPage2AngleRef.current = 0
    targetPage3AngleRef.current = 0
  }

  const setBookFlipping = () => {
    setBookState('flipping')
  }

  const setBookScrollReactive = () => {
    setBookState('scroll')
  }

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    let width = container.clientWidth || 800
    let height = container.clientHeight || 540

    // 1. Scene
    const scene = new THREE.Scene()

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000)
    camera.position.set(0, 1.4, 5.2)

    // 3. Renderer with transparent background and crisp pixel ratio
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // 4. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xfffbeb, 2.8)
    mainLight.position.set(4, 8, 5)
    scene.add(mainLight)

    const goldFillLight = new THREE.DirectionalLight(0xfef3c7, 1.6)
    goldFillLight.position.set(-4, -2, 3)
    scene.add(goldFillLight)

    const topSoftLight = new THREE.PointLight(0xffffff, 1.2, 20)
    topSoftLight.position.set(0, 5, 2)
    scene.add(topSoftLight)

    // 5. Printed diary page texture
    const createPageTexture = (pageTitle: string, pageNum: string) => {
      const canvas = document.createElement('canvas')
      canvas.width = 512
      canvas.height = 700
      const ctx = canvas.getContext('2d')!

      // Cream background
      ctx.fillStyle = '#faf7ed'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Gold border
      ctx.strokeStyle = '#e2d9be'
      ctx.lineWidth = 2
      ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60)

      // Header Banner
      ctx.fillStyle = '#b45309'
      ctx.font = 'bold 22px sans-serif'
      ctx.fillText('SORSONS DIARIES 2025', 50, 75)

      ctx.fillStyle = '#64748b'
      ctx.font = '13px monospace'
      ctx.fillText(pageTitle, 50, 105)
      ctx.fillText('SUTHARSAN OFFSET PRINTERS • SIVAKASI', 50, 125)

      // Page number
      ctx.fillStyle = '#94a3b8'
      ctx.font = 'bold 14px monospace'
      ctx.textAlign = 'right'
      ctx.fillText(pageNum, canvas.width - 50, 75)
      ctx.textAlign = 'left'

      // Ruled writing lines
      ctx.strokeStyle = '#e2e8f0'
      ctx.lineWidth = 1.5
      for (let y = 160; y <= 630; y += 28) {
        ctx.beginPath()
        ctx.moveTo(50, y)
        ctx.lineTo(canvas.width - 50, y)
        ctx.stroke()
      }

      // Decorative watermark in center
      ctx.fillStyle = 'rgba(180, 83, 9, 0.09)'
      ctx.font = 'bold 42px serif'
      ctx.textAlign = 'center'
      ctx.fillText('★ SUTTHARSAN ★', canvas.width / 2, 380)

      return new THREE.CanvasTexture(canvas)
    }

    const leftPageTexture = createPageTexture('DAILY STRATEGY & LOG', 'PAGE 01')
    const rightPageTexture = createPageTexture('EXECUTIVE ANNUAL PLANNER', 'PAGE 02')
    const thirdPageTexture = createPageTexture('SIVAKASI PRESS DISPATCH', 'PAGE 03')

    const pageMatLeft = new THREE.MeshStandardMaterial({ map: leftPageTexture, roughness: 0.8 })
    const pageMatRight = new THREE.MeshStandardMaterial({ map: rightPageTexture, roughness: 0.8 })
    const pageMatThird = new THREE.MeshStandardMaterial({ map: thirdPageTexture, roughness: 0.8 })

    // 6. Assembling the Articulated Book
    const bookWidth = 2.0
    const bookHeight = 2.85
    const bookThickness = 0.32

    const diaryRoot = new THREE.Group()
    const currentConfig = THEME_CONFIG[colorTheme] || THEME_CONFIG.royalNavy

    // Cover Material
    const coverMaterial = new THREE.MeshStandardMaterial({
      color: currentConfig.cover,
      roughness: 0.35,
      metalness: 0.1,
    })
    coverMaterialRef.current = coverMaterial

    // Gold Emblem Material
    const emblemMaterial = new THREE.MeshStandardMaterial({
      color: currentConfig.accent,
      roughness: 0.2,
      metalness: 0.85,
    })
    emblemMaterialRef.current = emblemMaterial

    // Ribbon Material
    const ribbonMaterial = new THREE.MeshStandardMaterial({
      color: currentConfig.ribbon,
      roughness: 0.4,
    })
    ribbonMaterialRef.current = ribbonMaterial

    // Back Cover
    const backCoverGeom = new THREE.BoxGeometry(bookWidth, bookHeight, 0.04)
    const backCover = new THREE.Mesh(backCoverGeom, coverMaterial)
    backCover.position.set(bookWidth / 2, 0, -bookThickness / 2)
    diaryRoot.add(backCover)

    // Base thick pages block
    const pageBlockGeom = new THREE.BoxGeometry(bookWidth * 0.96, bookHeight * 0.95, bookThickness * 0.85)
    const pageEdgeMaterial = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      roughness: 0.5,
      metalness: 0.3,
    })
    const pageMaterials = [
      pageEdgeMaterial,
      pageEdgeMaterial,
      pageEdgeMaterial,
      pageEdgeMaterial,
      pageMatRight,
      pageEdgeMaterial,
    ]
    const basePageBlock = new THREE.Mesh(pageBlockGeom, pageMaterials)
    basePageBlock.position.set(bookWidth / 2 + 0.02, 0, 0)
    diaryRoot.add(basePageBlock)

    // Spine Cylinder
    const spineGeom = new THREE.CylinderGeometry(bookThickness / 2, bookThickness / 2, bookHeight, 24, 1, false, Math.PI / 2, Math.PI)
    const spine = new THREE.Mesh(spineGeom, coverMaterial)
    spine.rotation.z = Math.PI / 2
    spine.position.set(0, 0, 0)
    diaryRoot.add(spine)

    // Front Cover Hinge (Pivoting at x = 0)
    const frontCoverHinge = new THREE.Group()
    frontCoverHinge.position.set(0, 0, bookThickness / 2)

    const frontCoverGeom = new THREE.BoxGeometry(bookWidth, bookHeight, 0.04)
    const frontCover = new THREE.Mesh(frontCoverGeom, coverMaterial)
    frontCover.position.set(bookWidth / 2, 0, 0)
    frontCoverHinge.add(frontCover)

    // Gold Foil Emblem
    const emblemRingGeom = new THREE.TorusGeometry(0.38, 0.03, 16, 48)
    const emblemRing = new THREE.Mesh(emblemRingGeom, emblemMaterial)
    emblemRing.position.set(bookWidth / 2, 0.35, 0.025)
    frontCoverHinge.add(emblemRing)

    const diamondGeom = new THREE.BoxGeometry(0.24, 0.24, 0.02)
    const diamond = new THREE.Mesh(diamondGeom, emblemMaterial)
    diamond.rotation.z = Math.PI / 4
    diamond.position.set(bookWidth / 2, 0.35, 0.026)
    frontCoverHinge.add(diamond)

    // Gold Nameplate
    const plateGeom = new THREE.BoxGeometry(1.0, 0.16, 0.02)
    const plate = new THREE.Mesh(plateGeom, emblemMaterial)
    plate.position.set(bookWidth / 2, -0.4, 0.026)
    frontCoverHinge.add(plate)

    diaryRoot.add(frontCoverHinge)

    // Articulated Fanning Pages
    const createFanningPage = (material: THREE.Material) => {
      const hinge = new THREE.Group()
      hinge.position.set(0, 0, 0.02)
      const pageMeshGeom = new THREE.BoxGeometry(bookWidth * 0.94, bookHeight * 0.93, 0.01)
      const pageMesh = new THREE.Mesh(pageMeshGeom, material)
      pageMesh.position.set(bookWidth * 0.94 / 2, 0, 0)
      hinge.add(pageMesh)
      diaryRoot.add(hinge)
      return hinge
    }

    const pageHinge1 = createFanningPage(pageMatLeft)
    const pageHinge2 = createFanningPage(pageMatThird)
    const pageHinge3 = createFanningPage(pageMatRight)

    // Silk Ribbon Bookmark
    const ribbonCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(bookWidth * 0.4, -bookHeight * 0.45, 0.1),
      new THREE.Vector3(bookWidth * 0.5, -bookHeight * 0.65, 0.25),
      new THREE.Vector3(bookWidth * 0.45, -bookHeight * 0.85, 0.15),
      new THREE.Vector3(bookWidth * 0.52, -bookHeight * 1.0, 0.05),
    ])
    const ribbonGeom = new THREE.TubeGeometry(ribbonCurve, 24, 0.035, 8, false)
    const ribbon = new THREE.Mesh(ribbonGeom, ribbonMaterial)
    diaryRoot.add(ribbon)

    diaryRoot.position.set(-0.6, 0.1, 0)
    diaryRoot.rotation.x = 0.35
    diaryRoot.rotation.y = 0.2
    scene.add(diaryRoot)

    // 7. Floating particles
    const particleCount = 70
    const particleGeom = new THREE.BufferGeometry()
    const pPositions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      pPositions[i] = (Math.random() - 0.5) * 10
      pPositions[i + 1] = (Math.random() - 0.5) * 8
      pPositions[i + 2] = (Math.random() - 0.5) * 6
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(pPositions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0xd97706,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    })
    const particles = new THREE.Points(particleGeom, particleMat)
    scene.add(particles)

    // 8. SCROLL & MOUSE EVENT LISTENERS (FULL PAGE INTERACTION)
    let mouseX = 0
    let mouseY = 0

    const handleWindowMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleWindowMouseMove)

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll))

      // Calculate velocity
      const delta = scrollY - lastScrollYRef.current
      lastScrollYRef.current = scrollY
      scrollVelocityRef.current = delta

      scrollProgressRef.current = progress
      setScrollSpeedIndicator(Math.round(progress * 100))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    // 9. ANIMATION ENGINE
    let animId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()
      const scrollProg = scrollProgressRef.current
      const scrollVel = scrollVelocityRef.current

      // Velocity decay
      scrollVelocityRef.current *= 0.92

      if (bookState === 'scroll') {
        // SCROLL-DRIVEN BOOK OPENING, PAGE FLIPPING, AND CLOSING:
        // Hero top (0-15%): Book opens wide and welcomes user
        // Mid sections (15-70%): Pages dynamically turn and flip as user scrolls down!
        // Near footer (70-100%): Book gently folds closed to seal the experience!

        if (scrollProg < 0.15) {
          // Opening phase
          const openFactor = Math.min(1, scrollProg / 0.08)
          targetCoverAngleRef.current = -Math.PI * (0.6 + openFactor * 0.28)
          targetPage1AngleRef.current = -Math.PI * (0.5 + openFactor * 0.3)
          targetPage2AngleRef.current = -Math.PI * (0.35 + openFactor * 0.3)
          targetPage3AngleRef.current = -Math.PI * (0.2 + openFactor * 0.25)
        } else if (scrollProg < 0.75) {
          // Dynamic Page-Flipping as user navigates through catalog
          const flipPhase = (scrollProg - 0.15) * 8.0 // 0 to ~4.8
          const velEffect = Math.min(0.25, Math.max(-0.25, scrollVel * 0.01))

          targetCoverAngleRef.current = -Math.PI * 0.92
          targetPage1AngleRef.current = -Math.PI * Math.min(0.88, 0.7 + Math.sin(flipPhase) * 0.15 + velEffect)
          targetPage2AngleRef.current = -Math.PI * Math.min(0.8, 0.5 + Math.cos(flipPhase * 1.2) * 0.2 + velEffect)
          targetPage3AngleRef.current = -Math.PI * Math.min(0.7, 0.35 + Math.sin(flipPhase * 1.5) * 0.2 + velEffect)
        } else {
          // Closing book towards footer
          const closeFactor = (scrollProg - 0.75) / 0.25 // 0 to 1
          targetCoverAngleRef.current = -Math.PI * 0.92 * (1 - closeFactor)
          targetPage1AngleRef.current = -Math.PI * 0.8 * (1 - closeFactor)
          targetPage2AngleRef.current = -Math.PI * 0.6 * (1 - closeFactor)
          targetPage3AngleRef.current = -Math.PI * 0.4 * (1 - closeFactor)
        }

        // Book glides horizontally across the full page width and vertically as you scroll
        const scrollFloatY = Math.sin(scrollProg * Math.PI * 3) * 0.28
        const scrollFloatX = Math.sin(scrollProg * Math.PI * 2) * 1.25
        diaryRoot.position.y = 0.1 + scrollFloatY + Math.sin(elapsed * 1.2) * 0.04
        diaryRoot.position.x = -0.4 + scrollFloatX + Math.cos(elapsed * 0.8) * 0.05
      } else if (bookState === 'flipping') {
        // Automated continuous flip
        targetCoverAngleRef.current = -Math.PI * 0.92
        targetPage1AngleRef.current = -Math.PI * (0.75 + Math.sin(elapsed * 2.5) * 0.12)
        targetPage2AngleRef.current = -Math.PI * (0.55 + Math.cos(elapsed * 2.5) * 0.15)
        targetPage3AngleRef.current = -Math.PI * (0.35 + Math.sin(elapsed * 2.5) * 0.1)
        diaryRoot.position.y = 0.1 + Math.sin(elapsed * 1.5) * 0.06
      }

      // Smooth damping on hinge rotation
      frontCoverHinge.rotation.y += (targetCoverAngleRef.current - frontCoverHinge.rotation.y) * 0.08
      pageHinge1.rotation.y += (targetPage1AngleRef.current - pageHinge1.rotation.y) * 0.07
      pageHinge2.rotation.y += (targetPage2AngleRef.current - pageHinge2.rotation.y) * 0.06
      pageHinge3.rotation.y += (targetPage3AngleRef.current - pageHinge3.rotation.y) * 0.05

      // Mouse tracking tilt across full page width
      const targetRotY = 0.2 + mouseX * 0.45 + (scrollProg * 0.4)
      const targetRotX = 0.35 - mouseY * 0.28 + (Math.sin(scrollProg * Math.PI) * 0.2)

      diaryRoot.rotation.y += (targetRotY - diaryRoot.rotation.y) * 0.05
      diaryRoot.rotation.x += (targetRotX - diaryRoot.rotation.x) * 0.05

      particles.rotation.y = elapsed * 0.02 + scrollProg * 0.5

      renderer.render(scene, camera)
    }

    animate()

    // 10. Resize
    const handleResize = () => {
      if (!container) return
      width = container.clientWidth
      height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animId)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [colorTheme, bookState])

  return (
    <div className="relative w-full">
      {/* 3D WebGL Canvas: Full page width */}
      <div
        ref={containerRef}
        className="w-full h-[500px] sm:h-[620px] lg:h-[720px] cursor-pointer select-none"
      />


      {/* Interactive Controls & Live Scroll Progress Bar: rounded-md, no shadows */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 border border-slate-200 p-1.5 rounded-md flex flex-wrap items-center justify-center gap-1.5 backdrop-blur-md z-10">
        <button
          onClick={setBookScrollReactive}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
            bookState === 'scroll'
              ? 'bg-amber-500 text-slate-950 font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <ScrollText className="w-3.5 h-3.5" />
          <span>Scroll-Driven Animation ({scrollSpeedIndicator}%)</span>
        </button>

        <button
          onClick={setBookOpen}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
            bookState === 'open'
              ? 'bg-amber-500 text-slate-950 font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Open Full</span>
        </button>

        <button
          onClick={setBookFlipping}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
            bookState === 'flipping'
              ? 'bg-amber-500 text-slate-950 font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Auto Flip</span>
        </button>

        <button
          onClick={setBookClosed}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
            bookState === 'closed'
              ? 'bg-amber-500 text-slate-950 font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <BookCheck className="w-3.5 h-3.5" />
          <span>Close Cover</span>
        </button>
      </div>
    </div>
  )
}
