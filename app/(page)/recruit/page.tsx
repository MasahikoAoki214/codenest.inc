import Hero from '@/app/_components/Hero';
import React from 'react';
import styles from './page.module.css';
import { mainClient } from '@/app/_libs/microcms';
import ButtonLink from '@/app/_components/ButtonLink';

export type Recruit = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  name: string;
  founded: string;
  location: string;
  employees: string;
  ceo: string;
  business: string;
  tell: string;
  website: string;
  capital: string;
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

const Page = async () => {
  const corporateData = await mainClient.getList<Recruit>({
    endpoint: 'corporate',
  });
  console.log('corporateData', corporateData);
  return (
    <div>
      <Hero title={'採用情報'} sub={'私たちのチームに参加し一緒に成長しませんか？'} />
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
                    <span className="text-sm text-gray-700">
                      {benefit.benefits_description ?? ''}
                    </span>
                  </p>
                </li>
              ) : null,
            )}
          </ul>
        </section>
        <div className="flex justify-center mt-8 w-full">
          <ButtonLink href="/contact">お問い合わせへ</ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Page;
