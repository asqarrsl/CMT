import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


export default ({children}) => {

    console.log('render Main Admin')

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}