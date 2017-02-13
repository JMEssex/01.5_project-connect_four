////////// GLOBAL VARIABLES //////////

var turn = 1

var player1 = {
  token: 'black',
}

var player2 = {
  token: 'red',
}

function Column(){
  this.dropCount = 0;
  this.boardArr = [null,null,null,null,null,null];
};

var colA = new Column();
var colB = new Column();
var colC = new Column();
var colD = new Column();
var colE = new Column();
var colF = new Column();
var colG = new Column();


gameBoard = [colA.boardArr, colB.boardArr, colC.boardArr, colD.boardArr, colE.boardArr, colF.boardArr, colG.boardArr]

////////// HAPPENS IMMEDIATELY //////////

////////// FUNCTIONS //////////

//  Standard check to see who's turn it is.
function takeTurns() {
  return (turn % 2 ? player1.token : player2.token)
}

//  Removes the null values from the array before pushing
function removeNulls(arr){
  while (arr.indexOf(null) !== -1){
      var nullIndex = arr.indexOf(null)
      arr.splice(nullIndex, 1)
    }
  console.log(arr)
}

//  Adds the missing null values back to the array for gameBoard consistency.
function addNulls(arr){
  while (arr.length < 6) {
    arr.push(null)
  }
  console.log(arr)
}

//  Current drop token function.
function drop(arr, playerToken) {
  removeNulls(arr)
  arr.push(playerToken)
  console.log(arr)
  tokenOccupancy = arr.length
  console.log(arr.length)
  addNulls(arr)
}

//  Check to see if the row is full before droping token.
function fullCheck(arr, playerToken, columnObj){
  if (arr.indexOf(null) !== -1 && arr.length <= 6 && columnObj.dropCount <= 6) {
    drop(arr, playerToken)
    console.log(arr)
    columnObj.dropCount++
    console.log(columnObj.dropCount)
    if (columnObj.dropCount = 6) {
      removeListeners()
    }
    turn++
  } else {
    alert("This row is already full")
  }
}

///////// Functions I was working on LAST before Push ///////////

// function clickDropper(){
//   if(this.className === 'dropper available') {
//     var droppingToken = takeTurns()
//     var columnId = $(this).parent().attr('id')
//     var tokenOccupancy
//     $('#'+columnId)
//     }

// function clickRow(arr, playerToken, columnObj, fn) {
// //  adding event listener to the .dropper class
// $('.available').on('click', fn())
