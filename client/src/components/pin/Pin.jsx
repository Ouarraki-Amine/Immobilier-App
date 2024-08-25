import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import "./pin.scss"

const Pin = ({items}) => {
  return (
    <Marker position={[items.latitude, items.longitude]}>
        <Popup>
            <div className="popupContainer">
            <img src={items.img} alt="" />
            <div className="textContainer">
                <Link to={`/${items.id}`}>{items.title}</Link>
                <span>{items.bedroom} bedroom</span>
                <b>$ {items.price}</b>
            </div>
            </div>
        </Popup>
    </Marker>
  )
}

export default Pin