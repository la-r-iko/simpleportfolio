import Link from 'next/link'

export default function BillingSuccessPage() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">支払いが完了しました</h2>
      <p className="mb-4">ご購入ありがとうございます。サブスクリプションが正常に更新されました。</p>
      <Link href="/billing" className="text-blue-500 hover:underline">
        請求情報ページに戻る
      </Link>
    </div>
  )
}