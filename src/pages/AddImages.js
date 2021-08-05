import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

const AddImages = () => {
    const history = useHistory()

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")
    const [fileSelected, setFileSelected] = useState("")
    

    const onFileSelect = (e) => {
        setFileSelected(e.target.files)
    }
    const uploadImage = async (e) => {
        const files = fileSelected
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "singhstyles")
        setLoading(true)

        const res = await fetch("https://api.cloudinary.com/v1_1/navpreetsingh/image/upload", {
            method: "POST",
            body:data
        })

        const file = await res.json()

        const url = file.secure_url
        const id = file.public_id

        const dataRes = await fetch("https://singhstyleksndfk3409sdfnsdfk23.herokuapp.com/upload/image/610827f663aac72f185a8cde", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url, id})
            })
        
        const datadata = await dataRes.json()
        console.log(datadata)
        setImage(file.secure_url)
        setLoading(false)


    }


        // AUTHENTICATING ADMIN


        const callAdminPage = async() => {
            try {
                const res = await fetch("https://singhstyleksndfk3409sdfnsdfk23.herokuapp.com/upload/image", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })

                const data = await res.json()
                if (data == false || !data) {
                    history.push('/admin')
                }
            } catch (err) {
                console.log(err)
            }
        }
    
        useEffect(() => {
            callAdminPage()
        }, [])
    

    return (
        <div>
                <input type="file" name="image" placeholder="choose file" onChange={onFileSelect} />
                <button onClick={uploadImage}>Upload</button>
         
            {
                loading ? (
                    <h3>Loading...</h3>
                ) : (
                        <img src={image} />
                )
            }
        </div>
    )
}

export default AddImages
