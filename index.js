
let renderSearchResult = (result) => {
  return `
  <div>
  <h2>
  
  `
}

let renderSearchResults = (data) => data.items.map(result=>renderSearchResult(result))

let searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`,data=>{
    $('#results').html(renderSearchResults(data))
  }).fail(error=> {
    displayError()}) ;
}


function showCommits () {
  
}


$(document).ready(function (){
});