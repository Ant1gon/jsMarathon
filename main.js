function attack(name, weapon = "") {
    console.log(`Персонаж ${name} атакує суперника`)    
}

const Characters = {
    "scorpion": {
        name: "scorpion",
        hp: 100,
        img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
        weapon: ["knife"],
        attack(weaponId) {
        	attack(this.name, this.weapon[weaponId])
        }
    },
    "kitana": {
        name: "kitana",
        hp: 100,
        img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
        weapon: ["", ""],
       	attack(weapon) {
        	attack(this.name, weapon)
        }
    },
    "liukang": {
        name: "liukang",
        hp: 100,
        img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
        weapon: ["", ""],
        attack(weapon) {
        	attack(this.name, weapon)
        }
    },
    "sonya": {
        name: "sonya",
        hp: 100,
        img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
        weapon: ["", ""],
        attack(weapon) {
        	attack(this.name, weapon)
        }
    },
    "subzero": {
        name: "subzero",
        hp: 100,
        img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
        weapon: ["", ""],
        attack(weapon) {
        	attack(this.name, weapon)
        }
    }
}

let player1 = Characters["scorpion"];
let player2 = Characters["kitana"];

createPlayer("player1", player1);
createPlayer("player2", player2);


function createPlayer( playerPlace, playerObj ){
		let life = document.createElement("div");
			life.style.width = playerObj.hp;
			life.classList.add("life");
		let name = document.createElement("div");
			name.innerText = playerObj.name;
			name.classList.add("name");
		let img = document.createElement("img");
			img.src = playerObj.img;
		
	let progressbar = document.createElement("div");
	progressbar.classList.add("progressbar");
	progressbar.appendChild(life)
	progressbar.appendChild(name);

	let character = document.createElement("div");
	character.classList.add("character");
	character.appendChild(img);

	let player = document.createElement("div");
	player.classList.add(playerPlace);
	player.appendChild(progressbar);
	player.appendChild(character);

	document.querySelector(".arenas").appendChild(player);
}


// <div class="player1">
//     <div class="progressbar">
//         <div class="life"></div>
//         <div class="name">SCORPION</div>
//     </div>
//     <div class="character">
//         <img src="http://reactmarathon-api.herokuapp.com/assets/scorpion.gif" />
//     </div>
// </div>