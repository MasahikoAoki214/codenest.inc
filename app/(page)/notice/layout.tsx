import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '公告｜株式会社コードネスト',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Notice" sub="公告" />
      <Sheet>{children}</Sheet>
    </>
  );
}
