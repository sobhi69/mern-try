import { FC, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import BananaForm from "../interfaces/BananaForm";
interface HomeProps {

}



const Home: FC<HomeProps> = ({ }) => {
  const [bananaData, setBananaData] = useState<BananaForm>({
    "bananaName": "",
    'bananaColor': ""
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!bananaData.bananaColor || !bananaData.bananaName) {
      alert("please fill out the entire form")
      return
    }
    try {
      await axiosInstance.post('/banana', bananaData)
    } catch (error) {
      alert(error)
    }
  }

  const handleUpdate = (prop: any) => {
    setBananaData(prev => {
      return { ...prev, ...prop }
    })
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div>welcome</div>
      <Link className="text-blue-800 underline cursor-pointer" to={'/items'}>take a loot at items</Link>

      <div className="create-banana">
        <h2>Create a banana </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <input
              onChange={(e) => handleUpdate({ "bananaName": e.target.value })}
              type="text" placeholder="banana name" />
          </div>
          <div className="form-group">
            <input
              onChange={(e) => handleUpdate({ "bananaColor": e.target.value })}
              type="text" placeholder="banana color" />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>

    </div>
  )
}

export default Home;