import { User, Calendar, Star, Utensils } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// 仮想データ
const userData = {
  name: "山田太郎",
  email: "yamada@example.com",
  phone: "090-1234-5678",
  profileImage: "https://picsum.photos/200",
}

const bookings = [
  { id: 1, lessonName: "イタリアン基礎", date: "2023-06-15", time: "18:00" },
  { id: 2, lessonName: "和食の基本", date: "2023-06-20", time: "14:00" },
]

const history = [
  { id: 1, lessonName: "フランス料理入門", date: "2023-05-10" },
  { id: 2, lessonName: "中華料理の技", date: "2023-05-25" },
]

const favorites = [
  { id: 1, name: "イタリアンマスター", type: "教室" },
  { id: 2, name: "鈴木シェフ", type: "講師" },
]

const reviews = [
  { id: 1, lessonName: "フランス料理入門", rating: 5, comment: "とても分かりやすかったです。" },
  { id: 2, lessonName: "中華料理の技", rating: 4, comment: "楽しく学べました。" },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">プロフィール</h1>
        
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex flex-col items-center mb-6">
            <img src={userData.profileImage} alt={userData.name} className="w-20 h-20 rounded-full mb-4" />
            <div className="text-center">
              <h2 className="text-2xl font-semibold">{userData.name}</h2>
              <p className="text-gray-600">{userData.email}</p>
              <p className="text-gray-600">{userData.phone}</p>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            プロフィールを編集
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="mr-2" /> 予約済みの料理教室
            </h3>
            <ul className="bg-white shadow rounded-lg divide-y">
              {bookings.map((booking) => (
                <li key={booking.id} className="p-4">
                  <p className="font-semibold">{booking.lessonName}</p>
                  <p className="text-gray-600">{booking.date} {booking.time}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Utensils className="mr-2" /> 過去の受講履歴
            </h3>
            <ul className="bg-white shadow rounded-lg divide-y">
              {history.map((item) => (
                <li key={item.id} className="p-4">
                  <p className="font-semibold">{item.lessonName}</p>
                  <p className="text-gray-600">{item.date}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Star className="mr-2" /> お気に入り
            </h3>
            <ul className="bg-white shadow rounded-lg divide-y">
              {favorites.map((fav) => (
                <li key={fav.id} className="p-4">
                  <p className="font-semibold">{fav.name}</p>
                  <p className="text-gray-600">{fav.type}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <User className="mr-2" /> レビュー履歴
            </h3>
            <ul className="bg-white shadow rounded-lg divide-y">
              {reviews.map((review) => (
                <li key={review.id} className="p-4">
                  <p className="font-semibold">{review.lessonName}</p>
                  <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
                  <p className="text-gray-600">{review.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}