import React, { use } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  const items = [
    {
      name: 'Add bus',
      slug: '/add-bus',
    },
    {
      name: 'Create Route',
      slug: '/add-route',
    },
    {
      name: 'Create Trip',
      slug: '/add-trip',
    }
  ]


  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
      
        
      {items.map((item) => (
        
        <li key={item.name}>
            <button
              onClick={() => navigate(item.slug)}
              className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
              >{item.name}</button>
          </li>
      ))}
    
    </div>
  )
}

export default Home



