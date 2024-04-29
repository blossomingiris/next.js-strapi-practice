import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type CardWrapperProps = {
  title: string
  buttonText?: string
  icon?: JSX.Element
  closeHandler?: () => void
  children: React.ReactNode
}

export default function CardWrapper(props: CardWrapperProps) {
  const { title, buttonText, children, closeHandler, icon } = props

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle className="flex gap-1 items-center">
          {' '}
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {buttonText && (
        <CardFooter className="justify-end">
          <Button onClick={closeHandler}>{buttonText}</Button>
        </CardFooter>
      )}
    </Card>
  )
}
