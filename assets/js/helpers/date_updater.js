function updateCopyrightYear() {
    const currentYear = new Date().getFullYear
    const copyrightElement = document.querySelector('.footer__copy')

    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentYear}, Todos los derechos reservados.`
    }
}

export default updateCopyrightYear