function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is the " + character.innerHTML + " one!");
}