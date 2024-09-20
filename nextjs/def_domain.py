# システム生成BrewMaster NextJS Preview参照プログラムの定義

import os
from nextjs.def_concept import concept, dir_structure
from nextjs.def_constraints import page_tsx

# プロジェクトBrewMasterの詳細定義
def_domain = concept + dir_structure

# 作成するファイルの定義
files = [
    ('app', 'page.tsx',
     def_domain + page_tsx + """
     page.tsxファイルにダッシュボード画面を実装してください。
     - 現在のコーヒーマシンの状態（水量、温度、タイマー設定など）を表示
     - 最近の抽出履歴の概要
     - 各主要機能へのクイックアクセスリンク
     サーバーコンポーネントとして実装し、React hooksは使用しないでください。
     Sidebar.tsx以外のコンポーネントは呼び出さないでください。
     """
    ),
    ('app/brew', 'page.tsx',
     def_domain + page_tsx + """
     brew/page.tsxファイルにコーヒー抽出ページを実装してください。
     - 水量調節機能
     - 温度設定機能
     - 抽出開始ボタン
     - 現在の抽出状況のリアルタイム表示
     サーバーコンポーネントとして実装し、React hooksは使用しないでください。
     ただし、Next.js固有のhooks（useSearchParams, usePathname, useRouter）は使用可能です。
     Sidebar.tsx以外のコンポーネントは呼び出さないでください。
     """
    ),
    ('app/timer', 'page.tsx',
     def_domain + page_tsx + """
     timer/page.tsxファイルにタイマー設定ページを実装してください。
     - タイマーの設定機能
     - 現在のタイマー設定の表示
     - タイマー設定の編集と削除機能
     サーバーコンポーネントとして実装し、React hooksは使用しないでください。
     ただし、Next.js固有のhooks（useSearchParams, usePathname, useRouter）は使用可能です。
     Sidebar.tsx以外のコンポーネントは呼び出さないでください。
     """
    ),
    ('app/maintenance', 'page.tsx',
     def_domain + page_tsx + """
     maintenance/page.tsxファイルにメンテナンスページを実装してください。
     - 自動洗浄機能の開始ボタン
     - フィルター交換サインの表示
     - 水タンクの状態表示
     - 安全機能の状態表示（水不足、過熱警告など）
     サーバーコンポーネントとして実装し、React hooksは使用しないでください。
     ただし、Next.js固有のhooks（useSearchParams, usePathname, useRouter）は使用可能です。
     Sidebar.tsx以外のコンポーネントは呼び出さないでください。
     """
    ),
    ('app/settings', 'page.tsx',
     def_domain + page_tsx + """
     settings/page.tsxファイルに設定ページを実装してください。
     - 保温機能の設定
     - 自動洗浄のスケジュール設定
     - 言語設定
     - ユーザー設定（好みの抽出設定のプリセットなど）
     サーバーコンポーネントとして実装し、React hooksは使用しないでください。
     ただし、Next.js固有のhooks（useSearchParams, usePathname, useRouter）は使用可能です。
     Sidebar.tsx以外のコンポーネントは呼び出さないでください。
     """
    ),
    ('app/history', 'page.tsx',
     def_domain + page_tsx + """
     history/page.tsxファイルに抽出履歴ページを実装してください。
     - 過去の抽出履歴の一覧表示
     - 抽出設定の詳細表示（水量、温度、時間など）
     - お気に入り設定の保存機能
     ハイブリッドコンポーネントとして実装し、必要に応じてクライアントサイドの機能を使用してください。
     Sidebar.tsx以外のコンポーネントは呼び出さないでください。
     """
    ),
    ('components', 'Sidebar.tsx',
     def_domain + """
     components/Sidebar.tsxファイルにサイドバーコンポーネントを実装してください。
     - ナビゲーションリンク（ダッシュボード、抽出、タイマー、メンテナンス、設定、履歴）
     - アクティブなリンクのハイライト表示
     - レスポンシブデザイン（Web, モバイル対応）
     - 折りたたみ可能なメニュー（上に開閉ボタン）
     - 現在のマシン状態の簡易表示（水量、温度など）
     クライアントコンポーネントとして実装し、'use client'ディレクティブを使用してください。
     """
    ),
]