var firebaseUrl = 'https://mojaknjizara-77e92-default-rtdb.firebaseio.com';

var request = new XMLHttpRequest();

function preuzimanjeKorisnika() {

    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                // var listaSvihKorisnika = [];
                korisnici = JSON.parse(request.responseText);
                for (id in korisnici) {
                    var korisnik = korisnici[id];
                    // listaSvihKorisnika.push(id);
                    podaciKorisnika(id, korisnik);
                }
            }
        }
    }
    request.open('GET', firebaseUrl + '/korisnici/' + '.json');
    request.send();
}

function podaciKorisnika(id, korisnik) {

    var pravljenjeDIV = document.createElement('tr');

    var ime = document.createElement('td');
    ime.innerText = korisnik['ime'];
    ime.classList.add('zaSvePodatke');

    var prezime = document.createElement('td');
    prezime.innerText = korisnik['prezime'];
    prezime.classList.add('zaSvePodatke');

    var username = document.createElement('td');
    username.innerText = korisnik['username'];
    username.classList.add('zaSvePodatke');

    var prikaziTD = document.createElement('td');
    var linkZaPrikaz = document.createElement('a');
    linkZaPrikaz.classList.add('dugme');
    linkZaPrikaz.innerText = 'Prikazi';
    linkZaPrikaz.setAttribute('href', 'PrikaziKorisnika.html?id=' + id);
    prikaziTD.appendChild(linkZaPrikaz);

    var izmeniTD = document.createElement('td');
    var linkZaIzmenu = document.createElement('a');
    linkZaIzmenu.classList.add('dugme');
    linkZaIzmenu.innerText = 'Izmeni';
    linkZaIzmenu.setAttribute('href', 'IzmeniKorisnika.html?id=' + id);
    izmeniTD.appendChild(linkZaIzmenu);

    var obrisi = document.createElement('td');
    var linkZaBrisanje = document.createElement('a');
    linkZaBrisanje.classList.add('dugme');
    linkZaBrisanje.innerHTML = 'Obrisi';
    obrisi.appendChild(linkZaBrisanje);

    obrisi.addEventListener('click', function (e) {
        document.getElementById("obrisiDijalog").style.display = "block";
        var da = document.getElementById('da');
        var ne = document.getElementById('ne');
        da.addEventListener('click', function (e) {
            alert('Korisnik uspesno obrisan!');
            location.reload();
        });
        ne.addEventListener('click', function (e) {
            alert('Odustali ste od brisanja!');
            location.reload();
        });
    });

    pravljenjeDIV.appendChild(ime);
    pravljenjeDIV.appendChild(prezime)
    pravljenjeDIV.appendChild(username);
    pravljenjeDIV.appendChild(prikaziTD);
    pravljenjeDIV.appendChild(izmeniTD);
    pravljenjeDIV.appendChild(obrisi)

    document.getElementById('podaciKorisnika').appendChild(pravljenjeDIV);


}

preuzimanjeKorisnika();