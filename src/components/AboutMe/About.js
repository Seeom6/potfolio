import {} from './About.css'
import myPhoto from '../../Image/my-photo.png'
import Tilt from 'react-vanilla-tilt'
import {Link} from 'react-router-dom'


function About() {

  return (
    <div className="about-container">
        <div className="about-content">
            <Tilt options={{ speed:800, max:35}} className="about-text">
                <h2> hello again .... </h2>
                <p>
                    my name is mohammed alsalamt and I work as a web developer , I'm 22 years old.
                    I study I.T in Qasioun university,damascus,syria. I'm in the second year but I learned 
                    web development from the internet and I liked this work so I hope you enjoy visiting my site. 
                </p>
                <Link to='/skills'><button className='btn-about'> skills </button></Link>
            </Tilt>
            <Tilt options={{ speed:800, max:35 }} className="about-images">
                
                    <span>do want to see my picture just hover here</span>
                    <div className="my-photo">
                        <img src= {myPhoto} className='my-photo-img'></img>
                    </div>
               
            </Tilt>
        </div>
    </div>
  )
}

export default About