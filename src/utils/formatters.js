export function formatRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '★'.repeat(fullStars);
  if (hasHalfStar) stars += '½';
  stars += '☆'.repeat(5 - fullStars - (hasHalfStar ? 1 : 0));
  return `${stars} (${rating})`;
}

export function formatCapacity(enrolled, capacity) {
  const percentage = Math.round((enrolled / capacity) * 100);
  return `${enrolled}/${capacity} estudiantes (${percentage}%)`;
}

export function getCategoryColor(category) {
  const colors = {
    'Frontend': '#3b82f6',
    'Backend': '#22c55e',
    'Base de Datos': '#8b5cf6',
    'Mobile': '#f59e0b',
    'IA': '#ec4899',
    'DevOps': '#14b8a6',
    'Seguridad': '#ef4444',
    'Data Science': '#6366f1',
    'Cloud': '#06b6d4',
    'Soft Skills': '#84cc16'
  };
  return colors[category] || '#64748b';
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}