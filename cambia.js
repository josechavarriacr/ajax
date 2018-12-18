
        document.getElementById("cambiaContenido").addEventListener("click", cambiaContenido);
        function cambiaContenido() {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("texto").innerHTML = this.responseText;
                }
            };
            /* .open: especifica la solicitud
             - GET/POST.
             - Archivo: txt, php, xml, json, etc.
             - true/false: método de envío. */
            xhr.open("GET", "https://api.github.com/users", true);

            /* .send: envía la solicitud al servidor.
                Si utilizamos POST debemos pasar los datos por parámetro */
            xhr.send();
        }
