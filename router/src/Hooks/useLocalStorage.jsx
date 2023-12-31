import React, { useEffect } from 'react'
import { useState } from 'react'
import { json } from 'react-router-dom'

function useLocalStorage(key, fallback) {
    const [value, setvalue] = useState(JSON.parse(localStorage.getItem(key) || fallback))
    
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[value, key])

    const changevalue = () => {
        setvalue((prev) => !prev)
        
    }
    return[value, changevalue]
}

export default useLocalStorage