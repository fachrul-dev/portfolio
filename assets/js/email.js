// listen for a submit

function sendEmail() {
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#message').value;
  let subject = document.querySelector('#subject').value;
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'fachrul.hidayat15@gmail.com',
    Password: 'fafwfawff',
    To: 'fachrul.hidayat15@gmail.com',
    From: `${email}`,
    Subject: `${subject}`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> ${message}`,
  }).then((message) => alert('mail sent successfully'));
}
