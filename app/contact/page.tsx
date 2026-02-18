export default function Contact(){
    return (
        <div className="contact">
            <h2> Contact Me </h2>

            <div className="coninfo"> 
                <p> My Email: <a href="mailto:merques.enoe@gmail.com" target="_blank" className="blue"> merques.enoe@gmail.com</a> </p>
                
                <form className="subem">
                <div className="con">
                <label className="paragraph1"> Your Name: </label>
                <input type="text" className="input" required/>
                </div>

                <div className="con">
                <label className="paragraph1"> Your Email: </label>
                <input type="email" className="input" required/>
                </div>

                <div className="con">
                    <label className="paragraph1"> Your Inquiry: </label>
                    <textarea className="input" rows={10} required/>
                </div>

                <button className="sub"> Submit </button>
            
                </form>
            </div>
        </div>
    )
}