import styles from "./Welcome.module.css";
import MainLogo from "./MainLogo/MainLogo";
import RegLogSelectBlock from "./RegLogSelectBlock/RegLogSelectBlock";
import RegCompsBlock from "./RegCompsBlock/RegCompsBlock";
import FooterBlock from "./FooterBlock/FooterBlock";
export default function Welcome() {

    return (
        <div className={styles.mainBlock}>
            <MainLogo />
            <RegLogSelectBlock/>
            <RegCompsBlock/>
            <FooterBlock/>
        </div>
    );
}
