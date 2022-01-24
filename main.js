
const sconto20 = 20;
const sconto40 = 40;

const prezzoKm = 0.21;


let offerta = "";
totale = 0


let passeggero = document.getElementById("passeggero");
let tipoOfferta = document.getElementById("tipoOfferta");
let numCarrozza = document.getElementById("numCarrozza");
let codiceCP = document.getElementById("codiceCP");
let costoBiglietto = document.getElementById("costoBiglietto");

const genera = document.getElementById("genera");
const annulla = document.getElementById("annulla");
let ticket = document.getElementById("biglietto");
let counter = 0;

genera.addEventListener('click',

    function(){
        
        if(counter == 0){
            ticket.classList.add("active")  

            const nome = document.getElementById("nome").value;
            const km = parseInt(document.getElementById("km").value);
            const eta = document.getElementById("eta");
                
            const carrozza = Math.floor(Math.random() * 5) + 1;
            const cpCode = Math.floor(Math.random() * 100000) + 1;
            let prezzoIntero = km * prezzoKm;

            if(eta.value == "Minorenne"){
                offerta = "Sconto minorenni";
                totale = prezzoIntero * sconto20 / 100;
            }

            else if(eta.value == "over65"){
                offerta = "Sconto Over 65"
                totale = prezzoIntero * sconto40 / 100;
            }

            else if(eta.value == "Adulto"){
                offerta = "Tariffa adulto"
                totale = prezzoIntero;
            }

            passeggero.append(nome);
            tipoOfferta.append(offerta);
            numCarrozza.append(carrozza);
            codiceCP.append(cpCode);
            costoBiglietto.innerHTML = `<div>` + `<p>Costo biglietto</p>` + totale.toFixed(2) + ` Euro` + `</div>`;
            
            counter += 1;
            }
            
          
    }  
);

annulla.addEventListener('click',
    function(){
        counter = 0;
        passeggero.remove(nome);
        ticket.classList.remove("active");

    }
)



