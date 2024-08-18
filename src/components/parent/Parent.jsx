import React, {useState} from 'react'
import Child from '../Child/Child'
import { TEInput } from 'tw-elements-react'
import { Input } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Parent( ) {

  const [products , setProducts]= useState([
    {id:23 , code: 'samsung' ,onsale: true, salary: 40000},
    {id:24 , code: 'Nokia',  onsale : false, salary: 600},
    {id:25 , code: 'Jeep',   onsale : true, salary: 90000},
    {id:26 , code: 'Honor',  onsale : false, salary: 1000},
    {id:27 , code: 'Iphone',  onsale: true, salary: 52000},
    {id:28 , code: 'hojan',  onsale: false, salary: 75000},

  ]) 
  function deletProduct(id){
    let newProducts = structuredClone(products)
    newProducts=newProducts.filter((product)=>product.id != id)
    setProducts(newProducts)
  }
  function updateProduct(index){
    console.log(index)
    let newUpdate = structuredClone(products);
    newUpdate[index].id++;
    setProducts(newUpdate)

  }

  return (
    <>

      <div className="contact ">

    <div className="container cont-contact">
      <div className="text-contact text-center">
        <h1>CONTACT SECTION</h1>
        <div className='flex justify-center items-center cont-text'>
              
              <i class="fa-solid fa-grip-lines"></i>
              <i class="text-center fa-solid fa-star w-10"></i>
              <i class="fa-solid fa-grip-lines"></i>
  
              </div>
      </div>

    <div className="contact-section flex w-72 flex-col gap-6">
    <Input variant="standard" className='bg-white' placeholder="User Name"/>
    <Input variant="standard" className='bg-white' placeholder="UserAge"/>
    <Input variant="standard" className='bg-white' placeholder="UserEmail"/>
    <Input variant="standard" className='bg-white' placeholder="UserPassword"/>

    
    </div>
    <div className="container bg-red-600 relative but" >
    <button className='btnn'>Send Message</button>
    </div>




    </div>

      </div>

















    </>
  ) 
}
{/* <div className="container mx-auto">
<div className="flex flex-wrap py-4">
  {products.map((product , i)=> <Child key={i}  index={i} delet={deletProduct} z={product} update={updateProduct}/>)} 
  
</div>
</div> */}