import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Server-side validation could be re-applied here utilizing zod
    const { vehicleType, brand, vin, description, company, name, email, phone } = data;

    if (!vehicleType || !brand || !description || !name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // SIMULATED EMAIL SENDING (e.g. using Resend, SendGrid or AWS SES)
    // To make this real, you would do:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... })
    
    console.log('--- NEW LEAD RECEIVED ---');
    console.log(`Type: ${vehicleType}`);
    console.log(`Brand: ${brand}`);
    console.log(`VIN: ${vin || 'N/A'}`);
    console.log(`Desc: ${description}`);
    console.log(`Contact: ${name} (${company || 'Private'})`);
    console.log(`Email: ${email} | Phone: ${phone}`);
    console.log('-------------------------');

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    return NextResponse.json({ success: true, message: 'Lead submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Submit lead error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
