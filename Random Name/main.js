const containerE1 = document.querySelector(".container");
const careers = ["Astronaut", "Chef", "Veterinarian", "Archaeologist", "Pilot","Sher🔥"];
let complement_index = 0;
let characterIndex = 0;
updateText();
function updateText(){
    characterIndex++
    containerE1.innerHTML = `<h1>Anirban is 
    ${careers[complement_index].slice(0,1) === "I" ? "an" : "a"} ${careers[complement_index].slice(0,characterIndex)} </h1>`;
    if(characterIndex === careers[complement_index].length){
        complement_index++
        characterIndex = 0
    }if(complement_index === careers.length){
        complement_index = 0;
    }setTimeout(updateText, 200);
}

