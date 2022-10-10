import "./MovieRow.css";
import {Link} from "react-router-dom";
import {useState} from "react";

function MovieRow({title, items}) {
  const velocityScroll = 1300;
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let moveL = scrollX + velocityScroll;
    if (moveL > 0) {
      moveL = 0;
    }
    setScrollX(moveL);
  };
  const handleRigthArrow = () => {
    let moveR = scrollX - velocityScroll;
    let listW = items.results.length * 240;

    if (window.innerWidth - listW > moveR) {
      moveR = window.innerWidth - listW - 90;
    }
    setScrollX(moveR);
  };

  return (
    <div className="movieRow">
      <h2 className="title">{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <img src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-transparent-png-22.png" />
      </div>
      <div className="movieRow--rigth" onClick={handleRigthArrow}>
        <img src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-transparent-png-22.png" />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 240,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <Link to={`/category/${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${item.backdrop_path}`}
                    alt={item.original_title}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
