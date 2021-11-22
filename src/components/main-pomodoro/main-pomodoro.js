import React from 'react';
import { Col, Row } from 'reactstrap';

import styles from './main-pomodoro.module.scss';

const MainPomodoro = () => {
    return (
        <div className={styles.main_pomodoro}>
            <Row>
                <Col sm={12} md={12}>
                    <div className={styles.pomodoro}>
                        <h1>Pomodoro</h1>
                        <p>Be productive the right way</p>
                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default MainPomodoro;
