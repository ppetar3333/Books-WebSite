var ukupno = 0

function korpaItems() {
    if (localStorage.getItem('naziv') != null) {
        var knjigeUKorpi = eval((localStorage.getItem('naziv')))
        for (i in knjigeUKorpi) {
            var naziv = document.getElementById('naziv')
            var knjigaDiv = document.createElement('tr')
            knjigaDiv.classList.add('podaci12345')
            knjigaDiv.innerHTML = knjigeUKorpi[i]
            naziv.appendChild(knjigaDiv)
        }
    }
    if (localStorage.getItem('cena') != null) {
        var knjigeUKorpiCena = eval((localStorage.getItem('cena')))
        for (i in knjigeUKorpiCena) {
            var cena = document.getElementById('cena')
            var knjigaDiv = document.createElement('tr')
            knjigaDiv.classList.add('podaci12345')
            knjigaDiv.innerHTML = knjigeUKorpiCena[i] + ' din'
            cena.appendChild(knjigaDiv)
        }
        var korpa = eval(localStorage.getItem('cena'))
        var ukupnaCena = document.getElementById('ukupnaCena')
        for (i in korpa) {
            ukupno += korpa[i]
            ukupnaCena.innerHTML = 'Ukupna cena: ' + ukupno + ' din'
        }
    }

    var knjigeUKorpi = eval((localStorage.getItem('naziv')))
    for (i in knjigeUKorpi) {
        var dugme = document.getElementById('dugmezabrisanje');
        dugmeTD = document.createElement('tr');
        dugmeBtn = document.createElement('a');
        dugmeBtn.classList.add('dugmic');
        dugmeBtn.innerHTML = 'Obrisi';
        dugmeTD.appendChild(dugmeBtn)
        dugme.appendChild(dugmeTD)
        dugme.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Knjiga je obrisana iz korpe!')
            location.reload();
        });
    }

    var kupi1 = document.getElementById('kupi')
    var kupi2 = document.createElement('tr')
    var kupi = document.createElement('a')
    kupi1.addEventListener('click', function (e) {
        alert('Uspesno ste zavrsili kupovinu!')
        localStorage.clear()
        location.reload()
    });
    kupi1.classList.add('dugmic')
    kupi1.appendChild(kupi2)
    kupi2.appendChild(kupi)


}

korpaItems();

