"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Search, Bell, User, Settings } from "lucide-react"

interface DockMorphProps {
  className?: string
  items?: {
    icon: React.ComponentType<{ className?: string }>
    label: string
    onClick?: () => void
  }[]
  position?: "bottom" | "top" | "left" | "inline"
}

export default function DockMorph({ items, className, position = "bottom" }: DockMorphProps) {
  const [hovered, setHovered] = React.useState<number | null>(null)

  const dockItems =
    items && items.length > 0
      ? items
      : [
          { icon: Home, label: "Home", onClick: () => alert("Home clicked") },
          { icon: Search, label: "Search", onClick: () => alert("Search clicked") },
          { icon: Bell, label: "Notifications", onClick: () => alert("Notifications clicked") },
          { icon: User, label: "Profile", onClick: () => alert("Profile clicked") },
          { icon: Settings, label: "Settings", onClick: () => alert("Settings clicked") },
        ]

  // Position classes
  const positionClasses = {
    bottom: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
    top: "fixed top-6 left-1/2 -translate-x-1/2 z-50",
    left: "fixed left-6 top-1/2 -translate-y-1/2 flex-col z-50",
    inline: "relative z-10",
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        positionClasses[position],
        className
      )}
    >
      <TooltipProvider delayDuration={100}>
        <div
          className={cn(
            "relative flex items-center gap-2.5 p-1.5 rounded-full",
            position === "left" ? "flex-col gap-4 px-4 py-8" : "flex-row",
            "bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]"
          )}
        >
          {dockItems.map((item, i) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <div
                  className="relative flex items-center justify-center"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Morphic glass bubble background animation */}
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1.45, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 22,
                        }}
                        className={cn(
                          "absolute inset-0 rounded-full -z-10",
                          "bg-gradient-to-tr from-blue-500/35 via-blue-300/25 to-blue-100/10",
                          "backdrop-blur-2xl shadow-lg shadow-blue-500/20"
                        )}
                      />
                    )}
                  </AnimatePresence>

                  {/* 3D Circular Bubble Button */}
                  <motion.button
                    type="button"
                    onClick={item.onClick}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                    className={cn(
                      "relative z-10 h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200",
                      "bg-slate-100/90 hover:bg-slate-950 text-slate-800 hover:text-white",
                      "border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)]",
                      "hover:shadow-[0_4px_14px_-2px_rgba(37,99,235,0.4)]"
                    )}
                    aria-label={item.label}
                  >
                    <item.icon className="h-4.5 w-4.5 shrink-0 transition-colors duration-200" />
                  </motion.button>
                </div>
              </TooltipTrigger>
              <TooltipContent
                side={position === "left" ? "right" : "bottom"}
                className="text-xs font-mono font-semibold bg-slate-950 text-white border-none px-2.5 py-1 rounded-md shadow-md"
              >
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  )
}
