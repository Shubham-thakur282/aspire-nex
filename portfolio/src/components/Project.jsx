
import project from "../projectData";
import Box from "./Box";

const Project = () => {
    return (
        <section className="project fluid-container" id="project">
            <div className="album py-5 project-container">
                <div className="container">
                    <div className="box-heading">
                        <h1 className="nav-heading">Projects</h1>
                        <p>Explore a diverse range of projects that showcase my passion, skills, and commitment to delivering
                            exceptional results.</p>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 boxes">

                        {project.map((project) => (<Box key={project.id} source={project.source} title={project.title} url={project.url} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}


export default Project;