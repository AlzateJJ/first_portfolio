const downloadCvBtn = document.querySelector('#downloadCvBtn')

function descargarArchivo() {
    // URL del archivo que deseas descargar
    const archivoURL = './assets/docs/2. CV - Juan Jose Alzate Rojas.pdf';
  
    // Nombre del archivo que se descargará
    const nombreArchivo = '2. CV - Juan Jose Alzate Rojas.pdf';
  
    // Crear un enlace temporal
    const enlaceTemporal = document.createElement('a');
    enlaceTemporal.href = archivoURL;
    enlaceTemporal.download = nombreArchivo;
  
    // Hacer clic en el enlace temporal
    // enlaceTemporal.click();

    // Agregar el enlace temporal al DOM
    document.body.appendChild(enlaceTemporal);

    // Hacer clic en el enlace temporal
    // enlaceTemporal.click();

    // Eliminar el enlace temporal del DOM
    document.body.removeChild(enlaceTemporal);
}

downloadCvBtn.addEventListener('click', descargarArchivo)

export default descargarArchivo