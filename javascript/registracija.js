var register = document.getElementById('registracija')
var ime = document.getElementById('imeRegistracija')
var prezime = document.getElementById('prezimeRegistracija')
var email = document.getElementById('emailRegistracija')
var password = document.getElementById('passwordRegistracija')
var username = document.getElementById('usernameRegistracija')
var potvrdiPasswordRegistracija = document.getElementById('potvrdiPasswordRegistracija')

register.addEventListener('click', function (e) {

    e.preventDefault();
    provera();
});

function provera() {
    var imeValue = ime.value.trim(); //brisem razmake
    var prezimeValue = prezime.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var usernameValue = username.value.trim();
    var potvrdiValue = potvrdiPasswordRegistracija.value.trim();
    var brojeviREGEX = /^[A-Za-z]+$/;
    var velikaSlovaREGEX = /(?=.*[A-Z])/;
    var emailREGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if (prezimeValue === '' || emailValue === '' || passwordValue === '' || usernameValue === '' || potvrdiValue === '') {
        alert('Morate popuniti sva polja!');
    }


    if (imeValue.length < 3 || imeValue.length >= 15 || !brojeviREGEX.test(imeValue)) {
        document.getElementById("greska").style.display = "block";
        return false;
    } else {
        document.getElementById("greska").style.display = "none";
    }

    if (prezimeValue.length < 5 || prezimeValue.length >= 15 || !brojeviREGEX.test(prezimeValue)) {
        document.getElementById("greska1").style.display = "block";
        return false;
    } else {
        document.getElementById("greska1").style.display = "none";
    }

    if (usernameValue.length < 6 || usernameValue.length > 16 || brojeviREGEX.test(usernameValue)) {
        document.getElementById("greska2").style.display = "block";
        return false;
    } else {
        document.getElementById("greska2").style.display = "none";
    }

    if (passwordValue.length < 8 || !velikaSlovaREGEX.test(passwordValue) || brojeviREGEX.test(passwordValue)) {
        document.getElementById("greska3").style.display = "block";
        return false;
    } else {
        document.getElementById("greska3").style.display = "none";
    }

    if (potvrdiValue != passwordValue) {
        document.getElementById("greska4").style.display = "block";
        return false;
    } else {
        document.getElementById("greska4").style.display = "none";
    }

    if (!emailREGEX.test(emailValue)) {
        document.getElementById("greska5").style.display = "block";
        return false;
    } else {
        document.getElementById("greska5").style.display = "none";
    }

    alert('Uspesna registracija!')
    location.reload()
}
