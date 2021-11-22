import React from 'react'
import MainNavbar from '../components/main-navbar/main-navbar';
import MainPomodoro from '../components/main-pomodoro/main-pomodoro';
import styles from './home.module.scss';

const Home = () => {
    return (
        <div className={styles.main_container}>
            <MainPomodoro />
            <MainNavbar />  
        </div>
    )
}

export default Home;
