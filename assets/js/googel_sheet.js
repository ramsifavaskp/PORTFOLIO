const scriptURL = 'https://script.google.com/macros/s/AKfycbxVbgON37dPABpQ0IH57x6KxNC6yF4VVNXlrvY2tJU2ecuTgYKelkkH4X4CqVvX3eCu/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
