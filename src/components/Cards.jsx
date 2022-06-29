import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

function Cards({ item }) {
  //   var Rating = require("react-rating");
  return (
    <div
      style={{
        width: "25%",
        borderRadius: "2rem",
        padding: "1rem",
        margin: "1rem",
      }}
      className="bg-pink-100"
    >
      <Link to={`/restaurant/${item.restaurant_id}`} state={{ item }}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={item.images[0].url}
          alt=""
        />
        <h4>{item.restaurant_name}</h4>
        <p>{item.address_conplete}</p>
        <Rating
          name="read-only"
          value={item.rating.restaurant_avg_rating}
          readOnly
        />
        <h1>{item.currency.symbol + " " + item.avg_cost_for_two}</h1>
      </Link>
    </div>
  );
}

export default Cards;
