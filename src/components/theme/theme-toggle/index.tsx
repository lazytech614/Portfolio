'use client'

import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '../theme-provider'
import { Button } from '../../ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ]

  const currentTheme = themes.find(t => t.value === theme)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-700/50"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {currentTheme && <currentTheme.icon className="h-4 w-4" />}
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-lg shadow-lg border border-gray-200/20 dark:border-gray-700/20 p-2 min-w-[120px]"
          >
            {themes.map((themeOption) => (
              <Button
                key={themeOption.value}
                variant={theme === themeOption.value ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  setTheme(themeOption.value as any)
                  setIsOpen(false)
                }}
                className="w-full justify-start gap-2 mb-1 last:mb-0"
              >
                <themeOption.icon className="h-4 w-4" />
                {themeOption.label}
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
