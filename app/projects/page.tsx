import Card from '../comp/card';
import Aa from '../public/Aa.png'

export default function Projects(){
    return (
        <div className="projects">
            <p> Projects </p>
            <Card title={"2026 Midterm"} pic={'/Ab.jpg'} alt={"Midterm Hero"} desc={"We tested out skills to attempting to receate a website through code. I did well, getting as close as I could to the orgianl design. This allowed me to see what I need to improve on when making a website."}/>
            <Card title={"Cho Han"} pic={'/coinflip.png'} alt='Coin Flip' desc={"This project was a simple coin flip game that I made in JavaScript. It was a good introduction to the basics of programming."}/>
            <Card title={"Our Blooms"} pic={'/Aa.png'} alt={'Our Blooms'} desc={'We worked with our teacher to make a website from scratch. This helped us answer questions about how websites are built and how to make them work properly.'}/>
            <Card title={"SQL Project Proposal"} pic={'/Sql.png'} alt={'SQL Project Proposal'} desc={'We designed websites for a SQL project. This project involved creating a database and querying it using SQL. It helped me understand how to store data efficiently.'}/>
        </div>
    )
}