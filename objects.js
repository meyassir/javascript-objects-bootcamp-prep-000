playlist = new Object();

function updatePlaylist(playlist, artistName, songTitle)
{
  return Object.assign({}, playlist, {[artistName]: songTitle});
}
