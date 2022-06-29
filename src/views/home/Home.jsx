import React, { useEffect, useState } from "react";
import Card from "../../components/Cards";
// import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://staging.fastor.in/v1/m/restaurant?city_id=118", {
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {data.map((item) => {
        return <Card key={item.restaurant_id} item={item} />;
      })}
    </div>
  );
}

export default Home;
