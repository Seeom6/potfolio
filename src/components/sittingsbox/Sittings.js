import {} from './sittings.css'
import { useRef,useState,useEffect } from 'react'

function Sittings({sittingRef,handelNum,number,color}) {

    const offON = ["on","off"]

    const shadowRef = useRef()
    const textChange = useRef()
    const handelColor1=()=>{
        document.documentElement.style.setProperty('--second-colo',color[0])
    } 
    const handelColor2=()=>{
        document.documentElement.style.setProperty('--second-colo',color[1])
    } 
    const handelColor3=()=>{
        document.documentElement.style.setProperty('--second-colo',color[2])
    } 

  useEffect( function(){
         if(number === 2){
            textChange.current.style.color = "#6b1919"
            shadowRef.current.style.boxShadow = "0px 4px 6px rgb(0 0 0 / 35%), 0px 0px 15px #6b1919, inset 0px -7px 12px rgb(0 0 0 / 35%), inset -2px -5px 15px rgb(255 255 255 / 30%)"
            shadowRef.current.style.textShadow =" 0 0 13px #6b1919"
            shadowRef.current.style.color = "#6b1919"
            ;
         }else{
            textChange.current.style.color = "rgb(33 168 49)"
            shadowRef.current.style.boxShadow = "0px 4px 6px rgb(0 0 0 / 35%), 0px 0px 15px rgb(33 168 49), inset 0px -7px 12px rgb(0 0 0 / 35%), inset -2px -5px 15px rgb(255 255 255 / 30%)"
            shadowRef.current.style.textShadow =" 0 0 13px rgb(33 168 49)"
            shadowRef.current.style.color = "rgb(33 168 49)"
        }
     },[number])


    
    
    const hiddenSittings= ()=>{
        sittingRef.current.classList.toggle("showsittings")
    }

  return (
    <div ref={sittingRef} className='sittings-box'>
        <div  className='sittings-container'>
            <i onClick={hiddenSittings} className='bx bx-x '></i>
            <h1> sittings </h1>
            <div className='plan-sittings'>
                <h2> plants <span> : </span> </h2>
                <div className='check-box'>
                    <h3 ref={textChange}> {offON[number -1 ]} </h3>
                    <label onClick={handelNum} >
                        <span  className='check'></span>
                        <div className='check-btn'>
                            <i ref={shadowRef} className='bx bx-power-off'></i>
                        </div>
                    </label>
                </div>
            </div>
            <div className='color-sittings'>
                <h2> color <span> : </span>  </h2>
                <ul className='color-box'>
                    <li onClick={handelColor1} > </li>
                    <li onClick={handelColor2}> </li>
                    <li onClick={handelColor3}> </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sittings