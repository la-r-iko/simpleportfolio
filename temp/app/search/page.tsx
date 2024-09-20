'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

// 仮想データ
const lessons = [
  {
    id: 1,
    title: '初心者向けイタリアン',
    instructor: '山田シェフ',
    date: '2023-06-01',
    price: 5000,
    level: '初級',
    genre: 'イタリアン',
    image: 'https://picsum.photos/seed/italian/300/200',
  },
  {
    id: 2,
    title: '和食の基本',
    instructor: '佐藤料理長',
    date: '2023-06-02',
    price: 6000,
    level: '中級',
    genre: '和食',
    image: 'https://picsum.photos/seed/japanese/300/200',
  },
  // ... 他のレッスンデータ
]

export default function SearchPage() {
  // フィルタリングとソートのロジックをここに実装
  const filteredLessons = lessons

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">料理教室検索結果</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4">
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">フィルター</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">日付</label>
                  <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">ジャンル</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option>すべて</option>
                    <option>イタリアン</option>
                    <option>和食</option>
                    <option>フレンチ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">レベル</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option>すべて</option>
                    <option>初級</option>
                    <option>中級</option>
                    <option>上級</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">価格帯</label>
                  <input type="range" min="0" max="10000" step="1000" className="mt-1 block w-full" />
                </div>
              </div>
            </div>
          </aside>

          <main className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">{filteredLessons.length}件の結果</p>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-600">並び替え:</span>
                <select className="rounded-md border-gray-300 shadow-sm">
                  <option>人気順</option>
                  <option>日付順</option>
                  <option>価格が安い順</option>
                  <option>価格が高い順</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {filteredLessons.map(lesson => (
                <div key={lesson.id} className="bg-white shadow rounded-lg overflow-hidden flex flex-col md:flex-row">
                  <img src={lesson.image} alt={lesson.title} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
                  <div className="p-4 flex-grow">
                    <h3 className="text-lg font-semibold mb-2">{lesson.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">講師: {lesson.instructor}</p>
                    <p className="text-sm text-gray-600 mb-2">日時: {lesson.date}</p>
                    <p className="text-sm text-gray-600 mb-2">レベル: {lesson.level}</p>
                    <p className="text-sm text-gray-600 mb-2">ジャンル: {lesson.genre}</p>
                    <p className="text-lg font-bold text-indigo-600">¥{lesson.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  前へ
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  次へ
                </a>
              </nav>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}