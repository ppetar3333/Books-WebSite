var firebaseUrl = 'https://mojaknjizara-77e92-default-rtdb.firebaseio.com';

function formaZaLogIn() {

    loginDugme = document.getElementById('loginForma')

    loginDugme.addEventListener('click', function (e) {
        e.preventDefault();
        var request = new XMLHttpRequest();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (username === '' || password == '') {
            alert('Potrebno je popuniti sva polja!');
        } else {
            request.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        korisnici = JSON.parse(request.responseText)
                        for (i in korisnici) {
                            if (korisnici[i]['username'] == username && korisnici[i]['password'] == password) {
                                document.getElementById("connect").style.display = "none";
                                alert('Korisnik ulogovan!');
                                location.reload();
                            }
                        }
                    }
                }
            }
            request.open('GET', firebaseUrl + '/korisnici/' + '.json');
            request.send()
        }
    });
}

formaZaLogIn();

