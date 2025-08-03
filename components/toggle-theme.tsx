'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='h-10 w-10 rounded-full border border-white/15 bg-white/10 p-2 text-white/70 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 hover:bg-white/20 hover:text-white dark:border-gray-200/15 dark:bg-gray-900/10 dark:hover:bg-gray-200/20 dark:hover:text-white'
        >
          <Sun className='h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
          <Moon className='absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='w-40 rounded-xl border border-white/15 bg-white/10 text-white/70 backdrop-blur-2xl backdrop-saturate-150 dark:border-gray-200/15 dark:bg-gray-900/10'
      >
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none ${
            theme === 'light'
              ? 'bg-white/30 text-white shadow-inner shadow-white/20'
              : 'hover:bg-white/20 hover:text-white'
          }`}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none ${
            theme === 'dark'
              ? 'bg-gray-100/30 text-white shadow-inner shadow-gray-200/20'
              : 'hover:bg-gray-200/20 hover:text-white'
          }`}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none ${
            theme === 'system'
              ? 'bg-white/30 text-white shadow-inner shadow-white/20 dark:bg-gray-100/30 dark:text-white dark:shadow-gray-200/20'
              : 'hover:bg-white/20 hover:text-white dark:hover:bg-gray-200/20 dark:hover:text-white'
          }`}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
