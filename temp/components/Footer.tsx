'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* コピーライト情報 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">CookEdu</h3>
            <p className="text-sm">&copy; {currentYear} CookEdu. All rights reserved.</p>
          </div>

          {/* サイトマップリンク */}
          <div>
            <h4 className="text-lg font-semibold mb-2">サイトマップ</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">ホーム</Link></li>
              <li><Link href="/search" className="hover:text-gray-300">レッスン検索</Link></li>
              <li><Link href="/recipes" className="hover:text-gray-300">レシピ</Link></li>
              <li><Link href="/profile" className="hover:text-gray-300">マイページ</Link></li>
            </ul>
          </div>

          {/* お問い合わせ・規約リンク */}
          <div>
            <h4 className="text-lg font-semibold mb-2">サポート</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-gray-300">お問い合わせ</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-300">プライバシーポリシー</Link></li>
              <li><Link href="/terms" className="hover:text-gray-300">利用規約</Link></li>
            </ul>
          </div>

          {/* ソーシャルメディアリンク */}
          <div>
            <h4 className="text-lg font-semibold mb-2">フォローする</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="mailto:info@cookedu.com" className="hover:text-gray-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer