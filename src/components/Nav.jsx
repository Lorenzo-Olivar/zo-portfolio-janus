
// react imports
import { Link, useLocation } from "react-router-dom";

// nav
export default function Nav() {

    // current page
    const currentPage = useLocation().pathname;

    // links directory
    const links = {
        aboutMe: '/',
        contact: '/Contact',
        portfolio: '/Portfolio',
        resume: '/Resume',
    };

    // custom styles
    // const styles = {
    //     header: {
    //         background: '#34623f'
    //     }
    // };

    return (
        <ul className="nav nav-underline">
            <li className="nav-item">
                <Link to={links.aboutMe} className={currentPage === links.aboutMe ? 'nav-link active' : 'nav-link'}>
                    About Me
                </Link>
            </li>
            <li className="nav-item">
                <Link to={links.contact} className={currentPage === links.contact ? 'nav-link active' : 'nav-link'}>
                    Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link to={links.portfolio} className={currentPage === links.portfolio ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link to={links.resume} className={currentPage === links.resume ? 'nav-link active' : 'nav-link'}>
                    Resume
                </Link>
            </li>
        </ul>
    );
}