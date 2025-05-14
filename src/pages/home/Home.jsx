import { api } from '@/api'
import MovieView from '@/components/movie-view/MovieView'
import { useFetch } from '@/hooks/useFetch'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const {data, loading, error} = useFetch("/discover/movie")
  
  console.log(data?.results);
  
  return (
    <div>
      <MovieView movies={data?.results}/>
    </div>
  )
}

export default React.memo(Home)