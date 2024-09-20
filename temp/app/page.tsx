import Header from '../components/Header'
import Footer from '../components/Footer'
import { Search, Star } from 'lucide-react'

// 仮想データ
const popularClasses = [
  { id: 1, title: '本格イタリアン', image: 'https://picsum.photos/300/200?random=1', rating: 4.8 },
  { id: 2, title: '和食の基本', image: 'https://picsum.photos/300/200?random=2', rating: 4.7 },
  { id: 3, title: 'フランス菓子入門', image: 'https://picsum.photos/300/200?random=3', rating: 4.9 },
]

const featuredInstructors = [
  { id: 1, name: '山田シェフ', specialty: 'イタリアン', image: 'https://picsum.photos/100/100?random=4' },
  { id: 2, name: '佐藤料理長', specialty: '和食', image: 'https://picsum.photos/100/100?random=5' },
  { id: 3, name: 'ジャン・パティシエ', specialty: 'フランス菓子', image: 'https://picsum.photos/100/100?random=6' },
]

const latestReviews = [
  { id: 1, user: '田中さん', comment: '素晴らしい体験でした！', rating: 5 },
  { id: 2, user: '鈴木さん', comment: 'とても勉強になりました。', rating: 4 },
  { id: 3, user: '高橋さん', comment: '楽しかったです。また参加したいです。', rating: 5 },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">CookEdu へようこそ</h1>

        {/* 検索バー */}
        <div className="mb-12">
          <div className="flex items-center bg-white rounded-lg shadow-md p-4">
            <Search className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="料理教室を検索..."
              className="w-full outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">
              検索
            </button>
          </div>
        </div>

        {/* 人気の料理教室 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">人気の料理教室</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularClasses.map((cls) => (
              <div key={cls.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={cls.image} alt={cls.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{cls.title}</h3>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 mr-1" />
                    <span>{cls.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* おすすめの講師 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">おすすめの講師</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredInstructors.map((instructor) => (
              <div key={instructor.id} className="flex items-center bg-white rounded-lg shadow-md p-4">
                <img src={instructor.image} alt={instructor.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{instructor.name}</h3>
                  <p className="text-gray-600">{instructor.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 最新のレビュー */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">最新のレビュー</h2>
          <div className="space-y-4">
            {latestReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center mb-2">
                  <span className="font-semibold mr-2">{review.user}</span>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-4 h-4" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}