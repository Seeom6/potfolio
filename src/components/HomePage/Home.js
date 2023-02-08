import {} from './Home.css'
import introImg0 from '../../Image/intro-img1.jpg'
import introImg1 from '../../Image/intro-img2.jpg'
import introImg2 from '../../Image/intro-img3.jpg'
import { Link } from 'react-router-dom'
function Header({decrease,increase,count ,color}) {
const imgs = [introImg0,introImg1,introImg2]

  


 document.documentElement.style.setProperty('--second-colo',color[count])
  console.log(count)
  return (
    <div className='main-introducer'>
        <div className="container-introducer">
            <div className='introducer-img'>
              <i className='bx bx-right-arrow-alt' onClick={increase}></i>
              <img src= {imgs[count]} className='intro-img' ></img>
              <i className='bx bx-right-arrow-alt' onClick={decrease}></i>
            </div>
            <div className="introducer-text">
              <h2><span></span> i'm mohammed alsalamat </h2>
              
              <p> i'm a web developer , i can build a creative and beautiful web sit,
               and keep it responsive for all devices, so walk around my site to see more i hope you like it </p>
            </div>
            <div className="introducer-btn">
                <Link to='/about'><button> ABOUT ME </button></Link>
                <Link to='/portfolio'><button> PORTFOLIO </button></Link>
            </div>
        </div>  
    </div>
  )
}

export default Header