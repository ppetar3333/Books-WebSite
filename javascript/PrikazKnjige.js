var firebaseUrl = 'https://mojaknjizara-77e92-default-rtdb.firebaseio.com';


var request = new XMLHttpRequest();

function preuzimanjeKnjige() {

    let params = (new URL(document.location)).searchParams;
    let IDknjige = params.get('id');

    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                knjiga = JSON.parse(request.responseText);
                prikazJedneKnjige = IDknjige;
                podaci();
            }
        }
    }
    request.open('GET', firebaseUrl + '/knjige/' + IDknjige + '.json');
    request.send();
}

function podaci() {

    var pravljenjeDIV = document.createElement('div');
    pravljenjeDIV.classList.add('knjige')


    var divZaSliku = document.createElement('div');

    var slika = document.createElement('img')
    slika.setAttribute('src', knjiga['slika']);
    slika.classList.add('klasaZaSliku')

    divZaSliku.append(slika)


    var autor = document.createElement('p');
    autor.innerText = 'Autor: ' + knjiga['autor'];
    autor.classList.add('tekst');

    var brojStranica = document.createElement('p');
    brojStranica.innerText = 'Broj stranica: ' + knjiga['brojStranica'];
    brojStranica.classList.add('tekst')

    var cena = document.createElement('p');
    cena.innerText = 'Cena: ' + knjiga['cena'] + ' din';
    cena.classList.add('tekst');

    var godinaIzdavanja = document.createElement('p');
    godinaIzdavanja.innerText = 'Godina izdavanja: ' + knjiga['godinaIzdavanja'];
    godinaIzdavanja.classList.add('tekst');

    var isbn = document.createElement('p')
    isbn.innerText = 'ISBN broj: ' + knjiga['isbn']
    isbn.classList.add('tekst')

    var izdavackaKuca = document.createElement('p')
    izdavackaKuca.innerText = 'Izdavacka kuca: ' + knjiga['izdavackaKuca']
    izdavackaKuca.classList.add('tekst')

    var jezik = document.createElement('p')
    jezik.innerText = 'Jezik: ' + knjiga['jezik']
    jezik.classList.add('tekst')

    var naslov = document.createElement('p')
    naslov.innerText = 'Naziv: ' + knjiga['naziv']
    naslov.classList.add('tekst')

    var opis = document.createElement('p')
    opis.innerText = 'Opis: ' + knjiga['opis']
    opis.classList.add('tekst')

    var pismo = document.createElement('p')
    pismo.innerText = 'Pismo: ' + knjiga['pismo']
    pismo.classList.add('tekst')

    var tipPoveza = document.createElement('p')
    tipPoveza.innerText = 'Tip poveza: ' + knjiga['tipPoveza']
    tipPoveza.classList.add('tekst')

    var izmeni = document.createElement('button');
    var linkZaIzmenu = document.createElement('a');
    linkZaIzmenu.setAttribute('href', 'IzmeniKnjigu.html?id=' + prikazJedneKnjige);
    izmeni.innerHTML = "Izmeni";
    izmeni.classList.add('izmeni')
    linkZaIzmenu.appendChild(izmeni);

    var obrisi = document.createElement('a');
    obrisi.classList.add('izmeni');
    obrisi.innerHTML = 'Obrisi';

    obrisi.addEventListener('click', function (e) {
        document.getElementById("obrisiDijalog").style.display = "block";
        var da = document.getElementById('da');
        var ne = document.getElementById('ne');
        da.addEventListener('click', function (e) {
            alert('Knjiga uspesno obrisana!');
            location.reload();
        });
        ne.addEventListener('click', function (e) {
            alert('Odustali ste od brisanja!');
            location.reload();
        });
    });

    pravljenjeDIV.appendChild(obrisi);
    pravljenjeDIV.appendChild(linkZaIzmenu);
    pravljenjeDIV.appendChild(autor);
    pravljenjeDIV.appendChild(brojStranica)
    pravljenjeDIV.appendChild(cena);
    pravljenjeDIV.appendChild(godinaIzdavanja);
    pravljenjeDIV.appendChild(isbn);
    pravljenjeDIV.appendChild(izdavackaKuca);
    pravljenjeDIV.appendChild(jezik);
    pravljenjeDIV.appendChild(naslov);
    pravljenjeDIV.appendChild(opis);
    pravljenjeDIV.appendChild(pismo);
    pravljenjeDIV.appendChild(tipPoveza);


    document.getElementById('prikazJedneKnjige').appendChild(pravljenjeDIV);
    document.getElementById('prikazSlike').appendChild(divZaSliku)
}

preuzimanjeKnjige()
