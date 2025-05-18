import MovieView from '@/components/movie-view/MovieView';
import { useStateValue } from '@/context';
import { useFetch } from '@/hooks/useFetch';
import { Pagination } from '@mui/material';
import React, { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [state] = useStateValue();
  const inputRef = useRef();
  const [params, setParams] = useSearchParams();
  let page = params.get("page") || 1
  const query = params.get('query') || '';
  const { data, error, loading } = useFetch(`/search/movie?query=${query}`, {page});
  // console.log(data?.results);
  
  const handleInput = () => {
    const inputValue = inputRef.current.value.trim();
    if (inputValue) {
      params.set('query', inputValue);
      params.set("page", "1")
      setParams(params);
    }
  };

  const handleChange = (event, value) => {
  
    params.set("page", value.toString())
    if(params.get("page") == 1){
      params.delete("page")
      setParams(params)
    }else{
      setParams(params )
    }
  }

  return (
  <div>
    <div className="flex items-center justify-center gap-2 p-4">
      <input
        type="text"
        ref={inputRef}
        placeholder="Qidiruv..."
        className="w-full max-w-md p-2 border rounded-lg focus:outline-none"
      />
      <button
        onClick={handleInput}
        className="p-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-800 transition"
      >
        {state.lang === 'en'
          ? 'Search'
          : state.lang === 'uz'
          ? 'Qidiruv'
          : state.lang === 'ru'
          ? 'Поиск'
          : 'Search'}
      </button>
    </div>
    <MovieView movies={data?.results}/>
      <div className="container mx-auto flex justify-center my-10 bg-white">
        {data?.results?.length > 0 ? (
        <Pagination
        count={data?.total_pages > 500 ? 500 : data?.total_pages}
        page={Number(page)}
        className="bg-white"
        onChange={handleChange}
        />
        ) : null}
      </div>
  </div>
  );
};

export default Search;
