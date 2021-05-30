var sacuvajIzmenu = document.getElementById('sacuvajIzmenuKorisnika')
var adresaID = document.getElementById('adresa')
var emailID = document.getElementById('email')
var imeID = document.getElementById('ime')
var prezimeID = document.getElementById('prezime')
var sifraID = document.getElementById('sifra')
var brojTelefonaID = document.getElementById('brojTelefona')
var datumRodjenjaID = document.getElementById('datumRodjenja')


sacuvajIzmenu.addEventListener('click', function (e) {
    e.preventDefault(); // sprecavam osnovnu akciju 
    proveraPodataka();
});

function proveraPodataka() {
    var adresaIDValue = adresaID.value.trim();
    var emailIDValue = emailID.value.trim();
    var imeIDValue = imeID.value.trim();
    var prezimeIDValue = prezimeID.value.trim();
    var sifraIDValue = sifraID.value.trim();
    var brojTelefonaIDValue = brojTelefonaID.value.trim();
    var datumRodjenjaIDValue = datumRodjenjaID.value.trim();

    var brojeviREGEX1 = /^[A-Za-z]+$/;
    var samoBrojevi = /^[0-9]*$/;
    var emailREGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var velikaSlovaREGEX = /(?=.*[A-Z])/;
    var datumRodjenjaREGEX = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    var brojeviIslovaREGEX = /^[0-9a-zA-Z]+$/;

    if (adresaIDValue === '' || emailIDValue === '' || imeIDValue === '' || prezimeIDValue === '' || sifraIDValue === '' || brojTelefonaIDValue === '' || datumRodjenjaIDValue === '') {
        alert('Morate popuniti sva polja!');
        return false;
    }

    if (adresaIDValue.length < 5 || adresaIDValue.length > 35 || brojeviIslovaREGEX.test(adresaIDValue)) {
        document.getElementById('izmena1').style.display = "block";
        return false;
    } else {
        document.getElementById('izmena1').style.display = "none";
    }

    if (!emailREGEX.test(emailIDValue)) {
        document.getElementById('izmena2').style.display = "block";
        return false;
    } else {
        document.getElementById('izmena2').style.display = "none";
    }

    if (imeIDValue.length < 3 || imeIDValue.length > 15 || !brojeviREGEX1.test(imeIDValue)) {
        document.getElementById('izmena3').style.display = "block";
        return false;
    } else {
        document.getElementById('izmena3').style.display = "none";
    }

    if (prezimeIDValue.length < 5 || prezimeIDValue.length >= 15 || !brojeviREGEX1.test(prezimeIDValue)) {
        document.getElementById('izmena4').style.display = "block";
        return false;
    } else {
        document.getElementById('izmena4').style.display = "none";
    }

    if (sifraIDValue.length < 8 || !velikaSlovaREGEX.test(sifraIDValue) || brojeviREGEX1.test(sifraIDValue)) {
        document.getElementById('izmena5').style.display = "block";
        return false;
    } else {
        document.getElementById('izmena5').style.display = "none";
    }

    if (brojTelefonaIDValue.length < 8 || !samoBrojevi.test(brojTelefonaIDValue)) {
        document.getElementById('izmena6').style.display = "block";
        return false;
    } else {
        document.getElementById('izmena6').style.display = "none";
    }
    if (!datumRodjenjaREGEX.test(datumRodjenjaIDValue)) {
        document.getElementById('izmena7').style.display = "block";
        return false;
    } else {
        document.getElementById('izmena7').style.display = "none";
    }

    alert('Izmena zavrsena!');
    location.reload();
}