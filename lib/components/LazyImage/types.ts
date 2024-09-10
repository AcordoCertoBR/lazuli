export type LazyImageProps = {
  className?: string
  lazy?: boolean
  src: string
  alt?: string
  height?: number
  width?: number
  draggable?: boolean
  style?: { [key: string]: string | number }
  onClick?: () => void
}

export type UseLazyImageProps = {
  lazy: boolean
  src: string
}
