import { FC } from "react";
import { Link } from "react-router-dom";
interface HomeProps {
  
}

const Home: FC<HomeProps> = ({  }) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
        <div>welcome</div>
        <Link className="text-blue-800 underline cursor-pointer" to={'/items'}>take a loot at items</Link>
    </div>
  )
}

export default Home;