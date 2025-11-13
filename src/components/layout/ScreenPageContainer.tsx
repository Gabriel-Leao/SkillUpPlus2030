import { cn } from '@/lib/utils/cn'
import { ReactNode } from 'react'
import { View } from 'react-native'
import Footer from '../Footer'

export type ScreenPageContainerProps = {
  children: ReactNode
  className?: string
  hideFooter?: boolean
}

const ScreenPageContainer = ({
  children,
  className,
  hideFooter = false,
}: ScreenPageContainerProps) => {
  return (
    <View
      className={cn(
        'flex-1 bg-[#021123] pt-10 pb-20 px-4 min-h-screen',
        className
      )}>
      {children}
      {!hideFooter && <Footer />}
    </View>
  )
}

export default ScreenPageContainer
