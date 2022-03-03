import axios from "axios";
import { useState } from "react";
const URL = 'https://www.metaweather.com/api/location'
const BYPASS_URL = 'https://the-ultimate-api-challenge.herokuapp.com'
const REQ_URL = `${BYPASS_URL}/${URL}`

const useApi = () => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [forecast, setForecast] = useState(null)

    const getWoeid = async (loc) => {
        const { data } = await axios(`${REQ_URL}/search`, { params: { query: loc } })

        if (!data || data.length === 0) {
            setError('No such location');
            setLoading(false);
            return;
        }
        return data;
    }

    const getWeather = async (woeid) => {
        const { data } = await axios(`${REQ_URL}/${woeid}`);
        if (!data || data.length === 0) {
            setError('Someting is wrong');
            setLoading(false);
            return;
        }
        return data;
    }
    const submitRequest = async loc => {
        setLoading(true);
        setError(false);
        const response = await getWoeid(loc);
        if (!response) return;
        const data = await getWeather(response[0].woeid);
        await setLoading(false);
        setForecast(data.consolidated_weather[0]);
    }

    return {
        error, loading, forecast, submitRequest
    }
}
export default useApi;