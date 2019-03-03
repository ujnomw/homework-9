const searchField = document.getElementById('search').firstChild;
const searchButton = document.getElementById('search').lastElementChild;
const resultsField = document.getElementById('results');
const wikiArticle = 'https://ru.wikipedia.org/wiki/';
function fetchResults(searchQuery) {
const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=
info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
fetch(endpoint)
.then(response => { return response.json()})
.then(data => {
const results = data.query.search;
console.log(results);
let output = '<ol>';
results.forEach((el) => {
  output += '<li> <a href=' + wikiArticle + encodeURI(el.title) + '>'+ el.title + '</a> </li>' ;
})
resultsField.innerHTML = output + '</ol>';
});
}
searchButton.addEventListener('click', ()=> {fetchResults(searchField.value)})
