concept = """
# BrewMaster NextJS プレビュー参照プログラム要件定義書

## 1. プロジェクトコンセプト

BrewMasterは、最新のNext.js技術を活用した高機能コーヒーメーカーのプレビューおよび参照プログラムです。このシステムは、コーヒー愛好家のニーズに応える多彩な機能を提供し、直感的なユーザーインターフェースを通じて操作できます。

主要機能：

1. コーヒー抽出機能：豆から挽きたてのコーヒーを抽出
2. 水量調節機能：カップ数や好みに応じた水量調節
3. 温度設定機能：抽出温度の調節による味の最適化
4. タイマー機能：指定時間での自動抽出
5. 保温機能：抽出後のコーヒーを適温で保温
6. 自動洗浄機能：内部の自動洗浄
7. 操作パネル：視覚的に分かりやすいUI
8. 水タンク着脱式：簡単な水の補充と清掃
9. フィルター交換サイン：交換時期の通知
10. 安全機能：水不足や過熱時の自動停止と警告表示

## 2. システム概要

BrewMasterは、Next.js 13のApp Routerを使用して以下の主要コンポーネントで構成されます：

1. コーヒー抽出エンジン
2. 水量制御システム
3. 温度管理モジュール
4. タイマーおよびスケジューリング機能
5. 保温制御システム
6. 自動洗浄モジュール
7. ユーザーインターフェース（操作パネル）
8. 水タンク管理システム
9. フィルター監視機能
10. 安全制御システム

## 3. 技術スタック

- フロントエンド：Next.js 13 (React) with App Router
- スタイリング：Tailwind CSS
- バックエンド：Next.js API Routes
- データベース：Supabase (PostgreSQL)
- 状態管理：Redux Toolkit
- IoTデバイス連携：MQTT protocol
- デプロイ：Vercel

## 4. セキュリティ要件

- エンドツーエンドの暗号化通信
- ユーザー認証と権限管理
- ファームウェアの安全なアップデート機能
- データのバックアップと復元機能
- プライバシー保護対策

## 5. スケーラビリティと性能

- マイクロサービスアーキテクチャの採用
- エッジコンピューティングの活用
- リアルタイムデータ処理のための最適化
- キャッシュ戦略の実装（Next.js のISRを活用）

## 6. データベース定義

BrewMasterのデータベースは、Supabase（PostgreSQL）を使用して以下のテーブルで構成されます：

1. users（ユーザー）テーブル
2. brewing_sessions（抽出セッション）テーブル
3. recipes（レシピ）テーブル
4. maintenance_logs（メンテナンスログ）テーブル
5. device_settings（デバイス設定）テーブル
6. notifications（通知）テーブル

これらのテーブルは、BrewMasterの運用に必要な全ての情報を効率的に管理し、システムの各機能をサポートします。Supabaseの機能を活用することで、データの整合性を保ちながら、高速なクエリとリアルタイムの更新を実現します。
"""

dir_structure = """
brewmaster/
│
├── app/  # デフォルトでサーバーコンポーネント
│   ├── layout.tsx  # サーバーコンポーネント
│   ├── page.tsx  # サーバーコンポーネント (ホームページ)
│   ├── brewing/  # コーヒー抽出関連ページ
│   ├── settings/  # 設定ページ
│   ├── maintenance/  # メンテナンスページ
│   └── recipes/  # レシピページ
│
├── components/
│   ├── ControlPanel.tsx  # 操作パネルコンポーネント
│   ├── WaterTank.tsx  # 水タンク表示コンポーネント
│   ├── TemperatureControl.tsx  # 温度設定コンポーネント
│   └── Timer.tsx  # タイマーコンポーネント
│
├── lib/
│   ├── supabase.ts  # Supabase クライアント設定
│   └── mqtt.ts  # MQTT クライアント設定
│
├── utils/
│   ├── brewing.ts  # コーヒー抽出関連ユーティリティ
│   └── safety.ts  # 安全機能関連ユーティリティ
│
├── hooks/  # クライアントサイド専用
│   ├── useBrewingSession.ts
│   └── useDeviceStatus.ts
│
├── types/
│   └── index.ts  # 型定義
│
├── public/  # 静的ファイル
│   └── images/  # 画像ファイル
│
├── redux/  # Redux関連ファイル
│   ├── store.ts
│   └── slices/
│
├── .env.local  # 環境変数
├── next.config.js  # Next.js設定
├── tsconfig.json  # TypeScript設定
├── package.json  # プロジェクト依存関係
└── vercel.json  # Vercelデプロイメント設定
"""