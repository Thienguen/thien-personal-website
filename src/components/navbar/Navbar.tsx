'use client'

/* Framework */
import { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

/* Libraries */
import { Twirl as Hamburger } from 'hamburger-react'

/* Src */
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { NavbarLeft, NavbarRight, NavbarRightSmall } from '@/components/navbar/Navbar-left-right'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState('0px')

  const path_name = usePathname()
  const isBreakpoint = useMediaQuery('780px')

  const navRef = useRef<HTMLDivElement>(null)

  const expand = useCallback(() => {
    /* Use functions setter */
    setHeight((prevHeight) => (prevHeight === '0px' ? '15rem' : '0px'))
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        isOpen &&
        !document.querySelector('.navbar')?.contains(event.target as Node)
      ) {
        expand()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, expand])

  return (
    <>
      {isBreakpoint ? (
        <>
          <nav className="m-auto flex w-3/5 flex-wrap items-center justify-between py-5 md:flex-nowrap">
            {/* Typewriter Effect -- Left */}
            <div className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
              <NavbarLeft path_name={path_name} />
            </div>
            <NavbarRight />
            {/* Navlinks Effect -- Right */}
          </nav>
        </>
      ) : (
        <>
          <div className="my-6" ref={navRef}>
            <div className="flex flex-col items-center justify-center text-slate-100">
              <Hamburger toggled={isOpen} toggle={expand} />
            </div>
            <div
              className="mt-2 flex w-full flex-col items-center justify-center gap-2 space-y-2 overflow-hidden text-center text-slate-200 transition-all duration-200"
              style={{ maxHeight: height }}
            >
              <div className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
                <NavbarRightSmall path_name={path_name} isOpen={isOpen} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar
