import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>確かな技術力を育む</h1>
          <p className={styles.description}>
            未経験からエンジニアを育て社会に貢献し、クライアント様を筆頭に従業員ひとりひとりの未来に寄り添う。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={3600}
          height={1200}
          priority
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>Business</h2>
            <p className={styles.sectionTitleJa}>事業内容</p>
            <p className={styles.sectionDescription}>
              当社は、次世代テクノロジーの研究開発・製造・販売を行う革新的な企業です。
              <br />
              AI、ロボット工学、自律システムなど、幅広い分野でのソリューション提供を通じて、社会の進化と未来の創造に貢献します。
            </p>
            <ButtonLink href="/business">もっとみる</ButtonLink>
          </div>
          <Image
            className={styles.businessImg}
            src="/img-business.png"
            alt=""
            width={1024}
            height={1024}
          />
        </div>
      </section>
      <div className={styles.aboutus}>
        <section className={styles.section}>
          <div className={styles.horizontal}>
            <Image
              className={styles.aboutusImg}
              src="/img-aboutus.jpg"
              alt=""
              width={6000}
              height={4000}
            />
            <div>
              <h2 className={styles.sectionTitleEn}>About Us</h2>
              <p className={styles.sectionTitleJa}>私たちについて</p>
              <p className={styles.sectionDescription}>
                「テクノロジーの力で世界を変える」をミッションに掲げ、日々活動をしています。
              </p>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>社名</dt>
                <dd className={styles.infoDescription}>株式会社コードネスト</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>設立(予定)</dt>
                <dd className={styles.infoDescription}>2025年1月</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>所在地</dt>
                <dd className={styles.infoDescription}>
                  〒150-0002
                  <br />
                  東京都渋谷区渋谷2-19-15宮益坂ビルディング609
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>代表者</dt>
                <dd className={styles.infoDescription}>青木 聖彦</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>資本金</dt>
                <dd className={styles.infoDescription}>30万円</dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>We are hiring</h2>
            <p className={styles.sectionTitleJa}>採用情報</p>
            <p className={styles.sectionDescription}>
              当社では、チャレンジ精神を持った人材を求めています。
              <br />
              新しいアイデアを出し合い、成長する環境で活躍したい方は、ぜひご応募ください。当社でのキャリアを築きながら、技術の最前線で力を発揮しましょう。
            </p>
            <ButtonLink href="">採用情報へ</ButtonLink>
          </div>
          <Image
            className={styles.hiringImg}
            src="/img-hiring.jpg"
            alt=""
            width={960}
            height={960}
          />
        </div>
      </section>
    </>
  );
}
