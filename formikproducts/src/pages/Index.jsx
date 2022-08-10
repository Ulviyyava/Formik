import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const product = JSON.parse(localStorage.getItem("products"));

  const prod4 = product.slice(0, 4);
  console.log(prod4);
  return (
    <><div className="all">
      {prod4.map((p) => {
        return (
          
            <div className="col-lg-3">
            <div className="card">
            <div className="img">
              <img src={p.url} alt="aa" />
            </div>
            <div className="text">
              <h3>Name: {p.name}</h3>
              <span>Price: {p.price}</span>
            </div>
            </div>
            </div>
        );
      })}
      </div>
      <Link className="link2" to="/list">
        <button>Show More</button>
      </Link>
    </>
  );
};

export default Index;
