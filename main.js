
//Imposta prezzo per ogni km percorso
const priceForKm = 0.21;

//Imposta valore degli sconti
const discount20 = 20;
const discount40 = 40;

//Prezzo totale del ticket
let ticketPrice = km * priceForKm;

//Contengono il totale dello sconto applicato e il totale al netto di eventuali sconti
let total = 0;

let offerta = "";
let carrozza = Math.floor(Math.random() * 5) + 1;
let codiceCP = Math.floor(Math.random() * 10000) + 1;


let generate = document.getElementById("generate");
let annulla = document.getElementById("annulla");
let nomePasseggero = document.getElementById("nomePasseggero");
let tipoOfferta = document.getElementById("tipoOfferta");
let numCarrozza = document.getElementById("numCarrozza");
let cpCode = document.getElementById("cpCode");
let costo = document.getElementById("costo");

generate.addEventListener('click',
    function(){

        const name = document.getElementById("name").value;
        const km = document.getElementById("km").value;
        const discountList = document.getElementById("discountList").value;
        
        if (discountList == "Minorenne"){
            offerta = "Sconto Minorenni"
            total = ticketPrice * discount20 / 100;
        }

        else if(discountList == "Over 65"){
            offerta = "Sconto Over 65"
            total = ticketPrice * discount40 / 100;
        }

        else if(discountList=="Adult"){
            offerta = "Biglietto Standard"
            total = ticketPrice
        }

        nomePasseggero.append(name);
        tipoOfferta.append(offerta);
        numCarrozza.append(carrozza);
        cpCode.append(codiceCP);
        costo.append(total);

    }

    
)


