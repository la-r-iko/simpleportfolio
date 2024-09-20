'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Coffee, Timer, Tool, Settings, History, ChevronLeft, ChevronRight, Droplet, Thermometer } from 'lucide-react'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'ダッシュボード', href: '/', icon: Coffee },
    { name: '抽出', href: '/brewing', icon: Coffee },
    { name: 'タイマー', href: '/timer', icon: Timer },
    { name: 'メンテナンス', href: '/maintenance', icon: Tool },
    { name: '設定', href: '/settings', icon: Settings },
    { name: '履歴', href: '/history', icon: History },
  ]

  return (
    <div className={`bg-gray-800 text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen`}>
      <div className="flex justify-end p-4">
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-gray-400 hover:text-white">
          {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>

      <nav className="mt-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center py-3 px-4 ${
              pathname === item.href ? 'bg-gray-700' : 'hover:bg-gray-700'
            } transition-colors duration-200`}
          >
            <item.icon size={24} className="mr-4" />
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>

      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 w-64 bg-gray-900 p-4">
          <h3 className="text-sm font-semibold mb-2">マシン状態</h3>
          <div className="flex items-center mb-2">
            <Droplet size={18} className="mr-2" />
            <span>水量: 80%</span>
          </div>
          <div className="flex items-center">
            <Thermometer size={18} className="mr-2" />
            <span>温度: 92°C</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar