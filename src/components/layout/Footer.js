import styles from './Footer.module.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footerItens}>
                <li className={styles.footerItem}>
                    <a href='https://github.com/TheJoaoVitorio'>
                        <FaGithub />
                    </a>
                </li>
                <li className={styles.footerItem}>
                    <a href='https://www.linkedin.com/in/joão-vitório'>
                        <FaLinkedin />
                    </a>
                </li>
                <li className={styles.footerItem}>
                    <a href='https://www.instagram.com/the_jaaoo/'>
                        <FaInstagram />
                    </a>
                </li>
            </ul>
            <p>
                <span>Costs</span> &copy;2024
            </p>
        </footer>
    );
}

export default Footer;
