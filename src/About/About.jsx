import React, { useEffect, useState } from 'react'

export default function About() {

//     useEffect(()=>{
//     console.log("ComponentDidMount");
//     return ()=>{
//     }
//   } , [])
//   const [Count, setcount] = useState(0)
//   const [userName, setUserName] = useState("Ali")

//   useEffect(()=>{
//     if (Count === 0 )
//       return
//   console.log("Hello")
// },[Count])

// useEffect(()=>{
//   if(userName === 'Ali'){
//     return}
//   console.log("user exchange")
// },[userName])

// function changeCount(){
//   setcount(Math.random)
// }

// function changeUserName(){
//   setUserName("hamada")
// }

  return (<>

    <div className="about-comp">
      <div className="container m-auto">

        <div className="text-about">
          <h2>about component</h2>
          <div className='flex justify-center items-center'>
              
              <i class="fa-solid fa-grip-lines"></i>
              <i class="text-center fa-solid fa-star w-20"></i>
              <i class="fa-solid fa-grip-lines"></i>
  
              </div>
        </div>
      
      <div className="cont-about gap-10">

      <div className="cont1">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>

      <div className="cont2">
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      </div>
      </div>
    </div>
  </>)
}





{/* <div className='text-center'>
<h2>About Page</h2>
    <h2 className='text-center text-5xl '> Count : {Count}</h2>
    <h2 className='text-center text-5xl '> UserName : {userName}</h2>
    <button onClick={()=>{changeCount()}} className='bg-green-500 rounded-md p-1 m-4 text-center cursor-pointer'>Change</button>
    <button onClick={()=>{changeUserName()}} className='bg-green-500 rounded-md p-1 m-4 text-center cursor-pointer'>Change UserName</button>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, consequuntur.</p>
</div> */}