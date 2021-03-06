$(function(){

	var watchlistJSON = localStorage.getItem('watchlist');
		var watchlist = JSON.parse(watchlistJSON);

		console.log(watchlist);


	$().ready(function(){
		var finalHTML = renderMovies(watchlist);
		$('.movies-container').html(finalHTML);
	});


	function renderMovies(movieArray) {
		var finalHTML = "";
		movieArray.forEach(function(currentMovie){
			finalHTML += '<div class="card style="width: 18rem";>';
			finalHTML += '<img class="card-img-top" src="' + currentMovie.Poster + '" alt="Movie Poster">';
			finalHTML += '<div class="card-body">';
			finalHTML += '<h5 class="card-title">'+ currentMovie.Title +'</h5>';
			finalHTML += '<p class="card-text">'+ currentMovie.Year +'</p>';
			finalHTML += '<button data-id="'+ currentMovie.imdbID +'" class="btn btn-danger">Remove</button>';
			finalHTML += '</div>';
			finalHTML += '</div>';
		});
		return finalHTML;
	}


});