import React, { useState, useMemo } from 'react';
import Banner from '../../components/GlobalComponents/Banner/Banner';
import Filters from '../../components/ProductsComponents/Filters/Filters';
import SortBar from '../../components/ProductsComponents/SortBar/SortBar';
import ProductCard from '../../components/GlobalComponents/ProductCard/ProductCard';
import { products } from '../../data/products';
import { FiInbox } from 'react-icons/fi';
import './Products.css';
import Header from '../../components/GlobalComponents/Header/Header';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortOption, setSortOption] = useState('default');

  // Mobile filters state
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedSubCategory('All');
    setPriceRange([0, 5000]);
    setSortOption('default');
  };

  // Memoized filtering and sorting logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = products;

    // 1. Search Filter
    if (searchTerm) {
      result = result.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // 3. SubCategory Filter
    if (selectedSubCategory !== 'All') {
      result = result.filter(item => item.subCategory === selectedSubCategory);
    }

    // 4. Price Filter
    result = result.filter(item =>
      item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    // 5. Sorting
    switch (sortOption) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // Default sorting (e.g., by ID or keep original order)
        result.sort((a, b) => a.id - b.id);
        break;
    }

    return result;
  }, [searchTerm, selectedCategory, selectedSubCategory, priceRange, sortOption]);

  return (
    <>
      <Header />
      <main className="products-page">
        <Banner
          title="Our Products"
          subtitle="Explore our wide range of organic, pure, and healthy herbal products curated directly from nature."
          bgImage="https://media.istockphoto.com/id/1320934166/photo/cosmetic-skin-care-products-on-green-leaves.jpg?s=612x612&w=0&k=20&c=X4pwnTaBzXHDOGZlcdJdlKxmYd__61xboHVIiR5JMIk="
        />

        <div className="container products-container">
          <Filters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            onClearFilters={handleClearFilters}
            isOpen={isFiltersOpen}
            onClose={() => setIsFiltersOpen(false)}
          />

          <div className="products-content">
            <SortBar
              totalResults={filteredAndSortedProducts.length}
              onSearchChange={setSearchTerm}
              onSortChange={setSortOption}
              sortOption={sortOption}
              onToggleMobileFilters={() => setIsFiltersOpen(true)}
            />

            {filteredAndSortedProducts.length > 0 ? (
              <div className="products-grid">
                {filteredAndSortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <FiInbox className="empty-icon" />
                <h2>No Products Found</h2>
                <p>We couldn't find any products matching your current filters.</p>
                <button className="btn-primary" onClick={handleClearFilters}>
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
