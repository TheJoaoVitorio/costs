import styles from './Home.module.css';
import React from 'react';
import Lottie from 'lottie-react'; // Importa o Lottie corretamente
import LottieHome from '../../lotties/lottiePayments.json';

import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.homeContainer}>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Start managing your projects right now!</p>
            <LinkButton
                to="/newproject"
                text="Create Project"
            />
            <Lottie 
                animationData={LottieHome} // Arquivo JSON da animação
                loop={true} 
                style={{ width: 300, height: 300 }} // Estilo da animação
            />
        </section>
    );
}

export default Home;