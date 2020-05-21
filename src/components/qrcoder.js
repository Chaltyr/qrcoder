import React from 'react'
import QRCode from 'qrcode.react'


const MyQr = (props) => {
    // const location = useLocation()
    // const {name, email, time, duration} = location.state
    // console.log(JSON.stringify(location.state))
    // // return <QRCode value={JSON.stringify(location.state)}/>
    console.log(props.url)
    return <QRCode value={`${props.url}`} size="80"/>
    // return <QRCode value={`http://localhost:3000/vendor/${props.id}`} size="80"/>
}

export default MyQr