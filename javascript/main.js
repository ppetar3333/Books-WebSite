var firebaseUrl = 'https://mojaknjizara-77e92-default-rtdb.firebaseio.com';

var request = new XMLHttpRequest();

function preuzimanjeKnjiga() {

    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var listaSvihKnjiga = [];
                var knjige = JSON.parse(request.responseText);
                for (id in knjige) {
                    var knjiga = knjige[id];
                    listaSvihKnjiga.push(id);
                    podaciKnjiga(id, knjiga);
                }
            }
        }
    }
    request.open('GET', firebaseUrl + '/knjige/' + '.json');
    request.send();
}

function podaciKnjiga(id, knjiga) {

    var pravljenjeDIV = document.createElement('div');
    pravljenjeDIV.classList.add('knjige');

    var naslov = document.createElement('a');
    naslov.setAttribute('href', 'PrikazKnjige.html?id=' + id);
    naslov.classList.add('naslovZaKnjigu');
    naslov.innerText = knjiga['naziv'];
    var autor = document.createElement('p');
    autor.innerText = knjiga['autor'];
    autor.classList.add('naslovZaKnjigu');

    var cena = document.createElement('p');
    cena.innerText = knjiga['cena'] + ' din';
    cena.classList.add('naslovZaKnjigu');

    var slikaLink = document.createElement('a')
    slikaLink.setAttribute('href', 'PrikazKnjige.html?id=' + id)
    var slika = document.createElement('img')
    slika.classList.add('klasaZaKnjigu')
    slika.setAttribute("src", knjiga['slika']);
    slikaLink.appendChild(slika)


    var kupiDiv = document.createElement('p')
    var kupi = document.createElement('button');
    kupi.innerHTML = "Kupi";
    kupi.classList.add('dugmeZaKupi')
    kupiDiv.appendChild(kupi)

    kupiDiv.addEventListener('click', function (e) {
        e.preventDefault();
        location.reload();
        alert('Knjiga ' + knjiga['naziv'] + ' je dodata u korpu!')
        var nazivKorpa = knjiga['naziv']
        var cenaKorpa = knjiga['cena']
        if (localStorage.getItem('naziv') == null && localStorage.getItem('cena') == null) {
            localStorage.setItem('naziv', '[]')
            localStorage.setItem('cena', '[]')
        }
        var oldData = JSON.parse(localStorage.getItem('naziv'))
        var oldDataCena = JSON.parse(localStorage.getItem('cena'))
        oldData.push(nazivKorpa)
        oldDataCena.push(cenaKorpa)
        localStorage.setItem('naziv', JSON.stringify(oldData))
        localStorage.setItem('cena', JSON.stringify(oldDataCena))
    });

    // ocenjivanje

    var ocena = document.createElement('span');
    ocena.innerText = knjiga['ocena'] + '/5';
    ocena.classList.add("naslovZaKnjigu");
    var ocena1 = knjiga['ocena'];

    var zvezdaSpan = document.createElement('span');

    for (var i = 0; i < ocena1; i++) {
        var zvezde = document.createElement('span');
        zvezde.setAttribute("class", "fa fa-star");
        zvezde.classList.add('zuta1');
        zvezdaSpan.appendChild(zvezde);
    }
    for (var i = 0; i < 5 - ocena1; i++) {
        var zvezde = document.createElement('span');
        zvezde.setAttribute("class", "fa fa-star");
        zvezde.classList.add('unchecked1');
        zvezdaSpan.appendChild(zvezde);
    }

    // popup
    var span = document.createElement('p');
    span.classList.add('span')
    var oceniDugme = document.createElement('a');
    oceniDugme.innerText = 'Oceni knjigu';
    oceniDugme.classList.add('dugmeZaKupi1')
    span.appendChild(oceniDugme);

    oceniDugme.addEventListener('click', function (e) {

        e.preventDefault();
        document.getElementById("oceni").style.display = "block";
        var nazivKnjige1 = document.getElementById('nazivKnjige1');
        nazivKnjige1.innerText = knjiga['naziv'] + ' -- ' + knjiga['ocena'] + '/5';
        nazivKnjige1.classList.add('nazivKnjige1')
        var ne = document.getElementById('ne');
        ne.addEventListener('click', function (e) {
            e.preventDefault();
            location.reload();
        });

        var ocenaKnjige = knjiga['ocena']

        if (ocenaKnjige == '5') {
            var zvezda1 = document.getElementById('zvezda1')
            zvezda1.classList.add('zuta')

            var zvezda2 = document.getElementById('zvezda2')
            zvezda2.classList.add('zuta')

            var zvezda3 = document.getElementById('zvezda3')
            zvezda3.classList.add('zuta')

            var zvezda4 = document.getElementById('zvezda4')
            zvezda4.classList.add('zuta')

            var zvezda5 = document.getElementById('zvezda5')
            zvezda5.classList.add('zuta')
        }
        if (ocenaKnjige == '4') {

            var zvezda1 = document.getElementById('zvezda1')
            zvezda1.classList.add('zuta')

            var zvezda2 = document.getElementById('zvezda2')
            zvezda2.classList.add('zuta')

            var zvezda3 = document.getElementById('zvezda3')
            zvezda3.classList.add('zuta')

            var zvezda4 = document.getElementById('zvezda4')
            zvezda4.classList.add('zuta')

            var zvezda5 = document.getElementById('zvezda5')
            zvezda5.classList.add('unchecked')
        }
        if (ocenaKnjige == '3') {
            var zvezda1 = document.getElementById('zvezda1')
            zvezda1.classList.add('zuta')

            var zvezda2 = document.getElementById('zvezda2')
            zvezda2.classList.add('zuta')

            var zvezda3 = document.getElementById('zvezda3')
            zvezda3.classList.add('zuta')

            var zvezda4 = document.getElementById('zvezda4')
            zvezda4.classList.add('unchecked')

            var zvezda5 = document.getElementById('zvezda5')
            zvezda5.classList.add('unchecked')
        }
        if (ocenaKnjige == '2') {
            var zvezda1 = document.getElementById('zvezda1')
            zvezda1.classList.add('zuta')

            var zvezda2 = document.getElementById('zvezda2')
            zvezda2.classList.add('zuta')

            var zvezda3 = document.getElementById('zvezda3')
            zvezda3.classList.add('unchecked')

            var zvezda4 = document.getElementById('zvezda4')
            zvezda4.classList.add('unchecked')

            var zvezda5 = document.getElementById('zvezda5')
            zvezda5.classList.add('unchecked')
        }
        if (ocenaKnjige == '1') {
            var zvezda1 = document.getElementById('zvezda1')
            zvezda1.classList.add('zuta')

            var zvezda2 = document.getElementById('zvezda2')
            zvezda2.classList.add('unchecked')

            var zvezda3 = document.getElementById('zvezda3')
            zvezda3.classList.add('unchecked')

            var zvezda4 = document.getElementById('zvezda4')
            zvezda4.classList.add('unchecked')

            var zvezda5 = document.getElementById('zvezda5')
            zvezda5.classList.add('unchecked')
        }


        zvezda1.addEventListener('mouseover', function (e) {
            e.preventDefault();
            document.getElementById('info').style.display = 'inline';
            zvezda1.style.color = 'yellow';
            zvezda2.style.color = 'black';
            zvezda3.style.color = 'black';
            zvezda4.style.color = 'black';
            zvezda5.style.color = 'black';
        });

        zvezda1.addEventListener('mouseleave', function (e) {
            e.preventDefault();
            document.getElementById('info').style.display = 'none';
            funkcija(ocenaKnjige);
        });

        zvezda2.addEventListener('mouseover', function (e) {
            e.preventDefault();
            document.getElementById('info2').style.display = 'inline';
            zvezda1.style.color = 'yellow';
            zvezda2.style.color = 'yellow';
            zvezda3.style.color = 'black';
            zvezda4.style.color = 'black';
            zvezda5.style.color = 'black';
        });
        zvezda2.addEventListener('mouseleave', function (e) {
            e.preventDefault();
            document.getElementById('info2').style.display = 'none';
            funkcija(ocenaKnjige)
        });

        zvezda3.addEventListener('mouseover', function (e) {
            e.preventDefault();
            document.getElementById('info3').style.display = 'inline';
            zvezda1.style.color = 'yellow';
            zvezda2.style.color = 'yellow';
            zvezda3.style.color = 'yellow';
            zvezda4.style.color = 'black';
            zvezda5.style.color = 'black';
        });
        zvezda3.addEventListener('mouseleave', function (e) {
            e.preventDefault();
            document.getElementById('info3').style.display = 'none';
            funkcija(ocenaKnjige)
        });

        zvezda4.addEventListener('mouseover', function (e) {
            e.preventDefault();
            document.getElementById('info4').style.display = 'inline';
            zvezda1.style.color = 'yellow';
            zvezda2.style.color = 'yellow';
            zvezda3.style.color = 'yellow';
            zvezda4.style.color = 'yellow';
            zvezda5.style.color = 'black';
        });
        zvezda4.addEventListener('mouseleave', function (e) {
            e.preventDefault();
            document.getElementById('info4').style.display = 'none';
            funkcija(ocenaKnjige)
        });

        zvezda5.addEventListener('mouseover', function (e) {
            e.preventDefault();
            document.getElementById('info5').style.display = 'inline';
            zvezda1.style.color = 'yellow';
            zvezda2.style.color = 'yellow';
            zvezda3.style.color = 'yellow';
            zvezda4.style.color = 'yellow';
            zvezda5.style.color = 'yellow';
        });
        zvezda5.addEventListener('mouseleave', function (e) {
            e.preventDefault();
            document.getElementById('info5').style.display = 'none';
            funkcija(ocenaKnjige)
        });

        zvezda1.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Knjigu: ' + knjiga['naziv'] + ' ste ocenili ocenom 1/5!');
            location.reload();
        });

        zvezda2.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Knjigu: ' + knjiga['naziv'] + ' ste ocenili ocenom 2/5!');
            location.reload();
        });

        zvezda3.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Knjigu: ' + knjiga['naziv'] + ' ste ocenili ocenom 3/5!');
            location.reload();
        });

        zvezda4.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Knjigu: ' + knjiga['naziv'] + ' ste ocenili ocenom 4/5!');
            location.reload();
        });

        zvezda5.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Knjigu: ' + knjiga['naziv'] + ' ste ocenili ocenom 5/5!');
            location.reload();
        });
    });

    // kraj ocenjivanja

    pravljenjeDIV.appendChild(naslov);
    pravljenjeDIV.appendChild(autor);
    pravljenjeDIV.appendChild(cena);
    pravljenjeDIV.appendChild(slikaLink);
    pravljenjeDIV.appendChild(zvezdaSpan);
    pravljenjeDIV.appendChild(ocena);
    pravljenjeDIV.appendChild(kupiDiv);
    pravljenjeDIV.appendChild(span);

    document.getElementById('upisPodataka').appendChild(pravljenjeDIV);


}

preuzimanjeKnjiga();


function funkcija(ocenaKnjige) {

    if (ocenaKnjige == '5') {
        zvezda1.style.color = 'yellow';
        zvezda2.style.color = 'yellow';
        zvezda3.style.color = 'yellow';
        zvezda4.style.color = 'yellow';
        zvezda5.style.color = 'yellow';
    }
    if (ocenaKnjige == '4') {
        zvezda1.style.color = 'yellow';
        zvezda2.style.color = 'yellow';
        zvezda3.style.color = 'yellow';
        zvezda4.style.color = 'yellow';
        zvezda5.style.color = 'black';
    }
    if (ocenaKnjige == '3') {
        zvezda1.style.color = 'yellow';
        zvezda2.style.color = 'yellow';
        zvezda3.style.color = 'yellow';
        zvezda4.style.color = 'black';
        zvezda5.style.color = 'black';
    }
    if (ocenaKnjige == '2') {
        zvezda1.style.color = 'yellow';
        zvezda2.style.color = 'yellow';
        zvezda3.style.color = 'black';
        zvezda4.style.color = 'black';
        zvezda5.style.color = 'black';
    }
    if (ocenaKnjige == '1') {
        zvezda1.style.color = 'yellow';
        zvezda2.style.color = 'black';
        zvezda3.style.color = 'black';
        zvezda4.style.color = 'black';
        zvezda5.style.color = 'black';
    }
}