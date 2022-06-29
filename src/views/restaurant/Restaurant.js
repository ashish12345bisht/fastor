import React from "react";
import Draggable from "react-draggable";
import { useParams, useLocation } from "react-router-dom";
import img from "../../assets/logo.png";

function Restaurant(props) {
  const location = useLocation();
  const { item } = location.state;
  console.log(location);
  return (
    <div>
      <div>
        <img
          className="w-full"
          style={{ height: "80vh" }}
          src={item.images[0].url}
        />
        <Draggable bounds="parent">
          <img
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              top: "30%",
              left: "45%",
            }}
            src={img}
          />
        </Draggable>
      </div>
      <div className="flex w-full justify-between p-4">
        <h1 className="text-xl font-semibold">{item.restaurant_name}</h1>
        <h1 className="text-xl font-semibold">
          {item.currency.symbol + " " + item.avg_cost_for_two}
        </h1>
      </div>
      <p>{item.address_complete}</p>
    </div>
  );
}

export default Restaurant;
