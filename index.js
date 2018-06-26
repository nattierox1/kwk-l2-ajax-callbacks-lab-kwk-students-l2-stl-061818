
let renderSearchResult = (result) => {
  return `
  <div>
  <h2><a href="${result.html_url}">${result.name}</a>
  </h2>
  <p><a href="#" data-repository= "${result.name}" data-owner= "${result.owner.login}" onclick = "showCommits(this)"></a>
  </p>
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