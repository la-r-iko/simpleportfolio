import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 仮想データ（実際のアプリケーションではAPIやデータベースから取得）
const projectData = {
  id: '1',
  title: 'ポートフォリオウェブサイト',
  description: 'Next.js 13とTailwind CSSを使用して構築した個人ポートフォリオサイト。',
  longDescription: 'このプロジェクトでは、最新のNext.js 13の機能を活用し、パフォーマンスとSEOを最適化したポートフォリオサイトを作成しました。Tailwind CSSを使用してレスポンシブデザインを実現し、ユーザー体験を向上させています。',
  technologies: ['Next.js 13', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  outcomes: [
    'App Routerを使用した効率的なルーティング',
    'Server ComponentsとClient Componentsの適切な使い分け',
    'Tailwind CSSによる迅速なスタイリング',
    'Vercelを使用した簡単なデプロイメントとホスティング'
  ],
  imageUrl: 'https://picsum.photos/800/400',
  demoUrl: 'https://example.com',
  githubUrl: 'https://github.com/example/portfolio'
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  // 実際のアプリケーションでは、params.idを使用してプロジェクトデータを取得します

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{projectData.title}</h1>
        <img src={projectData.imageUrl} alt={projectData.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">プロジェクト概要</h2>
          <p className="text-gray-700">{projectData.longDescription}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">使用技術</h2>
          <ul className="list-disc list-inside">
            {projectData.technologies.map((tech, index) => (
              <li key={index} className="text-gray-700">{tech}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">成果と学び</h2>
          <ul className="list-disc list-inside">
            {projectData.outcomes.map((outcome, index) => (
              <li key={index} className="text-gray-700">{outcome}</li>
            ))}
          </ul>
        </section>

        <section className="flex space-x-4">
          <a href={projectData.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            <ExternalLink className="mr-2" size={20} />
            デモを見る
          </a>
          <a href={projectData.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">
            <Github className="mr-2" size={20} />
            GitHubを見る
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}