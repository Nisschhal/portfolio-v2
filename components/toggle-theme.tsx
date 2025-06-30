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
import { cn } from '@/lib/utils'

const themeOptions = ['light', 'dark', 'system'] as const

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='glass rounded-full'>
        <Button
          variant='outline'
          size='icon'
          className='glass-active inset-shadow-glass cursor-pointer'
        >
          <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 text-white/70 transition-all hover:text-white dark:scale-0 dark:-rotate-90' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='glass'>
        {themeOptions.map(option => (
          <DropdownMenuItem
            key={option}
            onClick={() => setTheme(option)}
            className={cn(
              theme === option && 'glass-active',
              'cursor-pointer capitalize'
            )}
          >
            {option}
          </DropdownMenuItem>
        ))}
        {/* <DropdownMenuItem
          onClick={() => setTheme('light')}
          className='text-primary'
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className='text-primary'
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className='text-primary'
        >
          System
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
