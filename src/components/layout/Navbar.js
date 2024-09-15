import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Container from './Container'
import logo from '../../img/dolar.png'

function Navbar(){
    return(
        <nav className={styles.navbar} >
            <Container>
                <Link to="/">
                    <img 
                        src={logo}
                        className={`${styles.logo}`}
                        alt='costs'
                    />
                </Link>
                <ul className={styles.list} >
                    <li className={styles.item} ><Link to="/">Home</Link></li>
                    <li className={styles.item} ><Link to='/projects'>Projects</Link></li>
                    <li className={styles.item} ><Link to='/company'>Company</Link></li>
                    <li className={styles.item} ><Link to='/contact'>Contact</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar