const scriptURL = 'https://script.google.com/macros/s/AKfycbwOOD1avbsyRbhCVQ7QIY1boPXUgkRTq8ELJ8r8C5xgOrV8KxUSpieI_mtZQWZjkSM6/exec'

const form = document.forms['form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Muchas gracias, tu respuesta fue enviada." ))
  .then(() => { window.location.reload(true); })
  .catch(error => console.error('Error!', error.message))
})