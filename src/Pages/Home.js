import { useLazyQuery } from "@apollo/client"
import { GET_WEATHER_QUERY } from "../graphql/Queries"


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
            <input type="text" placeholder="City name ..." />
            <button onClick={() => getWeather()}>Search </button>
        </div>
    )
}

export default Home