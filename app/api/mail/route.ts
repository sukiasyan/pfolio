import { NextResponse } from "next/server";
import { Resend } from "resend";

// re_eU6yLhgH_LqiKp9JTW9wpGzhVGRaochu5

// export async function POST(req: Request) {
//   const data = await req.json();
//   // console.log(res);
//   return NextResponse.json({
//     data,
//   });
// }

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: "next@gmail.com",
      to: "nsoftdesign@gmail.com",
      subject: "Next request",
      html: "<h1>Hello from Next</h1>",
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
