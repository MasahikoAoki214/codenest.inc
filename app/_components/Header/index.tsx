'use client';
import Menu from '@/app/_components/Menu';
import Link from 'next/link';
import styles from './index.module.css';
import styled from 'styled-components';

const CompanyName = styled.div`
  color: #fff;
  font-size: 1.5rem;
`;

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <CompanyName className="">CodeNest</CompanyName>
      </Link>
      <Menu />
    </header>
  );
}
