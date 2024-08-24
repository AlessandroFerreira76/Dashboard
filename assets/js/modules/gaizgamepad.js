class GaizGamePad {
	constructor(gamepad) {
		this.gamepad = gamepad;
	}

	addgamepad(controllers) {
		controllers[this.gamepad.index] = this.gamepad;
		var d = document.createElement("div");
		d.setAttribute("id", "controller" + this.gamepad.index);
		d.style.display = "none";
		var b = document.createElement("div");
		b.style.display = "none";
		b.className = "buttons";
		for (var i = 0; i < this.gamepad.buttons.length; i++) {
			var e = document.createElement("span");
			e.className = "button";
			e.id = "b" + i;
			e.innerHTML = i;
			b.appendChild(e);
		}
		d.appendChild(b);
		var a = document.createElement("div");
		a.className = "axes";
		for (i = 0; i < this.gamepad.axes.length; i++) {
			e = document.createElement("meter");
			e.className = "axis";
			e.setAttribute("min", "-1");
			e.setAttribute("max", "1");
			e.setAttribute("value", "0");
			e.innerHTML = i;
			a.appendChild(e);
		}
		d.appendChild(a);
		document.body.appendChild(d);
		return controllers;
	}

	removegamepad(controllers, gamepad) {
		var d = document.getElementById("controller" + gamepad.index);
		document.body.removeChild(d);
		delete controllers[gamepad.index];
	}

	updateStatus(controllers, m) {

		
		if (controllers[m].buttons.length == 24 || controllers[m].buttons.length == 30) {
			return "btn";
		} else {
			return "cockpit"
		}
	}
}

export { GaizGamePad };

