import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, Briefcase, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const AboutPage = () => {
  const personalInfo = {
    name: '山田 太郎',
    title: 'フルスタックエンジニア',
    email: 'taro.yamada@example.com',
    github: 'https://github.com/taroyamada',
    linkedin: 'https://linkedin.com/in/taroyamada',
  };

  const education = [
    { degree: '情報工学修士', school: '東京工科大学', year: '2018' },
    { degree: '情報科学学士', school: '東京工科大学', year: '2016' },
  ];

  const workExperience = [
    {
      title: 'シニアフルスタックエンジニア',
      company: 'テックイノベーション株式会社',
      period: '2020年4月 - 現在',
      description: 'クラウドネイティブアプリケーションの設計と開発をリード。マイクロサービスアーキテクチャの導入に貢献。',
    },
    {
      title: 'フロントエンドエンジニア',
      company: 'ウェブソリューションズ株式会社',
      period: '2018年4月 - 2020年3月',
      description: 'React.jsを用いた大規模Webアプリケーションの開発に従事。パフォーマンス最適化を担当。',
    },
  ];

  const skills = [
    'JavaScript/TypeScript', 'React.js', 'Node.js', 'Python', 'Django',
    'Docker', 'Kubernetes', 'AWS', 'GraphQL', 'MongoDB'
  ];

  const interests = [
    '機械学習と人工知能', 'オープンソースコントリビューション', 'テクノロジーブログの執筆',
    'ハッカソンへの参加', '新しいプログラミング言語の学習'
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">自己紹介</h1>
        
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <img src="https://picsum.photos/200" alt={personalInfo.name} className="w-24 h-24 rounded-full mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">{personalInfo.name}</h2>
              <p className="text-gray-600">{personalInfo.title}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center text-blue-600 hover:underline">
              <Mail size={18} className="mr-2" /> {personalInfo.email}
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
              <Github size={18} className="mr-2" /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
              <Linkedin size={18} className="mr-2" /> LinkedIn
            </a>
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">経歴</h2>
          {workExperience.map((job, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h3 className="text-xl font-medium">{job.title}</h3>
              <p className="text-gray-600">{job.company} | {job.period}</p>
              <p className="mt-2">{job.description}</p>
            </div>
          ))}
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">教育背景</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-2 last:mb-0">
              <h3 className="text-xl font-medium">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school} | {edu.year}</p>
            </div>
          ))}
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">スキルと技術</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">興味と目標</h2>
          <ul className="list-disc list-inside">
            {interests.map((interest, index) => (
              <li key={index} className="mb-2">{interest}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;