function sendMessage(){
    let parms = {
        name:document.getElementById("name-field").value,
        email:document.getElementById("email-field").value,
        subject:document.getElementById("subject-field").value,
        message:document.getElementById("message-field").value,
    }
    emailjs.send("service_9di05ss","template_ffeheq8",parms).then(alert("Email sent !!"))
}