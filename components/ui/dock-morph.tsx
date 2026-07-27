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
            "relative flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full",
            position === "left" ? "flex-col gap-3 px-3 py-4" : "flex-row",
            "bg-slate-100/90 backdrop-blur-md border border-slate-200/90 shadow-sm"
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
                        animate={{ scale: 1.3, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 22,
                        }}
                        className={cn(
                          "absolute inset-0 rounded-full -z-10",
                          "bg-blue-500/20 backdrop-blur-md shadow-md shadow-blue-500/20"
                        )}
                      />
                    )}
                  </AnimatePresence>

                  {/* Non-3D Flat Sleek Circle Button */}
                  <motion.button
                    type="button"
                    onClick={item.onClick}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                    className={cn(
                      "relative z-10 h-8 w-8 sm:h-8.5 sm:w-8.5 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200",
                      "bg-white text-slate-700 hover:text-white hover:bg-blue-600",
                      "border border-slate-200 hover:border-blue-500",
                      "shadow-xs hover:shadow-md hover:shadow-blue-500/30"
                    )}
                    aria-label={item.label}
                  >
                    <item.icon className="h-4 w-4 shrink-0 transition-colors duration-200" />
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
