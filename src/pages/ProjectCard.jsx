/* eslint-disable react/prop-types */

// styles import
import '../styles/ProjectCard.css'

export default function ProjectCard({ projects }) {
    return (
        <>
            {projects.map((project) => (
                <div className="col-sm-6 mb-3 mb-sm-0" key={project.id}>
                    <div className="card text-center">
                        <div className="card-header h4">
                            {project.projectName}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Description</h5>
                            <p className="card-text">{project.shortDescription}</p>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${project.classId}`}>
                                Dive Deeper!
                            </button>
                            <div className="modal fade" id={`${project.classId}`} tabIndex="-1" aria-labelledby={`${project.classId}label`} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id={`${project.classId}label`}>{project.projectName}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <img src={project.picture} className="card-img-top" alt="Picture of Lorenzo's project" />
                                            <p>{project.fullDescription}</p>
                                        </div>
                                        <div className="modal-footer">
                                            <a className="btn btn-primary btn-sm" href={project.link.website} role="button">Go to Website</a>
                                            <a className="btn btn-primary btn-sm" href={project.link.gitHub} role="button">Go to GitHub Repo!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}