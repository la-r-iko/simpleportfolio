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

// export const description =
//   "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"

function SignupForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">サインアップ</CardTitle>
        <CardDescription>
          アカウントを作成するための情報を入力してください
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">名</Label>
              <Input id="first-name" placeholder="太郎" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">姓</Label>
              <Input id="last-name" placeholder="山田" required />
            </div>
          </div>
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
            <Label htmlFor="password">パスワード</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            アカウントを作成
          </Button>
          <Button variant="outline" className="w-full">
            GitHubでサインアップ
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          すでにアカウントをお持ちですか？{" "}
          <Link href="#" className="underline">
            サインイン
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default SignupForm
