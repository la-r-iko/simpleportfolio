import { Suspense } from 'react';
import { Utensils, Download, Search } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from "@/components/ui/button"

// 仮想データ
const recipes = [
  { id: 1, title: '和風パスタ', description: '簡単で美味しい和風パスタのレシピ', imageUrl: 'https://picsum.photos/seed/pasta/300/200' },
  { id: 2, title: 'チョコレートケーキ', description: '濃厚なチョコレートケーキの作り方', imageUrl: 'https://picsum.photos/seed/cake/300/200' },
  { id: 3, title: '野菜たっぷりスープ', description: '栄養満点の野菜スープレシピ', imageUrl: 'https://picsum.photos/seed/soup/300/200' },
];

export default function RecipesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">レシピ一覧</h1>
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="レシピを検索..."
              className="w-full p-3 pl-10 border rounded-lg"
            />
            <Search className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        <Button className="mb-4">新しいレシピを追加</Button>
        <Suspense fallback={<div>読み込み中...</div>}>
          <RecipeList recipes={recipes} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function RecipeList({ recipes }) {
  return (
    <div className="grid grid-cols-1 gap-8">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        <div className="flex justify-between items-center">
          <Button variant="outline" className="flex items-center">
            <Utensils className="mr-2" size={20} />
            詳細を見る
          </Button>
          <Button variant="outline" className="flex items-center">
            <Download className="mr-2" size={20} />
            ダウンロード
          </Button>
        </div>
      </div>
    </div>
  );
}