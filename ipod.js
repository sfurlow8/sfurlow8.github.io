// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];

function init() {
	for (let i=0; i<6; i++) {
		const str = "vl"
		const elem = document.getElementById(str.concat(i)) // get the div volLevel by each id vl0, vl1, etc
		if (i<3) {
			elem.style.backgroundColor = "purple" // change the background color to purple for the first 3
		}
		volLevels.push(elem) // fill volLevels with every vl div
	}
};

function volUp() {

	let count = 0 // count will store the number of purple filled volume levels
	for (let i=0; i<6; i++) {
		const style = getComputedStyle(volLevels[i])
		let fill_color = style.getPropertyValue("background-color")
		if (fill_color != "rgb(255, 255, 255)") { // if the fill color is not white, increase the count
			count += 1
		}
	}
	if (count != 6) { // if you're not at max volume, increase the volume by one
		let new_purple = count
		const str = "vl"
		const elem = document.getElementById(str.concat(new_purple))
		elem.style.backgroundColor = "purple"
	}
}

function volDown() {
	let count = 0
	for (let i=0; i<6; i++) {
		const style = getComputedStyle(volLevels[i])
		let fill_color = style.getPropertyValue("background-color")
		if (fill_color != "rgb(255, 255, 255)") {
			count += 1
		}
	}
	if (count != 0) { // if you are not at minimum volume, decrease the value by one
		let new_white = count - 1
		const str = "vl"
		const elem = document.getElementById(str.concat(new_white))
		elem.style.backgroundColor = "white"
	}
}

// helper function incTime updates the elapsed time
// incTime will be used with setInterval
function incTime() {
	document.getElementById("time-bar").value = Number(document.getElementById("time-bar").value) + 1 // move the slider up by one value
	if (document.getElementById("time-bar").value==180) { // if you're at the end of the song, go to the next song
		nextSong()
	}
	let curr_val = document.getElementById("time-bar").value
	let curr_time = secondsToMs(curr_val)
	document.getElementById("time-elapsed").innerHTML = curr_time // update the shown elapsed time
}

// event listener for the slider updates elapsed time using moveSlider when the user moves it
document.getElementById("time-bar").addEventListener("input",moveSlider )

var myinterval = null // interval to be set and cleared

// helper function moveSlider updates the time elapsed shown when the user manually moves the slider
// moveSldier will be called by the event listener for user input on the input range object
function moveSlider() {
	let symbol = document.getElementById("play-pause")

	if (symbol.innerHTML == "pause") {
		document.getElementById("time-elapsed").innerHTML = secondsToMs(document.getElementById("time-bar").value)
		clearInterval(myinterval)
		myinterval = setInterval(incTime, 1000) // clear the existing interval and start one with the updated value as starting point
	}
	else {
		document.getElementById("time-elapsed").innerHTML = secondsToMs(document.getElementById("time-bar").value)
		clearInterval(myinterval) // if the slider is moved on paused mode, just clear the existing interval and update the time to the new value
	}

 }



function switchPlay() {
	
	let symbol = document.getElementById("play-pause")
	
	if (symbol.innerHTML == "play_arrow") {
		document.getElementById("play-pause").innerHTML = "pause"
		clearInterval(myinterval)
		myinterval = setInterval(incTime, 1000)	// clear any existing intervals and do incTime every second
	}
	else {
		document.getElementById("play-pause").innerHTML = "play_arrow"
		clearInterval(myinterval)
	}
}



function nextSong() {
	var curr_song = document.getElementById("player-song-name").innerHTML
	var curr_index = tracklist.indexOf(curr_song)
	if (curr_index == 9) { // if you're at the last song, loop back to the first song
		var new_index = 0
	}
	else {
		var new_index = curr_index + 1
	}
	var next_song = tracklist[new_index]
	document.getElementById("player-song-name").innerHTML = next_song
	document.getElementById("time-bar").value = 0
	document.getElementById("time-elapsed").innerHTML = "0:00" // reset to the beginning of the new song
	
}

function prevSong() {
	var curr_song = document.getElementById("player-song-name").innerHTML
	var curr_index = tracklist.indexOf(curr_song)
	if (curr_index == 0) { // if you're at the first song, loop back to last song
		var new_index = 9
	}
	else {
		var new_index = curr_index - 1
	}
	var next_song = tracklist[new_index]
	document.getElementById("player-song-name").innerHTML = next_song
	document.getElementById("time-bar").value = 0
	document.getElementById("time-elapsed").innerHTML = "0:00"
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();