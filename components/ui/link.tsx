import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ReactNode } from 'react'

type LinkProps = {
  href: string
  className?: string
  children: ReactNode
}

export default function CustomLink(props: LinkProps) {
  const { href, className, children } = props
  return (
    <Link
      href={href}
      className={cn('hover:underline mt-5 flex items-center gap-1', className)}
    >
      {children}
    </Link>
  )
}
