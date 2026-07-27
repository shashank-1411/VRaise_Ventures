"use client"

import type React from "react"
import { useRef, useState, useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"

interface MagneticTextProps {
  text: string
  className?: string
  textClassName?: string
  circleRadius?: number
}

export function MagneticText({
  text = "World's first student led council",
  className,
  textClassName,
  circleRadius = 220,
}: MagneticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const innerTextRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  const mousePos = useRef({ x: 0, y: 0 })
  const currentPos = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor

    const animate = () => {
      currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.18)
      currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.18)

      const halfRadius = circleRadius / 2

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${currentPos.current.x - halfRadius}px, ${currentPos.current.y - halfRadius}px)`
      }

      if (innerTextRef.current) {
        innerTextRef.current.style.transform = `translate(${-currentPos.current.x + halfRadius}px, ${-currentPos.current.y + halfRadius}px)`
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [circleRadius])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }, [])

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mousePos.current = { x, y }
    currentPos.current = { x, y }
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative inline-flex items-center justify-center cursor-pointer select-none", className)}
    >
      {/* Base text layer (Black text) */}
      <span className={cn("text-slate-950 font-normal tracking-tight font-serif", textClassName)}>
        {text}
      </span>

      {/* Morphing Blue Lens Circle */}
      <div
        ref={circleRef}
        className="absolute top-0 left-0 pointer-events-none rounded-full bg-blue-600 shadow-2xl shadow-blue-500/40 overflow-hidden z-20"
        style={{
          width: isHovered ? circleRadius : 0,
          height: isHovered ? circleRadius : 0,
          transition: "width 0.4s cubic-bezier(0.33, 1, 0.68, 1), height 0.4s cubic-bezier(0.33, 1, 0.68, 1)",
          willChange: "transform, width, height",
        }}
      >
        <div
          ref={innerTextRef}
          className="absolute top-0 left-0 flex items-center justify-center text-center pointer-events-none"
          style={{
            width: containerSize.width || "max-content",
            height: containerSize.height || "auto",
            willChange: "transform",
          }}
        >
          {/* Inner text layer inside blue lens (White text, 100% superimposed) */}
          <span className={cn("text-white font-normal tracking-tight font-serif whitespace-nowrap", textClassName)}>
            {text}
          </span>
        </div>
      </div>
    </div>
  )
}
