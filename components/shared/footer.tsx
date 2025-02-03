'use client'

import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className='bg-orange-950 text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='w-full rounded-none' // Added rounded-none to remove rounded corners
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='w-4 h-4 mr-2' />
          Back to top
        </Button>
      </div>
      <div className='p-4'>
        <div className='flex justify-center gap-3 text-sm'>
          <Link href='/page/contact-us'>Contact Us</Link>
          <Link href='/page/about-us'>About Us</Link>
          <Link href='/page/help'></Link>
        </div>
        <div className='flex justify-center text-sm'>{APP_NAME}</div>
        <div className='mt-8 flex justify-center text-sm text-gray-400'>
          Addresss......
        </div>
      </div>
    </footer>
  )
}
