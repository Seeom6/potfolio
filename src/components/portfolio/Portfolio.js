import {} from './portfolio.css' 
import port1 from '../../Image/portfolio1.jpg'
import port2 from '../../Image/portfolio2.jpg'
import port3 from '../../Image/portfolio3.jpg'
import port4 from '../../Image/portfolio4.jpg'
import port5 from '../../Image/portfolio5.jpg'
import port6 from '../../Image/portfolio6.jpg'



function Portfolio() {


  return (
    <div className="portfolio">   
        <div className="portfolio-container"> 
          <div className="content-box"> 
            <img src={port3}/>
            <div className='text-box'>
              <h2> project 1</h2>
              <p>i don't have any project now but you have my word expect me soon</p>
            </div>
          </div>
          <div className="content-box"> 
            <img src={port1}/>
            <div className='text-box'>
              <h2> project 2</h2>
              <p>i don't have any project now but you have my word expect me soon</p>
            </div>
          </div>
          <div className="content-box"> 
            <img src={port4}/>
            <div className='text-box'>
              <h2> project 3</h2>
              <p>i don't have any project now but you have my word expect me soon</p>
            </div>
          </div>
          <div className="content-box"> 
            <img src={port2}/>
            <div className='text-box'>
              <h2> project 4</h2>
              <p>i don't have any project now but you have my word expect me soon</p>
            </div>
          </div>
          <div className="content-box"> 
            <img src={port5}/>
            <div className='text-box'>
              <h2> project 5</h2>
              <p>i don't have any project now but you have my word expect me soon</p>
            </div>
          </div>
          <div className="content-box"> 
            <img src={port6}/>
            <div className='text-box'>
              <h2> project 6</h2>
              <p>i don't have any project now but you have my word expect me soon</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Portfolio