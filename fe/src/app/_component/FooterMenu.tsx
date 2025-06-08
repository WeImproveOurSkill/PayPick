"use client"

import * as styles from './FooterMenu.css'
import Link from 'next/link'
import { useRecentlyStore } from "@/store/modal"
import RecentlyViewedStores from './RecentlyViewedStores'


const FooterMenu = () => {

  const { recentlyShow, recentlyModal, setClosing } = useRecentlyStore();

  const handleClick = () => {
    if (recentlyShow) {
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
        recentlyModal(false);
      }, 300);
    } else {
      recentlyModal(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu} onClick={handleClick}>
        최근 본 상점
      </div>
      <RecentlyViewedStores recentlyShow={recentlyShow}/>
      <Link className={styles.borderMenu} href='/'>홈</Link>
      <Link className={styles.menu} href='/report'>문의</Link>
    </div>
  )
}

export default FooterMenu;