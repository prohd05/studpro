import Image, { StaticImageData } from "next/image";

export default function Card({ title, pic, alt, desc }: {title: string; pic: string; alt: string; desc: string;}) {
  return (
    <div className="Card">
      <h3 className="blue">{title}</h3>
      <div className="card-image-wrapper">
        <Image src={pic} alt={alt} width={500} height={390} className="card-image"  // makes it fluid
          sizes="(max-width:799px) 90vw,
                 (max-width:1199px) 70vw,
                 500px"
        />
      </div>
      <p>{desc}</p>
    </div>
  );
}