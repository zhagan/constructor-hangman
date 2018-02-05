

const composerArr = [
"Bach",
"Mozart",
"Brahms",
"Reich",
"Beetoveen",
"Copeland"
];

function getRandomComposer() {

 return composerArr[getRandomInt( 0 , composerArr.length )];

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

module.exports = {getRandomComposer: getRandomComposer};
