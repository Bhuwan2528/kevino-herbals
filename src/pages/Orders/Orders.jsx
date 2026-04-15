import { useState } from "react";
import "./Orders.css";
import Header from "../../components/GlobalComponents/Header/Header";
import Footer from "../../components/GlobalComponents/Footer/Footer";
import prod1 from "../../assets/products/flexTablet.PNG";
import prod2 from "../../assets/products/gesicOil.PNG";
import prod3 from "../../assets/products/lax-tablet.PNG";

const initialOrders = [
    {
        id: "#ORD123",
        title: "Kevino Flex Tablet",
        image: prod1,
        qty: 1,
        price: 299,
        payment: "Paid",
        status: "Delivered",
        orderedOn: "10 April 2026",
        deliveredOn: "12 April 2026",
        refund: false
    },
    {
        id: "#ORD456",
        title: "Kevino Gesic Pain Oil",
        image: prod2,
        qty: 2,
        price: 499,
        payment: "COD",
        status: "Out for Delivery",
        orderedOn: "13 April 2026",
        deliveredOn: null,
        refund: false
    },
    {
        id: "#ORD789",
        title: "Kevino Lax Tablet",
        image: prod3,
        qty: 1,
        price: 199,
        payment: "Paid",
        status: "Cancelled",
        orderedOn: "8 April 2026",
        deliveredOn: null,
        refund: true
    }
];

export default function Orders() {
    const [orders, setOrders] = useState(initialOrders);
    const [confirmId, setConfirmId] = useState(null);

    const cancelOrder = (id) => {
        setOrders((prev) =>
            prev.map((o) =>
                o.id === id
                    ? { ...o, status: "Cancelled", refund: true }
                    : o
            )
        );
        setConfirmId(null);
    };

    return (
        <>
            <Header />
            <section className="ord-wrapper container">

                <h1 className="ord-heading">My Orders</h1>

                <div className="ord-table">

                    {/* HEADER */}
                    <div className="ord-row ord-head">
                        <span>Product</span>
                        <span>Qty</span>
                        <span>Price</span>
                        <span>Payment</span>
                        <span>Status</span>
                        <span>Action</span>
                    </div>

                    {/* ROWS */}
                    {orders.map((o) => (
                        <div className="ord-row" key={o.id}>

                            {/* PRODUCT */}
                            <div className="ord-product">
                                <img src={o.image} alt={o.title} />
                                <div>
                                    <p>{o.title}</p>
                                    <small>{o.id}</small>
                                </div>
                            </div>

                            <span>{o.qty}</span>
                            <span>₹{o.price}</span>
                            <span>{o.payment}</span>

                            {/* STATUS */}
                            <div className="ord-status-box">
                                <div className={`ord-status ${o.status.replaceAll(" ", "-").toLowerCase()}`}>
                                    <span className="dot"></span>
                                    {o.status}
                                </div>

                                <small>
                                    Ordered: {o.orderedOn}
                                    <br />
                                    {o.deliveredOn
                                        ? `Delivered: ${o.deliveredOn}`
                                        : "Expected soon"}
                                    {o.refund && <span className="refund"> • Refund Initiated</span>}
                                </small>
                            </div>

                            {/* ACTION */}
                            <div>
                                {o.status !== "Cancelled" && (
                                    <button
                                        className="ord-cancel-btn"
                                        onClick={() => setConfirmId(o.id)}
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>

                        </div>
                    ))}

                </div>

                {/* CONFIRM MODAL */}
                {confirmId && (
                    <div className="ord-modal">
                        <div className="ord-modal-box">
                            <p>Do you want to cancel this order?</p>
                            <div>
                                <button onClick={() => cancelOrder(confirmId)}>Yes</button>
                                <button onClick={() => setConfirmId(null)}>No</button>
                            </div>
                        </div>
                    </div>
                )}

            </section>
            <Footer />
        </>
    );
}