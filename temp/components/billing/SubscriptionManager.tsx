'use client'

import { useState } from 'react'

function SubscriptionManager() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscriptionChange = () => {
    // ここにサブスクリプション変更の処理を実装
    setIsSubscribed(!isSubscribed)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">サブスクリプション管理</h2>
      <p className="mb-4">
        現在のステータス: {isSubscribed ? '有効' : '無効'}
      </p>
      <button
        onClick={handleSubscriptionChange}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        {isSubscribed ? 'サブスクリプションを解約' : 'サブスクリプションを開始'}
      </button>
    </div>
  )
}

export default SubscriptionManager