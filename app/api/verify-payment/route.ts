import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { reference, amount } = await req.json();
  
  // TODO: Here we will call Paystack to verify + credit user wallet in DB
  // For now let's just return success
  
  return NextResponse.json({ 
    success: true, 
    message: `₦${amount} credited to your wallet! Ref: ${reference}` 
  });
}
