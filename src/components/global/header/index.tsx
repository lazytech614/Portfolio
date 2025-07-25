'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '../../ui/button'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold gradient-text"
          >
            <Link href={'#home'}>
              <svg className='h-[20px] sm:h-[30px] md:h-[40px]' viewBox="0 0 261 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M145.132 99.4494C146.355 100.398 147.145 101.258 147.5 102H62L173.599 221.75H130.884L24.8036 102H24.4206L0 74H45.5H121.5L145.132 99.4494Z" fill='green'/>
                <path d="M121.5 125.5H164.5H173.599C177.4 125.5 181 125.5 184.5 124.5C192.5 121 195.496 115.28 196.496 111.78L200 100.5C200 88.5 196.667 78.8333 195.5 74C189.9 63.2 185.167 54.5 183 51.5L173.599 41.5L159.5 31.5C153.1 28.7 140.5 27.3333 135 27L119.5 26H62C43.6 20.4 43 12.1667 38.5 9L33 0.734491L144.5 0.734497C148.982 1.78734 153.079 1.44905 156 1.99997C163.245 3.36639 170.838 4.69346 173 6.00001C176.033 7.83334 185.5 11 195.5 19.5L200 23.5L204 28.5C206.236 30.9756 208.611 34.9372 208.709 35.2522C211.337 38.4492 213.547 41.8754 215.5 44.5C218.804 48.9398 220.551 54.944 221.5 57L225 65L228 74L229.5 81.5L230.5 88.5V94V102L229.5 107.5L227 118L223.5 125.5C223.26 127.054 220.677 130.992 219.5 133L219.078 133.759C218.41 135.019 217.861 136.291 217 137.5C215.626 139.43 214 140.5 212 142C210 143.5 208.466 144.392 206 145.5C202.869 146.908 203.5 147.5 198.5 148C196.109 148.239 193.828 148.597 192 148.5C190.006 148.394 190.957 148.326 188 148.5L189.5 150.5L260.75 221.75H217.75L121.5 125.5Z" fill='green'/>
              </svg>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header
