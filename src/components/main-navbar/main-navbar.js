import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Col, Row } from 'reactstrap';
import styles from './main-navbar.module.scss';

const MainNavbar = () => {
    let [initailState , setInitialState] = useState(false)
    let history = useHistory();

    function workBtn(e){
        e.parentNode.parentNode.parentNode.parentNode.children[4].children[0].style.display = "none";
        e.parentNode.parentNode.parentNode.parentNode.children[3].children[0].style.display = "none";
        e.parentNode.parentNode.parentNode.parentNode.children[2].children[0].style.display = "block";
        setInitialState(true);
   
            setInitialState(false);

    }
    // function workBtnOff(e){
    //     e.parentNode.parentNode.parentNode.parentNode.children[2].children[0].style.display = "none";
    //     setInitialState(false);
    // }
    function shortBtn(e){
        e.parentNode.parentNode.parentNode.parentNode.children[4].children[0].style.display = "none";
        e.parentNode.parentNode.parentNode.parentNode.children[2].children[0].style.display = "none";
        e.parentNode.parentNode.parentNode.parentNode.children[3].children[0].style.display = "block";
        setInitialState(true);
   
            setInitialState(false);

    }
    // function shortBtnOff(e){
    //     e.parentNode.parentNode.parentNode.parentNode.children[3].children[0].style.display = "none";
    //     setInitialState(false);
    // }

    function longBtn(e){
        e.parentNode.parentNode.parentNode.parentNode.children[2].children[0].style.display = "none";
        e.parentNode.parentNode.parentNode.parentNode.children[3].children[0].style.display = "none";
        e.parentNode.parentNode.parentNode.parentNode.children[4].children[0].style.display = "block";
        setInitialState(true);

    }
    function settingBtn(e){
        console.log(e)
    }

    return (
        <div className={styles.main_navbar}>
            <Row>
                <Col sm={12} md={12}>
                    <div className={styles.navbar}>
                        {/* <div className={styles.extra}> */}
                        <div className={styles.div1}>
                            <h4 onClick={(e)=>{workBtn(e.target)}}>Work</h4>
                        </div>
                        <div className={styles.div2}>
                            <h4 onClick={(e)=>{shortBtn(e.target)}}>Short Break</h4>
                        </div>
                        <div className={styles.div3}>
                            <h4 onClick={(e)=>{longBtn(e.target)}}>Long Break</h4>
                        {/* </div> */}
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={12}>
                        <div className={styles.setting}>
                            <h4 onClick={(e)=>{settingBtn(e.target)}}>Settings</h4>
                        </div>
                </Col>
                <Col sm={12} md={12}>
                    <div className={styles.work_area}>work</div>
                </Col>
                <Col sm={12} md={12}>
                    <div className={styles.short_area}>short</div>
                </Col>
                <Col sm={12} md={12}>
                    <div className={styles.long_area}>long</div>
                </Col>
                <Col sm={12} md={12}>
                    <div className={styles.setting_area}>setting</div>
                </Col>
            </Row>
        </div>
    )
}

export default MainNavbar;
