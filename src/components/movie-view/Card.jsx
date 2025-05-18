import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RiStarLine } from "react-icons/ri";
import { useStateValue } from '@/context';
import {FaBookmark, FaRegBookmark}from "react-icons/fa"


const Card = ({item}) => {
  const navigate = useNavigate()

  const url = import.meta.env.VITE_IMAGE_URL
 const [state, dispatch] = useStateValue()
  return (
    <div className="flex flex-wrap">   
      <div className='w-[280px] h-[490px] relative' >
          <div>
              <img onClick={()=>navigate(`/movie/${item.id}`)} className='object-cover rounded-[10px]' loading='lazy' src={url + item.poster_path} alt="film Photo" />
              <button onClick={()=> dispatch({type:"SAVED", payload:item})} className='absolute top-2 right-2 z-10 p-2'>
            {
              state.saved.some(({id}) => id == item.id) ? (
                <FaBookmark className='text-[20px] text-[#11e5f0]'/>
              ):(
                <FaRegBookmark className='text-[20px] text-[#11e5f0]'/>
              )
            }
            </button>
          </div>
          <div className='py-[13px]'>
              <h3>{item.title}</h3>
              <div className='flex gap-1.5 '>
                <RiStarLine className='text-[19px] mt-0.5'/>
                <h5 className='text-[#fcf523]'>{item.vote_average}/10</h5>

              </div>

          </div>
      </div>
    </div>
  )
}

export default Card;