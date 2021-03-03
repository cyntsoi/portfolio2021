import {
  useEffect,
  useState,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
} from 'react'
import { isBrowser } from '../utils/isBrowser'

interface ScrollPosition {
  previous: number
  current: number
}

const InitialState = {
  previous: 0,
  current: 0,
}

export const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState<ScrollPosition>(InitialState)
  useEffect(() => {
    let scheduledAnimationFrame
    function handleScroll() {
      if (scheduledAnimationFrame) return
      scheduledAnimationFrame = true
      requestAnimationFrame(() => {
        setScrollPos(({ current }) => ({
          previous: current,
          current: window.scrollY,
        }))
        scheduledAnimationFrame = false
      })
    }
    if (isBrowser()) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (isBrowser()) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return scrollPos
}

const ScrollPositionContext = createContext<ScrollPosition>(InitialState)

export const useScrollPositionContext = () => useContext(ScrollPositionContext)

export const ScrollPositionProvider: FC<
  PropsWithChildren<Record<string, never>>
> = ({ children }) => {
  const scrollPos = useScrollPosition()
  return (
    <ScrollPositionContext.Provider value={scrollPos}>
      {children}
    </ScrollPositionContext.Provider>
  )
}
