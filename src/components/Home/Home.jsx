import axios from "axios";
import React, {useEffect, useState  } from "react";
import { Link } from "react-router-dom";



export default function Home() {
    // const [count, setCount] = useState(0)
    // const [userName, setUserName] = useState("Ahmed Ali")
    // const [product, setProduct] = useState({productName:'samsung', price : 30000})
    // function changeCount(x){
    //     setCount(Math.round(Math.random()*100))
    // } 

        const [products, setProducts] = useState([])

    async function getProducts(){
        let x =await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        setProducts(x.data.data)
        console.log(x.data.data)
    }

    useEffect(()=>{
        getProducts()
    } ,[])

    return (<>


        <div className="portofolio">
            <div className="container text-port">
                <h1>PORTOFOLIO COMPONENT</h1>
                
                <div className='flex justify-center items-center'>
              
              <i class="fa-solid fa-grip-lines"></i>
              <i class="text-center fa-solid fa-star w-10"></i>
              <i class="fa-solid fa-grip-lines"></i>
  
              </div>

            </div>

            <div className="container grid gap-x-8 gap-y-4 grid-cols-3">
            <div><a target="blank" href="../../../img/poert1.png"><img className="rounded gap-10 pt-10"  src="../../../img/poert1.png"  alt="" /></a></div>
            <div><a target="blank" href="../../../img/port2.png"><img className="rounded gap-10 pt-10"   src="../../../img/port2.png"   alt=""  /></a></div>
            <div><a target="blank" href="../../../img/port3.png"><img className="rounded gap-10 pt-10"   src="../../../img/port3.png"   alt=""  /></a></div>
            <div><a target="blank" href="../../../img/poert1.png"><img  className="rounded gap-10 pt-10"  src="../../../img/poert1.png" alt=""/></a></div>
            <div><a target="blank" href="../../../img/port2.png"><img className="rounded gap-10 pt-10"   src="../../../img/port2.png"   alt=""  /></a></div>
            <div><a target="blank" href="../../../img/port3.png"><img className="rounded gap-10 pt-10"   src="../../../img/port3.png"   alt=""  /></a></div>
            </div>
         </div>


















        </>   );
    }














//     <div className="container mx-auto py-8">
//     {products.length>0 ?             <div className="flex flex-wrap">
//         {products.map((product)=> <div key={product.id} className="w-1/5">
//             <div className="px-2">
//                 <img src={product.imageCover} className="w-full" alt={product.title} />
//                 <h3>{product.title}</h3>
//             </div>
//         </div>)}
//     </div> : <div className="spinner flex justify-center items-center h-screen ">
//     <span class="loader"></span>
//     </div>}
// </div>

{/* <section className="text-center mt-10">
    <h1 className="bg-sky-800">Home Page</h1>
    <h2>UserName: {userName}</h2>
    <h2>Price: {product.price}</h2>
    <h2 className={count > 50? "bg-green-500":"bg-red-700" }>Count: {count}</h2>
    <button onClick={()=>{changeCount()}} className="bg-orange-300 m-3 rounded-md">Change</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, omnis.</p>
</section>

*/}
