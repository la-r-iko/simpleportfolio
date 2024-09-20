import SignupForm from '../../../components/auth/SignupForm'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function SignupPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">新規登録</h1>
        <SignupForm />
      </div>
      <Footer />
    </>
  )
}