import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Web from '../Web/Web'
import Mobile from '../Mobile/Mobile'

export default function Gallery() {


  return (<>
       <div className="framework">
        <div className="container cont-frame">

          <div className="img-frame">
            <img src="../../../img/avataaars.svg" width='250px' alt="" />
          </div>

          <div className="text-frame">
            <h1>start Framework</h1>
            <div className='flex justify-center items-center'>
              
            <i class="fa-solid fa-grip-lines"></i>
            <i class="text-center fa-solid fa-star w-10"></i>
            <i class="fa-solid fa-grip-lines"></i>

            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        
        </div>
      </div> 
    </>
  )
}
