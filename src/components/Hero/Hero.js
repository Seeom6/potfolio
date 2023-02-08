import {} from './hero.css'
import plan1 from '../../Image/plan1.png'
import plan2 from '../../Image/plan2.png'
import plan3 from '../../Image/plan3.png'
import plan4 from '../../Image/plan4.png'
import plan5 from '../../Image/plan5.png'
import plan6 from '../../Image/plan6.png'
import { useEffect,useRef } from 'react'
function Hero({number}) {

  const heroRef = useRef()
  useEffect(()=>{
    if(number === 2){
      heroRef.current.style.display = "none"
    }else{
      heroRef.current.style.display = "block"
    }
  },[number])

  return (
    <div ref={heroRef} className='hero'>
      <div className='plans'>
          <div><img src = {plan1}></img></div>
          <div><img src = {plan2}></img></div>
          <div><img src = {plan3}></img></div>
          <div><img src = {plan4}></img></div>
          <div><img src = {plan5}></img></div>
          <div><img src = {plan6}></img></div>
          <div><img src = {plan1}></img></div>
          <div><img src = {plan2}></img></div> 
          <div><img src = {plan5}></img></div>
      </div>
    </div>
  )
}

export default Hero