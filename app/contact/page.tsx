export default function Contact(){
    return (
        <div className="contact">
            <h2> Contact Me </h2>

            <div className="coninfo"> 
                <p> My Email: <a href="mailto:merques.enoe@gmail.com" target="_blank" className="blued"> merques.enoe@gmail.com</a> </p>
                
                <form className="subem">
                <div className="con">
                <label> Your Name: </label>
                <input type="text" size={30} required/>
                </div>

                <div className="con">
                <label> Your Email: </label>
                <input type="email" size={30} required/>
                </div>

                <div className="con">
                    <label> Your Inquiry: </label>
                    <textarea className="input" rows={10} cols={30} required/>
                </div>

                <button className="sub"> Submit </button>
            
                </form>
            </div>
        </div>
    )
}