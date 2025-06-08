import * as styles from './RecentlyViewedStores.css'
import { useRecentlyStore } from "@/store/modal"
import { useQueryClient } from '@tanstack/react-query';
import { CURRENT_STORE_KEY } from '@/hooks/useStore';


interface Props {
  recentlyShow : boolean;
}

const RecentlyViewedStores = ({ recentlyShow }: Props) => {
  const { recentlyModal, isClosing, setClosing } = useRecentlyStore();
  const queryClient = useQueryClient();

  const onClick = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      recentlyModal(false);
    }, 300);
  };

  if (!recentlyShow && !isClosing) return null;

  // 이미 캐시된 최근 본 매장 데이터만 가져오기 (API 요청 없음)
  const recentlyViewedStores = queryClient.getQueryData([CURRENT_STORE_KEY]);

  console.log(recentlyViewedStores);

  return (
    <div className={`${styles.container} ${isClosing ? styles.hidden : styles.visible}`}>
      <div className={styles.closeButton} onClick={onClick}>x</div>
      <div className={styles.storeContainer}>
        <div className={styles.storeItem}>스토리웨이</div>
        <div className={styles.storeItem}>gs25</div>
        <div className={styles.storeItem}>cu</div>
        <div className={styles.storeItem}>cu</div>
        <div className={styles.storeItem}>cu</div>
        <div className={styles.storeItem}>cu</div>
        <div className={styles.storeItem}>cu</div>
        <div className={styles.storeItem}>cu</div>
        <div className={styles.storeItem}>cu</div>
        <div className={styles.storeItem}>스토리웨이</div>
        <div className={styles.storeItem}>cu</div>
        <div className={styles.storeItem}>cu</div>
        <div className={styles.storeItem}>스토리웨이</div>
        <div className={styles.storeItem}>cu</div>
        <div className={styles.storeItem}>스토리웨이</div>
        <div className={styles.storeItem}>cu</div>
        <div className={styles.storeItem}>cu</div>
        <div className={styles.storeItem}>스토리웨이</div>
        <div className={styles.storeItem}>cu</div>
        <div className={styles.storeItem}>cu</div>
      </div>
    </div>
  )
}

export default RecentlyViewedStores;