import Footer from '@/shared/Footer/Footer.jsx'
import Navbar from '@/shared/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'

export default function RouterLayout() {
    return <>
        <Navbar/>
        <Outlet />
        <Footer/>
    </>
}
