import { useState, useEffect } from "react";
import { allgifs } from '../api/GIfsAPI'

export const usefetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await allgifs(category)
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages()
    }, [])

  return {
    images,
    isLoading
  }
}
