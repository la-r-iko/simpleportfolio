'use client'

import React, { useState, useEffect } from 'react'
import { Briefcase, ExternalLink, ChevronRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// プロジェクトの型定義
type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  imageUrl: string
}

// 仮想データ
const mockProjects: Project[] = [
  {
    id: 1,
    title: 'ポートフォリオサイト',
    description: 'Next.jsを使用した個人ポートフォリオサイト',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project1/300/200'
  },
  {
    id: 2,
    title: 'タスク管理アプリ',
    description: 'ReactとFirebaseを使用したタスク管理アプリケーション',
    technologies: ['React', 'Firebase', 'Material-UI'],
    imageUrl: 'https://picsum.photos/seed/project2/300/200'
  },
  {
    id: 3,
    title: 'ECサイト',
    description: 'Vue.jsとStripeを使用したECサイト',
    technologies: ['Vue.js', 'Vuex', 'Stripe', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/project3/300/200'
  }
]

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    // 実際のAPIフェッチの代わりに、モックデータを使用
    setProjects(mockProjects)
  }, [])

  const filteredProjects = projects.filter(project =>
    project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase()))
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <Briefcase className="mr-2" />
          プロジェクト一覧
        </h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="技術でフィルター"
            className="w-full p-2 border rounded"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={`/projects/${project.id}`} className="text-blue-600 hover:text-blue-800 flex items-center">
                  詳細を見る
                  <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectsPage