import React from 'react'
import FetchData from './FetchData'
import Footer from '../components/Footer'





const Home = () => {

    return (
        <div className='container my-3' style={{ height: "100vh" }}>
            <FetchData />
            <Footer />
        </div>
    )
}

export default Home