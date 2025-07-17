// 1 Redogör för följande begrepp och ge exempel (1 poäng: rimlig redogörelse, 1 poäng: relevant och korrekt exempel)
// Minst 8 poäng krävs för G (maxpoäng: 16)

// a) variabel: Variabel är som en behållare där man kan förvarar data. Det finns fyra olika sätt för att bekräfta en variabel i javascript, genom att använda var, let, const eller inget alls.
let name = "Emilia";
let lastName = "Hägglund";

// b) array: Det är en speciel variabel som kan innehålla mer än ett värde. Kan skriva obegränsat med objekt i denna variabel.
const animal = ["Häst", "Hund", "Katt", "Ko"];

// c) funktion: Det är ett kodblock som används för en specifik uppgift, den aktiveras när något anropar den.
function addNumbers(a, b) {
	return a + b;
  }

// d) string, integer, boolean: String är noll eller flera tecken som du skriver mellan citattecken. Integer är nummer som man använder i javascript. Boolean reprenseterar något som är sant eller falskt, på eller av, ja eller nej. finns endas två möjligheter med detta värde.
// Exempel på en sträng (string)
var mom = "Annika";

// Exempel på ett heltal (integer)
var luckyNumber = 24;

// Exempel på en boolean (sant/falskt-värde)
var isStudent = true;

// e) if och else: If använder man på ett kodblock som ska läsas till vilkoren sant och else om vilkoren är falska.
if (hourNow > 16) {
	matTid = "Middag";
  } else if (hourNow > 12) {
	matTid = "Lunch";
  } else if (hourNow > 0) {
	matTid = "Frukost";
  } else {
	matTid = "FIKA";
  }

// f) for: Den skapar en loop som består av tre valfria utryck som ska läsas i en slinga.
for (let i = 5; i < 10; i++)

// g) length: Det är en strängvärde som avgör hur lång strängen är
var str = "Välkommen!";
var length = str.length;

// h) skillnaden mellan document.getElementById och document.getElementsByClassName: Id kopplar bara till ett enskilt element med det speciella id namnet. Class kopplar till  flera element, som en array och man måste då specificera vilket element du har tagit, genom att skriva [0].
var element = document.getElementById("myElement"); 
element.textContent = "Text"; 

var elements = document.getElementsByClassName("myClass"); 
elements[0].style.color = "yellow"; 


// Färdigställ följande funktioner
// Minst fyra av dessa måste fungera för G

// Funktion för att byta text i span-elementen grundad på input från en textruta
function swap_text() {
    let input_text = document.getElementById("input_text").value; // Hämtar värdet från textruta med id "input_text"
    let spans = document.getElementById("text").getElementsByTagName("span"); // Hämtar alla span-element inuti element med id "text"
    for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = input_text; // Sätter input text som innehåll i varje span-element
    }
}

// Funktion för att byta färg på element med klassen "task_box"
function swap_colors() {
    let fontColor = document.getElementById("font_color").value; // Hämtar värdet från en inputruta med id "font_color" för att få önskad textfärg
    let backgroundColor = document.getElementById("background_color").value; // Hämtar värdet från en inputruta med id "background_color" för att få önskad bakgrundsfärg

    let taskBoxes = document.getElementsByClassName("task_box"); // Hämtar alla element med klassen "task_box"

    for (let taskBox of taskBoxes) {
        taskBox.style.backgroundColor = backgroundColor; // Sätter önskad bakgrundsfärg på varje "task_box"-element
        taskBox.style.color = fontColor; // Sätter önskad textfärg på varje "task_box"-element
    }


}// Funktion för att göra en beräkning och resultat (sant eller falskt) baserat på användarens val av siffror och beräkningsmetod
function calculate() {
	
	let num_1 = parseFloat(document.getElementById("number_1").value); // Hämta värdet från input-fältet med id "number_1" och omvandla det till ett flyttal
	let num_2 = parseFloat(document.getElementById("number_2").value); // Hämta värdet från input-fältet med id "number_2" och omvandla det till ett flyttal
	let num_3 = parseFloat(document.getElementById("number_3").value); // Hämta värdet från input-fältet med id "number_3" och omvandla det till ett flyttal
	let operator = document.getElementById("arithmetic_operator").value; // Hämta det valda värdet från select-fältet med id "arithmetic_operator"

	let result = document.getElementById("result"); // Hämta elementet med id "result" där resultatet ska visas

	if (operator === "a") { // Om operatorn är "a", addition
		result.textContent = "Resultat: " + (num_1 + num_2 === num_3); // Visa resultatet av additionen och jämför det med num_3, och sätt textinnehållet i elementet med id "result"
	} else if (operator === "s") { // Om operatorn är "s", subtraktion
		result.textContent = "Resultat: " + (num_1 - num_2 === num_3); // Visa resultatet av subtraktionen och jämför det med num_3, och sätt textinnehållet i elementet med id "result"
	} else if (operator === "m") { // Om operatorn är "m", multiplikation
		result.textContent = "Resultat: " + (num_1 * num_2 === num_3); // Visa resultatet av multiplikationen och jämför det med num_3, och sätt textinnehållet i elementet med id "result"
	} else if (operator === "d") { // Om operatorn är "d", division
		result.textContent = "Resultat: " + (num_1 / num_2 === num_3); // Visa resultatet av divisionen och jämför det med num_3, och sätt textinnehållet i elementet med id "result"
	}
}

// Funktion för att räkna antal tecken och ord i en text som användaren skriver
function count_chars_and_words() {

	var text = document.getElementById("text_count").value; // Hämta värdet från input-fältet med id "text_count" som innehåller texten

	var charCount = text.length; // Räkna antal tecken i texten genom att använda length-egenskapen

	var wordCount = text.trim().split(/\s+/).length; // Räkna antal ord i texten genom att först ta bort eventuella extra mellanslag i början och slutet av texten med trim(), sedan dela upp texten vid varje mellanslag och räkna antalet delar med split och length-egenskapen
	
	document.getElementById("char_count").textContent = charCount; // Sätt antal tecken i texten som textinnehåll i elementet med id "char_count"
	document.getElementById("word_count").textContent = wordCount; // Sätt antal ord i texten som textinnehåll i elementet med id "word_count"
}

// Funktion för att skapa en punktlista utefrån det användaren skrivit
function convert_to_list() {
	
	var csvText = document.getElementById("csv_text").value; // Hämta värdet från input-fältet med id "csv_text" som innehåller den kommaseparerade strängen
	
	var items = csvText.split(","); // Dela upp den kommaseparerade strängen vid varje komma och spara delarna i en array med variabelnamnet "items"
	var listItems = ""; // En tom sträng för att kunna skapa en listan med ett HTML-element

	for (var i = 0; i < items.length; i++) { // Loopa igenom alla delar i arrayen "items"
	  listItems += "<li>" + items[i] + "</li>"; // Lägg till varje del i en ny listrad i HTML-format
	}

	document.getElementById("converted_list").innerHTML = "<ul>" + listItems + "</ul>"; // Sätt samman listan med listraderna som innehåll i ett ul-element och sätt det som HTML-innehåll i elementet med id "converted_list"
}

// Funktion för att konvertera värden mellan olika enheter
function converter() {
	
	var inputValue = parseFloat(document.getElementById("to_convert").value); // Hämta värdet från input-fältet med id "to_convert" och konvertera det till en flyttalsvariabel med hjälp av parseFloat()
	var selectedUnit = document.getElementById("unit").value; // Hämta det valda alternativet från en select-lista med id "unit" som innehåller den valda enheten att konvertera till
	
	var result; // En variabel för att lagra resultatet av konverteringen

	switch (selectedUnit) { // En switch-sats för att välja vilken typ av konvertering som ska utföras baserat på den valda enheten
	  case "F": // Om enheten är Fahrenheit
	
		result = (inputValue - 32) / 1.8; // Utför konvertering från Fahrenheit till Celsius
		break;
	  case "cup": // Om enheten är kopp
	
		result = inputValue * 0.236; // Utför konvertering från koppar till liter
		break;
	  case "lb": // Om enheten är pund
		
		result = inputValue * 0.454; // Utför konvertering från pund till kilogram
		break;
	  default: // Om ingen enhet matchar
	
		result = ""; // Sätt resultatet till en tom sträng
	}
	
	document.getElementById("converted").value = result; // Sätt resultatet som värde i ett annat input-fält med id "converted" för att visa resultatet i HTML-dokumentet
}



// Skapa funktioner som fungerar med rutorna "Åtta frukter" eller "Byt ut rubriker"
// Minst en av dessa måste fungera för G

// Åtta frukter: Skapa en array med 8 strängvärden (8 fruktnamn). 
// Generera en HTML-lista (ol eller ul) med ett script där varje frukt placeras i ett li-element

// Funktion för att generera en lista över frukter i HTML-dokumentet
function output_fruitlist() {
    var fruits = ["Äpple", "Banan", "Apelsin", "Lingon", "Blåbär", "Hjorton", "Hallon", "Jordgubbe"]; // En array med olika frukter
    var fruitList = "<ul>"; // En sträng för att bygga upp en HTML-lista med frukter

    for (var i = 0; i < fruits.length; i++) { // En for-loop för att iterera genom varje frukt i arrayen
        fruitList += "<li>" + fruits[i] + "</li>"; // Lägg till varje frukt som ett listelement i fruitList-strängen
    }

    fruitList += "</ul>"; // Lägg till avslutande HTML-taggar för att avsluta listan
    document.getElementById("fruits").innerHTML = fruitList; // Sätt fruitList-strängen som innehåll i ett HTML-element med id "fruits" för att visa listan i HTML-dokumentet
}



// Rubriker: Skapa en array med så många rubriker som det finns h2-element i HTML-filen. 
// När knappen klickas ska rubrikerna ersättas med arrayens rubriker.

// Funktion för att ändra innehållet i h2-element i HTML-dokumentet
function change_headings() {
    var headings = document.getElementsByTagName("h2"); // Hämta alla h2-element i HTML-dokumentet
    var headingsArray = Array.from(headings); // Konvertera nodeListen av h2-element till en array

    var newHeadings = ["Rubrik 1", "Rubrik 2", "Rubrik 3", "Rubrik 4", "Rubrik 5", "Rubrik 6", "Rubrik 7", "Rubrik 8", "Rubrik 9", "Rubrik 10"]; // En array med nya rubriker

    for (var i = 0; i < headingsArray.length; i++) { // En for-loop för att iterera genom varje h2-element i arrayen
        headingsArray[i].textContent = newHeadings[i % newHeadings.length]; // Sätt det nya rubriktexten baserat på index i newHeadings-arrayen. Om index är större än längden på newHeadings-arrayen används modulus (%) för att loopa igenom rubriktexterna i newHeadings-arrayen.
    }
}



