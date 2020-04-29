// Add leading zero to a number
function pad(num, size) {
    var n = String(num);
    while (n.length < (size || 2)) {n = "0" + n;}
    return n;
}

// Convert 12 hour to 24 hour time
function parseTime(t) {
	var hh = t.substr(0, 2); // hours
	var mm = t.substr(3, 2); // minutes
	var ampm = t.substr(6, 2); // AM or PM
	
	if (hh != '12' && ampm == 'PM') {
		hh = parseInt(hh) + 12;
	}
	
	return `${hh}${mm}`;
}

// Convert 24 hour time to seconds
function TimetoSecond(t) {
	t = pad(t, 4).toString();
	
	var hh = t.substr(0, 2);
	var mm = t.substr(2, 2);
	
	return hh*3600 + mm*60;
}

// Convert seconds to hh:mm
function SecondtoHHMM(s) {
	var hh = Math.floor(s / 3600);
	var mm = Math.floor( (s - hh * 3600) / 60)
	
	hh = pad(hh);
	mm = pad(mm);
	
	return `${hh}${mm}`;
}

// T1 minus T2 in seconds (24 hour time only)
function compareTime(t1, t2) {
	var t1_s = TimetoSecond(t1);
	var t2_s = TimetoSecond(t2);
	
	return (t1_s - t2_s);
}

function addSecondtoTime(t, s) {
	var total = TimetoSecond(t) + s;

	var time = SecondtoHHMM(total);
	
	return time;
}