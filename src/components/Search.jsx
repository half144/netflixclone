import {Link, useSearchParams} from "react-router-dom";
import {searchMovie} from "../tmdb";
import {useEffect, useState} from "react";

function Search({item}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [result, setResult] = useState();

  const searchTerm = searchParams.get("search") || "";
  const handleSearch = (e) => {
    const search = e.target.value;

    if (search) {
      setSearchParams({search});
    } else {
      setSearchParams({});
    }
  };
  const getSearch = async () => {
    if (!searchTerm) return;
    let results = await searchMovie(searchTerm);
    setResult(results);
  };

  useEffect(() => {
    getSearch();
  }, [searchTerm]);
}
return (
  <div>
    <p></p>
  </div>
);

export default Search;
