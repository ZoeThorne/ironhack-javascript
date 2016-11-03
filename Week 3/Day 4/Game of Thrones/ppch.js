var fs = require('fs');
function fileActions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);

    episodes = sortEpisodes(episodes)
    episodes = filterEpisodes(episodes)
  	print(episodes)

}

function print(episodes) {
	
	 episodes.forEach(function(episode) {
		console.log("Title: " + episode.title +"\tEpisode: " + episode.episode_number );
		console.log("Description: " + episode.description);
		var stars = " "
			for (var i = 0; i <= episode.rating; i++) {
				stars += "*";
			}
		console.log("Rating: " + episode.rating + stars);
		
		

	})
	 return episodes;
}

function sortEpisodes (episodes) {
  
	episodes = episodes.sort(function (a,b){
		return a.episode_number - b.episode_number  
	});
	return episodes;
}

function filterEpisodes (episodes){

	episodes = episodes.filter(function(episode){
			return episode.rating >= 8.5;
	})
	return episodes;
}




fs.readFile("./GoTEpisodes.json", 'utf8', fileActions);
