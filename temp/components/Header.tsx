'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Menu, X, Globe, LogIn, LogOut } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 仮の状態、実際の認証状態に応じて変更する
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLanguageChange = (lang: string) => {
    // 言語変更のロジックを実装
    console.log(`言語を${lang}に変更しました`)
  }

  const handleAuth = () => {
    if (isLoggedIn) {
      // ログアウトのロジックを実装
      setIsLoggedIn(false)
    } else {
      // ログインページへ遷移
      router.push('/login')
    }
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 mr-2">
              {/* ロゴ画像を配置 */}
              {/* <Image src="/logo.png" alt="CookEdu Logo" width={40} height={40} /> */}
            </div>
            <span className="text-xl font-bold text-gray-800">CookEdu</span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">ホーム</Link>
            <Link href="/search" className="text-gray-600 hover:text-gray-900">検索</Link>
            <Link href="/profile" className="text-gray-600 hover:text-gray-900">マイページ</Link>
            <Link href="/recipes" className="text-gray-600 hover:text-gray-900">レシピ</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => handleLanguageChange('ja')} className="text-gray-600 hover:text-gray-900">
              <Globe size={24} />
            </button>
            <button onClick={handleAuth} className="flex items-center text-gray-600 hover:text-gray-900">
              {isLoggedIn ? <LogOut size={24} /> : <LogIn size={24} />}
              <span className="ml-1">{isLoggedIn ? 'ログアウト' : 'ログイン'}</span>
            </button>
          </div>

          {/* モバイルメニューボタン */}
          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* モバイルナビゲーション */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="space-y-2">
              <li><Link href="/" className="block py-2 text-gray-600 hover:text-gray-900">ホーム</Link></li>
              <li><Link href="/search" className="block py-2 text-gray-600 hover:text-gray-900">検索</Link></li>
              <li><Link href="/profile" className="block py-2 text-gray-600 hover:text-gray-900">マイページ</Link></li>
              <li><Link href="/recipes" className="block py-2 text-gray-600 hover:text-gray-900">レシピ</Link></li>
              <li>
                <button onClick={() => handleLanguageChange('ja')} className="flex items-center py-2 text-gray-600 hover:text-gray-900">
                  <Globe size={20} className="mr-2" />
                  言語切替
                </button>
              </li>
              <li>
                <button onClick={handleAuth} className="flex items-center py-2 text-gray-600 hover:text-gray-900">
                  {isLoggedIn ? <LogOut size={20} className="mr-2" /> : <LogIn size={20} className="mr-2" />}
                  {isLoggedIn ? 'ログアウト' : 'ログイン'}
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header