import React from "react"
import Logo from "../../images/logo5.png"
import { HeaderContainer } from "./styles"
import BackgroundHeader from "../BackgroundHeader/Index"





export default function Header() {
    return (
        <>
            <HeaderContainer>
                <header style={{}}>

                    <BackgroundHeader />
                    <img className="img-fluid" src={Logo} alt="Logo" />

                 
                </header>
            </HeaderContainer>


        </>
    )

}