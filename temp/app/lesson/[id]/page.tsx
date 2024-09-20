import { Utensils, Star, Calendar, MapPin, DollarSign, User } from 'lucide-react';
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

// 仮のデータ
const lessonData = {
  id: 1,
  title: '本格イタリアンパスタ作り',
  description: '新鮮な材料を使って、本場イタリアのパスタを作ります。',
  date: '2023-06-15',
  time: '14:00-16:00',
  location: '東京都渋谷区XX-XX',
  genre: 'イタリアン',
  level: '中級',
  price: 5000,
  instructor: {
    name: '山田太郎',
    bio: '10年以上のイタリア料理経験を持つシェフ',
    image: 'https://picsum.photos/200',
  },
  reviews: [
    { id: 1, user: '佐藤花子', rating: 5, comment: 'とても楽しかったです！' },
    { id: 2, user: '鈴木一郎', rating: 4, comment: '丁寧に教えていただきました。' },
  ],
  relatedLessons: [
    { id: 2, title: 'ピザ作り教室', image: 'https://picsum.photos/201' },
    { id: 3, title: 'リゾット教室', image: 'https://picsum.photos/202' },
  ],
};

export default function LessonDetail() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{lessonData.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <img src="https://picsum.photos/800/400" alt={lessonData.title} className="w-full rounded-lg mb-4" />
            
            <div className="md:hidden mb-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">講師プロフィール</h2>
                <div className="flex items-center mb-2">
                  <img src={lessonData.instructor.image} alt={lessonData.instructor.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{lessonData.instructor.name}</p>
                    <p className="text-sm text-gray-600">{lessonData.instructor.bio}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">{lessonData.description}</p>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-2">レッスン詳細</h2>
              <ul className="space-y-2">
                <li className="flex items-center"><Calendar className="mr-2" />{lessonData.date} {lessonData.time}</li>
                <li className="flex items-center"><MapPin className="mr-2" />{lessonData.location}</li>
                <li className="flex items-center"><Utensils className="mr-2" />{lessonData.genre}</li>
                <li className="flex items-center"><Star className="mr-2" />{lessonData.level}</li>
                <li className="flex items-center"><DollarSign className="mr-2" />¥{lessonData.price.toLocaleString()}</li>
              </ul>
            </div>
            
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              予約する
            </button>
          </div>
          
          <div>
            <div className="hidden md:block bg-gray-100 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-2">講師プロフィール</h2>
              <div className="flex items-center mb-2">
                <img src={lessonData.instructor.image} alt={lessonData.instructor.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{lessonData.instructor.name}</p>
                  <p className="text-sm text-gray-600">{lessonData.instructor.bio}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">レビュー</h2>
              {lessonData.reviews.map((review) => (
                <div key={review.id} className="bg-gray-100 p-4 rounded-lg mb-2">
                  <div className="flex items-center mb-2">
                    <User className="mr-2" />
                    <span className="font-semibold">{review.user}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">関連する料理教室</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {lessonData.relatedLessons.map((lesson) => (
              <div key={lesson.id} className="bg-gray-100 p-4 rounded-lg">
                <img src={lesson.image} alt={lesson.title} className="w-full h-40 object-cover rounded-lg mb-2" />
                <p className="font-semibold">{lesson.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}