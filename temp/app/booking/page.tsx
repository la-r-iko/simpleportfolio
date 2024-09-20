'use client'

import { useState, useEffect } from 'react'
import { Calendar, Utensils, User } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// 仮想データ
const lessonData = {
  id: 1,
  title: '本格イタリアンパスタ作り',
  instructor: '山田シェフ',
  date: '2023-06-15',
  time: '14:00-16:00',
  price: 5000,
  image: 'https://picsum.photos/400/300'
}

export default function BookingPage() {
  const [participants, setParticipants] = useState(1)
  const [specialRequest, setSpecialRequest] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')

  useEffect(() => {
    // ここで実際のAPIからデータを取得する処理を実装予定
    console.log('レッスンデータを取得しました')
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで予約処理と決済処理を実装予定
    console.log('予約が完了しました')
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">予約・決済</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">選択したレッスン</h2>
          <div className="flex flex-col mb-4">
            <img src={lessonData.image} alt={lessonData.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <div>
              <h3 className="text-xl font-medium">{lessonData.title}</h3>
              <p className="text-gray-600"><User className="inline-block mr-1" size={16} /> {lessonData.instructor}</p>
              <p className="text-gray-600"><Calendar className="inline-block mr-1" size={16} /> {lessonData.date} {lessonData.time}</p>
              <p className="text-gray-600"><Utensils className="inline-block mr-1" size={16} /> ¥{lessonData.price.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">予約情報</h2>
          <div className="mb-4">
            <label htmlFor="participants" className="block text-gray-700 font-medium mb-2">参加人数</label>
            <input
              type="number"
              id="participants"
              value={participants}
              onChange={(e) => setParticipants(parseInt(e.target.value))}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="specialRequest" className="block text-gray-700 font-medium mb-2">特別リクエスト</label>
            <textarea
              id="specialRequest"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            ></textarea>
          </div>

          <h2 className="text-2xl font-semibold mb-4 mt-8">決済情報</h2>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">カード番号</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">有効期限</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">CVV</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            予約を確定する
          </button>
        </form>
      </div>
      <Footer />
    </>
  )
}