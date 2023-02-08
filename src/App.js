import Header from './components/Header/Navigation.js';
import Hero from './components/Hero/Hero.js';
 import Home from './components/HomePage/Home'
 import Skills from './components/skills/Skills.js';
 import About from './components/AboutMe/About.js'
import Service from './components/services/Service.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Contact from './components/contact/Contact.js';
import Sittings from './components/sittingsbox/Sittings.js';
import { Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import { useRef,useState} from 'react';
const App = ()=>{

    const color = ["#655dff","#ed4e3b","#c9d5e0"]
    const sittingRef = useRef()
    const [num,setNum] = useState(1)
    const handelBtn=()=>{
            setNum(num + 1)
            if(num > 1){
                setNum( 1)
        }
    }

    const [count,setCount] =useState(0)
    const increase=()=>{
      if(count < 2){
        setCount(count + 1)
      }if(count >= 2) {
        setCount(0)
      } 
    }
    const decrease = ()=>{
      if(count <= 2){
        setCount(count - 1)
      }if(count <= 0) {
        setCount(2)
      } 
    }

    const showSittings =()=>{
        sittingRef.current.classList.toggle("showsittings")
    }
    return(
        <div>
        <Router >
        <Header click={showSittings}/>
        <Sittings sittingRef={sittingRef} handelNum={handelBtn} number={num} color={color} count={count}/>
             <Routes>
                <Route path='/' element={<Home count={count} color={color} decrease={decrease} increase={increase}/>}/>  
                <Route path='/about' element={<About/>}/> 
                <Route path='/skills' element={<Skills/>}/>  
                <Route path='/service' element={<Service/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
            </Routes> 
        <Hero number={num}/> 
        </Router>
        </div>
    )
}



export default App; 