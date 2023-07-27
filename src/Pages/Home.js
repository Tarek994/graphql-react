import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

function Home() {
  const [citySearched, setCitySearched] = useState("");

  const [getWeather, { loading, error, data }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      variables: { name: citySearched },
    }
  );

  if (error) return <h1>Error Found</h1>;
  if (data) {
    console.log("Data", data);
  }

  return (
    <div className="home">
      <h1> Search For Weather</h1>
      <input
        type="text"
        placeholder="City name ..."
        onChange={(event) => {
          setCitySearched(event.target.value);
        }}
      />
      <button onClick={() => getWeather()}>Search </button>
      <div className="weather">
        {data && (
          <>
            <h1> {data.getCityByName.name} </h1>
            <h1>
              {" "}
              Temperature: {data.getCityByName.weather.temperature.actual}
            </h1>
            <h1>
              Description: {data.getCityByName.weather.summary.description}
            </h1>
            <h1>Wind Speed: {data.getCityByName.weather.wind.speed}</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
