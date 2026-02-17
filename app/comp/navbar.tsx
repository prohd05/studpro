import Picture from "next/image"
import Link from "next/link"

export default function navbar(){
    return(
        <div className="navbar">
            <Link href='/'> <Picture alt="logo" src="/Logo.png" width={95} height={95}/> </Link>
            <ul className="links"> 
                <Link href='/projects' className="heading4"> Work </Link>
                <Link href='/contact' className="heading4"> About </Link>
            </ul>
        </div>
    )
} 