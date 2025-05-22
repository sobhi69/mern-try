import { FC, useEffect, useState } from 'react'
import Item from '../interfaces/Item';
import axiosInstance from '../api/axiosInstance';
import { Link } from 'react-router-dom';

interface ItemsProps {

}



const Items: FC<ItemsProps> = ({ }) => {
    const [items, setItems] = useState<Item[]>([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true)
            try {
                const response = await axiosInstance.get('/item/get-items')
                if (response.data) {
                    setItems(response.data)
                }
            } catch (error) {
                alert(error)
            } finally {
                setLoading(false)
            }
        }
        fetchItems()
        return
    }, [])
    if (loading) {
        return 'loading...'
    }
    if (!items.length) {
        return 'no items to show'
    }
    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <div>
                {items.map((item, index) => (
                    <div key={index}>
                        {item.title}
                    </div>
                ))}
            </div>
            <div>
                go back home <Link className="text-blue-800 underline cursor-pointer" to={'/'}> Home</Link>
            </div>
        </div>
    )
}

export default Items;