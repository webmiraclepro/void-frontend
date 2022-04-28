import { useState, useCallback } from 'react'
import ConnectButton from '../ConnectButton'
import Image from 'next/image'

const NavBar = () => {
 
  return (
    <section>
      <nav className="flex px-6 py-6 flex-row justify-between items-center ">
        <img src="./vercel.svg" className='w-[120px] h-[30px]' ></img>
        <div className="mr-4 w-[160px] h-[50px]">
          <ConnectButton actionText="Connect" />
        </div>
      </nav>
    </section>
  )
}

export default NavBar
