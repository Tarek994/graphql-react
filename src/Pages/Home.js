import { useLazyQuery } from "@apollo/client"
import { GET_WEATHER_QUERY } from "../graphql/Queries"


function Home() {
    const [ getWeather, {loading, error, data} ] = useLazyQuery(GET_WEATHER_QUERY, {
        variables: {name: "Vancouver"}
    }) 



    return (
        <div className="home">
            <h1> Search For Weather</h1>
            <input type="text" placeholder="City name ..." />
            <button onClick={() => getWeather()}>Search </button>
        </div>
    )
}

export default Home