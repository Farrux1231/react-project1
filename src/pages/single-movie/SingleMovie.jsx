import MovieView from '@/components/movie-view/MovieView'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
    const url = import.meta.env.VITE_IMAGE_URL
    const {id} = useParams()
    const {data} = useFetch(`movie/${id}`)
    const {data: images} = useFetch(`movie/${id}/images`)  
    const {data: similar} = useFetch(`movie/${id}/similar`)  

  return (
    <div className='container mx-auto'>
        <div className=''>
            <img src={url + data?.backdrop_path} alt="" />
        </div>
        <div>
            <h1 className='text-4xl'>{data?.title}</h1>
            <p>{data?.overview}</p>
            <p>rate {data?.vote_average}/10</p>
            <strong>{data?.budget?.toLocaleString()} USD</strong>
            <div>
                {
                    data?.origin_country.map((country, index) => (<span key={index}>Country {country}</span>))
                } 
            </div>
            <div className='grid grid-cols-4 gap-2'>
                {
                    images?.backdrops?.slice(0, 10)?.map((image) => (
                        <img src={url+image.file_path} key={image.file_path} alt='' className='rounded-[7px]'/>
                    ))
                }
            </div>
            <div>
                <h3 className='text-2xl font-bold'>Similar</h3>
                <MovieView movies={similar?.results?.slice(0, 4)}/>
            </div>

        </div>
    </div>
  )
}

export default SingleMovie