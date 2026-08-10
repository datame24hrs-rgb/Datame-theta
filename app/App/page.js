'use client';
import { usePaystackPayment } from 'react-paystack';

export default function FundWallet() {
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: 1000 * 100, // 1000 naira
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
  };

  const onSuccess = (reference) => {
    alert("Payment Success: " + reference.reference);
  };

  const onClose = () => {
    alert("Payment closed");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div style={{padding: 20}}>
      <h1>Fund Wallet</h1>
      <button onClick={() => initializePayment(onSuccess, onClose)}>
        Pay ₦1,000
      </button>
    </div>
  )
}
