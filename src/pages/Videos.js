import React, {useEffect, useState} from 'react'

const Videos = () => {

    const [videosData, setVideosData] = useState([])

    const fetchUrlData = async () => {
        const res = await fetch("https://singhstyleksndfk3409sdfnsdfk23.herokuapp.com/", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type" : "application/json"
            },
            credentials: "include",
            mode: "no-cors"
        })
        const data = await res.json()
        setVideosData(data.video)
    }

    useEffect(() => {
        fetchUrlData()
    }, [])
    return (
        <div>
            {videosData.map(videoData => 
                <iframe  src={'https://www.youtube.com/embed/' + videoData.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )}
        </div>
    )
}

export default Videos
