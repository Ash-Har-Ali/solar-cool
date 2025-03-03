import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(req: NextRequest) {
  try {
    const { name, email, mobileNumber, reasonForEnquire, requirement } = await req.json();

    // Check for missing required fields
    if (!name || !mobileNumber) {
      return NextResponse.json(
        { message: 'Name and Mobile Number are required.' },
        { status: 400 }
      );
    }

    const result = await client.create({
      _type: 'user',
      name,
      email,
      mobileNumber,
      reasonForEnquire,
      requirement,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Your Message has been sent!', result },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('API Error:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { message: 'Error sending message.', error: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: 'An unexpected error occurred.' },
        { status: 500 }
      );
    }
  }
}
