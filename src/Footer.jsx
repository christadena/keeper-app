
function Footer() {
    const currentYear = new Date  ().getFullYear();
    return (
        <footer>
            <p className="text-white dark:text-gray-400">Copyright ⓒ {currentYear}</p>
        </footer>
    );
}

export default Footer;