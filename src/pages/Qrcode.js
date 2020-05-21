import React, { useState } from 'react'
import '../App.css';
import MyQr from '../components/qrcoder';
import { useLocation } from 'react-router-dom';



const Qrcode = () => {
    let { state } = useLocation()

    return(
        <MyQr url={state.url}/>
    )
}

export default Qrcode