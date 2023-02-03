//model


//view
updateView()
function updateView() {
	document.getElementById('app').innerHTML = /*html*/`
	<div class="game-screen">
        <div class="tamagotchi">
            <div class="hp">
                <p>Sleep: <span id="sleep-hp">100</span></p>
                <div class="container">
                    <div id="sleepDiv"></div>
                </div>
                
				<p>Hunger: <span id="hunger-hp">100</span></p>
                <div class="container">
                    <div id="feedDiv"></div>
                </div>
                
				<p>Play: <span id="play-hp">100</span></p>
                <div class="container">
                    <div id="playDiv"></div>
                </div>

                <p id="score-bar">Score: <span id="score"></span></p>

            </div>



            <div class="buttons">
                <button class="button" onclick="bar1()">Sleep</button>
                <button class="button" onclick="bar2()">Feed</button>
                <button class="button" onclick="bar3()">Play</button>
                <br>
                <button class="startGame" onclick="startGame">Start game</button>
            </div>
        </div>
    </div>
	`
}

//controller
function barElement(element) {
	return document.getElementById(element);
}

function bar1() {
	const element = barElement("sleepDiv");
	const sleepHp = barElement("sleep-hp");
	let width = 100;
	let sleep = 100;
	const id = setInterval(frame, 250);
	function frame() {
		if (width == 0) {
			clearInterval(id);
		} else {
			width--;
			sleep--;
			element.style.width = width + '%';
			sleepHp.innerHTML = sleep + '%';
		}
	}
}

function bar2() {
	const element = barElement("feedDiv");
	const hungerHp = barElement("hunger-hp");
	let width = 100;
	let hunger = 100;
	const id = setInterval(frame, 160);
	function frame() {
		if (width == 0) {
			clearInterval(id);
		} else {
			width--;
			hunger--;
			element.style.width = width + '%';
			hungerHp.innerHTML = hunger + '%';
		}
	}
}

function bar3() {
	const element = barElement("playDiv");
	const playHp = barElement("play-hp");
	let width = 100;
	let play = 100;
	const id = setInterval(frame, 200);
	function frame() {
		if (width == 0) {
			clearInterval(id);
		} else {
			width--;
			play--;
			element.style.width = width + '%';
			playHp.innerHTML = play + '%';
		}
	}
}
