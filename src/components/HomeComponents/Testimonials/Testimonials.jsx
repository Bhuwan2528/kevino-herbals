import "./Testimonials.css";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Verified Buyer",
    text: "Didn’t expect it to be this good. Feels premium and actually works.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Riya Kapoor",
    role: "Verified Buyer",
    text: "Very calming and light. Feels like a natural upgrade to my routine.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Kabir Malhotra",
    role: "Verified Buyer",
    text: "Subtle but effective. You can actually feel the difference.",
    image: "https://randomuser.me/api/portraits/men/76.jpg"
  },
  {
    name: "Ananya Sharma",
    role: "Verified Buyer",
    text: "Packaging and quality both feel really well thought out.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Rahul Verma",
    role: "Verified Buyer",
    text: "Fast delivery and genuine quality. No complaints at all.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Sneha Iyer",
    role: "Verified Buyer",
    text: "Very soothing. Doesn’t irritate like other products.",
    image: "https://randomuser.me/api/portraits/women/21.jpg"
  }
];

// duplicate for infinite illusion
const loopData = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="container">

        <div className="section-title">
          <h2>Customer stories that feel real</h2>
        </div>

        {/* ROW 1 */}
        <div className="marquee">
          <div className="track">
            {loopData.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>

        {/* ROW 2 (reverse) */}
        <div className="marquee reverse">
          <div className="track">
            {loopData.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Card({ item }) {
  return (
    <div className="card">
      <div className="card-top">
        <img src={item.image} alt="" />
        <div>
          <h4>{item.name}</h4>
          <span>{item.role}</span>
        </div>
      </div>

      <p className="text">“{item.text}”</p>
      <div className="stars">★★★★★</div>
    </div>
  );
}