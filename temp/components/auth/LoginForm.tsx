import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// LoginFormコンポーネントを定義し、説明を内包する
function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">ログイン</CardTitle>
        <CardDescription>
          アカウントにログインするためにメールアドレスを入力してください
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">パスワード</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                パスワードをお忘れですか？
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            ログイン
          </Button>
          <Button variant="outline" className="w-full">
            Googleでログイン
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          アカウントをお持ちでないですか？{" "}
          <Link href="#" className="underline">
            サインアップ
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}


export default LoginForm

