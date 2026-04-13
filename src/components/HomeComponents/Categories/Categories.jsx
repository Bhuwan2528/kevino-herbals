import { useRef } from 'react';
import './Categories.css';

const categories = [
  {
    id: 1,
    name: 'Pain Relief',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20251018/pngtree-knee-anatomy-and-pain-relief-image_19912519.webp'
  },
  {
    id: 2,
    name: 'Digestive Health',
    image: 'https://www.shutterstock.com/image-photo/3d-rendered-image-human-digestive-600nw-2505886917.jpg'
  },
  {
    id: 3,
    name: 'Sexual Wellness',
    image: 'https://videocdn.cdnpk.net/videos/f34bc4a5-9259-5032-b5c0-269a61405e26/horizontal/thumbnails/large.jpg?semt=ais_hybrid&item_id=6743040&w=740&q=80'
  },
  {
    id: 4,
    name: 'Women Health',
    image: 'https://t4.ftcdn.net/jpg/06/38/51/85/360_F_638518528_j3VHw9FNGEUsFoyx03F7uVw3N6lL3kIb.jpg'
  },
  {
    id: 5,
    name: 'General Wellness',
    image: 'https://images.pexels.com/photos/32847420/pexels-photo-32847420.jpeg?cs=srgb&dl=pexels-shootsaga-32847420.jpg&fm=jpg'
  },
  {
    id: 6,
    name: 'Organ Care',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MNNjvNJqBUH1uBsgxfZ8K4lcskyt-TY4TQ&s'
  },
  {
    id: 7,
    name: 'Respiratory Care',
    image: 'https://png.pngtree.com/thumb_back/fw800/background/20250408/pngtree-futuristic-lung-health-concept-a-digital-vision-of-respiratory-care-image_17170073.jpg'
  }
];

const Categories = () => {
  const sliderRef = useRef(null);

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

          {/* duplicate for smooth loop */}
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