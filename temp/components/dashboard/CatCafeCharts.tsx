"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  TooltipProvider,
} from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"

function CatCafeCharts() {
  return (
    <TooltipProvider>
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
        <Card
          className="lg:max-w-md" x-chunk="charts-01-chunk-0"
        >
          <CardHeader className="space-y-0 pb-2">
            <CardDescription>今日</CardDescription>
            <CardTitle className="text-4xl tabular-nums">
              125{" "}
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                人
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                visitors: {
                  label: "来店客数",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: -4,
                  right: -4,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    visitors: 100,
                  },
                  {
                    date: "2024-01-02",
                    visitors: 120,
                  },
                  {
                    date: "2024-01-03",
                    visitors: 110,
                  },
                  {
                    date: "2024-01-04",
                    visitors: 130,
                  },
                  {
                    date: "2024-01-05",
                    visitors: 140,
                  },
                  {
                    date: "2024-01-06",
                    visitors: 125,
                  },
                  {
                    date: "2024-01-07",
                    visitors: 160,
                  },
                ]}
              >
                <Bar
                  dataKey="visitors"
                  fill="var(--color-visitors)"
                  radius={5}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("ja-JP", {
                      weekday: "short",
                    })
                  }}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-1">
            <CardDescription>
              過去7日間で、あなたの猫カフェには{" "}
              <span className="font-medium text-foreground">885</span> 人が訪れました。
            </CardDescription>
            <CardDescription>
              目標達成までに{" "}
              <span className="font-medium text-foreground">115</span> 人が必要です。
            </CardDescription>
          </CardFooter>
        </Card>
        <Card
          className="flex flex-col lg:max-w-md" x-chunk="charts-01-chunk-1"
        >
          <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
            <div>
              <CardDescription>猫の平均年齢</CardDescription>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                4.5
                <span className="text-sm font-normal tracking-normal text-muted-foreground">
                  歳
                </span>
              </CardTitle>
            </div>
            <div>
              <CardDescription>猫の数</CardDescription>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                15
                <span className="text-sm font-normal tracking-normal text-muted-foreground">
                  匹
                </span>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 items-center">
            <ChartContainer
              config={{
                cats: {
                  label: "猫の数",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="w-full"
            >
              <LineChart
                accessibilityLayer
                margin={{
                  left: 14,
                  right: 14,
                  top: 10,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    cats: 12,
                  },
                  {
                    date: "2024-01-02",
                    cats: 13,
                  },
                  {
                    date: "2024-01-03",
                    cats: 13,
                  },
                  {
                    date: "2024-01-04",
                    cats: 14,
                  },
                  {
                    date: "2024-01-05",
                    cats: 14,
                  },
                  {
                    date: "2024-01-06",
                    cats: 15,
                  },
                  {
                    date: "2024-01-07",
                    cats: 15,
                  },
                ]}
              >
                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke="hsl(var(--muted-foreground))"
                  strokeOpacity={0.5}
                />
                <YAxis hide domain={["dataMin - 1", "dataMax + 1"]} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("ja-JP", {
                      weekday: "short",
                    })
                  }}
                />
                <Line
                  dataKey="cats"
                  type="stepAfter"
                  fill="var(--color-cats)"
                  stroke="var(--color-cats)"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    fill: "var(--color-cats)",
                    stroke: "var(--color-cats)",
                    r: 4,
                  }}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      indicator="line"
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("ja-JP", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      }}
                    />
                  }
                  cursor={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
        <Card
          className="max-w-xs" x-chunk="charts-01-chunk-2"
        >
          <CardHeader>
            <CardTitle>来店客数の推移</CardTitle>
            <CardDescription>
              今年は昨年よりも1日あたりの来店客数が多いです。
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid auto-rows-min gap-2">
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                124
                <span className="text-sm font-normal text-muted-foreground">
                  人/日
                </span>
              </div>
              <ChartContainer
                config={{
                  visitors: {
                    label: "来店客数",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="aspect-auto h-[32px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  layout="vertical"
                  margin={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  data={[
                    {
                      date: "2024",
                      visitors: 124,
                    },
                  ]}
                >
                  <Bar
                    dataKey="visitors"
                    fill="var(--color-visitors)"
                    radius={4}
                    barSize={32}
                  >
                    <LabelList
                      position="insideLeft"
                      dataKey="date"
                      offset={8}
                      fontSize={12}
                      fill="white"
                    />
                  </Bar>
                  <YAxis dataKey="date" type="category" tickCount={1} hide />
                  <XAxis dataKey="visitors" type="number" hide />
                </BarChart>
              </ChartContainer>
            </div>
            <div className="grid auto-rows-min gap-2">
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                101
                <span className="text-sm font-normal text-muted-foreground">
                  人/日
                </span>
              </div>
              <ChartContainer
                config={{
                  visitors: {
                    label: "来店客数",
                    color: "hsl(var(--muted))",
                  },
                }}
                className="aspect-auto h-[32px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  layout="vertical"
                  margin={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  data={[
                    {
                      date: "2023",
                      visitors: 101,
                    },
                  ]}
                >
                  <Bar
                    dataKey="visitors"
                    fill="var(--color-visitors)"
                    radius={4}
                    barSize={32}
                  >
                    <LabelList
                      position="insideLeft"
                      dataKey="date"
                      offset={8}
                      fontSize={12}
                      fill="hsl(var(--muted-foreground))"
                    />
                  </Bar>
                  <YAxis dataKey="date" type="category" tickCount={1} hide />
                  <XAxis dataKey="visitors" type="number" hide />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        <Card
          className="max-w-xs" x-chunk="charts-01-chunk-3"
        >
          <CardHeader className="p-4 pb-0">
            <CardTitle>猫の遊び時間</CardTitle>
            <CardDescription>
              過去7日間で、猫たちは1日あたり平均5.5時間遊んでいました。
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-0">
            <div className="flex items-baseline gap-1 text-3xl font-bold tabular-nums leading-none">
              5.5
              <span className="text-sm font-normal text-muted-foreground">
                時間/日
              </span>
            </div>
            <ChartContainer
              config={{
                playtime: {
                  label: "遊び時間",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="ml-auto w-[72px]"
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    playtime: 5,
                  },
                  {
                    date: "2024-01-02",
                    playtime: 5.2,
                  },
                  {
                    date: "2024-01-03",
                    playtime: 5.5,
                  },
                  {
                    date: "2024-01-04",
                    playtime: 5.3,
                  },
                  {
                    date: "2024-01-05",
                    playtime: 5.4,
                  },
                  {
                    date: "2024-01-06",
                    playtime: 5.8,
                  },
                  {
                    date: "2024-01-07",
                    playtime: 5.6,
                  },
                ]}
              >
                <Bar
                  dataKey="playtime"
                  fill="var(--color-playtime)"
                  radius={2}
                  fillOpacity={0.2}
                  activeIndex={6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  hide
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card
          className="max-w-xs" x-chunk="charts-01-chunk-4"
        >
          <CardContent className="flex gap-4 p-4 pb-2">
            <ChartContainer
              config={{
                play: {
                  label: "遊び",
                  color: "hsl(var(--chart-1))",
                },
                sleep: {
                  label: "睡眠",
                  color: "hsl(var(--chart-2))",
                },
                eat: {
                  label: "食事",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[140px] w-full"
            >
              <BarChart
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 10,
                }}
                data={[
                  {
                    activity: "sleep",
                    value: (14 / 24) * 100,
                    label: "14/24 hr",
                    fill: "var(--color-sleep)",
                  },
                  {
                    activity: "eat",
                    value: (2 / 24) * 100,
                    label: "2/24 hr",
                    fill: "var(--color-eat)",
                  },
                  {
                    activity: "play",
                    value: (8 / 24) * 100,
                    label: "8/24 hr",
                    fill: "var(--color-play)",
                  },
                ]}
                layout="vertical"
                barSize={32}
                barGap={2}
              >
                <XAxis type="number" dataKey="value" hide />
                <YAxis
                  dataKey="activity"
                  type="category"
                  tickLine={false}
                  tickMargin={4}
                  axisLine={false}
                  className="capitalize"
                />
                <Bar dataKey="value" radius={5}>
                  <LabelList
                    position="insideLeft"
                    dataKey="label"
                    fill="white"
                    offset={8}
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex flex-row border-t p-4">
            <div className="flex w-full items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">遊び</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  8
                  <span className="text-sm font-normal text-muted-foreground">
                    時間
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">食事</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  2
                  <span className="text-sm font-normal text-muted-foreground">
                    時間
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">睡眠</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  14
                  <span className="text-sm font-normal text-muted-foreground">
                    時間
                  </span>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="grid w-full flex-1 gap-6">
        <Card
          className="max-w-xs" x-chunk="charts-01-chunk-5"
        >
          <CardContent className="flex gap-4 p-4">
            <div className="grid items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-muted-foreground">遊び</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  8/10
                  <span className="text-sm font-normal text-muted-foreground">
                    時間
                  </span>
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-muted-foreground">食事</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  2/3
                  <span className="text-sm font-normal text-muted-foreground">
                    時間
                  </span>
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-muted-foreground">睡眠</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  14/11
                  <span className="text-sm font-normal text-muted-foreground">
                    時間
                  </span>
                </div>
              </div>
            </div>
            <ChartContainer
              config={{
                play: {
                  label: "遊び",
                  color: "hsl(var(--chart-1))",
                },
                eat: {
                  label: "食事",
                  color: "hsl(var(--chart-2))",
                },
                sleep: {
                  label: "睡眠",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="mx-auto aspect-square w-full max-w-[80%]"
            >
              <RadialBarChart
                margin={{
                  left: -10,
                  right: -10,
                  top: -10,
                  bottom: -10,
                }}
                data={[
                  {
                    activity: "sleep",
                    value: (14 / 11) * 100,
                    fill: "var(--color-sleep)",
                  },
                  {
                    activity: "eat",
                    value: (2 / 3) * 100,
                    fill: "var(--color-eat)",
                  },
                  {
                    activity: "play",
                    value: (8 / 10) * 100,
                    fill: "var(--color-play)",
                  },
                ]}
                innerRadius="20%"
                barSize={24}
                startAngle={90}
                endAngle={450}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  dataKey="value"
                  tick={false}
                />
                <RadialBar dataKey="value" background cornerRadius={5} />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card
          className="max-w-xs" x-chunk="charts-01-chunk-6"
        >
          <CardHeader className="p-4 pb-0">
            <CardTitle>猫のおやつ消費量</CardTitle>
            <CardDescription>
              猫たちは1日あたり平均125グラムのおやつを食べています。健康的ですね！
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
            <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
              125
              <span className="text-sm font-normal text-muted-foreground">
                g/日
              </span>
            </div>
            <ChartContainer
              config={{
                treats: {
                  label: "おやつ",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="ml-auto w-[64px]"
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    treats: 120,
                  },
                  {
                    date: "2024-01-02",
                    treats: 130,
                  },
                  {
                    date: "2024-01-03",
                    treats: 125,
                  },
                  {
                    date: "2024-01-04",
                    treats: 135,
                  },
                  {
                    date: "2024-01-05",
                    treats: 120,
                  },
                  {
                    date: "2024-01-06",
                    treats: 115,
                  },
                  {
                    date: "2024-01-07",
                    treats: 130,
                  },
                ]}
              >
                <Bar
                  dataKey="treats"
                  fill="var(--color-treats)"
                  radius={2}
                  fillOpacity={0.2}
                  activeIndex={6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  hide
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card
          className="max-w-xs" x-chunk="charts-01-chunk-7"
        >
          <CardHeader className="space-y-0 pb-0">
            <CardDescription>猫の平均睡眠時間</CardDescription>
            <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
              14
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                時間
              </span>
              35
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                分
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ChartContainer
              config={{
                sleep: {
                  label: "睡眠時間",
                  color: "hsl(var(--chart-2))",
                },
              }}
            >
              <AreaChart
                accessibilityLayer
                data={[
                  {
                    date: "2024-01-01",
                    sleep: 14.5,
                  },
                  {
                    date: "2024-01-02",
                    sleep: 15.2,
                  },
                  {
                    date: "2024-01-03",
                    sleep: 14.1,
                  },
                  {
                    date: "2024-01-04",
                    sleep: 14.8,
                  },
                  {
                    date: "2024-01-05",
                    sleep: 13.9,
                  },
                  {
                    date: "2024-01-06",
                    sleep: 14.3,
                  },
                  {
                    date: "2024-01-07",
                    sleep: 14.6,
                  },
                ]}
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="date" hide />
                <YAxis domain={["dataMin - 1", "dataMax + 1"]} hide />
                <defs>
                  <linearGradient id="fillSleep" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-sleep)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-sleep)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="sleep"
                  type="natural"
                  fill="url(#fillSleep)"
                  fillOpacity={0.4}
                  stroke="var(--color-sleep)"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                  formatter={(value) => (
                    <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                      睡眠時間
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {value}
                        <span className="font-normal text-muted-foreground">
                          時間
                        </span>
                      </div>
                    </div>
                  )}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
    </TooltipProvider>
  )
}


export default CatCafeCharts