import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import {AfishaIcon, SiansIcon, TicketIcon, SearchIcon} from '../../icons/Icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
        <>
      <nav className="bg-black text-white p-[20px] text-4xl">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm">
            <li className="hover:text-red-500 cursor-pointer"><AfishaIcon /></li>
            <li className="hover:text-red-500 cursor-pointer"><SiansIcon /></li>
            <li className="hover:text-red-500 cursor-pointer"><TicketIcon /></li>
            <li className="hover:text-red-500 cursor-pointer"><SearchIcon /></li>
          </ul>

          <div className="hidden md:flex items-center space-x-6">
            <select className="bg-[#1D1D1D80] rounded-[10px] text-sm px-4 py-3">
              <option>Rus</option>
              <option>Uzb</option>
            </select>
            <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-8 py-2.5 rounded-[10px]">
              Войти
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="focus:outline-none">
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col space-y-6 text-sm">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-white text-xl"
          >
            ✕
          </button>

          {/* Icons and Options */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-red-500">
              <AfishaIcon />
              <span className='mb-[10px]'>Afisha</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-red-500">
              <SiansIcon />
              <span className='mb-[10px]'>Sians</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-red-500">
              <TicketIcon />
              <span className='mb-[10px]'>Tickets</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-red-500">
              <SearchIcon />
              <span className='mb-[10px]'>Search</span>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-600">
            <select className="bg-[#1D1D1D80] rounded-[10px] text-sm px-4 py-3 w-full mt-2">
              <option>Rus</option>
              <option>Uzb</option>
            </select>
            <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2.5 rounded-[10px]">
              Войти
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar