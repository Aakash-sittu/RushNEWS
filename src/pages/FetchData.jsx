import React, { useState, useEffect } from 'react'
import axios from 'axios';


const FetchData = () => {

    const [Data, setData] = useState('')
    const fetchdata = async () => {
        await axios.get("https://newsapi.in/newsapi/search.php?key=x4sYPg30zwEaZXbW2QzskpYXiIU3rm&q=russia").then((res) => setData(res.data.News))

    }
    useEffect(() => { fetchdata() }, [])

    return (
        <div className='container'>
            <div className='my-3 container d-flex justify-content-center align-items-center flex-column'>
                {Data ? Data.map((item, ind) => <>
                    <div className='container my-3' style={{ width: "750px", boxShadow: "2px 2px 10px silver", borderRadius: "10px" }}>
                        <h5 className='my-3 '>{item.title}</h5>

                        <p>{item.description.substring(0, 200)}</p>
                        <a href={item.url} target="blank">Read the Full Article Here</a>
                    </div>
                </>) : "Fetching...."}
            </div>
        </div>
    )
}

export default FetchData