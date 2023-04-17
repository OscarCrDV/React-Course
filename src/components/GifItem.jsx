import React from 'react'

export default function GifItem({id, title, url}) {
  return (
    <div style={{ border: "1px solid black", padding: "15px" }}>
      <h2>{title}</h2>
      <img src={url} alt="" />
    </div>
  )
}
