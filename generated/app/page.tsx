import { 
  Coffee, Droplet, Thermometer, Clock, 
  Power, Refresh, Settings, AlertTriangle 
} from 'lucide-react'
import Sidebar from '@/components/Sidebar'

// 仮想データ
const machineStatus = {
  waterLevel: 80,
  temperature: 92,
  timerSet: '07:30',
  isOn: true,
}

const recentBrews = [
  { id: 1, date: '2023-05-15', recipe: 'エスプレッソ' },
  { id: 2, date: '2023-05-14', recipe: 'アメリカーノ' },
  { id: 3, date: '2023-05-13', recipe: 'カプチーノ' },
]

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">ダッシュボード</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">マシンステータス</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Droplet className="mr-2" />
                <span>水量: {machineStatus.waterLevel}%</span>
              </div>
              <div className="flex items-center">
                <Thermometer className="mr-2" />
                <span>温度: {machineStatus.temperature}°C</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2" />
                <span>タイマー設定: {machineStatus.timerSet}</span>
              </div>
              <div className="flex items-center">
                <Power className="mr-2" color={machineStatus.isOn ? "green" : "red"} />
                <span>{machineStatus.isOn ? "オン" : "オフ"}</span>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">最近の抽出履歴</h2>
            <ul className="space-y-2">
              {recentBrews.map(brew => (
                <li key={brew.id} className="flex items-center">
                  <Coffee className="mr-2" />
                  <span>{brew.date} - {brew.recipe}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">クイックアクセス</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/brewing" className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">
              <Coffee className="mr-2" />
              <span>コーヒー抽出</span>
            </a>
            <a href="/settings" className="bg-green-500 text-white p-4 rounded-lg flex items-center justify-center">
              <Settings className="mr-2" />
              <span>設定</span>
            </a>
            <a href="/maintenance" className="bg-yellow-500 text-white p-4 rounded-lg flex items-center justify-center">
              <Refresh className="mr-2" />
              <span>メンテナンス</span>
            </a>
            <a href="/recipes" className="bg-purple-500 text-white p-4 rounded-lg flex items-center justify-center">
              <Coffee className="mr-2" />
              <span>レシピ</span>
            </a>
          </div>
        </section>

        <div className="mt-8">
          <img src="https://picsum.photos/800/400" alt="コーヒーメーカー画像" className="w-full rounded-lg shadow" />
        </div>
      </main>
    </div>
  )
}