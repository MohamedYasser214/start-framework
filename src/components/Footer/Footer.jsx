import React from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (<>

    <div className="col-footer">
    <div className="cont-footer grid gap-x-8 gap-y-4 grid-cols-3 container">
      
      <div className="location">
        <h3>LOACTION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
        
      <div className="around">
        <h3>AROUND THE WEB</h3>
          <div className="fontt  bg-blur">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-solid fa-earth-americas"></i>
          </div>
      </div>
      
      <div className="about-free">
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>

    </div>
    </div>



<FontAwesomeIcon/>



      <div className="footer">





        <div className="container copy">
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>


    </>
)
}

{/* <div>
    <div className="all-footer  fixed text-center w-full bottom-20">
    <div className='container inline-grid grid-cols-3 gap-4 m-auto flex- justify-center items-center absolute bottom-2/4 left-1'>
        
    <div className="location">
    <h2>LOCATION</h2>
    <p>2215 John Daniel Drive</p>
    <p>Clark, MO 65243</p>
    </div>

    <div className="around">
    <h3>AROUND THE WEB</h3>
    <div className="links flex flex-nowrap">
      <Link to=""><i class="fa-brands fa-facebook"></i></Link>
      <Link to=""></Link>
      <Link to=""></Link>
      <Link to=""></Link>
    </div>
    </div>

    <div className="freelancer">
      <h3>ABOUT FREELANCER</h3>
      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
    
    </div>
    </div>

      <div className='w-full absolute bottom-0 flex justify-center items-center copy '>
      <div className=''><p>Copyright © Your Website 2021</p></div>
      </div>
      </div>  */}