'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          ポートフォリオ
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            ホーム
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            自己紹介
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-gray-900">
            プロジェクト
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            コンタクト
          </Link>
        </nav>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* モバイルナビゲーション */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              ホーム
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              自己紹介
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              プロジェクト
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              コンタクト
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header