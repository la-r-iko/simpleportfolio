'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // ここにログアウト処理を実装
    console.log('ログアウト処理')
    // ログアウト後、ホームページにリダイレクト
    router.push('/')
  }, [router])

  return (
    <div className="container mx-auto px-4 py-8">
      <p>ログアウト中...</p>
    </div>
  )
}