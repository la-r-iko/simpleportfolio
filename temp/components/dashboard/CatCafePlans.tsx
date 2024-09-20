"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

function CatCafePlans() {
  const [isYearly, setIsYearly] = useState(true)

  const plans = [
    {
      name: "にゃんこビギナー",
      price: isYearly ? "9,800" : "980",
      description: "猫カフェを気軽に楽しみたい方向け",
      features: [
        "月2回の来店",
        "基本的な猫のおもちゃ",
        "ウェルカムドリンク1杯",
        "猫との触れ合い時間60分"
      ]
    },
    {
      name: "にゃんこマスター",
      price: isYearly ? "29,800" : "2,980",
      description: "より多くの特典を求める猫好きの方向け",
      features: [
        "月8回の来店",
        "高級な猫のおもちゃ",
        "ドリンク飲み放題",
        "猫との触れ合い時間120分",
        "月1回の猫用品プレゼント"
      ]
    },
    {
      name: "究極の猫マニア",
      price: isYearly ? "49,800" : "4,980",
      description: "猫カフェを第二の家にしたい方向け",
      features: [
        "無制限の来店",
        "全ての猫のおもちゃ使用可能",
        "フード＆ドリンク無制限",
        "猫との触れ合い時間無制限",
        "月1回の猫用品プレゼント",
        "特別イベントへの優先参加権"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">猫カフェサブスクリプション</h2>
        <div className="inline-flex items-center justify-center space-x-2 bg-white p-2 rounded-full shadow-lg">
          <span className={`text-xs sm:text-sm font-medium ${isYearly ? 'text-gray-500' : 'text-gray-900'}`}>月払い</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="bg-gray-300 data-[state=checked]:bg-primary relative inline-flex h-5 w-10 sm:h-6 sm:w-11 items-center rounded-full"
          >
            <span className="sr-only">年払いに切り替え</span>
            <span className="absolute left-[2px] top-[2px] h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-white transition-transform data-[state=checked]:translate-x-5 shadow-md" />
          </Switch>
          <span className={`text-xs sm:text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>年払い</span>
          <span className="ml-2 inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">20%お得</span>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <Card key={plan.name} className={`flex flex-col ${index === 1 ? 'bg-primary text-primary-foreground shadow-xl sm:transform sm:scale-105' : 'bg-card shadow-lg'}`}>
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-bold">{plan.name}</CardTitle>
              <p className={`text-xs ${index === 1 ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{plan.description}</p>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <div className="text-2xl font-bold mb-2">
                ¥{plan.price} <span className="text-sm font-normal">/{isYearly ? '年' : '月'}</span>
              </div>
              <ul className="space-y-1 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="mr-2 h-3 w-3 flex-shrink-0" />
                    <span className="text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-4">
              <Button className={`w-full text-sm ${index === 1 ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' : ''}`}>
                このプランを選択
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CatCafePlans;