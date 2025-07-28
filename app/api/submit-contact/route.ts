import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function POST(request: NextRequest) {
  const json = await request.json();
  const { lastname, firstname, company, email, message } = json;

  if (!lastname || !firstname || !company || !email || !message) {
    return NextResponse.json(
      { status: 'error', message: '全ての項目を入力してください' },
      { status: 400 },
    );
  }

  if (!validateEmail(email)) {
    return NextResponse.json(
      { status: 'error', message: 'メールアドレスの形式が誤っています' },
      { status: 400 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${firstname} ${lastname}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `【お問い合わせ】${company} - ${firstname} ${lastname}`,
      text: `
会社名: ${company}
氏名: ${lastname} ${firstname}
メールアドレス: ${email}
メッセージ:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ status: 'success', message: '送信が完了しました' });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { status: 'error', message: 'メール送信中にエラーが発生しました' },
      { status: 500 },
    );
  }
}
