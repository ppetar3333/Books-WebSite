var firebaseUrl = 'https://mojaknjizara-77e92-default-rtdb.firebaseio.com';


var request = new XMLHttpRequest();

function preuzimanjeKnjige() {

    let params = (new URL(document.location)).searchParams;
    let IDknjige = params.get('id');

    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                knjiga = JSON.parse(request.responseText);
                podaci();
            }
        }
    }
    request.open('GET', firebaseUrl + '/knjige/' + IDknjige + '.json');
    request.send();
}

function podaci() {

    var autor = document.getElementById('autor');
    autor.setAttribute('placeholder', knjiga['autor']);
    autor.classList.add('promenaFonta')

    var brojStranica = document.getElementById('brojStranica');
    brojStranica.setAttribute('placeholder', knjiga['brojStranica']);
    brojStranica.classList.add('promenaFonta')

    var cena = document.getElementById('cena');
    cena.setAttribute('placeholder', knjiga['cena']);
    cena.classList.add('promenaFonta')

    var godinaIzdavanja = document.getElementById('godinaIzadavnja');
    godinaIzdavanja.setAttribute('placeholder', knjiga['godinaIzdavanja']);
    godinaIzdavanja.classList.add('promenaFonta')

    var izdavackaKuca = document.getElementById('izadavackaKuca');
    izdavackaKuca.setAttribute('placeholder', knjiga['izdavackaKuca']);
    izdavackaKuca.classList.add('promenaFonta')

    var jezik = document.getElementById('jezik');
    jezik.setAttribute('placeholder', knjiga['jezik']);
    jezik.classList.add('promenaFonta')

    var naslov = document.getElementById('nazivKnjige');
    naslov.setAttribute('placeholder', knjiga['naziv']);
    naslov.classList.add('promenaFonta')

    var opis = document.getElementById('opisKnjige');
    opis.setAttribute('placeholder', knjiga['opis']);
    opis.classList.add('promenaFonta')

}

preuzimanjeKnjige();



