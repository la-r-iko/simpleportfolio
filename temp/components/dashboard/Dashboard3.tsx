import {
    Bird,
    Book,
    Bot,
    Code2,
    CornerDownLeft,
    LifeBuoy,
    Mic,
    Paperclip,
    Rabbit,
    Settings,
    Settings2,
    Share,
    SquareTerminal,
    SquareUser,
    Triangle,
    Turtle,
  } from "lucide-react"
  
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
Drawer,
DrawerContent,
DrawerDescription,
DrawerHeader,
DrawerTitle,
DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
Tooltip,
TooltipContent,
TooltipTrigger,
TooltipProvider,
} from "@/components/ui/tooltip"

// export const description =
// "An AI playground with a sidebar navigation and a main content area. The playground has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages."

function Dashboard3() {
    return (
    <TooltipProvider>
    <div className="grid h-screen w-full pl-[56px]">
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="ホーム">
            <Triangle className="size-5 fill-foreground" />
        </Button>
        </div>
        <nav className="grid gap-1 p-2">
        <Tooltip>
            <TooltipTrigger asChild>
            <Button
                variant="ghost"
                size="icon"
                className="rounded-lg bg-muted"
                aria-label="プレイグラウンド"
            >
                <SquareTerminal className="size-5" />
            </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
            プレイグラウンド
            </TooltipContent>
        </Tooltip>
        <Tooltip>
            <TooltipTrigger asChild>
            <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="モデル"
            >
                <Bot className="size-5" />
            </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
            モデル
            </TooltipContent>
        </Tooltip>
        <Tooltip>
            <TooltipTrigger asChild>
            <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="API"
            >
                <Code2 className="size-5" />
            </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
            API
            </TooltipContent>
        </Tooltip>
        <Tooltip>
            <TooltipTrigger asChild>
            <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="ドキュメント"
            >
                <Book className="size-5" />
            </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
            ドキュメント
            </TooltipContent>
        </Tooltip>
        <Tooltip>
            <TooltipTrigger asChild>
            <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="設定"
            >
                <Settings2 className="size-5" />
            </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
            設定
            </TooltipContent>
        </Tooltip>
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
        <Tooltip>
            <TooltipTrigger asChild>
            <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="ヘルプ"
            >
                <LifeBuoy className="size-5" />
            </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
            ヘルプ
            </TooltipContent>
        </Tooltip>
        <Tooltip>
            <TooltipTrigger asChild>
            <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="アカウント"
            >
                <SquareUser className="size-5" />
            </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
            アカウント
            </TooltipContent>
        </Tooltip>
        </nav>
    </aside>
    <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">プレイグラウンド</h1>
        <Drawer>
            <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Settings className="size-4" />
                <span className="sr-only">設定</span>
            </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
            <DrawerHeader>
                <DrawerTitle>設定</DrawerTitle>
                <DrawerDescription>
                モデルとメッセージの設定を構成します。
                </DrawerDescription>
            </DrawerHeader>
            <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                    設定
                </legend>
                <div className="grid gap-3">
                    <Label htmlFor="model">モデル</Label>
                    <Select>
                    <SelectTrigger
                        id="model"
                        className="items-start [&_[data-description]]:hidden"
                    >
                        <SelectValue placeholder="モデルを選択" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="genesis">
                        <div className="flex items-start gap-3 text-muted-foreground">
                            <Rabbit className="size-5" />
                            <div className="grid gap-0.5">
                            <p>
                                ニューラル{" "}
                                <span className="font-medium text-foreground">
                                ジェネシス
                                </span>
                            </p>
                            <p className="text-xs" data-description>
                                一般的な用途に最適な高速モデル。
                            </p>
                            </div>
                        </div>
                        </SelectItem>
                        <SelectItem value="explorer">
                        <div className="flex items-start gap-3 text-muted-foreground">
                            <Bird className="size-5" />
                            <div className="grid gap-0.5">
                            <p>
                                ニューラル{" "}
                                <span className="font-medium text-foreground">
                                エクスプローラー
                                </span>
                            </p>
                            <p className="text-xs" data-description>
                                効率性を重視したパフォーマンスと速度。
                            </p>
                            </div>
                        </div>
                        </SelectItem>
                        <SelectItem value="quantum">
                        <div className="flex items-start gap-3 text-muted-foreground">
                            <Turtle className="size-5" />
                            <div className="grid gap-0.5">
                            <p>
                                ニューラル{" "}
                                <span className="font-medium text-foreground">
                                クアンタム
                                </span>
                            </p>
                            <p className="text-xs" data-description>
                                複雑な計算に最適な最強モデル。
                            </p>
                            </div>
                        </div>
                        </SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="temperature">温度</Label>
                    <Input id="temperature" type="number" placeholder="0.4" />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="top-p">トップP</Label>
                    <Input id="top-p" type="number" placeholder="0.7" />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="top-k">トップK</Label>
                    <Input id="top-k" type="number" placeholder="0.0" />
                </div>
                </fieldset>
                <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                    メッセージ
                </legend>
                <div className="grid gap-3">
                    <Label htmlFor="role">役割</Label>
                    <Select defaultValue="system">
                    <SelectTrigger>
                        <SelectValue placeholder="役割を選択" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="system">システム</SelectItem>
                        <SelectItem value="user">ユーザー</SelectItem>
                        <SelectItem value="assistant">アシスタント</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="content">内容</Label>
                    <Textarea id="content" placeholder="あなたは..." />
                </div>
                </fieldset>
            </form>
            </DrawerContent>
        </Drawer>
        <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
        >
            <Share className="size-3.5" />
            共有
        </Button>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
        <div
            className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
        >
            <form className="grid w-full items-start gap-6">
            <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                設定
                </legend>
                <div className="grid gap-3">
                <Label htmlFor="model">モデル</Label>
                <Select>
                    <SelectTrigger
                    id="model"
                    className="items-start [&_[data-description]]:hidden"
                    >
                    <SelectValue placeholder="モデルを選択" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="genesis">
                        <div className="flex items-start gap-3 text-muted-foreground">
                        <Rabbit className="size-5" />
                        <div className="grid gap-0.5">
                            <p>
                            ニューラル{" "}
                            <span className="font-medium text-foreground">
                                ジェネシス
                            </span>
                            </p>
                            <p className="text-xs" data-description>
                            一般的な用途に最適な高速モデル。
                            </p>
                        </div>
                        </div>
                    </SelectItem>
                    <SelectItem value="explorer">
                        <div className="flex items-start gap-3 text-muted-foreground">
                        <Bird className="size-5" />
                        <div className="grid gap-0.5">
                            <p>
                            ニューラル{" "}
                            <span className="font-medium text-foreground">
                                エクスプローラー
                            </span>
                            </p>
                            <p className="text-xs" data-description>
                            効率性を重視したパフォーマンスと速度。
                            </p>
                        </div>
                        </div>
                    </SelectItem>
                    <SelectItem value="quantum">
                        <div className="flex items-start gap-3 text-muted-foreground">
                        <Turtle className="size-5" />
                        <div className="grid gap-0.5">
                            <p>
                            ニューラル{" "}
                            <span className="font-medium text-foreground">
                                クアンタム
                            </span>
                            </p>
                            <p className="text-xs" data-description>
                            複雑な計算に最適な最強モデル。
                            </p>
                        </div>
                        </div>
                    </SelectItem>
                    </SelectContent>
                </Select>
                </div>
                <div className="grid gap-3">
                <Label htmlFor="temperature">温度</Label>
                <Input id="temperature" type="number" placeholder="0.4" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-3">
                    <Label htmlFor="top-p">トップP</Label>
                    <Input id="top-p" type="number" placeholder="0.7" />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="top-k">トップK</Label>
                    <Input id="top-k" type="number" placeholder="0.0" />
                </div>
                </div>
            </fieldset>
            <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                メッセージ
                </legend>
                <div className="grid gap-3">
                <Label htmlFor="role">役割</Label>
                <Select defaultValue="system">
                    <SelectTrigger>
                    <SelectValue placeholder="役割を選択" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="system">システム</SelectItem>
                    <SelectItem value="user">ユーザー</SelectItem>
                    <SelectItem value="assistant">アシスタント</SelectItem>
                    </SelectContent>
                </Select>
                </div>
                <div className="grid gap-3">
                <Label htmlFor="content">内容</Label>
                <Textarea
                    id="content"
                    placeholder="あなたは..."
                    className="min-h-[9.5rem]"
                />
                </div>
            </fieldset>
            </form>
        </div>
        <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <Badge variant="outline" className="absolute right-3 top-3">
            出力
            </Badge>
            <div className="flex-1" />
            <form
            className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
            >
            <Label htmlFor="message" className="sr-only">
                メッセージ
            </Label>
            <Textarea
                id="message"
                placeholder="ここにメッセージを入力してください..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
            />
            <div className="flex items-center p-3 pt-0">
                <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                    <Paperclip className="size-4" />
                    <span className="sr-only">ファイルを添付</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Attach File</TooltipContent>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                    <Mic className="size-4" />
                    <span className="sr-only">Use Microphone</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Use Microphone</TooltipContent>
                </Tooltip>
                <Button type="submit" size="sm" className="ml-auto gap-1.5">
                Send Message
                <CornerDownLeft className="size-3.5" />
                </Button>
            </div>
            </form>
        </div>
        </main>
    </div>
    </div>
    </TooltipProvider>
)
}
  
export default Dashboard3