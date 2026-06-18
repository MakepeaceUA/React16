import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { news } from './data';

function NewsDetail() {
  const { newsId } = useParams();
  const newsItem = news.find(item => item.id === newsId);

  if (!newsItem) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Новость не найдена</h2>
        <Link to="/">Вернуться на главную</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <p><Link to="/" style={{ color: '#3498db', textDecoration: 'none' }}>← На главную</Link></p>
      
      <article style={{ marginTop: '25px' }}>
        <h1 style={{ borderBottom: '1px solid #eee', paddingBottom: '15px' }}>{newsItem.title}</h1>
        <p style={{ fontSize: '1.15em', lineHeight: '1.8', color: '#2c3e50', whiteSpace: 'pre-line' }}>
          {newsItem.fullText}
        </p>
      </article>
    </div>
  );
}

export default NewsDetail;