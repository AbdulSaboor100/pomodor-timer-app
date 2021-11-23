import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Col, Row } from 'reactstrap';
import { GlobalContext } from '../../context/context';
import styles from './main-navbar.module.scss';

const MainNavbar = () => {
    let {state , dispatch} = useContext(GlobalContext)
    let [initailState , setInitialState] = useState(false);
    let [initailState1 , setInitialState1] = useState(false);
    let [num1 , setNum1] = useState(0);
    let [num2 , setNum2] = useState(0);
    let [num3 , setNum3] = useState(0);

    let [secondsState , setSecondsState] = useState(0);
    let [minutesState ,setMinutesState] = useState(0);
    let [hoursState , setHoursState] = useState(0);

    let history = useHistory();

    function workBtn(e){
        e.parentNode.parentNode.parentNode.parentNode.children[4].children[0].style.display = "none";
        e.parentNode.parentNode.parentNode.parentNode.children[3].children[0].style.display = "none";
        e.parentNode.parentNode.parentNode.parentNode.children[2].children[0].style.display = "block";
        e.parentNode.parentNode.parentNode.parentNode.children[5].children[0].style.display = "none";
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
        e.parentNode.parentNode.parentNode.parentNode.children[5].children[0].style.display = "none";
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
        e.parentNode.parentNode.parentNode.parentNode.children[5].children[0].style.display = "none";
        setInitialState(true);

    }
    function settingBtn(e){
        e.parentNode.parentNode.parentNode.parentNode.children[0].children[2].children[0].style.display = "none";
        e.parentNode.parentNode.parentNode.parentNode.children[0].children[3].children[0].style.display = "none";
        e.parentNode.parentNode.parentNode.parentNode.children[0].children[4].children[0].style.display = "none";
        e.parentNode.parentNode.parentNode.parentNode.children[0].children[5].children[0].style.display = "block"
    }

    function setTimer(){
        if(num1 != null && num2 != null && num3 != null){
            dispatch({type : "WORK_TIME" , payload : num1})
            dispatch({type : "SHORT_BREAK_TIME" , payload : num2})
            dispatch({type : "LONG_BREAK_TIME" , payload : num3})

        }else{
            alert("Incomplete")
        }
    }
    let timeArr = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12];

    // useEffect(function(){
    //     let seconds = 0;
    //     let minutes = 0;
    //     let hours = 0;
    //     setInterval(function(){
    //         if(seconds >= 59){
    //             seconds = 0;
    //             minutes +=1
    //         }else{
    //             seconds++
    //         }
    //         console.log(`${minutes} : ${seconds}`)
    //         // i++
    //         // console.log(i > 59)
    //         // if( i  60 ){
    //         //     i = 0
    //         //     i++
    //         // }
    //     }, 1000);


    // },[])
    function startTimer(){
        let alphaNum1 = 0 ;
        let alphaNum2 = 0 ;

        let seconds ;
        let minutes ;
        let hours;
            seconds = state.longBreakTime;
            minutes = state.shortBreakTime;
        hours = state.workTime;
        if(hours >= 1){
            alphaNum1 = hours - 1
            alphaNum2 = 59
            
             
        }
        let interval = setInterval(function(){
            if(alphaNum2 <= 0){
                alphaNum2 = 59
                alphaNum1 -=1
            }
            if(alphaNum1 <= -1){
                alphaNum1 = 0;
                alphaNum2 = 0+1;
                clearInterval(interval)
            }
            alphaNum2--
       
                setHoursState(`${alphaNum1} : ${alphaNum2}`);
            
        // //    if(seconds > 0 ){
        // //        seconds--
        // //    }else if(minutes >= 1){
        // //        seconds = 60
        // //        seconds--
        // //        if(seconds >= 0){
        // //         minutes -=1
        // //     }
        // //    }else if(hours >= 1){
        // //         minutes = 60
        // //        if(minutes >= 0){
        // //         hours -=1
        // //     }
        // // }
        // // setSecondsState(seconds);
        // // setMinutesState(minutes);
        // // setHoursState(hours);
        // //     console.log(`${hours} : ${minutes} : ${seconds}`)
        }, 1000);
        
        
    }

    function startTimer2(){
        let hours ;
        let alphaNum1 = 0 ;
        let alphaNum2 = 0 ;
        hours = state.shortBreakTime;
        if(hours >= 1){
            alphaNum1 = hours - 1
            alphaNum2 = 59
        }
        let interval = setInterval(function(){
            if(alphaNum2 <= 0){
                alphaNum2 = 59
                alphaNum1 -=1
            }
            if(alphaNum1 <= -1){
                alphaNum1 = 0;
                alphaNum2 = 0+1;
                clearInterval(interval)
            }
                alphaNum2--
                setMinutesState(`${alphaNum1} : ${alphaNum2}`);  
        }, 1000);
        
        
    }

    function startTimer3(){
        let hours ;
        let alphaNum1 = 0 ;
        let alphaNum2 = 0 ;
        hours = state.longBreakTime;
        if(hours >= 1){
            alphaNum1 = hours - 1
            alphaNum2 = 59
        }
        let interval = setInterval(function(){
            if(alphaNum2 <= 0){
                alphaNum2 = 59
                alphaNum1 -=1
            }
            if(alphaNum1 <= -1){
                alphaNum1 = 0;
                alphaNum2 = 0+1;
                clearInterval(interval)
            }
                alphaNum2--
                setSecondsState(`${alphaNum1} : ${alphaNum2}`);  
        }, 1000);
        
        
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
                    <div className={styles.work_area}>
                        <h4>{`${hoursState}`}</h4>
                        <button onClick={startTimer}>Start Timer</button>

                    </div>
                </Col>
                <Col sm={12} md={12}>
                    <div className={styles.short_area}>
                        <h4>{`${minutesState}`}</h4>
                        <button onClick={startTimer2}>Start Timer</button>
                    </div>
                </Col>
                <Col sm={12} md={12}>
                    <div className={styles.long_area}>
                        <h4>{`${secondsState}`}</h4>
                        <button onClick={startTimer3}>Start Timer</button>
                    </div>
                </Col>
                <Col sm={12} md={12}>
                    <div className={styles.setting_area}>
                       <div className={styles.div1}>
                            <input type="number" onChange={(e)=>{setNum1(e.target.value)}} value={num1} />
                            <input type="number" onChange={(e)=>{setNum2(e.target.value)}} value={num2} />
                            <input type="number" onChange={(e)=>{setNum3(e.target.value)}} value={num3} />
                       </div>
                       <div className={styles.div2}>
                           <button onClick={setTimer}>Set Timer</button>
                       </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainNavbar;
