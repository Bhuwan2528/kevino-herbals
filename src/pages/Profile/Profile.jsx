import { useState } from "react";
import "./Profile.css";
import Header from "../../components/GlobalComponents/Header/Header";
import Footer from "../../components/GlobalComponents/Footer/Footer";

export default function Profile() {
    const [form, setForm] = useState({
        fullName: "Bhuwan Sharma",
        email: "bhuwan@gmail.com",
        phone: "9876543210",
        address: "",
        city: "",
        state: "",
        pincode: "",
        landmark: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});

    const initial = form.fullName.charAt(0).toUpperCase();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let newErrors = {};

        if (!form.fullName) newErrors.fullName = "Full name required";
        if (!form.email.includes("@")) newErrors.email = "Invalid email";
        if (form.phone.length !== 10) newErrors.phone = "Invalid phone";

        if (form.password && form.password.length < 6)
            newErrors.password = "Min 6 characters";

        if (form.password !== form.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            alert("Profile Updated ✅");
        }
    };

    return (
        <>
            <Header />
            <section className="up-wrapper">
                <div className="up-container">

                    <div className="profile-card">

                        {/* Avatar */}
                        <div className="avatar-wrapper">
                            <div className="avatar">{initial}</div>
                        </div>

                        {/* Form */}
                        <div className="profile-form">

                            <div className="field">
                                <label>Full Name</label>
                                <input name="fullName" value={form.fullName} onChange={handleChange} />
                            </div>

                            <div className="field">
                                <label>Email Address</label>
                                <input name="email" value={form.email} onChange={handleChange} />
                            </div>

                            <div className="field">
                                <label>Mobile Number</label>
                                <input name="phone" value={form.phone} onChange={handleChange} />
                            </div>

                            <div className="divider" />

                            <div className="field">
                                <label>Address</label>
                                <input name="address" value={form.address} onChange={handleChange} />
                            </div>

                            <div className="row">
                                <div className="field">
                                    <label>State</label>
                                    <input name="state" value={form.state} onChange={handleChange} />
                                </div>

                                <div className="field">
                                    <label>Pincode</label>
                                    <input name="pincode" value={form.pincode} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="field">
                                <label>New Password</label>
                                <input type="password" name="password" onChange={handleChange} />
                            </div>

                            <div className="field">
                                <label>Confirm Password</label>
                                <input type="password" name="confirmPassword" onChange={handleChange} />
                            </div>

                        </div>

                        <div className="divider" />

                        <div className="profile-actions">
                            <button className="btn-primary" onClick={handleSubmit}>
                                Save Changes
                            </button>
                            <button className="btn-logout">
                                Logout
                            </button>
                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
}