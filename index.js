

async function fetchCharacters(list) {
    const characterData = document.getElementById("character-data");
    const theDom = document.getElementsByTagName("html");
    console.log(theDom);
    for (let i = 0; i < list.length; i++) {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${list[i]}`
      );
      const data = await response.json();
      console.log(data);
      const img = data.image;
  
      const imgElement = document.createElement("img");
      imgElement.src = img;
      characterData.appendChild(imgElement);
    }
  }
  
  const result = fetchCharacters([180, 179, 178, 177]);