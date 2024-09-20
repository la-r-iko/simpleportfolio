import { 
  Coffee, Droplet, Thermometer, Clock, 
  Power, Refresh, Settings, AlertTriangle 
} from 'lucide-react'
import Sidebar from '@/components/Sidebar'

export default function MaintenancePage() {
  // 仮想データ（実際の実装ではAPIから取得）
  const maintenanceData = {
    filterStatus: '交換時期',
    waterTankLevel: 80,
    safetyStatus: {
      waterShortage: false,
      overheating: false,
    },
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">メンテナンス</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Refresh className="mr-2" />
              自動洗浄
            </h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              洗浄開始
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Coffee className="mr-2" />
              フィルター状態
            </h2>
            <p className="text-lg">
              現在の状態: <span className="font-bold text-yellow-500">{maintenanceData.filterStatus}</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Droplet className="mr-2" />
              水タンク状態
            </h2>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    水量
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    {maintenanceData.waterTankLevel}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: `${maintenanceData.waterTankLevel}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <AlertTriangle className="mr-2" />
              安全機能状態
            </h2>
            <ul>
              <li className="mb-2">
                水不足: 
                <span className={maintenanceData.safetyStatus.waterShortage ? "text-red-500 font-bold" : "text-green-500"}>
                  {maintenanceData.safetyStatus.waterShortage ? "警告" : "正常"}
                </span>
              </li>
              <li>
                過熱: 
                <span className={maintenanceData.safetyStatus.overheating ? "text-red-500 font-bold" : "text-green-500"}>
                  {maintenanceData.safetyStatus.overheating ? "警告" : "正常"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <img src="https://picsum.photos/800/400" alt="メンテナンス図" className="w-full rounded-lg shadow-md" />
        </div>
      </main>
    </div>
  )
}