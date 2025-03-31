import { usefetchGifs } from '../hooks/usefetchGifs';
import { GifItem, LoadingMessage } from './index';


export default function GiftGrid({ category }) {

    const { images, isLoading } = usefetchGifs( category );
    

    return (
        <>
            <h3>{ category }</h3>
            <LoadingMessage isLoading={ isLoading }/>

            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifItem 
                        key={img.id}
                        { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
