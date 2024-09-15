import styles from './Home.module.css'
import Savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.homeContainer} >
            <h1>Welcome to <span>Costs</span></h1>
            <p>Start managing your projects right now!</p>
            <LinkButton
                to="/newproject"
                text="Create Project"
            />
            <img src={Savings} ></img>
        </section>

    )
}

export default Home