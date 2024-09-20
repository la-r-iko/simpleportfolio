'use client'

import LoginForm from '../../../components/auth/LoginForm'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">ログイン</h1>
        <LoginForm />
      </div>
      <Footer />
    </>
  )
}