var numWorms = 0;
var numFish = 0;
var numMoney = 0;
var fishSellValue = 10;
var numWormBins = 0;

function digForWorms(){
  numWorms++;
  updateGame();
}

function goFishing(){
  if (numWorms < 1){
    document.getElementById('logContents').innerHTML="You don't have any worms.<br>"+document.getElementById('logContents').innerHTML;
  }
  else {
    numWorms--;
    numFish++;
    updateGame();
  }
}

function sellFish(){
  if (numFish < 1) {
    document.getElementById('logContents').innerHTML="You don't have any fish to sell!<br>"+document.getElementById('logContents').innerHTML;
  }
  else {
    numMoney+=fishSellValue;
    numFish--;
    updateGame();
  }
}

function buyWormBin(){
  if (numMoney < 100) {
    document.getElementById('logContents').innerHTML="You don't have enough money!<br>"+document.getElementById('logContents').innerHTML;
  }
  else {
    numMoney = numMoney-100;
    numWormBins++;
    updateGame();
  }
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
  document.getElementById('numMoney').innerHTML = "$"+numMoney;

  document.getElementById('numWormBins').innerHTML = numWormBins;
}
