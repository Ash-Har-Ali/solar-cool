import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(req: NextRequest) {
  try {
    const { name, email, mobileNumber, reasonForEnquire, requirement } = await req.json();

    // Check for missing required fields
    if (!name || !email || !mobileNumber || !reasonForEnquire || !requirement) {
      return NextResponse.json(
        { message: 'All fields are required.' },
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
      { message: 'User created successfully!', result },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('API Error:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { message: 'Error creating user.', error: error.message },
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