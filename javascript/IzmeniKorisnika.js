var firebaseUrl = 'https://mojaknjizara-77e92-default-rtdb.firebaseio.com';


var request = new XMLHttpRequest();

function preuzimanjeKorisnika() {

    let params = (new URL(document.location)).searchParams;
    let korisnikID = params.get('id');

    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                korisnik = JSON.parse(request.responseText);
                podaci();
            }
        }
    }
    request.open('GET', firebaseUrl + '/korisnici/' + korisnikID + '.json');
    request.send();
}

function podaci() {

    var autor = document.getElementById('adresa');
    autor.setAttribute('placeholder', korisnik['adresa']);
    autor.classList.add('promenaFonta')

    var brojStranica = document.getElementById('email');
    brojStranica.setAttribute('placeholder', korisnik['email']);
    brojStranica.classList.add('promenaFonta')

    var cena = document.getElementById('datumRodjenja');
    cena.setAttribute('placeholder', korisnik['datumRodjenja']);
    cena.classList.add('promenaFonta')

    var godinaIzdavanja = document.getElementById('ime');
    godinaIzdavanja.setAttribute('placeholder', korisnik['ime']);
    godinaIzdavanja.classList.add('promenaFonta')

    var izdavackaKuca = document.getElementById('prezime');
    izdavackaKuca.setAttribute('placeholder', korisnik['prezime']);
    izdavackaKuca.classList.add('promenaFonta')

    var jezik = document.getElementById('sifra');
    jezik.setAttribute('value', korisnik['password']);
    jezik.classList.add('promenaFonta')

    var naslov = document.getElementById('brojTelefona');
    naslov.setAttribute('placeholder', korisnik['telefon']);
    naslov.classList.add('promenaFonta')


}

preuzimanjeKorisnika();
