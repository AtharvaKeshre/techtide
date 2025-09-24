"use client"

import React, { useState, useCallback, useRef, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  images: string[]
  title?: string
  triggerLabel?: string
  className?: string
}

export default function ProductModal({ 
  images, 
  title, 
  triggerLabel = "Learn More",
  className = ""
}: Props) {
  const safeImages = (images && images.length > 0 ? images : ["/placeholder.jpg"]).map((s) => s || "/placeholder.jpg")
  const [selected, setSelected] = useState(0)
  const [open, setOpen] = useState(false)
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 })
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  const thumbsRef = useRef<Array<HTMLButtonElement | null>>([])
  const thumbsContainerRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const imageContainerRef = useRef<HTMLDivElement | null>(null)

  // Gesture state
  const gestureRef = useRef({
    initialDistance: 0,
    initialScale: 1,
    initialX: 0,
    initialY: 0,
    lastX: 0,
    lastY: 0,
    mode: 'none' as 'none' | 'pan' | 'pinch' | 'swipe',
    startX: 0,
    startY: 0,
    startTime: 0
  })

  // Initialize image loaded state and mount status
  useEffect(() => {
    setIsMounted(true)
    setImageLoaded(new Array(safeImages.length).fill(false))
  }, [safeImages.length])

  // Reset transform when image changes
  useEffect(() => {
    setTransform({ scale: 1, x: 0, y: 0 })
    setIsLoading(true)
  }, [selected])

  // Auto-hide controls on mobile
  const resetControlsTimer = useCallback(() => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    setShowControls(true)
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false)
    }, 3000)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return
      
      switch (e.key) {
        case "Escape":
          closeModal()
          break
        case "ArrowLeft":
          e.preventDefault()
          navigateImage(-1)
          break
        case "ArrowRight":
          e.preventDefault()
          navigateImage(1)
          break
      }
    }

    if (open) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
      // Set viewport meta for mobile zoom control
      if (typeof document !== 'undefined') {
        const viewport = document.querySelector('meta[name="viewport"]')
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
        }
      }
    }
    
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = "unset"
      // Reset viewport
      if (typeof document !== 'undefined') {
        const viewport = document.querySelector('meta[name="viewport"]')
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0')
        }
      }
    }
  }, [open])

  const navigateImage = useCallback((direction: number) => {
    setSelected((s) => {
      const newIndex = (s + direction + safeImages.length) % safeImages.length
      return newIndex
    })
    resetControlsTimer()
  }, [safeImages.length, resetControlsTimer])

  // Get distance between two touch points
  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0
    const dx = touches[0].clientX - touches[1].clientX
    const dy = touches[0].clientY - touches[1].clientY
    return Math.sqrt(dx * dx + dy * dy)
  }

  // Get center point between two touches
  const getTouchCenter = (touches: React.TouchList) => {
    if (touches.length < 2) return { x: 0, y: 0 }
    return {
      x: (touches[0].clientX + touches[1].clientX) / 2,
      y: (touches[0].clientY + touches[1].clientY) / 2
    }
  }

  // Handle touch start
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    resetControlsTimer()
    const gesture = gestureRef.current
    
    if (e.touches.length === 1) {
      const touch = e.touches[0]
      gesture.startX = touch.clientX
      gesture.startY = touch.clientY
      gesture.startTime = Date.now()
      gesture.lastX = touch.clientX
      gesture.lastY = touch.clientY
      
      if (transform.scale > 1) {
        gesture.mode = 'pan'
        gesture.initialX = transform.x
        gesture.initialY = transform.y
      } else {
        gesture.mode = 'swipe'
      }
    } else if (e.touches.length === 2) {
      gesture.mode = 'pinch'
      gesture.initialDistance = getTouchDistance(e.touches)
      gesture.initialScale = transform.scale
      
      const center = getTouchCenter(e.touches)
      gesture.lastX = center.x
      gesture.lastY = center.y
      gesture.initialX = transform.x
      gesture.initialY = transform.y
    }
  }, [transform, resetControlsTimer])

  // Handle touch move
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    const gesture = gestureRef.current
    
    if (gesture.mode === 'pan' && e.touches.length === 1) {
      const touch = e.touches[0]
      const deltaX = touch.clientX - gesture.lastX
      const deltaY = touch.clientY - gesture.lastY
      
      setTransform(prev => {
        const maxX = (prev.scale - 1) * 100
        const maxY = (prev.scale - 1) * 100
        return {
          ...prev,
          x: Math.max(-maxX, Math.min(maxX, prev.x + deltaX)),
          y: Math.max(-maxY, Math.min(maxY, prev.y + deltaY))
        }
      })
      
      gesture.lastX = touch.clientX
      gesture.lastY = touch.clientY
      
    } else if (gesture.mode === 'pinch' && e.touches.length === 2) {
      const currentDistance = getTouchDistance(e.touches)
      const center = getTouchCenter(e.touches)
      
      // Calculate new scale
      const scale = (currentDistance / gesture.initialDistance) * gesture.initialScale
      const boundedScale = Math.max(1, Math.min(3, scale))
      
      // Calculate pan to keep zoom centered
      const deltaX = center.x - gesture.lastX
      const deltaY = center.y - gesture.lastY
      
      setTransform({
        scale: boundedScale,
        x: gesture.initialX + deltaX,
        y: gesture.initialY + deltaY
      })
    }
  }, [])

  // Handle touch end
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const gesture = gestureRef.current
    
    if (gesture.mode === 'swipe' && e.changedTouches.length === 1) {
      const touch = e.changedTouches[0]
      const deltaX = touch.clientX - gesture.startX
      const deltaY = touch.clientY - gesture.startY
      const deltaTime = Date.now() - gesture.startTime
      
      const absX = Math.abs(deltaX)
      const absY = Math.abs(deltaY)
      
      // Check for swipe
      if (absX > absY && absX > 50 && deltaTime < 300) {
        if (deltaX > 0) {
          navigateImage(-1)
        } else {
          navigateImage(1)
        }
      } else if (absX < 10 && absY < 10 && deltaTime < 200) {
        // Tap
        setShowControls(prev => !prev)
        resetControlsTimer()
      }
    }
    
    // Reset if close to 1x zoom
    if (Math.abs(transform.scale - 1) < 0.1) {
      setTransform({ scale: 1, x: 0, y: 0 })
    }
    
    gesture.mode = 'none'
  }, [transform.scale, navigateImage, resetControlsTimer])

  // Double tap handler
  const lastTapRef = useRef<number>(0)
  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    const now = Date.now()
    const timeDiff = now - lastTapRef.current
    
    if (timeDiff < 300 && timeDiff > 0) {
      e.preventDefault()
      if (transform.scale > 1) {
        setTransform({ scale: 1, x: 0, y: 0 })
      } else {
        setTransform({ scale: 2, x: 0, y: 0 })
      }
    }
    
    lastTapRef.current = now
  }, [transform.scale])

  const handleZoomIn = useCallback(() => {
    setTransform(prev => ({
      ...prev,
      scale: Math.min(3, prev.scale + 0.5)
    }))
    resetControlsTimer()
  }, [resetControlsTimer])

  const handleZoomOut = useCallback(() => {
    setTransform(prev => {
      const newScale = Math.max(1, prev.scale - 0.5)
      return {
        scale: newScale,
        x: newScale <= 1 ? 0 : prev.x,
        y: newScale <= 1 ? 0 : prev.y
      }
    })
    resetControlsTimer()
  }, [resetControlsTimer])

  const handleImageLoad = useCallback((index: number) => {
    setImageLoaded(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
    if (index === selected) {
      setIsLoading(false)
    }
  }, [selected])

  const closeModal = useCallback(() => {
    setOpen(false)
    setTransform({ scale: 1, x: 0, y: 0 })
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
  }, [])

  const scrollThumbs = useCallback((dir: number) => {
    const el = thumbsContainerRef.current
    if (!el) return
    const delta = Math.max(120, Math.floor(el.clientWidth * 0.6)) * dir
    el.scrollTo({ left: el.scrollLeft + delta, behavior: "smooth" })
  }, [])

  // Auto-scroll selected thumbnail into view
  useEffect(() => {
    const thumb = thumbsRef.current[selected]
    try {
      thumb?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
    } catch (e) {
      // Fallback for older browsers
    }
  }, [selected])

  return (
    <>
      <Button 
        variant="outline" 
        className={`w-full flex items-center justify-center gap-2 ${className}`}
        onClick={() => setOpen(true)}
      >
        {triggerLabel}
        <ArrowRight className="h-4 w-4" />
      </Button>

      {open && isMounted && (
        <div className="fixed inset-0 z-50 bg-black/95 md:bg-black/70 md:backdrop-blur-sm">
          <div className="h-full w-full flex flex-col md:items-center md:justify-center md:p-4">
            <div 
              ref={modalRef}
              className="bg-background h-full w-full md:h-[90vh] md:w-[90vw] md:max-w-4xl md:rounded-lg shadow-xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className={`
                flex items-center justify-between p-3 md:p-4 border-b bg-background/95 backdrop-blur-sm
                transition-transform duration-300 relative z-30
                ${showControls ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}
              `}>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold truncate">{title ?? "Product Images"}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
                    Swipe, pinch to zoom, or double-tap
                  </p>
                </div>
                
                {/* Desktop Controls */}
                <div className="hidden md:flex items-center gap-1 ml-4">
                  <Button variant="ghost" size="sm" onClick={handleZoomOut} disabled={transform.scale <= 1}>
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  
                  <span className="text-xs text-muted-foreground min-w-[3rem] text-center">
                    {Math.round(transform.scale * 100)}%
                  </span>
                  
                  <Button variant="ghost" size="sm" onClick={handleZoomIn} disabled={transform.scale >= 3}>
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeModal}
                  className="ml-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Main Image Area */}
              <div className="flex-1 relative overflow-hidden">
                <div
                  ref={imageContainerRef}
                  className="w-full h-full bg-black md:bg-muted flex items-center justify-center relative"
                  style={{ touchAction: "none" }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onClick={handleDoubleClick}
                >
                  {/* Navigation Arrows */}
                  {safeImages.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigateImage(-1)}
                        className={`
                          absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 
                          rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-sm
                          h-12 w-12 md:h-10 md:w-10
                          transition-all duration-300
                          ${showControls ? 'opacity-100 scale-100' : 'opacity-0 scale-75 md:opacity-100 md:scale-100'}
                        `}
                      >
                        <ChevronLeft className="h-6 w-6 md:h-5 md:w-5" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigateImage(1)}
                        className={`
                          absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 
                          rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-sm
                          h-12 w-12 md:h-10 md:w-10
                          transition-all duration-300
                          ${showControls ? 'opacity-100 scale-100' : 'opacity-0 scale-75 md:opacity-100 md:scale-100'}
                        `}
                      >
                        <ChevronRight className="h-6 w-6 md:h-5 md:w-5" />
                      </Button>
                    </>
                  )}

                  {/* Loading Indicator */}
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                      <div className="animate-spin rounded-full h-10 w-10 border-2 border-white border-t-transparent" />
                    </div>
                  )}

                  {/* Main Image */}
                  <img
                    ref={imageRef}
                    src={safeImages[selected % safeImages.length]}
                    alt={`Product image ${selected + 1} of ${safeImages.length}`}
                    className="object-contain"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      transform: `scale(${transform.scale}) translate(${transform.x / transform.scale}px, ${transform.y / transform.scale}px)`,
                      transformOrigin: "center",
                      transition: "none"
                    }}
                    onLoad={() => handleImageLoad(selected)}
                    decoding="async"
                    loading="eager"
                    draggable={false}
                  />

                  {/* Bottom Controls */}
                  <div className={`
                    absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3
                    transition-all duration-300
                    ${showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:opacity-100 md:translate-y-0'}
                  `}>
                    {/* Mobile Zoom Controls */}
                    <div className="md:hidden flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full p-1">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={handleZoomOut} 
                        disabled={transform.scale <= 1}
                        className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                      >
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={handleZoomIn} 
                        disabled={transform.scale >= 3}
                        className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Counter */}
                    {safeImages.length > 1 && (
                      <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm font-medium">
                        {selected + 1} / {safeImages.length}
                      </div>
                    )}
                  </div>

                  {/* Mobile Instructions */}
                  <div className={`
                    md:hidden absolute top-4 left-1/2 -translate-x-1/2 
                    bg-black/40 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm
                    transition-all duration-300 delay-1000
                    ${showControls ? 'opacity-0' : 'opacity-100'}
                  `}>
                    Tap for controls
                  </div>
                </div>
              </div>

              {/* Thumbnail Strip */}
              {safeImages.length > 1 && (
                <div className={`
                  bg-background border-t transition-all duration-300
                  ${showControls ? 'translate-y-0' : 'translate-y-full md:translate-y-0'}
                `}>
                  <div className="p-2 md:p-4">
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => scrollThumbs(-1)}
                        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 hover:bg-background shadow-sm h-8 w-8"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>

                      <div 
                        ref={thumbsContainerRef} 
                        className="flex gap-1 md:gap-2 overflow-x-auto scroll-smooth px-6 md:px-8 py-1 scrollbar-hide"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                      >
                        {safeImages.map((src, idx) => (
                          <button
                            key={`${src}-${idx}`}
                            ref={(el) => { thumbsRef.current[idx] = el }}
                            onClick={() => setSelected(idx)}
                            className={`
                              relative flex-shrink-0 rounded-md overflow-hidden border-2 transition-all duration-200
                              ${selected === idx 
                                ? "border-primary ring-1 ring-primary/30 scale-105" 
                                : "border-transparent hover:border-muted-foreground/30"
                              }
                            `}
                            type="button"
                          >
                            <div className="h-12 w-16 md:h-16 md:w-24 flex items-center justify-center bg-muted">
                              <img 
                                src={src} 
                                alt={`Thumbnail ${idx + 1}`} 
                                className="max-h-full max-w-full object-contain"
                                loading="lazy"
                                decoding="async"
                                draggable={false}
                              />
                              {!imageLoaded[idx] && (
                                <div className="absolute inset-0 bg-muted/60 animate-pulse" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => scrollThumbs(1)}
                        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 hover:bg-background shadow-sm h-8 w-8"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}