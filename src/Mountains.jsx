import React, { useEffect, useState } from "react"
import Mountain from "./assets/Mountain.svg"
import Clouds from "./assets/Clouds.svg"
import Insta from "./assets/Insta-Logo.svg"
import Tele from "./assets/Telegram-Logo.svg"

function mountain() {
  const [scrollY, setscrollY] = useState(0)
  
  const handlescroll = () => {
    setscrollY(window.scrollY)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handlescroll)
    return () => { window.removeEventListener('scroll', handlescroll) }
  }, [])
  
  return (
    <div className="container">
      <img 
        className="mountain" 
        src={Mountain} 
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        alt="Mountain"
      />
      <div className="cloud-container">
        <img 
          className="clouds" 
          src={Clouds}
          alt="Clouds"
        />
        <div 
          className="white-space" 
          style={{ 
            backgroundColor: "white", 
            minHeight: '150vh',
            width: '100%'
          }}
        >
          <h1 
            className="name-intro" 
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              marginBottom: "400px",
              position: "relative"
            }}
          >
            KhodePouria
          </h1>
          <div 
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              gap: "10px",
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          >
            <div 
              className="social-item"
              style={{ 
                display: "flex", 
                alignItems: "center", 
                fontSize: "clamp(1.5rem, 5vw, 3rem)", 
                margin: "0px", 
                padding: "0px" 
              }}
            >
              <img 
                src={Insta} 
                style={{ 
                  width: "clamp(25px, 3vw, 50px)", 
                  marginLeft: "10px", 
                  marginRight: "10px" 
                }} 
                alt="Instagram"
              />
              <h3 style={{ margin: "0", padding: "0" }}>@pouria._.ramezani</h3>
            </div>
            <div 
              className="social-item"
              style={{ 
                display: "flex", 
                alignItems: "center", 
                fontSize: "clamp(1.5rem, 5vw, 3rem)", 
                margin: "0px", 
                padding: "0px" 
              }}
            >
              <img 
                src={Tele} 
                style={{ 
                  width: "clamp(25px, 3vw, 50px)", 
                  marginLeft: "10px", 
                  marginRight: "10px" 
                }} 
                alt="Telegram"
              />
              <h3 style={{ margin: "0", padding: "0" }}>@khodepouria</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default mountain