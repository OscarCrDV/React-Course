import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export default function GifGrid({ category }) {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <h1 style={{ textAlign: 'center' }}>{category}</h1>
      <div style={{ display: 'flex' }}>
        {
          images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))
        }
      </div>
    </>
  )
}
