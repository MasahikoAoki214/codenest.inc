import React from 'react';
import ButtonLink from '../ButtonLink';
import Image from 'next/image';
import styles from './page.module.css';

type Props = {
  title: string;
  subTitle: string;
  description: string;
  href?: string;
  imgSrc: string;
};

const ContentsField = ({ title, subTitle, description, href, imgSrc }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.horizontal}>
        <div>
          <h2 className={styles.sectionTitleEn}>{title}</h2>
          <p className={styles.sectionTitleJa}>{subTitle}</p>
          <p className={styles.sectionDescription}>{description}</p>
          {href && <ButtonLink href={href}>もっとみる</ButtonLink>}
        </div>
        <Image
          className={styles.businessImg}
          src={imgSrc}
          alt={`${title}の画像`}
          width={1024}
          height={1024}
        />
      </div>
    </section>
  );
};

export default ContentsField;
