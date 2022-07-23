import React, { Component , useEffect  } from 'react';
import './AnalogClock.css';
interface analogClockProps{
    objStrings?: any;
}
const initialState = {

}
export default class AnalogClock extends Component {
    state = {...initialState}
    multFactorFunct(innerWidth:any, innerHeight:any){
        let multFactor = 1;
        if(innerWidth >= 1920){
            multFactor = 1920 / 1920;
        }else if(innerWidth >= 1360){
            multFactor = 1360 / 1920;
        }else if (innerWidth >= 1024){
            multFactor = 1024 / 1920;
        }else if (innerWidth >= 640){
            multFactor = 640 / 1920;
        }else if (innerWidth >= 400){
            multFactor = 400 / 1920;
        }else{
            multFactor = 360 / 1920;
        }
        if(innerWidth <= innerHeight){
            return multFactor * 2; 
        }
        return multFactor * 1.5;
    }
    setNewClockPinHour(innerWidth:any, innerHeight:any){
        const els = document.querySelectorAll<HTMLElement>(".Hour");
        const hour = new Date().getHours();
        const min = new Date().getMinutes();
        const sec = new Date().getSeconds();
        const hourMinSec = hour + ((min + (sec/60))/60);
        const posDefaultNum = 61.2;
        els[0].style.transform = `rotate(${(hourMinSec * 30)-90}deg) translate(${posDefaultNum * this.multFactorFunct(innerWidth, innerHeight)}px, 0%)`;
    }
    setNewClockPinMin(innerWidth:any, innerHeight:any){
        const els = document.querySelectorAll<HTMLElement>(".Min");
        const min = new Date().getMinutes();
        const sec = new Date().getSeconds();
        const minSec = (min) + (sec/60);
        const posDefaultNum = 89.4;
        els[0].style.transform = `rotate(${(minSec * 6)-90}deg) translate(${posDefaultNum * this.multFactorFunct(innerWidth, innerHeight)}px, 0%)`;
    }
    setNewClockPinSec(innerWidth:any, innerHeight:any){
        const els = document.querySelectorAll<HTMLElement>(".Sec");
        const sec = new Date().getSeconds();
        const posDefaultNum = 72.9;
        els[0].style.transform = `rotate(${(sec * 6)-90}deg) translate(${posDefaultNum * this.multFactorFunct(innerWidth, innerHeight)}px, 0%)`;
    }
    componentDidMount() {
        let aux = window.innerWidth;
        const setNewClockPinMin = () => {
            this.setNewClockPinHour(window.innerWidth, window.innerHeight);
            this.setNewClockPinMin(window.innerWidth, window.innerHeight);
        }
        const setNewClock = ()=> {
            this.setNewClockPinSec(window.innerWidth, window.innerHeight)
            if(new Date().getSeconds() === 0 || aux !== window.innerWidth){
                setNewClockPinMin()
            }
            aux = window.innerWidth;
        }
        setNewClockPinMin();
        setNewClock();
        setInterval(setNewClock, 1000);
    }
    render(){
        return(
            <div className='Background'>
                <div className='Clock'>
                    <div className='ExternalCircle'>
                        <div className='InternalCircle'>
                            <div className='Numbers'>
                                <p>12</p>
                                <div className='Line sec'>
                                    <p>11</p>
                                    <p>1</p>
                                </div>
                                <div className='Line tert'>
                                    <p>10</p>
                                    <p>2</p>
                                </div>
                                <div className='Line main'>
                                    <p>9</p>
                                    <div className='dial'>
                                        <div className='clockPin Hour'></div>
                                        <div className='clockPin Min'></div>
                                        <div className='clockPin Sec'></div>
                                    </div>
                                    <p>3</p>
                                </div>
                                <div className='Line tert'>
                                    <p>8</p>
                                    <p>4</p>
                                </div>
                                <div className='Line sec'>
                                    <p className='Number '>7</p>
                                    <p>5</p>
                                </div>
                                <p>6</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}