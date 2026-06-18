import React from 'react';
import { Link } from 'react-router-dom';
import { categories, products, news } from './data';

function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ borderBottom: '2px solid #333', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1>Магазин крафтовых товаров</h1>
      </header>

      <section style={{ marginBottom: '40px' }}>
        <h2>Категории товаров</h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.id}`} 
              style={{
                padding: '12px 24px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                textDecoration: 'none',
                color: '#333',
                backgroundColor: '#f5f5f5',
                fontWeight: 'bold'
              }}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Наши товары</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
          {products.map(prod => (
            <div key={prod.id} style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              <h3>{prod.name}</h3>
              <p style={{ color: '#666', fontSize: '0.9em' }}>{prod.shortDescription}</p>
              <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>{prod.price}</p>
              <Link to={`/product/${prod.id}`} style={{ color: '#3498db', textDecoration: 'none', fontWeight: 'bold' }}>
                Подробнее →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section style={{ borderTop: '1px solid #eee', paddingTop: '30px' }}>
        <h2>Новости магазина</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {news.map(item => (
            <div key={item.id} style={{ padding: '15px', backgroundColor: '#fafafa', borderRadius: '6px' }}>
              <h3>{item.title}</h3>
              <p style={{ color: '#555' }}>{item.shortText}</p>
              <Link to={`/news/${item.id}`} style={{ color: '#3498db', textDecoration: 'none' }}>
                Читать полностью
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;