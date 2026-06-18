import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories, products } from './data';

function CategoryProducts() {
  const { categoryId } = useParams();
  
  const category = categories.find(cat => cat.id === categoryId);
  const filteredProducts = products.filter(prod => prod.categoryId === categoryId);

  if (!category) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Категория не найдена</h2>
        <Link to="/">Вернуться на главную</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <p><Link to="/" style={{ color: '#3498db', textDecoration: 'none' }}>← На главную</Link></p>
      
      <h2>Товары в категории: {category.name}</h2>

      {filteredProducts.length === 0 ? (
        <p>В этой категории товаров пока нет.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', marginTop: '20px' }}>
          {filteredProducts.map(prod => (
            <div key={prod.id} style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
              <h3>{prod.name}</h3>
              <p style={{ color: '#666', fontSize: '0.9em' }}>{prod.shortDescription}</p>
              <p style={{ fontWeight: 'bold' }}>{prod.price}</p>
              <Link to={`/product/${prod.id}`} style={{ color: '#3498db', textDecoration: 'none', fontWeight: 'bold' }}>
                Подробнее →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryProducts;