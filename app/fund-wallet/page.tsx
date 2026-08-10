"use client";
import { useState } from "react";
import { PaystackButton } from "react-paystack";

export default function FundWalletPage() {
  const [amount, setAmount] = useState(1000);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY!;
  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: amount * 100,
    publicKey,
  };

  const handleSuccess = async (reference: any) => {
    setLoading(true);
    // Call our API to verify and credit wallet
    const res = await fetch("/api/verify-payment", {
      method: "POST",
      body: JSON.stringify({ reference: reference.reference, amount })
    });
    const data = await res.json();
    setLoading(false);
    alert(data.message);
  };

  const handleClose = () => alert("Payment Cancelled");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Fund Wallet</h1>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-lg mb-4" required />
        <input type="number" placeholder="Amount ₦" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full p-3 border rounded-lg mb-4" required />
        <PaystackButton {...config} text={loading ? "Processing..." : "Fund with Card"} onSuccess={handleSuccess} onClose={handleClose} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold" disabled={!email || loading} />
      </div>
    </div>
  );
}
