"use clinet"
import React, { useState } from 'react'
import styles from "./Cube.module.css"

export default function Cube() {
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)

    let moveSpeed = 50

  return (
    <>


      <div className={styles.parent}>

        <center><button onClick={(e) => {
          setY(y - 25)
        }}>↑
        </button></center>

        <button onClick={(e) => {
          setX(x - moveSpeed)
        }}>←
        </button>

        
        <button onClick={(e) => {
          setY(y + 25)
        }}>↓</button>

        <button onClick={(e) => {
          setX(x + moveSpeed)
        }}
        >→
        </button>

    </div>



    


<div style={{
        marginLeft: x,
        marginTop: y,
    }}
    className={styles.cube}
    >
        <p>Cube</p>
    </div>
    </>
  )
}
