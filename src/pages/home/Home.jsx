import { api } from '@/api'
import MovieView from '@/components/movie-view/MovieView'
import Slide from '@/components/Slide/Slide'
import { useFetch } from '@/hooks/useFetch'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const {data, loading, error} = useFetch("/discover/movie")
  
  // console.log(data?.results);
  
  return (
    <div>
      <Slide movies={data?.results}/>
      <MovieView movies={data?.results}/>
    </div>
  )
}

export default React.memo(Home)