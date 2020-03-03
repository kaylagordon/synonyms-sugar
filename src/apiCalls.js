export const fetchSynonyms = (word) => {
  fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=40b715bf-8cc9-4f2a-a0c3-e89032e31b6e`)
  .then(response => response.json())
  .then(data => data[0].meta.syns[0])
}
