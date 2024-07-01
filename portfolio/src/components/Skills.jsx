
import skill from "../skillsData";
import Box from "./Box";

const Skills = ()=>{
    return(
        <section className="skills fluid-container" id="skills">
            <div className="album py-5 skills-container">
                <div className="container">
                    <div className="box-heading">
                        <h1 className="nav-heading">Expertise</h1>
                        <p>An impressive array of skills cultivated through dedication, experience, and continuous learning.</p>
                    </div>
                
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 boxes">

                    {skill.map((skill)=>(<Box key={skill.id} source={skill.source} title={skill.title} url={skill.url} />
                    ))}
                </div>

                </div>
            </div>
        </section>
    );
}


export default Skills;