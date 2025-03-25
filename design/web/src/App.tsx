import Layout from './components/layout/Layout';
import CollectionSection from './components/sections/CollectionSection';
import ShopCollectionSection from './components/sections/ShopCollectionSection';
import BestSellerSection from './components/sections/BestSellerSection';
import './App.css';

function App() {
  return (
    <Layout>
      {/* Hero Section placeholder - podría ser un componente separado en el futuro */}
      <div className="hero-section" style={{ 
        height: '500px', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/slider/slider-1.jpg") center/cover no-repeat'
      }}>
        <div className="hero-content text-center" style={{ color: 'white' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>New Collection 2025</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Discover the latest trends in fashion</p>
          <a href="#" className="tf-btn style-2 btn-fill radius-3 animate-hover-btn">Shop Now</a>
        </div>
      </div>
      
      {/* Secciones principales */}
      <CollectionSection />
      <ShopCollectionSection />
      <BestSellerSection />
    </Layout>
  );
}

export default App;
