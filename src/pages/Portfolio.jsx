
// projectCard import
import ProjectCard from "./ProjectCard";

// project list import
import projects from "../assets/js/projects.js";

export default function Portfolio() {
    return (
        <div>
            <h2>Portfolio Page</h2>
            <div className="row">
                <ProjectCard projects={projects}/>
            </div>
        </div>
    );
}