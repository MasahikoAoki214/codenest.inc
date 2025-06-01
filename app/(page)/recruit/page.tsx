// import ButtonLink from '@/app/_components/ButtonLink';
import Hero from '@/app/_components/Hero';
import React from 'react';
// import Image from 'next/image';
import styles from './page.module.css';
// import ContentsField from '@/app/_components/Contents';
import { mainClient } from '@/app/_libs/microcms';

export type Recruit = {
  id: string;
  recruit_title: string;
  recruit_description: string;
  recruit_employment: string[];
  recruit_location: string;
  recruit_workingHours: string;
  recruit_salary: string;
  recruit_requirements: string;
  recruit_preferred: string;
  recruit_holiday: string;
  recruit_benefits: string;
  benefits_title: string;
  benefits_description: string;
};

export type Benefit = {
  id: string;
  benefits_title: string;
  benefits_description: string;
};

// const content = ` 弊社ではアプリケーションの開発、WEBサイトのデザイン 構築、SES事業等に特に力を入れております。
//               アプリケーション開発、WEBサイトの構築につきまして、
//               企画から構築まで一本化出来るようサポートさせていただきますのでご縁がありましたら是非ご一緒させていただけたらと存じます。

//               SES事業につきまして、
//               エージェントの営業様とは随時商談させて頂けたらと存じますので代表へお電話、もしくはお問合せフォームよりアポイント頂けますと幸いです。

//               既存の取引先の皆様、
//               今後ともよろしくお願いいたします。
//               より詳しい事業内容につきましては専用ページへ記載しております。`;

const page = async () => {
  const corporateData = await mainClient.getList<Recruit>({
    endpoint: 'corporate',
  });
  return (
    <div>
      <Hero title={'採用情報'} sub={'私たちのチームに参加し一緒に成長しませんか？'} />
      {/* <ContentsField
        title="Business"
        subTitle="事業内容"
        description={content}
        href="/business"
        imgSrc="/img-business.png"
      /> */}

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className={styles.section}>
          <div className={styles.horizontal}>
            <h2 className={styles.sectionTitleEn}>Recruit</h2>
            <p className={styles.sectionTitleJa}>募集要項</p>
            <div className={styles.contentsArea}>
              {corporateData.contents.map((job) => (
                <div key={job.id} className="mb-8 mt-4 border p-4 rounded shadow ">
                  <h3 className="text-lg font-semibold">{job.recruit_title}</h3>
                  <hr />
                  <p className="mt-2 text-gray-700 whitespace-pre-wrap">
                    {job.recruit_description}
                  </p>
                  <table className={styles.table}>
                    <tbody>
                      <tr className={styles.row}>
                        <td className={styles.header}>雇用形態</td>
                        <td className={styles.cell}>{job.recruit_employment.join('/')}</td>
                      </tr>
                      <tr className={styles.row}>
                        <td className={styles.header}>勤務地</td>
                        <td className={styles.cell}>{job.recruit_location}</td>
                      </tr>
                      <tr className={styles.row}>
                        <td className={styles.header}>勤務時間</td>
                        <td className={styles.cell}>{job.recruit_workingHours}</td>
                      </tr>
                      <tr className={styles.row}>
                        <td className={styles.header}>給与</td>
                        <td className={styles.cell}>{job.recruit_salary}</td>
                      </tr>
                      <tr className={styles.row}>
                        <td className={styles.header}>応募資格</td>
                        <td className={styles.cell} style={{ whiteSpace: 'pre-line' }}>
                          {job.recruit_requirements}
                        </td>
                      </tr>
                      <tr className={styles.row}>
                        <td className={styles.header}>歓迎条件</td>
                        <td className={styles.cell} style={{ whiteSpace: 'pre-line' }}>
                          {job.recruit_preferred}
                        </td>
                      </tr>
                      <tr className={styles.row}>
                        <td className={styles.header}>休日・休暇</td>
                        <td className={styles.cell} style={{ whiteSpace: 'pre-line' }}>
                          {job.recruit_holiday}
                        </td>
                      </tr>
                      <tr className={styles.row}>
                        <td className={styles.header}>福利厚生</td>
                        <td className={styles.cell} style={{ whiteSpace: 'pre-line' }}>
                          {job.benefits_title}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className="text-xl font-semibold mb-4">福利厚生</h2>
          <hr />
          <ul className="space-y-2">
            {corporateData.contents.map((benefit) =>
              benefit.benefits_title ? (
                <li key={benefit.id} className={styles.row}>
                  <h3>
                    {benefit.id === 'anh12ab_tt' ? 'デザイナー福利厚生' : 'エンジニア福利厚生'}
                  </h3>
                  <p className={styles.cell}>
                    {benefit.benefits_title}
                    <br />
                    <span className="text-sm text-gray-700">{benefit.benefits_description}</span>
                  </p>
                </li>
              ) : null,
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default page;
