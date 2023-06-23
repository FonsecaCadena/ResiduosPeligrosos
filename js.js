async function calcularSalario(event) {
        event.preventDefault();
        const residuo = document.getElementById("residuo").value;
        var tipoPeligro = "";

        if (residuo === "aceite" || residuo === "bateria" || residuo === "disolvente" || residuo === "pintura" || residuo === "pesticidas" || residuo === "quimico" || residuo === "farmaceuticos" || residuo === "mercurio" || residuo === "electronicos" || residuo === "acido" || residuo === "asbesto" || residuo === "gasolina") {
          tipoPeligro = "Peligroso";
        } else if (residuo === "papel" || residuo === "vidrio" || residuo === "plastico" || residuo === "madera" || residuo === "alimentos" || residuo === "jardineria" || residuo === "metal" || residuo === "ropa" || residuo === "construccion" || residuo === "aluminio" || residuo === "envases" || residuo === "yeso" || residuo === "textilesusados" || residuo === "carton") {
          tipoPeligro = "No Peligroso";
        }
            
        if (tipoPeligro) {
          document.getElementById("result").innerHTML = "El residuo " + residuo + " es " + tipoPeligro;
        } else {
          document.getElementById("result").innerHTML = "El residuo " + residuo + " no se reconoce";
        }
       
      }