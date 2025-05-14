import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
  const [params, setParams] = useSearchParams();
  const [filterName, setFilterName] = useState(params.get("filter") || "");

  const handleFilter = (name) => {
    if(name === "All"){
      params.delete("filter")
    }else{

      params.set("filter", name);
    }
    setParams(params);
    setFilterName(name);
  };

  useEffect(() => {
    console.log("Filter changed:", filterName);
  }, [filterName]);

  return (
    <div className="flex gap-5 justify-center items-center py-3">
      <div
        className={`cursor-pointer ${filterName === "All" ? "text-blue-500 " : ""}`}
        onClick={() => handleFilter("All")}
      >
        All
      </div>
      <div
        className={`cursor-pointer ${filterName === "New" ? "text-blue-500 " : ""}`}
        onClick={() => handleFilter("New")}
      >
        New
      </div>
      <div
        className={`cursor-pointer ${filterName === "Old" ? "text-blue-500 " : ""}`}
        onClick={() => handleFilter("Old")}
      >
        Old
      </div>
    </div>
  );
};

export default Filter;
