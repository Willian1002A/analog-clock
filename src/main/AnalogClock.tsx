import React, { Component , useEffect  } from 'react';
import './AnalogClock.css';
interface analogClockProps{
    objStrings?: any;
}
const initialState = {

}
export default class AnalogClock extends Component {
    state = {...initialState}
    setNewClockPinHour(){
        const els = document.querySelectorAll<HTMLElement>(".Hour");
        const hour = new Date().getHours();
        const min = new Date().getMinutes();
        const sec = new Date().getSeconds();
        const hourMinSec = hour + ((min + (sec/60))/60);
        els[0].style.transform = `rotate(${(hourMinSec * 30)-90}deg) translate(61.2px, 0%)`;
    }
    setNewClockPinMin(){
        const els = document.querySelectorAll<HTMLElement>(".Min");
        const min = new Date().getMinutes();
        const sec = new Date().getSeconds();
        const minSec = (min) + (sec/60);
        els[0].style.transform = `rotate(${(minSec * 6)-90}deg) translate(89.4px, 0%)`; 
    }
    setNewClockPinSec(){
        const els = document.querySelectorAll<HTMLElement>(".Sec");
        const sec = new Date().getSeconds();
        els[0].style.transform = `rotate(${(sec * 6)-90}deg) translate(72.9px, 0%)`; 
    }
    componentDidMount() {
        const setNewClockPinMin = () => {
            this.setNewClockPinHour();
            this.setNewClockPinMin();
        }
        const setNewClock = ()=> {
            this.setNewClockPinSec()
            if(new Date().getSeconds() === 0){
                setNewClockPinMin()
            }
        }
        setNewClockPinMin()
        setNewClock()
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