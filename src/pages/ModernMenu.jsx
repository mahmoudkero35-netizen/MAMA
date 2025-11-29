import React from 'react'

function ModernMenu({ settings }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-gray-900">
                {settings?.siteName || "ﬁ«∆„… «·ÿ⁄«„"}
              </h1>
            </div>
            <nav className="flex space-x-6">
              <a href="#menu" className="text-gray-700 hover:text-blue-600">«·ﬁ«∆„…</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">⁄‰ «·„ÿ⁄„</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">« ’· »‰«</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4"> Ã—»… ÿ⁄«„ «” À‰«∆Ì…</h2>
          <p className="text-xl mb-8">«” „ ⁄ »√‘ÂÏ «·„√ﬂÊ·«  Ê«·„‘—Ê»«  «·„Œ «—… »⁄‰«Ì…</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            «” ⁄—÷ «·ﬁ«∆„…
          </button>
        </div>
      </section>

      {/* Menu Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <input
            type="text"
            placeholder="«»ÕÀ ⁄‰ ÿ»ﬁ° „‘—Ê»° √Ê ÊÃ»…..."
            className="w-full max-w-2xl mx-auto block p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {/* Sample Category */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-gray-900">«·„ﬁ»·« </h3>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">6 „‰ Ã« </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample Products */}
              {[1, 2, 3, 4, 5, 6].map(product => (
                <div key={product} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">’Ê—… «·„‰ Ã {product}</span>
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">„‰ Ã {product}</h4>
                  <p className="text-gray-600 text-sm mt-1">Ê’› „Œ ’— ··„‰ Ã {product}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-bold text-lg">25 —.”</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      ≈÷«›… ≈·Ï «·ÿ·»
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Another Category */}
          <section className="bg-white rounded-xl shadow-sm border p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-gray-900">«·ÊÃ»«  «·—∆Ì”Ì…</h3>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">8 „‰ Ã« </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(product => (
                <div key={product} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">’Ê—… «·ÊÃ»… {product}</span>
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">ÊÃ»… —∆Ì”Ì… {product}</h4>
                  <p className="text-gray-600 text-sm mt-1">Ê’› „Œ ’— ··ÊÃ»… {product}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-bold text-lg">45 —.”</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      ≈÷«›… ≈·Ï «·ÿ·»
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">{settings?.siteName || "ﬁ«∆„… «·ÿ⁄«„"}</h4>
              <p className="text-gray-300">‰ﬁœ„ ·ﬂ„  Ã—»… ÿ⁄«„ «” À‰«∆Ì…</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">—Ê«»ÿ ”—Ì⁄…</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">«·ﬁ«∆„…</a></li>
                <li><a href="#" className="hover:text-white">⁄‰ «·„ÿ⁄„</a></li>
                <li><a href="#" className="hover:text-white">« ’· »‰«</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">„⁄·Ê„«  «·« ’«·</h5>
              <p className="text-gray-300">?? +966 123 456 789</p>
              <p className="text-gray-300">?? «·—Ì«÷° «·”⁄ÊœÌ…</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ModernMenu
