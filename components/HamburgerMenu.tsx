"use client"

import hamburgerIcon from "../public/assets/img/menu-outline.svg"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export const HamburgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false)

const toggleMenu = () => {
    if (showMenu) {
        setShowMenu(false)
    } else {
    setShowMenu(true)
    } 
}
  return (
    <div className='p-2 flex justify-between items-center '>
        <h1>CPA</h1>
        <Image src={hamburgerIcon} alt="hamburger menu" width={40} height={40} onClick={toggleMenu}/>
        {showMenu && <ul 
        className='
                absolute 
                right-0
                top-12 
                mx-3 
                p-2 
                text-xl 
                bg-white 
                space-y-5 
                border-2 
                border-slate-300 
                shadow-lg   
            '>
            <li > 
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/directory">Directory</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>}
    </div>
  )
}
