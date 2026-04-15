import ashvin from '../assets/products/ashvin-capsule.png'
import easyFresh from '../assets/products/easy-fresh.png'
import edr from '../assets/products/edr-capsule.png'
import flexTablet from '../assets/products/flexTablet.png'
import fort from '../assets/products/fort-syrup.png'
import gesicOil from '../assets/products/gesicOil.png'
import koff from '../assets/products/koff-syrup.png'
import lax from '../assets/products/lax-tablet.png'
import liv from '../assets/products/liv-din-syrup.png'
import maxx from '../assets/products/max-gold.png'
import mind from '../assets/products/mind-syrup.png'
import nvr from '../assets/products/nvr-capsule.png'
import pros from '../assets/products/pros-syrup.png'
import salmon from '../assets/products/salmon-oil.png'
import sperm from '../assets/products/sperm-gold.png'
import systrez from '../assets/products/systrez-capsule.png'
import thyro from '../assets/products/thyro-syrup.png'
import tone from '../assets/products/tone-syrup.png'
import urino from '../assets/products/urino-syrup.png'
import zaiqup from '../assets/products/zaiqup-syrup.png'
import zyme from '../assets/products/zyme-syrup.png'

export const categories = [
  'All',
  'Pain Relief',
  'Digestive Health',
  'Sexual Wellness',
  'Women Health',
  'General Wellness',
  'Organ Care',
  'Respiratory'
];

export const subCategories = {
  All: [],
  'Pain Relief': ['Joint Pain', 'Muscle Pain'],
  'Digestive Health': ['Constipation', 'Digestion'],
  'Sexual Wellness': ['Performance', 'ED Support'],
  'Women Health': ['Hormonal Balance', 'Menstrual Care'],
  'General Wellness': ['Immunity', 'Brain Health'],
  'Organ Care': ['Liver', 'Kidney', 'Thyroid', 'Prostate'],
  'Respiratory': ['Cough & Cold']
};

export const products = [
  {
    id: 1,
    title: 'Kevino Flex Tablet',
    category: 'Pain Relief',
    subCategory: 'Joint Pain',
    price: 299,
    oldPrice: 399,
    rating: 4.6,
    reviews: 120,
    image: flexTablet,
    badge: 'Best Seller',
    tags: ['Joint Pain', 'Ayurvedic'],
    isBestSeller: true,
    images: [
      flexTablet,
      "https://images.unsplash.com/photo-1588774069410-84ae30757c8e?q=80&w=800",
      "https://images.unsplash.com/photo-1588774069410-84ae30757c8e?q=80&w=800"
    ],
    description:
      "Kevino Flex Tablet is a powerful Ayurvedic formulation designed to relieve joint pain, improve flexibility, and strengthen bones naturally. Made with clinically tested herbs, it provides long-term relief without side effects.",
    variants: ["60 Tablets", "120 Tablets", "180 Tablets"],
    details: {
      Brand: "Kevino Herbals",
      Form: "Tablet",
      Usage: "Take 1-2 tablets twice daily after meals",
      Ingredients: "Ashwagandha, Shallaki, Guggul, Rasna",
      Packaging: "Bottle",
      ShelfLife: "24 Months",
      Country: "India"
    },
    faqs: [
      {
        question: "Is this product safe?",
        answer: "Yes, it is made from 100% natural Ayurvedic ingredients and is safe for regular use."
      },
      {
        question: "How long should I use it?",
        answer: "For best results, use consistently for at least 2-3 months."
      },
      {
        question: "Are there any side effects?",
        answer: "No known side effects when taken as directed."
      }
    ]
  },
  {
    id: 2,
    title: 'Kevino Gesic Pain Oil',
    category: 'Pain Relief',
    subCategory: 'Muscle Pain',
    price: 199,
    oldPrice: 249,
    rating: 4.5,
    reviews: 98,
    image: gesicOil,
    badge: 'Hot',
    tags: ['Pain Relief'],
    isBestSeller: true
  },
  {
    id: 3,
    title: 'Kevino Lax Tablet',
    category: 'Digestive Health',
    subCategory: 'Constipation',
    price: 249,
    oldPrice: null,
    rating: 4.4,
    reviews: 76,
    image: lax,
    badge: null,
    tags: ['Constipation']
  },
  {
    id: 4,
    title: 'Kevino Zyme Syrup',
    category: 'Digestive Health',
    subCategory: 'Digestion',
    price: 220,
    oldPrice: 280,
    rating: 4.7,
    reviews: 140,
    image: zyme,
    badge: 'Popular',
    tags: ['Digestion'],
    isBestSeller: true
  },
  {
    id: 5,
    title: 'Zaiqup Digestive Syrup',
    category: 'Digestive Health',
    subCategory: 'Digestion',
    price: 210,
    oldPrice: null,
    rating: 4.3,
    reviews: 65,
    image: zaiqup,
    badge: null,
    tags: ['Digestive']
  },
  {
    id: 6,
    title: 'Easy Fresh Powder',
    category: 'Digestive Health',
    subCategory: 'Constipation',
    price: 180,
    oldPrice: 220,
    rating: 4.5,
    reviews: 88,
    image: easyFresh,
    badge: 'Natural',
    tags: ['Gut Health']
  },
  {
    id: 7,
    title: 'Arsshvin Capsule',
    category: 'Digestive Health',
    subCategory: 'Constipation',
    price: 260,
    oldPrice: null,
    rating: 4.4,
    reviews: 72,
    image: ashvin,
    badge: null,
    tags: ['Piles']
  },
  {
    id: 8,
    title: 'Salmon Fish Oil Capsule',
    category: 'General Wellness',
    subCategory: 'Immunity',
    price: 499,
    oldPrice: 599,
    rating: 4.8,
    reviews: 210,
    image: salmon,
    badge: 'Premium',
    tags: ['Omega 3'],
    isBestSeller: true
  },
  {
    id: 9,
    title: 'Kevino Maxx Gold Capsule',
    category: 'Sexual Wellness',
    subCategory: 'Performance',
    price: 899,
    oldPrice: 1099,
    rating: 4.7,
    reviews: 190,
    image: maxx,
    badge: 'Top Rated',
    tags: ['Performance'],
    isBestSeller: true
  },
  {
    id: 10,
    title: 'Kevino Sperm Booster Capsule',
    category: 'Sexual Wellness',
    subCategory: 'Performance',
    price: 799,
    oldPrice: null,
    rating: 4.6,
    reviews: 150,
    image: sperm,
    badge: null,
    tags: ['Fertility']
  },
  {
    id: 11,
    title: 'Kevino EDR Capsule',
    category: 'Sexual Wellness',
    subCategory: 'ED Support',
    price: 950,
    oldPrice: 1200,
    rating: 4.7,
    reviews: 175,
    image: edr,
    badge: 'Hot',
    tags: ['ED']
  },
  {
    id: 12,
    title: 'Kevino Fort Syrup',
    category: 'General Wellness',
    subCategory: 'Immunity',
    price: 240,
    oldPrice: 300,
    rating: 4.5,
    reviews: 110,
    image: fort,
    badge: 'Immunity',
    tags: ['Energy']
  },
  {
    id: 13,
    title: 'Kevino Mind Syrup',
    category: 'General Wellness',
    subCategory: 'Brain Health',
    price: 260,
    oldPrice: null,
    rating: 4.6,
    reviews: 95,
    image: mind,
    badge: null,
    tags: ['Memory']
  },
  {
    id: 14,
    title: 'Kevino NVR Capsule',
    category: 'General Wellness',
    subCategory: 'Brain Health',
    price: 320,
    oldPrice: 400,
    rating: 4.5,
    reviews: 85,
    image: nvr,
    badge: null,
    tags: ['Stress Relief']
  },
  {
    id: 15,
    title: 'Kevino Tone Syrup',
    category: 'Women Health',
    subCategory: 'Menstrual Care',
    price: 280,
    oldPrice: 350,
    rating: 4.4,
    reviews: 70,
    image: tone,
    badge: null,
    tags: ['Women']
  },
  {
    id: 16,
    title: 'Systrez Capsule',
    category: 'Women Health',
    subCategory: 'Hormonal Balance',
    price: 450,
    oldPrice: 550,
    rating: 4.6,
    reviews: 120,
    image: systrez,
    badge: 'Recommended',
    tags: ['Hormones']
  },
  {
    id: 17,
    title: 'Kevino Liv-DS Syrup',
    category: 'Organ Care',
    subCategory: 'Liver',
    price: 230,
    oldPrice: null,
    rating: 4.5,
    reviews: 90,
    image: liv,
    badge: null,
    tags: ['Liver']
  },
  {
    id: 18,
    title: 'Kevino Urino Syrup',
    category: 'Organ Care',
    subCategory: 'Kidney',
    price: 240,
    oldPrice: 300,
    rating: 4.4,
    reviews: 80,
    image: urino,
    badge: null,
    tags: ['Kidney']
  },
  {
    id: 19,
    title: 'Kevino Pros Syrup',
    category: 'Organ Care',
    subCategory: 'Prostate',
    price: 350,
    oldPrice: 420,
    rating: 4.5,
    reviews: 60,
    image: pros,
    badge: null,
    tags: ['Prostate']
  },
  {
    id: 20,
    title: 'Kevino Thyro Syrup',
    category: 'Organ Care',
    subCategory: 'Thyroid',
    price: 300,
    oldPrice: 380,
    rating: 4.6,
    reviews: 95,
    image: thyro,
    badge: null,
    tags: ['Thyroid']
  },
  {
    id: 21,
    title: 'Kevino Koff Syrup',
    category: 'Respiratory',
    subCategory: 'Cough & Cold',
    price: 190,
    oldPrice: 240,
    rating: 4.3,
    reviews: 110,
    image: koff,
    badge: 'Seasonal',
    tags: ['Cold']
  }
];