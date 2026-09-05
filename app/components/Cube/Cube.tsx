"use clinet"
import React, { useState } from 'react'
import styles from "./Cube.module.css"

export default function Cube() {
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)

  return (
    <div
    style={{
        backgroundColor: "null",
        color: 'green',
        fontSize: "40px",
        width: "100px",
        height: "50px",
        cursor: "pointer",
        marginLeft: x,
        marginTop: y,
    }}
    className={styles.cube}>
        <p>Cube</p>
    </div>
  )
}
