import parallax from "./components/parallax.js"; //fixed
import activeMenu from "./components/selected_menu.js"; //fixed
import updateCopyrightYear from "./helpers/date_updater.js"; //fixed
import resetToHome from "./helpers/reload_page.js"; //working
import sendEmail from "./helpers/send__form.js";
import descargarArchivo from './helpers/download_cv.js'

parallax()

activeMenu()

resetToHome()

updateCopyrightYear()

sendEmail()

descargarArchivo()