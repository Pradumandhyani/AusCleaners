'use client'

import React, { createContext, useContext, useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

// Accordion Context
interface AccordionContextType {
  openValue: string | null
  setOpenValue: (value: string | null) => void
}

const AccordionContext = createContext<AccordionContextType | null>(null)

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single'
  collapsible?: boolean
}

function Accordion({ className, children, ...props }: AccordionProps) {
  const [openValue, setOpenValue] = useState<string | null>(null)

  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue }}>
      <div className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

// Accordion Item Context
interface AccordionItemContextType {
  value: string
}

const AccordionItemContext = createContext<AccordionItemContextType | null>(null)

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

function AccordionItem({ className, value, children, ...props }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={cn('', className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

// Accordion Trigger
interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  const accordionCtx = useContext(AccordionContext)
  const itemCtx = useContext(AccordionItemContext)

  if (!accordionCtx || !itemCtx) {
    throw new Error('AccordionTrigger must be used inside Accordion and AccordionItem')
  }

  const { openValue, setOpenValue } = accordionCtx
  const { value } = itemCtx
  const isOpen = openValue === value

  const handleToggle = () => {
    setOpenValue(isOpen ? null : value)
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-expanded={isOpen}
      className={cn(
        'flex w-full items-center justify-between py-4 font-medium transition-all hover:underline',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          'h-4 w-4 shrink-0 transition-transform duration-300 text-gray-400',
          isOpen ? 'rotate-180 text-[#1E88E5]' : ''
        )}
      />
    </button>
  )
}

// Accordion Content
interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  const accordionCtx = useContext(AccordionContext)
  const itemCtx = useContext(AccordionItemContext)

  if (!accordionCtx || !itemCtx) {
    throw new Error('AccordionContent must be used inside Accordion and AccordionItem')
  }

  const { openValue } = accordionCtx
  const { value } = itemCtx
  const isOpen = openValue === value

  if (!isOpen) return null

  return (
    <div
      className={cn(
        'overflow-hidden text-sm transition-all animate-fade-in',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
