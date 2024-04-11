const formulario = document.querySelector('#form')
const modal = document.querySelector('#modal')
const closeButton = document.querySelector('#btn_close-modal')

function openModal() {
  modal.open = true
}

function closeModal() {
  modal.open = false
}

function sendEmail(e) {
  e?.preventDefault()
  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  }

  if (params.name && params.email && params.subject && params.message) {
    console.log(params)
    //emailjs.send("service_xdjou6w","template_0om4a7q"
    emailjs.send("service_xdjou6w","template_0om4a7q", params)
      .then(openModal())
      .catch(err => console.log(err))
  }

}

closeButton.addEventListener('click', closeModal)
formulario.addEventListener('submit', sendEmail)

export default sendEmail