var firebaseUrl = 'https://mojaknjizara-77e92-default-rtdb.firebaseio.com';

var request = new XMLHttpRequest();

function jedanKorisnik() {

    let params = (new URL(document.location)).searchParams;
    let korisnikID = params.get('id');

    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                korisnik = JSON.parse(request.responseText);
                podaciKorisnika();
            }
        }
    }
    request.open('GET', firebaseUrl + '/korisnici/' + korisnikID + '.json');
    request.send();
}

function podaciKorisnika() {

    var div = document.createElement('div');

    var datumRodjenja = document.createElement('p');
    datumRodjenja.innerHTML = 'Datum rodjenja:' + korisnik['datumRodjenja'];
    datumRodjenja.classList.add('tekst123')

    var adresa = document.createElement('p');
    adresa.innerText = 'Adresa: ' + korisnik['adresa'];
    adresa.classList.add('tekst123')

    var email = document.createElement('p');
    email.innerText = 'Email: ' + korisnik['email'];
    email.classList.add('tekst123')

    var ime = document.createElement('p');
    ime.innerText = 'Ime: ' + korisnik['ime'];
    ime.classList.add('tekst123')

    var prezime = document.createElement('p');
    prezime.innerText = 'Prezime: ' + korisnik['prezime'];
    prezime.classList.add('tekst123')

    var username = document.createElement('p');
    username.innerText = 'Username: ' + korisnik['username'];
    username.classList.add('tekst123')

    var telefon = document.createElement('p');
    telefon.innerText = 'Broj telefona: ' + korisnik['telefon'];
    telefon.classList.add('tekst123')


    var slikaDIV = document.createElement('p')
    var image = document.createElement('img')
    image.setAttribute('src', '../slike/image.png')
    image.classList.add('slika')

    slikaDIV.appendChild(image);
    div.appendChild(ime);
    div.appendChild(prezime);
    div.appendChild(datumRodjenja);
    div.appendChild(adresa);
    div.appendChild(email);
    div.appendChild(username);
    div.appendChild(telefon);

    document.getElementById('prikazJednogKorisnika').appendChild(div);
    document.getElementById('prikazSlike').appendChild(slikaDIV);
}

jedanKorisnik();
