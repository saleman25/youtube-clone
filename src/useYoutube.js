import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = '';

const useYoutube = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                ``
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData();
    }, [term])

    return { data }
};

export default useYoutube;