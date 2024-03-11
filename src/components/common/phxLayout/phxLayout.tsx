import styles from "./phxLayout.module.css";
import { PhxHeader } from "../phxHeader";
import { PhxLayoutProps } from "./phxLayout.type";

export const PhxLayout = ({ children, isResultPage }: PhxLayoutProps) => {
  return (
    <div className={styles["header"]}>
      <div className={styles["header-contents"]}>
        <div
          className={`${styles["header-title"]} ${
            isResultPage ? styles["header-title-results"] : ""
          }`}
        >
          <PhxHeader isSearchResult={isResultPage} />
        </div>
        <div className={styles["search-box"]}>{children}</div>
      </div>
    </div>
  );
};
