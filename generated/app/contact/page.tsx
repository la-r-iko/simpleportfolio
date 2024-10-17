'use client'

import React, { useState, useEffect } from 'react'
import { User, Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    // 仮想データのフェッチをシミュレート
    const fetchData = async () => {
      // 実際のAPIコールの代わりに、タイムアウトを使用
      await new Promise(resolve => setTimeout(resolve, 1000))
      // ここで仮想データをセット
    }
    fetchData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // 実際のAPI送信の代わりに、タイムアウトを使用
    await new Promise(resolve => setTimeout(resolve, 2000))
    setSubmitMessage('メッセージが送信されました。')
    setIsSubmitting(false)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">お問い合わせ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  お名前
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="山田 太郎"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  メールアドレス
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  メッセージ
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="お問い合わせ内容をご記入ください"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '送信中...' : '送信'}
                </button>
                {submitMessage && <p className="text-green-500 text-xs italic">{submitMessage}</p>}
              </div>
            </form>
          </div>
          <div>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-2xl font-bold mb-4">連絡先情報</h2>
              <div className="mb-4">
                <p className="flex items-center">
                  <Mail className="mr-2" size={20} />
                  info@example.com
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">SNS</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">位置情報</h3>
                <p>東京都渋谷区〇〇 1-2-3</p>
                <img src="https://picsum.photos/400/200" alt="地図" className="mt-2 rounded" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage