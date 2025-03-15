function toggleMenu()
{
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open")
    icon.classList.toggle("open")

}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzvdVaS5QjLy7_qzGceoPRLuEIJjbM_Tp6A0inZC5t1BSyVfidSQYQxIbK-y5CCCWPpyA/exec'
  const form = document.forms['submit-to-google-sheet']

  const message = document.getElementById("message")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = "You have sent the message successfully"
        setTimeout(function(){
          message.innerHTML = ""
        }, 1000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
