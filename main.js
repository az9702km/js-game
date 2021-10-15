class Player {
  constructor (name, hp, img, weapon) {
    this.name = name;
    this.hp = hp;
    this.img = img;
    this.weapon = weapon;
  }
  attack(){
    console.log(this.name + "Fight...");
  }
}

let scorioWeapons = ['Kunai', 'Axe','Long Sword'];
let kitanaWeapons = ['Steel Fans', 'Flying Blade','Sais'];

let scorpion = new Player('Scorpion',80,'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',scorioWeapons);
let kitana = new Player('Kitana',100,'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',kitanaWeapons);

function createPlayer(playerNum,fighter){
  const player = document.createElement('div');
  const progressBar = document.createElement('div');
  const character = document.createElement('div');
  const life = document.createElement('div');
  const name = document.createElement('div');
  const img = document.createElement('img');

  player.classList.add(playerNum);
  progressBar.classList.add("progressbar");
  life.classList.add('life');
  name.classList.add('name');
  character.classList.add('character');

  life.style.width = fighter.hp + '%';
  name.innerText = fighter.name;
  img.src = fighter.img;

  player.appendChild(progressBar);
  player.appendChild(character);
  progressBar.appendChild(life);
  progressBar.appendChild(name);
  character.appendChild(img);

  const arenas = document.querySelector(".arenas");
  arenas.appendChild(player);

}

createPlayer('player1',scorpion);
createPlayer('player2',kitana);