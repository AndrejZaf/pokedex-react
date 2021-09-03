import React, { useEffect, useState } from "react";
import { API_LIMIT, getPokemons } from "../../services/apiService";
import InfiniteScroll from "react-infinite-scroll-component";
import PokeDexCard from "../pokedex-card/PokeDexCard";
import { determineColor } from "../../static/pokemonColors";
import { Link } from "react-router-dom";
import "./PokeDex.css";

export default function PokeDex() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [rowIndex, setRowIndex] = useState(1);

  useEffect(() => {
    getPokemons(offset).then((response) => {
      setData(response.data.results);
      setIsLoading(false);
    });
    setOffset(offset + API_LIMIT);
  }, []);

  function fetchData() {
    getPokemons(offset).then((response) => {
      if (
        response.data.results.length === 0 ||
        response.data.results.length < API_LIMIT
      ) {
        setHasMoreData(false);
        return;
      }
      setData([...data, ...response.data.results]);
      setOffset(offset + API_LIMIT);
      setRowIndex(rowIndex + 1);
    });
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mt-3">
      <InfiniteScroll
        dataLength={data.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMoreData}
        style={{ overflowX: "hidden" }}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="row" key={rowIndex}>
          {data.map((item, index) => (
            <React.Fragment key={index + 1}>
              {index % 4 === 0 && index !== 0 ? (
                <div className="w-100"></div>
              ) : null}
              <div className="col-lg-3 col-sm-6" key={index + 1}>
                <Link
                  to={`/pokemon/${index + 1}`}
                  style={{ textDecoration: "none" }}
                  key={index + 1}
                >
                  <PokeDexCard
                    key={index + 1}
                    index={index + 1}
                    name={item.name}
                    image={item}
                    color={determineColor(item.name)}
                  />
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
