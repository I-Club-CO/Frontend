import React, { FC } from "react";
import styles from "./FooterBlock.module.css"
const FooterBlock: FC = () => {
    return (
        <div className={styles.footerBlock}>
            <p className={styles.footerBlock_text}>Terms of use</p>
            <p className={styles.footerBlock_text}>Privacy Policy</p>
        </div>
    );
}

export default FooterBlock;
