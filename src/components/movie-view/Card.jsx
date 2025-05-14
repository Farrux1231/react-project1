import React from 'react'

const Card = ({item}) => {
    const url = import.meta.env.VITE_IMAGE_URL
  return (
    <div className='w-[280px] h-[490px]'>
        <div>
            <img src={url + item.poster_path} alt="" className='rounded-[10px] ' />
        </div>
        <div className='py-[13px]'>
            <h3>{item.title}</h3>
            
        </div>
    </div>
  )
}

export default Card