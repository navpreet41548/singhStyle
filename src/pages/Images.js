import React, {useState, useEffect} from 'react'

const Images = () => {

    const [imagesData , setImagesData] = useState([])

    const fetchUrlData = async () => {
        const res = await fetch("https://singhstyleksndfk3409sdfnsdfk23.herokuapp.com/", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type" : "application/json"
            },
            credentials: "include",
        })
        const data = await res.text()
        setImagesData(data.images)
        console.log(data.images)
    }

    useEffect(() => {
        fetchUrlData()
    }, [])

    return (
        <div>
            {
                imagesData.map(imageUrl => (
                    <img width={300} height={200} key={imageUrl._id} src={imageUrl.url} id={imageUrl._id} publicid={ imageUrl.id }/>
                ))
            }
        </div>
    )
}

export default Images
