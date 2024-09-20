import { 
  Coffee, Droplet, Thermometer, Clock, 
  Power, Refresh, Settings, AlertTriangle 
} from 'lucide-react'
import Sidebar from '@/components/Sidebar'

export default function BrewPage() {
  // 仮想データ（実際のアプリケーションではAPIから取得）
  const brewingStatus = {
    waterLevel: 75,
    temperature: 92,
    brewingTime: 180,
    isActive: true,
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">コーヒー抽出</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">水量調節</h2>
            <div className="flex items-center mb-4">
              <Droplet className="mr-2" />
              <input
                type="range"
                min="0"
                max="100"
                value={brewingStatus.waterLevel}
                className="w-full"
                readOnly
              />
              <span className="ml-2">{brewingStatus.waterLevel}%</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">温度設定</h2>
            <div className="flex items-center mb-4">
              <Thermometer className="mr-2" />
              <input
                type="range"
                min="60"
                max="100"
                value={brewingStatus.temperature}
                className="w-full"
                readOnly
              />
              <span className="ml-2">{brewingStatus.temperature}°C</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">抽出状況</h2>
            <div className="flex items-center mb-4">
              <Clock className="mr-2" />
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${(brewingStatus.brewingTime / 300) * 100}%` }}
                ></div>
              </div>
              <span className="ml-2">{brewingStatus.brewingTime}秒</span>
            </div>
            <div className="flex items-center">
              <Power className={`mr-2 ${brewingStatus.isActive ? 'text-green-500' : 'text-red-500'}`} />
              <span>{brewingStatus.isActive ? '抽出中' : '停止中'}</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">操作</h2>
            <div className="flex flex-col space-y-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center">
                <Coffee className="mr-2" />
                抽出開始
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-md flex items-center justify-center">
                <Refresh className="mr-2" />
                リセット
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center justify-center">
                <Settings className="mr-2" />
                設定
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
          <div className="flex items-center">
            <AlertTriangle className="mr-2" />
            <p className="font-bold">注意：</p>
          </div>
          <p>水タンクの水が少なくなっています。水を補充してください。</p>
        </div>

        <div className="mt-8">
          <img src="https://picsum.photos/800/400" alt="コーヒーメーカーイメージ" className="w-full rounded-lg shadow-md" />
        </div>
      </main>
    </div>
  )
}