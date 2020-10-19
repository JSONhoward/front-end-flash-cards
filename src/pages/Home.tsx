import React from 'react'
import Cards from '../components/Cards';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout>
        <h1 style={{color: 'whitesmoke', textAlign: 'center'}}>Front End Developer Interview Questions</h1>
            <Cards />
        </Layout>
    )
}

export default Home
