import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const fromEmail = process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL;
const myEmail = process.env.NEXT_PUBLIC_RESEND_MAILER_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
     await resend.emails.send({
      from: `Ahmad Alghawi <${fromEmail}>`,
      to: [fromEmail,email],
      subject: "Ahmad alghawi",
      react: (
        <>
        <div style={{ color: 'white', backgroundColor: '#043c68',width: 'fit-content', padding: '20px' , marginTop:'20px'}}>
        <h1 style={{color: 'white'}}>Thank you for contacting us!</h1>
          <p style={{color: 'white'}}>I will get back to you shortly</p>
          <br/>
          <p>Have a great day!</p>
          <p style={{color: 'white'}}>Ahmad</p>
        </div>
          
        </>
      ),
    });

    // Send email to your email address
    await resend.emails.send({
      from: fromEmail,
      to: [myEmail],
      subject: subject,
      react: (
        <>
          <div style={{ color: 'white', backgroundColor: '#043c68',width: 'fit-content', padding: '40px',marginTop: '20px' }}>
          <h1 style={{color: 'white', marginLeft: '20px'}}>{subject}</h1>
          <p style={{color: 'white'}}>you get message from {email}</p>
          <p style={{color: 'white'}}>The Massage:</p>
          <p style={{color: 'white', border: '1px solid white', padding: '15px'}}>{message}</p>
          </div>
        </>
      ),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error });
  }
}