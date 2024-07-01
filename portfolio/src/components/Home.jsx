
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/images/img.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <section className="container home" id="home">
      <div className="container col-xxl-8">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={img}
              className="d-block mx-lg-auto img-fluid hero-img"
              id="hero-img"
              style={{ borderRadius: "110px" }}
              alt="Shubham img"
              width="700"
              height={500}
              loading="lazy"
            ></img>
          </div>
          <div className="col-lg-6">
            <div className="discription-content">
              <h5 className="sub-title">Hello</h5>
              <h2 className="title">
                <span>I'm </span>
                Shubham Thakur
              </h2>
              <h2 className="title-about">
                a{" "}
                <ReactTyped
                  strings={["Web Developer", "Student", "Learner"]}
                  typeSpeed={160}
                  loop
                  backSpeed={60}
                  cursorChar="|"
                  showCursor={true}
                  className="words"
                />
              </h2>
              <p>Passionate MERN Developer with a thirst for knowledge, constantly pushing boundaries to
                create innovative and user-centric websites.</p>
              <div className="icons">
                <FontAwesomeIcon icon={faInstagram} onClick={() => window.open('https://www.instagram.com/shubham_here25?igsh=MTQ4a29lOHd5ejg5OQ==', "_blank")} />
                <FontAwesomeIcon icon={faLinkedin} onClick={() => window.open('https://www.linkedin.com/in/shubham-thakur-61b043220/', "_blank")} />
                <FontAwesomeIcon icon={faGithub} onClick={() => window.open('https://github.com/Shubham-thakur282', "_blank")} />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start button-class">
                <a href="/home" onClick={()=> window.location = "mailto:shubham58188@gmail.com"} type="button" className="btn btn-lg px-4 me-md-2" fdprocessedid="z1w3da" id="btn1">Hire Me</a>
                <a href="#skills" type="button" className="btn btn-lg px-4" id="btn2" fdprocessedid="yno3ta">Expertise</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Home;