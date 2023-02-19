import React from 'react'
import ReactiveButton from 'reactive-button';
import { Link } from 'react-router-dom';
import './Getstarted.css'

const Getstarted = () => {
   
    return (
        <div className='hero'>
            <div className='content'>
                <h1 style={{ color: "#FEBE10", fontWeight: "bolder"}}>Welcome to SStrong!</h1>
                <br></br>
                <h4 style={{fontFamily:"cursive", }}>We provide CNS (Communications, Navigation and Surveillance) services to connect and protect the community!</h4>
                <br></br>
                <a href='./login'>
                <ReactiveButton
                style={{ backgroundColor: "#034694",borderRadius: '10px', width: "300px", fontSize: "25px", fontWeight:"700", color: "#FFD700"}}
                idleText="GET STARTED"
                ></ ReactiveButton>
                </a>

                
            </div>
        </div>
    )
}

export default Getstarted