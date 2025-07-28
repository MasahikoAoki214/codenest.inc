import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function POST(request: NextRequest) {
  const { lastname, firstname, company, email, message } = await request.json();

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

    await transporter.sendMail({
      from: `"${lastname} ${firstname}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `【お問い合わせ】${company} - ${lastname} ${firstname}`,
      text: `
■ 姓: ${lastname}
■ 名: ${firstname}
■ 会社名: ${company}
■ メールアドレス: ${email}
■ メッセージ:
${message}
      `,
    });

    return NextResponse.json({ status: 'success', message: 'メールを送信しました' });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { status: 'error', message: 'メール送信に失敗しました' },
      { status: 500 },
    );
  }
}
