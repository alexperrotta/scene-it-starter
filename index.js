$(function(){

	$('form').on('submit', function(e){
		e.preventDefault();

		var searchString = $('.search-bar').val();
		var urlEncodedSearchString = encodeURIComponent(searchString);

		var finalHTML = renderMovies(movieData);
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
			finalHTML += '<button data-id="'+ currentMovie.imdbID +'" class="btn btn-primary">Add</button>';
			finalHTML += '</div>';
			finalHTML += '</div>';
		});
		return finalHTML;
	}


	// Setting up the click listener on the movies
	$('.movies-container').on('click', 'button', function(){
		var imdbID = $(this).data('id');
		$(this).html('Added');
		$(this).toggleClass('btn-success');
		
		
		var movie = movieData.find(function(currentMovie){
			return currentMovie.imdbID == imdbID;	
	});

		var watchlistJSON = localStorage.getItem('watchlist');
		var watchlist = JSON.parse(watchlistJSON);
		if (watchlist == null) {
			watchlist = [];
		}
		
		watchlist.push(movie);
		watchlistJSON = JSON.stringify(watchlist);
		localStorage.setItem('watchlist', watchlistJSON);
		});

	

});




