import {
  RiShieldCheckFill,
  RiLeafFill,
  RiSecurePaymentFill,
  RiArrowGoBackFill
} from "react-icons/ri";
import "./TrustStrip.css";

const items = [
  { icon: <RiLeafFill />, text: "100% Natural Ingredients" },
  { icon: <RiShieldCheckFill />, text: "Trusted Ayurvedic Formula" },
  { icon: <RiArrowGoBackFill />, text: "Easy 7-Day Returns" },
  { icon: <RiSecurePaymentFill />, text: "Secure Checkout" }
];

// 🔥 3x = smooth infinite
const loopItems = [...items, ...items, ...items];

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="trust-track">
        {loopItems.map((item, i) => (
          <div className="trust-item" key={i}>
            <span className="icon">{item.icon}</span>
            <span className="text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}