import Navtext from "./navText"

export default function Navbar(){

    return(
        <>
        <Logo />
        <Navtext 
            text={"Home"}
            class={""}
        />
        <Navtext 
            text={"Menu"}
            class={""}
        />
        <Navtext 
            text={"Contact Info"}
            class={""}
        />
        </>
    )
}