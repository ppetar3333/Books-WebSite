var sacuvajIzmenu = document.getElementById('sacuvajIzmenu')
var nazivID = document.getElementById('nazivKnjige')
var izadavackaKucaID = document.getElementById('izadavackaKuca')
var autorID = document.getElementById('autor')
var godinaIzadavnjaID = document.getElementById('godinaIzadavnja')
var opisID = document.getElementById('opisKnjige')
var cenaID = document.getElementById('cena')
var brojStranicaID = document.getElementById('brojStranica')
var jezikID = document.getElementById('jezik')


sacuvajIzmenu.addEventListener('click', function (e) {
    e.preventDefault();
    proveraPodataka();
});

function proveraPodataka() {
    var nazivIDValue = nazivID.value.trim();
    var izadavackaKucaIDValue = izadavackaKucaID.value.trim();
    var autorIDValue = autorID.value.trim();
    var godinaIzadavnjaIDValue = godinaIzadavnjaID.value.trim();
    var opisIDValue = opisID.value.trim();
    var cenaIDValue = cenaID.value.trim();
    var brojStranicaIDValue = brojStranicaID.value.trim();
    var jezikIDValue = jezikID.value.trim();
    var brojeviREGEX1 = /^[A-Za-z]+$/;
    var samoBrojevi = /^[0-9]*$/;
    var datum = new Date();
    var trenutnaGodina = datum.getFullYear();

    if (nazivIDValue === '' || izadavackaKucaIDValue === '' || autorIDValue === '' || godinaIzadavnjaIDValue === '' || opisIDValue === '' || cenaIDValue === '' || brojStranicaIDValue === '' || jezikIDValue === '') {
        alert('Morate popuniti sva polja!');
        return false;
    }

    if (nazivIDValue.length < 3 || nazivIDValue.length > 20 || !brojeviREGEX1.test(nazivIDValue)) {
        document.getElementById('izmeni1').style.display = "block";
        return false;
    } else {
        document.getElementById('izmeni1').style.display = "none";
    }

    if (izadavackaKucaIDValue.length < 3 || izadavackaKucaIDValue.length > 20 || !brojeviREGEX1.test(izadavackaKucaIDValue)) {
        document.getElementById('izmeni2').style.display = "block";
        return false;
    } else {
        document.getElementById('izmeni2').style.display = "none";
    }

    if (autorIDValue.length < 3 || autorIDValue.length > 40 || !brojeviREGEX1.test(autorIDValue)) {
        document.getElementById('izmeni3').style.display = "block";
        return false;
    } else {
        document.getElementById('izmeni3').style.display = "none";
    }

    if (godinaIzadavnjaIDValue > trenutnaGodina || !samoBrojevi.test(godinaIzadavnjaIDValue)) {
        document.getElementById('izmeni4').style.display = "block";
        return false;
    } else {
        document.getElementById('izmeni4').style.display = "none";
    }
    if (opisIDValue.length < 10 || opisIDValue.length > 600) {
        document.getElementById('izmeni5').style.display = "block";
        return false;
    } else {
        document.getElementById('izmeni5').style.display = "none";
    }
    if (cenaIDValue.length < 1 || cenaIDValue.length > 10 || !samoBrojevi.test(cenaIDValue)) {
        document.getElementById('izmeni6').style.display = "block";
        return false;
    } else {
        document.getElementById('izmeni6').style.display = "none";
    }
    if (brojStranicaIDValue.length < 1 || brojStranicaIDValue.length > 5 || !samoBrojevi.test(brojStranicaIDValue)) {
        document.getElementById('izmeni7').style.display = "block";
        return false;
    } else {
        document.getElementById('izmeni7').style.display = "none";
    }
    if (jezikIDValue.length < 3 || jezikIDValue.length > 20 || !brojeviREGEX1.test(jezikIDValue)) {
        document.getElementById('izmeni8').style.display = "block";
        return false;
    } else {
        document.getElementById('izmeni8').style.display = "none";
    }
    alert('Izmena zavrsena!');
    location.reload();
}