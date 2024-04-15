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
    from_name: document.getElementById('subject').value,
    user_name: document.getElementById('name').value,
    user_email: document.getElementById('email').value,
    message: document.getElementById('message').value
  }

  if (params.from_name && params.user_name && params.user_email && params.message) {
    console.log(params)
    emailjs.send("service_xdjou6w","template_0om4a7q", params)
      .then(openModal())
      .catch(err => console.log(err))
  } else {
    console.log('no estan todos los parametros')
    console.log(params)
  }

}

closeButton.addEventListener('click', closeModal)
formulario.addEventListener('submit', sendEmail)

export default sendEmail