var numWorms = 0;
var numFish = 0;
var numMoney = 0;
var fishSellValue = 10;

function digForWorms(){
  numWorms++;
  updateGame();
}

function goFishing(){
  numWorms--;
  numFish++;
  updateGame();
}

function sellFish(){
  numMoney+=fishSellValue;
  numFish--;
  updateGame();
}

function updateGame(){
  //update game values and redraw screen


  //display buttons as they are unlocked
  if (numWorms > 0) {
    document.getElementById('fishClicker').style="display:block";
  }


  //redraw screen with new item values
  document.getElementById('numWorms').innerHTML = numWorms;
  document.getElementById('numFish').innerHTML = numFish;
  document.getElementById('numMoney').innerHTML= numMoney;
}
