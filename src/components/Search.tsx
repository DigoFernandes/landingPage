import React from 'react'
import IconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'
export default function Search() {
  return (
    <div className="flex items-center gap-4">
        <Image
        src={IconSearch}
        alt='Icon Search'
        />
        <input type="text" className='bg-transparent pr-3 outline-none text-white placeholder:text-white' placeholder='Buscar' />
    </div>
  )
}
