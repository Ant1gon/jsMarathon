const arena = document.querySelector(".arenas");
const randButton = document.querySelector(".button");

function attack(name, weapon = "") {
    console.log(`Персонаж ${name} атакує суперника`)
}

const characters = {
    "scorpion": {
        name: "scorpion",
        hp: 100,
        criticalChance: 10,
        img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
        weapon: [""],
        attack(weapon) {
            attack(this.name, this.weapon[weaponId])
        }
    },
    "kitana": {
        name: "kitana",
        hp: 100,
        criticalChance: 10,
        img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
        weapon: ["", ""],
        attack(weapon) {
            attack(this.name, weapon)
        }
    },
    "liukang": {
        name: "liukang",
        hp: 100,
        criticalChance: 10,
        img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
        weapon: ["", ""],
        attack(weapon) {
            attack(this.name, weapon)
        }
    },
    "sonya": {
        name: "sonya",
        hp: 100,
        criticalChance: 10,
        img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
        weapon: ["", ""],
        attack(weapon) {
            attack(this.name, weapon)
        }
    },
    "subzero": {
        name: "subzero",
        hp: 100,
        criticalChance: 10,
        img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
        weapon: ["", ""],
        attack(weapon) {
            attack(this.name, weapon)
        }
    }
}

function createElement(tag, className) {
    const el = document.createElement(tag);
    if (className) {
        el.classList.add(className);
    }
    return el;
}


function createPlayer(playerObj) {
    const player = createElement("div", `player${playerObj.player}`);
    const progressbar = createElement("div", "progressbar");
    const character = createElement("div", "character");
    const life = createElement("div", "life");
    const name = createElement("div", "name");
    const img = createElement("img");

    life.style.width = `${playerObj.hp}%`;
    name.innerText = playerObj.name;
    img.src = playerObj.img;

    progressbar.appendChild(life)
    progressbar.appendChild(name);

    character.appendChild(img);

    player.appendChild(progressbar);
    player.appendChild(character);

    return player;
}

let player1 = characters["scorpion"];
player1.player = 1;
let player2 = characters["kitana"];
player2.player = 2;

function changeHp(player, dmg){
	const $playerLife = document.querySelector(`.player${lastTimeAttacked} .life`);
	if(dmg == 0){
   		console.log("blocked")
   	}
	player.hp -= dmg;
    $playerLife.style.width = player.hp > 0? player.hp+'%' : '0%';
    if(player.hp <= 0){
		arena.appendChild(playerLose(player.name));
		randButton.style.visibility = "hidden";
    }
}

function getDmgValue(player){
	return Math.floor(Math.random() * 20);
}

function playerLose(name){
	const $loseTitle = createElement('div','loseTitle');
	$loseTitle.innerText = `${name} Win`;
	return $loseTitle;
}


//let lastTimeAttacked = Math.ceil(Math.random() * 2)
randButton.addEventListener("click", () => {
	let dmg = getDmgValue(player2);
	changeHp(player1, dmg);
	dmg = getDmgValue(player1);
	changeHp(player2, dmg);   

  //   if (lastTimeAttacked == 1) {
		// lastTimeAttacked = 2;
		// let dmg = getDmgValue(player2);
		// changeHp(player1, dmg);
  //   } else { 
  //   	let dmg = getDmgValue(player1);
  //   	lastTimeAttacked = 1;
		// changeHp(player2, dmg);        
  //   }
})

arena.appendChild(createPlayer(player1));
arena.appendChild(createPlayer(player2));