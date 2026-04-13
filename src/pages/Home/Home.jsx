import Header from '../../components/GlobalComponents/Header/Header';
import Hero from '../../components/HomeComponents/Hero/Hero';
import Categories from '../../components/HomeComponents/Categories/Categories';
import BestSellers from '../../components/HomeComponents/BestSellers/BestSellers';
import NewArrivals from '../../components/HomeComponents/NewArrivals/NewArrivals';
import Testimonials from '../../components/HomeComponents/Testimonials/Testimonials';
import Footer from '../../components/GlobalComponents/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <Categories />
        <BestSellers />
        <NewArrivals />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
