import Sidebar from '@/components/Sidebar';
import { Settings } from 'lucide-react';

const SettingsPage = () => {
  // 仮のデータ（実際の実装ではAPIから取得）
  const settings = {
    keepWarmDuration: 30,
    autoCleanSchedule: '毎日 22:00',
    language: '日本語',
    presets: [
      { name: 'マイルド', temperature: 90, strength: 'weak' },
      { name: 'スタンダード', temperature: 92, strength: 'medium' },
      { name: 'ストロング', temperature: 94, strength: 'strong' },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
          <Settings className="mr-2" />
          設定
        </h1>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">保温機能</h2>
          <div className="flex items-center">
            <label htmlFor="keepWarmDuration" className="mr-4">保温時間：</label>
            <input
              type="number"
              id="keepWarmDuration"
              className="border rounded px-2 py-1"
              value={settings.keepWarmDuration}
              readOnly
            />
            <span className="ml-2">分</span>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">自動洗浄スケジュール</h2>
          <div className="flex items-center">
            <label htmlFor="autoCleanSchedule" className="mr-4">スケジュール：</label>
            <input
              type="text"
              id="autoCleanSchedule"
              className="border rounded px-2 py-1"
              value={settings.autoCleanSchedule}
              readOnly
            />
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">言語設定</h2>
          <div className="flex items-center">
            <label htmlFor="language" className="mr-4">言語：</label>
            <select
              id="language"
              className="border rounded px-2 py-1"
              value={settings.language}
              readOnly
            >
              <option value="日本語">日本語</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">抽出プリセット</h2>
          <ul>
            {settings.presets.map((preset, index) => (
              <li key={index} className="mb-2">
                <strong>{preset.name}：</strong> {preset.temperature}°C, 
                強さ: {preset.strength === 'weak' ? '弱' : preset.strength === 'medium' ? '中' : '強'}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;