import { useLazyQuery } from "@apollo/client"
import { GET_WEATHER_QUERY } from "../graphql/Queries"


function Home() {
    return (
        <div className="home">
            <h1> Search For Weather</h1>
            <input type="text" placeholder="City name ..." />
            <button>Search </button>
        </div>
    )
}

export default Home