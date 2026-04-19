import { ReactNode } from 'react'
import { fixWidows } from '@/lib/fixWidows'

type Props = {
  children: ReactNode
  className?: string
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4'
}

export default function TypographyText({
  children,
  className,
  as = 'p',
}: Props) {
  const Tag = as

  const content =
    typeof children === 'string' ? fixWidows(children) : children

  return <Tag className={className}>{content}</Tag>
}