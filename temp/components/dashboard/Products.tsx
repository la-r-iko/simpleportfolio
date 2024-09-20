"use client"

import Image from "next/image"
import Link from "next/link"
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"

function Products() {
  return (
    <TooltipProvider>
      <div lang="ja" className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-20 hidden w-14 flex-col border-r bg-background lg:flex">
          <nav className="flex flex-col items-center gap-4 px-2 py-5">
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground"
            >
              <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">猫カフェ</span>
            </Link>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">ダッシュボード</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">ダッシュボード</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">注文</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">注文</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  <span className="sr-only">商品</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">商品</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">顧客</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">顧客</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">分析</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">分析</TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">設定</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">設定</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
        <div className="flex flex-col lg:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="lg:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">メニューを切り替え</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-foreground"
                  >
                    <Package2 className="h-5 w-5" />
                    猫カフェ
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    ダッシュボード
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    注文
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    商品
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Users2 className="h-5 w-5" />
                    顧客
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <LineChart className="h-5 w-5" />
                    分析
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Settings className="h-5 w-5" />
                    設定
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="#">ダッシュボード</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="#">商品</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>すべての商品</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <form className="relative w-full md:w-auto md:flex-1 lg:flex-initial lg:min-w-[240px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="検索..."
                  className="w-full pl-8 sm:w-[300px] md:w-full lg:w-[240px]"
                />
              </form>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      width={32}
                      height={32}
                      alt="アバター"
                      className="rounded-full"
                    />
                    <span className="sr-only">アカウントメニュー</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>マイアカウント</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>設定</DropdownMenuItem>
                  <DropdownMenuItem>サポート</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>ログアウト</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 space-y-4 p-4 md:p-6 lg:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-3xl font-bold tracking-tight">商品</h1>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-2 md:gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8">
                      <ListFilter className="mr-2 h-4 w-4" />
                      フィルター
                      <span className="sr-only">フィルターメニューを開く</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuLabel>フィルター条件</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      アクティブ
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>ドラフト</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      アーカイブ
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="sm" className="h-8">
                  <File className="mr-2 h-4 w-4" />
                  エクスポート
                </Button>
                <Button size="sm" className="h-8">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  商品を追加
                </Button>
              </div>
            </div>
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">すべて</TabsTrigger>
                <TabsTrigger value="active">アクティブ</TabsTrigger>
                <TabsTrigger value="draft">ドラフト</TabsTrigger>
                <TabsTrigger value="archived">アーカイブ</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>商品リスト</CardTitle>
                    <CardDescription>
                      商品を管理し、販売パフォーマンスを確認します。
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[80px]">画像</TableHead>
                            <TableHead>名前</TableHead>
                            <TableHead>ステータス</TableHead>
                            <TableHead className="hidden md:table-cell">価格</TableHead>
                            <TableHead className="hidden md:table-cell">総売上</TableHead>
                            <TableHead className="hidden md:table-cell">作成日</TableHead>
                            <TableHead className="text-right">アクション</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {[
                            {
                              name: "キャットミルク",
                              status: "ドラフト",
                              price: "¥550",
                              sales: "25",
                              created: "2023-07-12 10:42 AM",
                              image: "https://picsum.photos/64?random=cat_milk",
                            },
                            {
                              name: "キャットタワー",
                              status: "アクティブ",
                              price: "¥17,600",
                              sales: "100",
                              created: "2023-10-18 03:21 PM",
                              image: "https://picsum.photos/64?random=cat_tower",
                            },
                            {
                              name: "キャットボウル",
                              status: "アクティブ",
                              price: "¥5,500",
                              sales: "50",
                              created: "2023-11-29 08:15 AM",
                              image: "https://picsum.photos/64?random=cat_bowl",
                            },
                            {
                              name: "キャットおもちゃ",
                              status: "ドラフト",
                              price: "¥330",
                              sales: "0",
                              created: "2023-12-25 11:59 PM",
                              image: "https://picsum.photos/64?random=cat_toy",
                            },
                            {
                              name: "キャットリーダー",
                              status: "アクティブ",
                              price: "¥8,800",
                              sales: "75",
                              created: "2024-01-01 12:00 AM",
                              image: "https://picsum.photos/64?random=cat_litter",
                            },
                            {
                              name: "キャットハウス",
                              status: "アクティブ",
                              price: "¥27,500",
                              sales: "30",
                              created: "2024-02-14 02:14 PM",
                              image: "https://picsum.photos/64?random=cat_house",
                            },
                          ].map((product, index) => (
                            <TableRow key={index}>
                              <TableCell>
                                <Image
                                  src={product.image}
                                  alt={`${product.name}の画像`}
                                  width={40}
                                  height={40}
                                  className="rounded-md object-cover"
                                />
                              </TableCell>
                              <TableCell className="font-medium">
                                {product.name}
                              </TableCell>
                              <TableCell>
                                <Badge variant={product.status === "アクティブ" ? "outline" : "secondary"}>
                                  {product.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">{product.price}</TableCell>
                              <TableCell className="hidden md:table-cell">{product.sales}</TableCell>
                              <TableCell className="hidden md:table-cell">{product.created}</TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <MoreHorizontal className="h-4 w-4" />
                                      <span className="sr-only">アクションメニューを開く</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>編集</DropdownMenuItem>
                                    <DropdownMenuItem>複製</DropdownMenuItem>
                                    <DropdownMenuItem>アーカイブ</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-destructive">
                                      削除
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      全32件中6件を表示
                    </p>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline" disabled>
                        前へ
                      </Button>
                      <Button size="sm" variant="outline">
                        次へ
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </TooltipProvider>
  )
}

export default Products