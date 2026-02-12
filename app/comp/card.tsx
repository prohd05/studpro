import Image from "next/image"

export default function card( {title, pic, alt, desc}:{title:string, pic:string, alt:string ,desc:string}){
    return(
        <div>
            <h3> {title} </h3>
            <Image src={pic} alt={alt} width={417} height={390}/>
            <p> {desc} </p>
        </div>
    )
}