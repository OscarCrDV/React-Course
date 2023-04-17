import React, { useEffect, useState } from 'react'
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [counter, setCounter] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        getGifs(category).then(data => {
            setCounter(data);
            setIsloading(false);
        })
    }, []);

    return {
        images: counter,
        isLoading: isLoading
    }
}

