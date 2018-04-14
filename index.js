$(function(){

	var testHTML = renderMovies(movieData);
	$(.movies-container).html(testHTML);

	function renderMovies(movieArray) {
		var finalHTML = "";
		movieArray.forEach(function(currentMovie){
			finalHTML += '<div class="card" style="width: 18rem;">';
			finalHTML += '<img class="card-img-top" src="currentMovie.poster" alt="Movie Poster">';
			finalHTML += '<div class="card-body">';
			finalHTML += '<h5 class="card-title">'+ currentMovie.title +'</h5>';
			finalHTML += '<p class="card-text">'+ currentMovie.year +'</p>';
			finalHTML += '<a class="btn btn-primary>'Add'</a>';
			finalHTML += '</div>';
			finalHTML += '</div>';
		});
		return finalHTML;
	}




});




