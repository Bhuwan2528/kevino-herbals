import "./Orders.css";

const orders = [
  {
    id: "#ORD1234",
    title: "Herbal Face Wash",
    image: "https://via.placeholder.com/100",
    price: 299,
    status: "Delivered",
    date: "12 April 2026"
  },
  {
    id: "#ORD5678",
    title: "Hair Growth Oil",
    image: "https://via.placeholder.com/100",
    price: 499,
    status: "Out for Delivery",
    date: "14 April 2026"
  },
  {
    id: "#ORD9999",
    title: "Vitamin Tablets",
    image: "https://via.placeholder.com/100",
    price: 199,
    status: "Cancelled",
    date: "10 April 2026"
  }
];

export default function Orders() {
  return (
    <section className="orders-wrapper container">

      <h1 className="orders-heading">My Orders</h1>

      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-card" key={order.id}>

            {/* LEFT */}
            <div className="order-left">
              <img src={order.image} alt={order.title} />
            </div>

            {/* MIDDLE */}
            <div className="order-middle">
              <h3>{order.title}</h3>
              <p className="order-id">{order.id}</p>
              <p className="order-date">{order.date}</p>
            </div>

            {/* RIGHT */}
            <div className="order-right">

              <div className={`order-status ${order.status.replaceAll(" ", "-").toLowerCase()}`}>
                <span className="status-dot"></span>
                {order.status}
              </div>

              <p className="order-price">₹{order.price}</p>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}