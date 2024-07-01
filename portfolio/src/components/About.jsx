
// style={{"marginTop": "80px" , "marginBottom": "80px"}}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import img from "../assets/images/pngwing.com.png";

const Home = () => {
    const resumeUrl = "https://drive.google.com/file/d/1PwisMd1j8XIA5O2iodiVFQsG7fG9kaVJ/view?usp=drive_link";
    return (
        <section id="about" className="container-fluid about">
            <div className="container col-xxl-8 ">
                <div className="row flex-lg-row align-items-center g-5">
                    <div className="col-10 col-sm-8 col-lg-4">
                        <img src={img} className="d-block mx-lg-auto img-fluid hero-img" id="hero-img"
                            style={{ borderRadius: "2%" }} alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-8">
                        <div className="discription-content">
                            <h5 className="sub-title" /*style="margin-bottom: 10px;"*/>WHO AM I?</h5>
                            <h2 className="title">
                                I'm Shubham Thakur, a Web Developer
                            </h2>
                            <p>
                                MERN stack web developer with a focus on seamless user experiences through innovative designs and
                                efficient code. Skilled in modern web technologies, I deliver robust and scalable solutions.
                            </p>
                            <div className="icons">
                                <FontAwesomeIcon icon={faInstagram} onClick={() => window.open('https://www.instagram.com/shubham_here25?igsh=MTQ4a29lOHd5ejg5OQ==',"_blank")} />
                                <FontAwesomeIcon icon={faLinkedin} onClick={() => window.open('https://www.linkedin.com/in/shubham-thakur-61b043220/',"_blank")} />
                                <FontAwesomeIcon icon={faGithub} onClick={() => window.open('https://github.com/Shubham-thakur282',"_blank")} />
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start button-class">
                                <a href={resumeUrl} target='_blank' rel="noreferrer" type="button"  className="btn btn-lg px-4 me-md-2" fdprocessedid="z1w3da" id="btn3">Download
                                    cv</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Home;
