import React from 'react'

const Navbar = () => {
    const navlinks = [
        {title:"Home", id:"#home"},
        {title:"About", id:"#about"},
        {title:"Classes", id:"#classes"},
        {title:"Schedule", id:"#schedule"},
        {title:"Contact", id:"#contact"},

    ]
  return (
    <div className='flex justify-evenly pt-4'>
        <h1 className='font-semibold text-5xl text-red-600 text-shadow'>GYM</h1>
      <ul className='hidden gap-5 text-red-500 justify-evenly sm:flex'>
        {
            navlinks.map((i,k)=>(<a className='cursor-pointer'
            key={k}
            id={i.id}> {i.title} </a>))
        }
      </ul>
    </div>
  )
}

export default Navbar
