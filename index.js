const musicData = require("./data.json");
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(artists) {
  return artists.map(artist => artist.name);
}

/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
  return artists.flatMap(artist => artist.albums.map(album => album.title));
}

/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) {
  return artists.flatMap(artist => artist.albums.flatMap(album => album.songs));
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard() {
  let checkerBoard = '';
  const rows = 8;
  const cols = 8;
  for (let i = 0; i < rows; i++) {
    checkerBoard += (i % 2) ? '# # # # \n' : ' # # # #\n';
  }
  return checkerBoard;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard(rows = 4, cols = 4) {
  let checkerBoard = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) { 
      checkerBoard += ((i + j) % 2) ? '#' : ' ';
    }
    checkerBoard += '\n';
  }
  return checkerBoard;
}

/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard() {

  const chessBoard = [];
  for (let i = 0; i < 8; i++) {
    let boardRow = [];
    for (let j = 0; j < 8; j++) {
      let boardSpace = {
        piece: null,
        positionX: i,
        positionY: j,
        color: ((i + j) % 2) ? 'dark' : 'light', 
      };
      boardRow.push(boardSpace);      
    }

    chessBoard.push(boardRow);
  }
  return chessBoard;
}

/**
 * Update a square on the board to have a chess piece "on" it
 * @param {string} piece - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} row - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} column - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @return {Object{}}  The modified board array of objects.
 */
function addPieceToChessBoard(piece, row, column) {
  const chessBoard = createChessBoard();
  chessBoard[row][column].piece = piece;
  return chessBoard;
}



module.exports = {
  getAllArtistNames,
  getAllAlbumTitles,
  getAllSongs,
  simpleCheckerBoard,
  dynamicCheckerBoard,
  createChessBoard,
  addPieceToChessBoard,
};
