'use client';
import { PaystackButton } from 'react-paystack';

export default function Home() {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY || "";
  
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

  return (
    <main style={{padding: '40px', textAlign: 'center'}}>
      <h1>Datame Wallet</h1>
      <p>Test payment</p>
      <PaystackButton {...config} className="pay-btn" />
    </main>
  )
}
