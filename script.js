
 // generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


 const emailList = document.getElementById('email-list');

 const emails = [];


 for (let i = 0; i < 10; i++) {
  fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then(data => {
      emails.push(data.response);

      // quando ho 10 email, le stampo
      if (emails.length === 10) {
        stampaEmail();
      }
    });
}


function stampaEmail() {
  emailList.innerHTML = '';

  emails.forEach(email => {
    const li = document.createElement('li');
    li.textContent = email;
    emailList.appendChild(li);
  });
}