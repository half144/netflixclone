import "./Navbar.css";
import {Link, useSearchParams} from "react-router-dom";
import {searchMovie} from "../tmdb";
import {useEffect, useState} from "react";

function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [opacity, setOpacity] = useState(0);
  const [viewX, setViewX] = useState(0);
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
  const handleView = () => {
    if (viewX === 0) {
      setViewX(320);
      setOpacity(1);
    } else {
      setViewX(0);
      setOpacity(0);
    }
  };

  useEffect(() => {
    getSearch();
  }, [searchTerm]);

  return (
    <nav className="nav-area">
      <div className="frist-nav">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />
        <div className="pages-link">
          <ul>
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link">
              <Link to="/action">Ação</Link>
            </li>
            <li className="link">
              <Link to="/movies">Filmes</Link>
            </li>
            <li className="link">
              <Link to="/trend">Bombando</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="second-nav">
        <div className="input-group">
          <input
            type="text"
            className="search"
            autoComplete="off"
            id="search"
            placeholder="Pesquise titulos"
            onChange={handleSearch}
            style={{
              width: viewX,
              opacity: opacity,
            }}
          />
          {result && console.log(result)}
          <span className="imgInput">
            <img
              src="https://icon-library.com/images/search-icon-white/search-icon-white-7.jpg"
              alt=""
              onClick={handleView}
            />
          </span>
        </div>

        <img
          className="profile-img"
          src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
          alt=""
        />
      </div>
    </nav>
  );
}

export default Navbar;
