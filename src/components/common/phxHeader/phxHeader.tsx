import styles from "./phxHeader.module.css";
import { PhxHeaderProps } from "./phxHeader.type";

export const PhxHeader = ({ isSearchResult }: PhxHeaderProps) => {
  return (
    <>
      <div className={`${styles.logo} ${styles.textWhite}`}>Booking App</div>
      {!isSearchResult && (
        <div className={styles["header"]}>
          <div className={`${styles.title} ${styles.textWhite}`}>
            Find your next stay
          </div>
          <div className={`${styles.subTitle} ${styles.textWhite}`}>
            Search deals on hotels, flights, and much more...
          </div>
        </div>
      )}
    </>
  );
};
