import React from 'react';
import styles from './notice.module.css';

const page = () => {
  return (
    <div className={styles.noticeContainer}>
      <h1 className={styles.noticeTitle}>「株式会社コードネスト」の電子公告について</h1>
      <hr className={styles.noticeHr} />
      <h2 className={styles.noticeSubTitle}>公告の内容</h2>
      <p className={styles.noticeParagraph}>
        1. 定時株主総会の開催通知 株主総会を開催する場合、以下の情報を公告に記載します。
        <br />
        2. 決算公告（貸借対照表・損益計算書の公告）
        <br />
        貸借対照表などの内容を要約して記載します。
        <br />
        貸借対照表（令和6年12月末日現在）
        <br />
        資産の部: 300,000円 負債の部：-円 純資産の部: 300,000円 合計: 300,000円
        <br />
        {/* 損益計算書（令和〇年〇月期） 売上高：〇〇円 営業利益：〇〇円 当期純利益：〇〇円 */}
        <br />
        ※詳細は当社ウェブサイト（https://codenest.co.jp/notice）をご覧ください。
        <br />
        3. 組織変更・役員変更に関する公告 組織変更や役員変更の場合には、その概要を記載します。
      </p>

      <h2 className={styles.noticeSubTitle}>法人名および代表者名</h2>
      <p className={styles.noticeParagraph}>株式会社コードネスト 代表取締役 青木聖彦</p>

      <h2 className={styles.noticeSubTitle}>公告の方法</h2>
      <p className={styles.noticeParagraph}>
        当社は、会社法第939条に基づき、電子公告を以下の方法で行います。
        <br />
        公告の掲載場所 当社ウェブサイトの「電子公告」ページ
        <br />
        URL: https://codenest.co.jp/notice
      </p>

      <h2 className={styles.noticeSubTitle}>公告に関するお問い合わせ先</h2>
      <p className={styles.noticeParagraph}>
        住所: 〒150-0002 東京都渋谷区渋谷2-19-15宮益坂ビルディング609
        <br />
        株式会社コードネスト
        <br />
        電話: 080-7366-7566
        <br />
        メールアドレス: info@codenest.co.jp
      </p>
    </div>
  );
};

export default page;
