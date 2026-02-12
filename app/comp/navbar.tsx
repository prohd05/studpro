import Picture from "next/image"
import Link from "next/link"

export default function navbar(){
    return(
        <div className="navbar">
            <Picture alt="logo" src="/logo.png" width={95} height={95}/>
            <ul className="links"> 
                <li className="heading4"> Work </li>
                <li className="heading4"> About </li>
            </ul>
        </div>
    )
} 