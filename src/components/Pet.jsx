import { Link } from 'react-router-dom'

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props

  let hero = 'https://pets-images.dev-apis.com/pets/none.jpg'
  if (images.length) {
    hero = images[0]
  }

  return (
    <Link
      to={`/details/${id}`}
      className="mx-0 block h-28 w-full overflow-hidden border-b-2 border-solid"
    >
      <div className="float-left mx-5 h-24 w-24 [clip-path:circle(50%)]">
        <img src={hero} className="w-24" alt={name} />
      </div>
      <div className="w-4/5 flex-col justify-around">
        <h1 className="text-ellipsis whitespace-nowrap text-2xl font-normal">
          {name}
        </h1>
        <h2 className="overflow-ellipsis whitespace-nowrap font-normal hover:whitespace-normal">{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  )
}

export default Pet
