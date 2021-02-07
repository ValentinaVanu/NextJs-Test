import Link from "next/link";

const people =[
  {pet: 'dog', name: 'Valentina'},
  {pet: 'cat', name: 'Maria'},
  {pet: 'fish', name: 'Emily'},
]

const Details = () => {
  return (
    <div>
      {people.map(e => (
        <div>
          <Link as={`/${e.pet}/${e.name}`} href="/[pet]/[person]">
            <a>Navigate to {e.name}'s {e.pet}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Details;
