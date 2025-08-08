import { Link } from 'react-router-dom'
import { FiShoppingBag, FiTrendingUp, FiStar } from 'react-icons/fi'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            DPT Shopping Mall
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            최신 기술로 구축된 현대적인 쇼핑몰에서 다양한 상품을 만나보세요
          </p>
          <Link
            to="/products"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <FiShoppingBag />
            쇼핑 시작하기
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">왜 DPT를 선택해야 할까요?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">빠른 성능</h3>
              <p className="text-gray-600">Vite와 React로 구축된 초고속 쇼핑 경험</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiStar className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">프리미엄 품질</h3>
              <p className="text-gray-600">엄선된 고품질 상품만을 제공합니다</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShoppingBag className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">편리한 쇼핑</h3>
              <p className="text-gray-600">직관적인 UI로 쉽고 빠른 쇼핑</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage