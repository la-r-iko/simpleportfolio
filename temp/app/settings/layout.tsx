import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">設定</h1>
        {children}
      </main>
      <Footer />
    </>
  )
}