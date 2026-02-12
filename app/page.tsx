import Image from "next/image";
import Button from './comp/button'
import Card from './comp/card'
import Navbar from './comp/navbar'

export default function Home() {
  return (
    <div>
      <div className="Stylesheet">
        <p> This is my stylesheet</p>
        <h1> Heading 1 </h1>
        <h2> Heading 2 </h2>
        <h3> Heading 3 </h3>
        <h4> Heading 4 </h4>
        <p> Paragraph 1 </p>
        <Button text={"Click Me"}/>

        <Navbar/>

        <Card title={"2026 Midterm"} pic={'/loo.png'} alt={"Midterm Hero"} desc={"We tested out skills to attempting to receate a website through code. I did well, getting as close as I could to the orgianl design. This allowed me to see what I need to improve on when making a website."}/>
        

        {/* <Card title={""} pic={} alt={""} desc={""}/>
        <Card title={""} pic={} alt={""} desc={""}/>
        <Card title={""} pic={} alt={""} desc={""}/> */}
      </div>
    </div>
  );
}
