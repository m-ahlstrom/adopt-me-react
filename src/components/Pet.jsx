import { Link } from 'react-router-dom'

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props

  let hero = 'https://pets-images.dev-apis.com/pets/none.jpg'
  if (images.length) {
    hero = images[0]
  }

  return (
    <Link to={`/details/${id}`} className="w-full h-28 block mx-0 overflow-hidden border-b-2 border-solid">
      <div className="w-24 h-24 float-left [clip-path:circle(50%)] mx-5">
        <img src={hero} className="w-24" alt={name} />
      </div>
      <div className="w-4/5 flex-col justify-around">
        <h1 className='font-normal text-2xl text-ellipsis whitespace-nowrap'>{name}</h1>
        <h2 className='whitespace-nowrap font-normal overflow-ellipsis hover:whitespace-normal'>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  )
}

export default Pet
