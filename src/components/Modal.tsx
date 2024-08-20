import { useEffect, useRef, MutableRefObject, ReactElement } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children }: { children: ReactElement }) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    if (!modalRoot || !elRef.current) {
      return
    }
    modalRoot.appendChild(elRef.current)

    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current)
      }
    }
  }, [])

  return createPortal(
    <div className="fixed left-0 right-0 bottom-0 top-0 z-10 flex items-center justify-center bg-background-color bg-opacity-75 dark:bg-zinc-700 dark:bg-opacity-75 dark:text-white">
      {children}
    </div>,
    elRef.current,
  )
}

export default Modal
