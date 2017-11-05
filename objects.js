let playlist = new Object();

function updatePlaylist(playlist, artistName, songTitle)
{
  return playlist.assign({}, playlist, {artistName: songTitle});
}
