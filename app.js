const searchField = document.getElementById('search').firstElementChild;
const searchButton = document.getElementById('search').lastElementChild;
const resultsField = document.getElementById('results');
function fetchResults(searchQuery) {
// const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=                 alternative
// extracts&explaintext&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;     search query
const endpoint = `https://ru.wikipedia.org/w/api.php?action=opensearch&search=${searchQuery}`;
fetch(endpoint)
  .then(response => { return response.json()})
  .then(results => {
    let output = '<ul>';
    results[1].forEach((el, i) => {                               //вывод результатов поиска
      output += '<li> <a href='+results[3][i]+'>'+ el + '</a>'+
      '<p>' + results[2][i] +'</p>' + '</li>' ;
    })
resultsField.innerHTML = output + '</ul>';
  });
}
searchButton.addEventListener('click', ()=> {fetchResults(searchField.value)})
