playlist = new Object({eminem: "without me"});

function updatePlaylist(playlist, artistName, songTitle)
{
  return Object.assign({}, playlist, {[artistName]: songTitle});
}
