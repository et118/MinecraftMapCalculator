function berakna() {
	var x = document.getElementById("mapX").value;
	var y = document.getElementById("mapY").value;
	var world_x = String(-1024 + -(x * 4 * 8 * 4));
	var world_y = String(384 + (y * 4 * 8 * 4));
	var output = "/tp @s " + world_x + " 120 " + world_y;
	document.getElementById("output").textContent = output;
}