import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import "./style.css"

const Genres = ({setGenre}) => {
    const {data} = useFetch("/genre/movie/list")
    console.log(data);
    
  return (
    <div className="container mx-auto py-4 flex gap-3 overflow-x-auto scrollbar-hidden">
    {data?.genres?.map((genre) => (
        <div onClick={()=> setGenre(genre.id.toString())} className='text-nowrap cursor-pointer select-none rounded-[10px] p-1 px-2 bg-[#222131]' key={genre.id}>{genre.name}</div>
    ))}
    </div>


  )
}

export default Genres