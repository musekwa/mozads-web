import { PiIcon } from 'lucide-react'
import React from 'react'
import { ModeToggle } from './mode-toggle'

function Header() {
  return (
    <div
        className=' bg-sky-600 dark:bg-gray-900 py-2 px-4 sticky top-0 z-50'
    >
        <div className='container min-h-[80px] flex justify-between items-center'>
           <div>
            <PiIcon />
            Logo
           </div>
           <div>
            <ModeToggle />
           </div>
        </div>
    </div>
  )
}

export default Header