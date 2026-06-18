import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from './data';

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find(prod => prod.id === productId);

  if (!product) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Товар не найден</h2>
        <Link to="/">Вернуться на главную</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <p><Link to="/" style={{ color: '#3498db', textDecoration: 'none' }}>← На главную</Link></p>
      
      <div style={{ border: '1px solid #ddd', padding: '30px', borderRadius: '10px', marginTop: '20px', backgroundColor: '#fff' }}>
        <span style={{ fontSize: '0.85em', color: '#999', textTransform: 'uppercase', fontWeight: 'bold' }}>
          Категория: {product.categoryId}
        </span>
        <h1 style={{ marginTop: '10px', marginBottom: '20px' }}>{product.name}</h1>
        <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#333' }}>{product.fullDescription}</p>
        <p style={{ fontSize: '1.4em', fontWeight: 'bold', color: '#27ae60', marginTop: '20px' }}>
          Цена: {product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;