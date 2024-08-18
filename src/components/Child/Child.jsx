import React from 'react'

export default function Child(props) {

    let { code , id  , salary , onsale} = props.z

    return (<>
        <div className="w-1/3 p-2 ">
            <div className='p-4  bg-orange-700 rounded-md text-gray-300 relative'>
            <h3> code : {code}</h3>
            <h3> id : {id}</h3>
            <h3> salary : {salary}</h3>
            {onsale ? <div className="sale text-2xl">Sale</div> : ''}
            <button onClick={()=>props.delet(id)} className='btn hover:bg-red-600 border-red-600 text-red-600 hover:text-white'>Delet</button>
            <button onClick={()=>props.update(props.index)} className='btn hover:bg-red-600 border-red-600 text-red-600 hover:text-white'>Update</button>
            </div>
        </div>
        </>
  )
}
