$(document).ready(function (){
});
let searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`,data=>{
    $('#results').html(renderSearchResults(data))
  }).fail(error=> {
    displayError()}) ;
}


function showCommits () {
  
}