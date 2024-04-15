function resetToHome() {
    window.location.hash = '#home'

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('c7').checked = true;
    });
}

export default resetToHome