export default function Footer() {
    // custom styles
    const styles = {
        footer: {
            background: '#c8d5b9',
            height: 100,
        }
    };

    return (
        <footer className="container-fluid d-flex justify-content-center align-items-center mt-4" style={styles.footer}>
            <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
            <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
            <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
        </footer>
    );
}