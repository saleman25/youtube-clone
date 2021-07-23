import { useState, useEffect } from "react";
import API_KEY from "./keys";

// const CONTEXT_KEY = '';

const useYoutube = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

// const useYoutube = () => {
//     return (dispatch) => {
//         return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${API_KEY}`)
//         .then((resp) => resp.json())
//         .then((result) => {
//             console.log(result)
//             dispatch({ type: "SET_SEARCH_TERM", payload: result})
//         })

//     }
// }

export default useYoutube;
