'use client'

import { useState, useEffect } from 'react'
import { Coffee, Droplet, Thermometer, Clock, Settings } from 'lucide-react'
import Sidebar from '@/components/Sidebar'

// 仮想データ
const mockBrewingHistory = [
  { id: 1, date: '2023-06-01', water: 500, temp: 92, time: 4, favorite: false },
  { id: 2, date: '2023-06-02', water: 300, temp: 88, time: 3, favorite: true },
  { id: 3, date: '2023-06-03', water: 700, temp: 95, time: 5, favorite: false },
]

export default function HistoryPage() {
  const [brewingHistory, setBrewingHistory] = useState([])
  const [selectedBrew, setSelectedBrew] = useState(null)

  useEffect(() => {
    // 仮想データを使用
    setBrewingHistory(mockBrewingHistory)
  }, [])

  const toggleFavorite = (id) => {
    setBrewingHistory(prevHistory =>
      prevHistory.map(brew =>
        brew.id === id ? { ...brew, favorite: !brew.favorite } : brew
      )
    )
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">抽出履歴</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">履歴一覧</h2>
            <ul>
              {brewingHistory.map(brew => (
                <li key={brew.id} className="mb-4 p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedBrew(brew)}>
                  <div className="flex justify-between items-center">
                    <span>{brew.date}</span>
                    <button onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(brew.id)
                    }} className={`text-yellow-500 ${brew.favorite ? 'opacity-100' : 'opacity-50'}`}>
                      ★
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">抽出詳細</h2>
            {selectedBrew ? (
              <div>
                <p className="mb-2"><Coffee className="inline mr-2" /> 抽出日: {selectedBrew.date}</p>
                <p className="mb-2"><Droplet className="inline mr-2" /> 水量: {selectedBrew.water}ml</p>
                <p className="mb-2"><Thermometer className="inline mr-2" /> 温度: {selectedBrew.temp}°C</p>
                <p className="mb-2"><Clock className="inline mr-2" /> 時間: {selectedBrew.time}分</p>
                <button onClick={() => toggleFavorite(selectedBrew.id)} 
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  <Settings className="inline mr-2" />
                  {selectedBrew.favorite ? 'お気に入りから削除' : 'お気に入りに追加'}
                </button>
              </div>
            ) : (
              <p>抽出履歴を選択してください</p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}