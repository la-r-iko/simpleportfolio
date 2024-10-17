// components/Footer.tsx

import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* コピーライト情報 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-2">ポートフォリオサイト</h3>
            <p className="text-sm">
              © {currentYear} あなたの名前. All rights reserved.
            </p>
          </div>

          {/* 簡単なサイトマップ */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2">サイトマップ</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/" className="hover:text-gray-900">ホーム</Link></li>
              <li><Link href="/about" className="hover:text-gray-900">自己紹介</Link></li>
              <li><Link href="/projects" className="hover:text-gray-900">プロジェクト</Link></li>
              <li><Link href="/skills" className="hover:text-gray-900">スキル</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900">お問い合わせ</Link></li>
            </ul>
          </div>

          {/* SNSリンク */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2">SNS</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-6 h-6 hover:text-gray-900" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 hover:text-gray-900" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-6 h-6 hover:text-gray-900" />
              </a>
            </div>
          </div>
        </div>

        {/* プライバシーポリシーへのリンク（オプション） */}
        <div className="mt-8 text-center text-sm">
          <Link href="/privacy-policy" className="hover:text-gray-900">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;