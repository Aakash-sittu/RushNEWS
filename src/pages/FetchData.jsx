import React, { useState, useEffect } from 'react'
import axios from 'axios';


const FetchData = () => {

    const [Data, setData] = useState('')
    const fetchdata = async () => {
        await axios.get("https://newsapi.org/v2/everything?q=russia&pageSize=10&apiKey=ad55dddb4f4d43c580a924f837ef61d9").then((res) => setData(res.data.articles))
    }
    useEffect(() => { fetchdata() }, [])

    return (
        <div className='container'>
            <div className='my-3 container d-flex justify-content-center align-items-center flex-column'>
                {Data ? Data.map((item, ind) => <>
                    <div className='container my-3' style={{ width: "750px", boxShadow: "2px 2px 10px silver", borderRadius: "10px" }}>
                        <h5 className='my-3 '>{item.title}</h5>
                        <div className='d-flex justify-content-center align-items-center'><img src={item.urlToImage} alt="Link broken..." className='image-fluid' style={{ width: "auto", height: "270px", objectFit: "cover" }} /></div>
                        <p>{item.content.substring(0, 200)}</p>
                        <a href={item.url} target="blank">Read the Full Article Here</a>
                    </div>
                </>) : "Fetching...."}
            </div>
        </div>
    )
}

export default FetchData