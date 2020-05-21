import React, { useState } from 'react'
import '../App.css';
import MyQr from '../components/qrcoder';
import Qrcode from './Qrcode';
import { useHistory } from 'react-router-dom'


const Homepage = () => {

    const [url, setUrl] = useState('')

    const history = useHistory()

    const handleInput = (e) => {
        e.preventDefault()
        console.log('input handling...')
        setUrl(e.target.value)
    }

    const handSubmit = (e) => {
        e.preventDefault()
        console.log("did it work?")
        console.log(url)
        history.push("/Qrcode",{
            url
        })
    }

    return (
        <div>
            <form>
                <div>
                    <label>
                        URL:
                        <input type="text" name="url" onChange={handleInput}/>
                    </label>
                    <button onClick={handSubmit}>
                        Submit
                    </button>
                
                </div>
                
            </form>
        </div>
    )
}

export default Homepage