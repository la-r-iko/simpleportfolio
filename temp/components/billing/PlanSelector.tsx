'use client'

import { useState } from 'react'

const plans = [
  { id: 'basic', name: 'ベーシック', price: 1000 },
  { id: 'pro', name: 'プロ', price: 2000 },
  { id: 'enterprise', name: 'エンタープライズ', price: 5000 },
]

function PlanSelector() {
  const [selectedPlan, setSelectedPlan] = useState('')

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">プラン選択</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`border rounded-lg p-4 cursor-pointer ${
              selectedPlan === plan.id ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
            <p className="text-gray-600">¥{plan.price.toLocaleString()} / 月</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlanSelector