import { Clock, Plus, Edit, Trash2 } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

// 仮想データ
const timerSettings = [
  { id: 1, time: '07:00', days: ['月', '火', '水', '木', '金'] },
  { id: 2, time: '09:30', days: ['土', '日'] },
];

export default function TimerPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">タイマー設定</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="mr-2" />
            新しいタイマーを追加
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">時間</label>
              <input type="time" id="time" name="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">曜日</label>
              <div className="mt-2 space-x-2">
                {['月', '火', '水', '木', '金', '土', '日'].map((day) => (
                  <label key={day} className="inline-flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    <span className="ml-2">{day}</span>
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Plus className="mr-2" />
              追加
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">現在のタイマー設定</h2>
          <ul className="space-y-4">
            {timerSettings.map((timer) => (
              <li key={timer.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="text-lg font-medium">{timer.time}</p>
                  <p className="text-sm text-gray-500">{timer.days.join(', ')}</p>
                </div>
                <div className="space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit size={20} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}