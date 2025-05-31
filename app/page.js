import Link from "next/link";

export default function Home() {
  return (
    <div id="row">
    <div className="AboutMe">
      <h1 className="AHeader">About Me:</h1>
      <p className="Name" >My name is Jake Pisanwarakul, and I am a sophomore at Chelmsford Public High School.</p>
      <p>I am 16 years old.</p>
    </div>

    <div>
      <h1 className="header">Jake Pisanwarakul</h1>
      <img className="image" src="f22-raptor.webp" />
    </div>



    <div className = "ContactInfo"> 
      <h1 className = "CHeader">Contact Info:</h1>
      <p>Email: jake.theerapat@gmail.com</p>
      <p>Phone: 978-888-5767</p>
     <a href="https://www.instagram.com/jake_pisanwarakul/">Instagram</a>
     <li>
     <a href="https://github.com/tugcow232">Github</a>
     </li>
    </div>
  
    {/* <Link href="/page">link text</Link> */}
    </div>


  )
}
