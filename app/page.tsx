import Image from "next/image";
import Button from './comp/button'
import Navbar from './comp/navbar'
import whoAm from '../public/whoAm.png'
import Picture from "next/image";

export default function Home() {
  return (
    <div>
      <div className="htop">
        <h2> Who I am</h2>
        <Picture alt="Image" src={whoAm} width={261} height={261}/>
        <h4> My name is Merques Enoe. I am a 17 year old senior within Technology High School. I really enjoy video games and superheroes. When I grow up, I hope to become a criminal lawyer.  </h4>
      </div>

      <div className="hbottom"> 
        <h2> Skills </h2>
        <ul className="skills">
          <li className="heading4"> Problem Solving </li>
          <li className="heading4"> Teamwork </li>
          <li className="heading4"> Scripting/code that involved doing a task</li>
        </ul>
      </div>
    </div>
  );
}
