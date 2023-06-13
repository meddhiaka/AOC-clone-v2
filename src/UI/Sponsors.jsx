import { Helmet } from "react-helmet"
import Navbar from "./Navbar"
import SponsorsSubComp from "./Sub/SponsorsSubComp"
import Footer from "./Footer"
import { useEffect } from "react"

export default function Sponsors() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <Helmet>
                <title>AOC - Sponsors</title>
            </Helmet>
            <Navbar />
            <SponsorsSubComp />
            <Footer />
        </div>
    )
}