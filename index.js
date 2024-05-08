// Functie om gegevens van de Arduino op te halen via een AJAX-verzoek
function fetchData() {
    const xhr = new XMLHttpRequest();
    const url = 'https://stendeligt.github.io/'; // Vervang 'example.com' door de URL van jouw externe bron
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('arduinoData').innerText = xhr.responseText;
        } else {
            console.error('Fout bij het ophalen van gegevens:', xhr.statusText);
        }
    };
    xhr.onerror = function() {
        console.error('Netwerkfout bij het ophalen van gegevens.');
    };
    xhr.send();
}

fetchData();
setInterval(fetchData, 5000); // Herhaal elke 5 seconden (5000 milliseconden)
