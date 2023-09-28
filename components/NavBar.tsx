import {HamburgerMenu} from "../components/HamburgerMenu"
import Link from "next/link"

export const NavBar = () => {
  return (
  <>
    <nav className="max-md:block hidden">
        <HamburgerMenu />
    </nav>
    <div className='md:block hidden'>
        <nav className='w-full h-10 bg-slate-600 flex justify-between items-center text-slate-200  '>
            <h1 className='p-4'>CPA</h1>
            <ul className='p-4 flex space-x-3 '>
                <li className='hover:text-slate-400 duration-500'>
                  <Link href="/">Home</Link>
                </li>
                <li className='hover:text-slate-400 duration-500'>
                  <Link href="/directory">Directory</Link>
                
                </li>
                <li className='hover:text-slate-400 duration-500'>
                  <Link href="/about">About us</Link>
                
                </li>
            </ul>
        </nav>
    </div>
  </>
  )
}
