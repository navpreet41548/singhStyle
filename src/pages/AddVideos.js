import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'



const AddVideos = () => {
    const [videoUrl, setVideoUrl] = useState("")
    const [status, setStatus] = useState("")
    const history = useHistory()

    const onChangeValue = (e) => {
        let s = e.target.value
        let subString = s.split('/')
        let urlString = subString[subString.length - 1]
        setVideoUrl(urlString) 
    }

    const onSubmit =  async(e) => {
        e.preventDefault()
        setStatus("Please wait")
        // const url = videoUrl.split('/')[videoUrl.length - 1]
            const res = await fetch("https://singhstyleksndfk3409sdfnsdfk23.herokuapp.com/upload/video/610827f663aac72f185a8cde", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: videoUrl, id: "this is id" }),
            
            })
        
        const data = await res.json()
            if (data.status === 500 || !data) {
                setStatus('Internal server error, Try again in some time')
            } else {
                setStatus("Upload successful")
                setStatus("")
                history.push("/videos")
            }
    }

    const callAdminPage = async() => {
        try {
            const res = await fetch("https://singhstyleksndfk3409sdfnsdfk23.herokuapp.com/upload/video", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await res.json()
            console.log(data)
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
            <form method="POST" >
                <input required={true} name="url" placeholder="Please paste Url of the video" onChange={ (e)=>{onChangeValue(e)} }/>
                <button type="submit" onClick={onSubmit} >Upload</button>
                {videoUrl}
                {status}
            </form>
        </div>
    )
}

export default AddVideos
