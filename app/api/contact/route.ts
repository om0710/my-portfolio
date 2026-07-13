import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Gracefully report if RESEND_API_KEY is not configured
    if (!apiKey) {
      return NextResponse.json(
        { success: false, useFallback: true, message: "Resend API key not configured. Falling back to mailto." },
        { status: 200 }
      );
    }

    // Call Resend API directly using lightweight fetch to keep node_modules light
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        // Resend requires a verified domain to send. onboarding@resend.dev is the default sandbox sender
        from: "Contact Form <onboarding@resend.dev>",
        to: "ombansal221@gmail.com",
        subject: `Portfolio Contact from ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Resend API Error details:", errorText);
      return NextResponse.json(
        { success: false, useFallback: true, error: "Failed to send email via API. Falling back." },
        { status: 200 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { success: false, useFallback: true, error: error.message || "Server Error" },
      { status: 200 }
    );
  }
}
