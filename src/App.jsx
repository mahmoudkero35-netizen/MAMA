import { useState, useEffect } from 'react'
import './style.css'

function App() {
  const [menu, setMenu] = useState([])
  const [settings, setSettings] = useState({})
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [menuResponse, settingsResponse] = await Promise.all([
        fetch('https://menu-api.onrender.com/api/menu'),
        fetch('https://menu-api.onrender.com/api/settings')
      ])
      
      if (!menuResponse.ok || !settingsResponse.ok) {
        throw new Error('›‘· ›Ì  Õ„Ì· «·»Ì«‰« ')
      }
      
      const menuData = await menuResponse.json()
      const settingsData = await settingsResponse.json()
      
      setMenu(menuData)
      setSettings(settingsData)
      
      //  ÕœÌœ √Ê· ›∆… ‰‘ÿ…
      if (menuData.length > 0) {
        setActiveCategory(menuData[0].id)
      }
    } catch (error) {
      console.error('Error loading data:', error)
      // »Ì«‰«  «› —«÷Ì… ›Ì Õ«·… «·Œÿ√
      setSettings({
        siteName: "„ÿ⁄„‰« «·—«∆⁄",
        description: " Ã—»… ÿ⁄«„ «” À‰«∆Ì…  ‰ Ÿ—ﬂ",
        primaryColor: "#3b82f6"
      })
    } finally {
      setLoading(false)
    }
  }

  // œ«·… ·„⁄«·Ã… √Œÿ«¡  Õ„Ì· «·’Ê—
  const handleImageError = (e) => {
    e.target.style.display = 'none'
    const parent = e.target.parentElement
    if (parent && !parent.querySelector('.image-fallback')) {
      const fallback = document.createElement('div')
      fallback.className = 'image-fallback'
      fallback.innerHTML = '??'
      parent.appendChild(fallback)
    }
  }

  // › Õ «·’Ê—… »ÕÃ„ ﬂ«„·
  const openImageModal = (imageUrl, productIndex, categoryProducts) => {
    const productsWithImages = categoryProducts.filter(p => p.image_url)
    const actualIndex = productsWithImages.findIndex(p => p.image_url === imageUrl)
    setSelectedImage(imageUrl)
    setCurrentImageIndex(actualIndex)
  }

  // ≈€·«ﬁ ‰«›–… «·’Ê—…
  const closeImageModal = () => {
    setSelectedImage(null)
    setCurrentImageIndex(0)
  }

  // «· ‰ﬁ· »Ì‰ «·’Ê—
  const navigateImages = (direction, categoryProducts) => {
    const productsWithImages = categoryProducts.filter(p => p.image_url)
    let newIndex = currentImageIndex
    
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % productsWithImages.length
    } else {
      newIndex = (currentImageIndex - 1 + productsWithImages.length) % productsWithImages.length
    }
    
    setCurrentImageIndex(newIndex)
    setSelectedImage(productsWithImages[newIndex].image_url)
  }

  // «·Õ’Ê· ⁄·Ï Ã„Ì⁄ «·„‰ Ã«  „⁄ «·’Ê— ›Ì «·›∆… «·‰‘ÿ…
  const getProductsWithImages = () => {
    const currentCategoryObj = menu.find(cat => cat.id === activeCategory)
    return currentCategoryObj?.products?.filter(p => p.image_url) || []
  }

  if (loading) {
    return (
      <div className="loading-container">
        {/* ?? Œ·›Ì… „ Õ—ﬂ… ··‘«‘… */}
        <div className="animated-bg">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <p className="loading-text">Ã«—Ì  Õ„Ì· «·ﬁ«∆„…...</p>
        </div>
      </div>
    )
  }

  const currentCategory = menu.find(cat => cat.id === activeCategory)
  const products = currentCategory?.products || []
  const productsWithImages = getProductsWithImages()

  return (
    <div className="app">
      {/* ?? Œ·›Ì… „ Õ—ﬂ… ··’›Õ… */}
      <div className="animated-bg">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      {/* «·ÂÌœ— «·»ÿÊ·Ì */}
      <header className="hero-header">
        <div className="container">
          <div className="hero-content">
            {settings.logo_url && (
              <img 
                src={`https://menu-api.onrender.com${settings.logo_url}`} 
                alt={settings.siteName} 
                className="logo"
                onError={handleImageError}
              />
            )}
            <h1 className="site-title">
              {settings.siteName || '„ÿ⁄„‰« «·—«∆⁄'}
            </h1>
            <p className="site-description">
              {settings.description || ' Ã—»… ÿ⁄«„ «” À‰«∆Ì…  ‰ Ÿ—ﬂ'}
            </p>
            
            {/* „⁄·Ê„«  «·« ’«· */}
            <div className="contact-info">
              {settings.phone && (
                <div className="contact-item">
                  <span>??</span>
                  <span>{settings.phone}</span>
                </div>
              )}
              {settings.workingHours && (
                <div className="contact-item">
                  <span>??</span>
                  <span>{settings.workingHours}</span>
                </div>
              )}
              {settings.address && (
                <div className="contact-item">
                  <span>??</span>
                  <span>{settings.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* «·„Õ ÊÏ «·—∆Ì”Ì */}
      <main>
        {/* ?? ‘»ﬂ… «·»ÿ«ﬁ«  «·„—»⁄… ··›∆«  */}
        <section className="categories-section">
          <div className="container">
            <h2 className="categories-title"> ’›Õ √’‰«›‰«</h2>
            <div className="categories-grid">
              {menu.map((category, index) => (
                <div
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`category-card fade-in-up ${activeCategory === category.id ? 'active' : ''}`}
                  style={{
                    borderColor: activeCategory === category.id ? category.color : 'transparent',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span 
                    className="category-icon"
                    style={{ color: category.color || settings.primaryColor }}
                  >
                    {category.icon}
                  </span>
                  <h3 className="category-name">{category.name}</h3>
                  <p className="category-description">
                    {category.description || '«” „ ⁄ »√‘ÂÏ «·√ÿ»«ﬁ'}
                  </p>
                  <span className="category-count">
                    {category.products?.length || 0} „‰ Ã
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* «·„‰ Ã«  */}
        <section className="products-section">
          <div className="container">
            {currentCategory && (
              <h2 className="products-title">
                {currentCategory.name} - {products.length} „‰ Ã
              </h2>
            )}
            
            {products.length > 0 ? (
              <div className="products-grid">
                {products.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="product-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* ?? ’Ê—… «·„‰ Ã ﬁ«»·… ··‰ﬁ— */}
                    <div 
                      className="product-image-container"
                      onClick={() => product.image_url && openImageModal(product.image_url, index, products)}
                    >
                      {product.image_url ? (
                        <img 
                          src={`https://menu-api.onrender.com${product.image_url}`} 
                          alt={product.name}
                          className="product-image"
                          onError={handleImageError}
                        />
                      ) : (
                        <div className="image-fallback">??</div>
                      )}
                    </div>
                    
                    {/* „⁄·Ê„«  «·„‰ Ã */}
                    <div className="product-info">
                      <div className="product-header">
                        <h3 className="product-name">{product.name}</h3>
                        <span className="product-price">
                          {product.price} —.”
                        </span>
                      </div>
                      
                      <p className="product-description">
                        {product.description}
                      </p>
                      
                      {/* Õ«·… «· Ê›— */}
                      <div className={`product-status ${
                        product.is_available ? 'status-available' : 'status-unavailable'
                      }`}>
                        {product.is_available ? '?? „ Ê›—' : '?? €Ì— „ Ê›—'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">???</div>
                <h3 className="empty-title">·«  ÊÃœ „‰ Ã«  ›Ì Â–Â «·›∆…</h3>
                <p className="empty-description">‰⁄„· ⁄·Ï ≈÷«›… „‰ Ã«  ÃœÌœ… ﬁ—Ì»«</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* ?? ‰«›–… ⁄—÷ «·’Ê—… »ÕÃ„ ﬂ«„· */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={`https://menu-api.onrender.com${selectedImage}`} 
              alt="’Ê—… «·„‰ Ã" 
              className="modal-image"
            />
            
            {/* “— «·≈€·«ﬁ */}
            <button className="modal-close" onClick={closeImageModal}>
              ?
            </button>
            
            {/* √“—«— «· ‰ﬁ· ≈–« ﬂ«‰ Â‰«ﬂ √ﬂÀ— „‰ ’Ê—… */}
            {productsWithImages.length > 1 && (
              <>
                <button 
                  className="modal-nav modal-prev"
                  onClick={() => navigateImages('prev', products)}
                >
                  ã
                </button>
                <button 
                  className="modal-nav modal-next"
                  onClick={() => navigateImages('next', products)}
                >
                  õ
                </button>
                <div className="modal-counter">
                  {currentImageIndex + 1} / {productsWithImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* «·›Ê — */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <h2 className="footer-title">
              {settings.siteName || '„ÿ⁄„‰« «·—«∆⁄'}
            </h2>
            
            <div className="social-links">
              {settings.facebook && (
                <a 
                  href={settings.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  ›Ì”»Êﬂ
                </a>
              )}
              {settings.instagram && (
                <a 
                  href={settings.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  ≈‰” €—«„
                </a>
              )}
              {settings.twitter && (
                <a 
                  href={settings.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                   ÊÌ —
                </a>
              )}
            </div>
            
            <p className="copyright">
              © {new Date().getFullYear()} {settings.siteName || '„ÿ⁄„‰« «·—«∆⁄'}. Ã„Ì⁄ «·ÕﬁÊﬁ „Õ›ÊŸ….
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
