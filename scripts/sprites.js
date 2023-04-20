


var ??? = [ 'imgs/scene/mountains01.png', 'imgs/scene/mountains02.png', 
'imgs/scene/mountains03.png', 'imgs/scene/mountains04.png'];

var ??? = [ 'imgs/scene/cloud01.png', 'imgs/scene/cloud02.png'];
var ??? = [ 'imgs/blocks/blocks001.png', 'imgs/blocks/blocks002.png', 'imgs/blocks/blocks003.png'];
var ??? = [ 'imgs/blocks/coin01.png', 'imgs/blocks/coin05.png' ];
var ??? = [ 'imgs/scene/tube.png' ];
var ??? = [ 'imgs/scene/platform.png' ];
var ??? = [ 'imgs/enemy/enemyMushroom01.png','imgs/enemy/enemyMushroom02.png'];


var spriteNumber={
  mountain: 6,
  cloud: 10,
  brick: 5,
  pipe: 5,
  coin: 10,
  enemyMushroom: 5,

}



// set every sprites configs
function setSprites(){
  ???
  ???( mountains, mountainImages, spriteNumber.mountain ,1.5, gameConfig.screenX, gameConfig.screenY-35, gameConfig.screenY-35);
  ???( clouds, cloudImages, spriteNumber.cloud, 0, gameConfig.screenX, 20, gameConfig.screenY*0.5 );
  ???( bricks, brickImages, spriteNumber.brick, gameConfig.screenX*0.1, gameConfig.screenX*0.9, gameConfig.screenY*0.1, gameConfig.screenY*0.7 );
  ???( pipes, pipeImages, spriteNumber.pipe, 50, gameConfig.screenX, gameConfig.screenY-20, gameConfig.screenY+10 );
  ???( coins, coinsImages, 'shine', spriteNumber.coin, "get", false, 0, gameConfig.screenX, gameConfig.screenY*0.35, gameConfig.screenY*0.75 );
  ???( ene
}

