'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Load PaystackButton only in browser
const PaystackButton = dynamic(
  () => import('react-paystack').then((mod) => mod.PaystackButton),
  { ssr: false }
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY || "";
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const config = {
    email: "test@datame.com",
    amount: 100000, // ₦1000 in kobo
    publicKey: publicKey,
    text: "Pay ₦1,000",
    onSuccess: (reference) => {
      alert("Payment Successful! Ref: " + reference.reference);
    },
    onClose: () => alert("Payment Cancelled"),
  };

  if (!publicKey) {
    return <div style={{padding:40, textAlign:'center'}}>Add Paystack Key in Vercel</div>
  }

  if (!mounted) return <div style={{padding:40, textAlign:'center'}}>Loading...</div>

  return (
    <main style={{padding: '40px', textAlign: 'center'}}>
      <h1>Datame Wallet</h1>
      <PaystackButton {...config} />
    </main>
  )
}
