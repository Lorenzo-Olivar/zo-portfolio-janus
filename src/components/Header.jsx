// nav import
import Nav from "./Nav.jsx";

// header
export default function Header() {
    // custom styles
    const styles = {
        header: {
            background: '#c8d5b9',
            fontSize: 20,
            fontFamily: ['Indie Flower', 'cursive'],
        },
        navbarBrand: {
            fontSize: 40,
            color: '#1e2f23',
        },
    };

    return (
        <header
            className="navbar navbar-expand-lg sticky-top"
            style={styles.header}
        >
            <div className="container-fluid">
                <span className="navbar-brand" style={styles.navbarBrand}>
                    Lorenzo Olivar
                </span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Nav />
                </div>
            </div>
        </header>
    );
}
