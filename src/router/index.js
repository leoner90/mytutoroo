import React from 'react'
import Contacts from '../views/ContactsSection.jsx'
import HeaderSection from '../views/HeaderSection.jsx'
import PriceSection from '../views/PriceSection.jsx'
import AboutSection from '../views/AboutSection.jsx'
import GallerySection from '../views/GallerySection.jsx'
import Footer from '../components/footer/Footer.jsx'

const Router = () => {
        return(
            <div>
                <HeaderSection /> 
                <AboutSection />
                <PriceSection />
                <GallerySection />
                <Contacts />
                <Footer />
            </div>
        )
 }
export { Router };