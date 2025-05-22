import { FC, FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import BananaForm from "../interfaces/BananaForm";
interface HomeProps {

}



const Home: FC<HomeProps> = ({ }) => {

  const [bananas, setBananas] = useState<BananaForm[]>([])

  useEffect(() => {
    const getBanans = async () => {
      try {
        const response = await axiosInstance.get('/banana/get-bananas')
        setBananas(response.data)
      } catch (error) {
        alert(error)
      }
    }

    getBanans()
    return
  }, [])

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
      const response = await axiosInstance.post('/banana', bananaData)
      alert(response.data)
      alert('done')
      setBananaData({ 'bananaColor': "", bananaName: "" })
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
      <div>
        <h1>bananas</h1>
        {!bananas.length && ' no bananas to render'}
        {bananas.map((bana, index) => (
          <div key={index}>{bana.bananaName}</div>
        ))}
      </div>

    </div>
  )
}

export default Home;