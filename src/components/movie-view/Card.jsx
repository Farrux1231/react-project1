import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RiStarLine } from "react-icons/ri";


const Card = ({item}) => {
  const navigate = useNavigate()

  const url = import.meta.env.VITE_IMAGE_URL
 
  return (
    <div className="flex flex-wrap">   
      <div className='w-[280px] h-[490px]' >
          <div>
              <img onClick={()=>navigate(`/movie/${item.id}`)} src={url + item.poster_path} alt="" className='rounded-[10px] ' />
          </div>
          <div className='py-[13px]'>
              <h3>{item.title}</h3>
              <div className='flex gap-1.5 '>
                <RiStarLine className='text-[19px] mt-0.5'/>
                <h5>{item.vote_average}/10</h5>

              </div>

          </div>
      </div>
    </div>
  )
}

export default Card;