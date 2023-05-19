import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home.jsx'


const Router = () => (
    <Routes basename={'/asd'}>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
    </Routes>
)

export { Router };