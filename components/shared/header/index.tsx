'use client'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Detect if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 897)
    }

    handleResize() // Check on initial load
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className='bg-orange-950 text-white'>
      <div className='px-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center header-button font-extrabold text-2xl m-1 text-amber-600'
            >
              <Image
                src='/icons/logo.svg'
                width={40}
                height={40}
                alt={`${APP_NAME}`}
              />
              {APP_NAME}
            </Link>
          </div>
          <div className='hidden md:block flex-1 max-w-xl'>
            {/* <Search /> */}
          </div>
          <Menu />
        </div>
        <div className='md:hidden block py-2'>{/* <Search /> */}</div>
      </div>
      {/* Modified section to take full width of the screen */}
      <div className='w-screen bg-orange-50'>
        <div className='flex items-center px-3'>
          {isMobile ? (
            <Button
              variant='ghost'
              className='header-button flex items-center gap-1 text-base rounded bg-primary [&_svg]:size-6'
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <MenuIcon />
              All
            </Button>
          ) : (
            <div className='flex items-center flex-wrap gap-3 overflow-hidden max-h-[100px]'>
              {data.headerMenus.map((menu) => (
                <Link
                  href={menu.href}
                  key={menu.href}
                  className='header-button !p-2 text-black hover:text-amber-600'
                >
                  {menu.name}
                </Link>
              ))}
            </div>
          )}

          {/* Dropdown menu for mobile */}
          {isMobile && dropdownOpen && (
            <div className='absolute bg-white shadow-md mt-[100px] md:mt-[132px] rounded-lg w-[200px] max-w-sm z-10'>
              {data.headerMenus.map((menu) => (
                <Link
                  href={menu.href}
                  key={menu.href}
                  className='block p-2 text-black hover:text-amber-600'
                  onClick={() => setDropdownOpen(false)} // Close dropdown after click
                >
                  {menu.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
