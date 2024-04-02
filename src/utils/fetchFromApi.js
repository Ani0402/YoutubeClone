import axios from "axios"

const BASE_URL ='https://youtube-v31.p.rapidapi.com'


const options = {
    url: BASE_URL,
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_X_RapidAPI_Key,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromApi=async(url)=>{
  const {data}=await axios.get(`${BASE_URL}/${url}`,options);

  return data;
}
// url:'https://youtube-v31.p.rapidapi.com/captions'
// X-RapidAPI-Key:'30549aa5b6msh88f76fe2f27fc1ep1d2e38jsn782bb44ee5f4'