"use client";
import { useState } from "react";
import { PaystackButton } from "react-paystack";

export default function FundWalletPage() {
  const [amount, setAmount] = useState(1000);
  const [email, setEmail] = useState("");

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY!;
  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: amount * 100, // Paystack uses kobo
    publicKey,
  };

  const handleSuccess = (reference: any) => {
    alert("Payment Successful! Ref: " + reference.reference);
  };

  const handleClose = () => {
    alert("Payment Closed");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Fund Wallet</h1>
        
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
          required
        />

        <label className="block text-sm font-medium mb-2">Amount ₦</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-3 border rounded-lg mb-4"
          required
        />

        <PaystackButton
          {...config}
          text="Fund with Card"
          onSuccess={handleSuccess}
          onClose={handleClose}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
          disabled={!email}
        />
      </div>
    </div>
  );
}
