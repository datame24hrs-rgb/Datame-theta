'use client';

export default function FundWalletPage() {
  const bankDetails = {
    bank: "Moniepoint MFB",
    accountName: "Matthew Temitope Afuye",
    accountNumber: "7053824574", //
    note: "Use your email as transfer description so we can credit you automatically"
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.write
