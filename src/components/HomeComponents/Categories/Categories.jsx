import { useRef } from 'react';
import './Categories.css';

const categories = [
  { id: 1, name: 'Face Care', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5Pxp97hRO2TI0nYharZYOJHw5Ae1v8ns_Q&s' },
  { id: 2, name: 'Hair Oils', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6k3x92n3qZxmXm0fJA8BtYC3FfPpt0jfRg&s' },
  { id: 3, name: 'Wellness Teas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShAuwdEQAJ-NWfE7drDZ6N1l5LjllfZbsHDA&s' },
  { id: 4, name: 'Body Lotions', image: 'https://m.media-amazon.com/images/I/616QHdyIVkL.jpg' },
  { id: 5, name: 'Essential Oils', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR17DmkbFqX24OFuqUW0B4w5Bb3CRo7sIi2HQ&s' },
  { id: 6, name: 'Herbal Soaps', image: 'https://static.vecteezy.com/system/resources/thumbnails/046/124/591/small/stacked-lavender-soap-bars-accompanied-by-lavender-flowers-set-against-a-sparkling-light-backdrop-aromatic-herbal-soap-concept-of-soothing-skincare-natural-wellness-and-fragrant-bath-products-photo.jpeg' },
];

const Categories = () => {
  const sliderRef = useRef(null);

  // Auto-scroll logic could be added here if it needs to be purely JS based, 
  // but CSS animations or standard scrolling is better for UX. We will use CSS hide-scrollbar & snap.

  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title text-center">Shop by Category</h2>

        <div className="categories-slider" ref={sliderRef}>
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image-wrapper">
                <img src={category.image} alt={category.name} className="category-image" />
              </div>
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
          {/* Duplicate for infinite feel visual */}
          {categories.map((category) => (
            <div key={`${category.id}-dup`} className="category-card" aria-hidden="true">
              <div className="category-image-wrapper">
                <img src={category.image} alt={category.name} className="category-image" />
              </div>
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
