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

	cockiptbtn(bStatusHome, bStatusSeta1, bStatusMenu, bStatusSeta2, bStatusOk, bStatusSeta3, bStatusSeta4, bStatusSeta5, bStatusSeta6, bStatus1, bStatus2, bStatus3,
		bStatusAuto, bStatusFarol1, bStatusFarol2, bStatusFAuxJ, bStatusAuxMais, bStatusTracao, bStatusFreioEstPres, bStatusAuxMen, bStatusTForc, bStatusEngStarStop, bStatusOn, bStatusOff) {
		if (bStatusHome) {
			document.getElementById("bHomeBadge").classList.add("bg-info");
		} else
			document.getElementById("bHomeBadge").classList.remove("bg-info");

		if (bStatusSeta1) {
			document.getElementById("bCimaBadge").classList.add("bg-info");
		} else
			document.getElementById("bCimaBadge").classList.remove("bg-info");

		if (bStatusSeta5) {
			document.getElementById("bBaixoBadge").classList.add("bg-info");
		} else
			document.getElementById("bBaixoBadge").classList.remove("bg-info");

		if (bStatusSeta3) {
			document.getElementById("bDireitaBadge").classList.add("bg-info");
		} else
			document.getElementById("bDireitaBadge").classList.remove("bg-info");

		if (bStatusSeta2) {
			document.getElementById("bEsqBadge").classList.add("bg-info");
		} else
			document.getElementById("bEsqBadge").classList.remove("bg-info");

		if (bStatusOk) {
			document.getElementById("bOkBadge").classList.add("bg-info");
		} else
			document.getElementById("bOkBadge").classList.remove("bg-info");

		if (bStatusMenu) {
			document.getElementById("bMenuBadge").classList.add("bg-info");
		} else
			document.getElementById("bMenuBadge").classList.remove("bg-info");

		if (bStatusSeta4) {
			document.getElementById("bSeta1Badge").classList.add("bg-info");
		} else
			document.getElementById("bSeta1Badge").classList.remove("bg-info");

		if (bStatusSeta6) {
			document.getElementById("bSeta2Badge").classList.add("bg-info");
		} else
			document.getElementById("bSeta2Badge").classList.remove("bg-info");

		if (bStatus1) {
			document.getElementById("b1Badge").classList.add("bg-info");
		} else
			document.getElementById("b1Badge").classList.remove("bg-info");

		if (bStatus2) {
			document.getElementById("b2Badge").classList.add("bg-info");
		} else
			document.getElementById("b2Badge").classList.remove("bg-info");

		if (bStatus3) {
			document.getElementById("b3Badge").classList.add("bg-info");
		} else
			document.getElementById("b3Badge").classList.remove("bg-info");

		if (bStatusAuto) {
			document.getElementById("bAutoBadge").classList.add("bg-info");
		} else
			document.getElementById("bAutoBadge").classList.remove("bg-info");

		if (bStatusFarol1) {
			document.getElementById("bFarol1Badge").classList.add("bg-info");
		} else
			document.getElementById("bFarol1Badge").classList.remove("bg-info");

		if (bStatusFarol2) {
			document.getElementById("bFarol2Badge").classList.add("bg-info");
		} else
			document.getElementById("bFarol2Badge").classList.remove("bg-info");

		if (bStatusFAuxJ) {
			document.getElementById("bFAuxJBadge").classList.add("bg-info");
		} else
			document.getElementById("bFAuxJBadge").classList.remove("bg-info");

		if (bStatusAuxMais) {
			document.getElementById("bAuxMaisBadge").classList.add("bg-info");
		} else
			document.getElementById("bAuxMaisBadge").classList.remove("bg-info");

		if (bStatusAuxMen) {
			document.getElementById("bAuxMenBadge").classList.add("bg-info");
		} else
			document.getElementById("bAuxMenBadge").classList.remove("bg-info");
		if (bStatusTracao) {
			document.getElementById("bTracaoBadge").classList.add("bg-info");
		} else
			document.getElementById("bTracaoBadge").classList.remove("bg-info");

		if (bStatusTForc) {
			document.getElementById("bTForceBadge").classList.add("bg-info");
		} else
			document.getElementById("bTForceBadge").classList.remove("bg-info");

		if (bStatusFreioEstPres) {
			document.getElementById("bFreioEstPresBadge").classList.add("bg-info");
		} else
			document.getElementById("bFreioEstPresBadge").classList.remove("bg-info");

		if (bStatusEngStarStop) {
			document.getElementById("stast").classList.remove("bg-danger");
			document.getElementById("stast").classList.add("bg-info");
		} else {
			document.getElementById("stast").classList.remove("bg-info");
			document.getElementById("stast").classList.add("bg-danger");
		}
		if (bStatusOn) {
			// document.getElementById("bOnBadge").classList.add("bg-info");
		} else { }
		// document.getElementById("bOnBadge").classList.remove("bg-info");

		if (bStatusOff) {
			// document.getElementById("bOffBadge").classList.add("bg-info");
		} else { }
		// document.getElementById("bOffBadge").classList.remove("bg-info");
	}

	cockiptbtnNum(bD1, bD2, bD3, bD4, bD5, bE1, bE2, bE3, bE4, bE5) {
		if (bD1) {
			document.getElementById("bD1txt").classList.add("luzJoyBtnE");
		} else {
			;
			document.getElementById("bD1txt").classList.remove("luzJoyBtnE");
		}
		if (bD2) {
			document.getElementById("bD2txt").classList.add("luzJoyBtnD");
		} else {
			document.getElementById("bD2txt").classList.remove("luzJoyBtnD");
		}
		if (bD3) {
			document.getElementById("bD3txt").classList.add("luzJoyBtnE");
		} else {
			document.getElementById("bD3txt").classList.remove("luzJoyBtnE");
		}
		if (bD4) {
			document.getElementById("bD4txt").classList.add("luzJoyBtnD");
		} else {
			document.getElementById("bD4txt").classList.remove("luzJoyBtnD");
		}
		if (bD5) {
			// document.getElementById("bD5txt").classList.remove("text-white");
			// document.getElementById("bD5txt").classList.add("text-info");
		} else {
			// document.getElementById("bD5txt").classList.remove("text-info");
			// document.getElementById("bD5txt").classList.add("text-white");
		}
		if (bE1) {
			document.getElementById("bE1txt").classList.add("luzJoyBtnE");
		} else {
			document.getElementById("bE1txt").classList.remove("luzJoyBtnE");
		}
		if (bE2) {
			document.getElementById("bE2txt").classList.add("luzJoyBtnD");
		} else {
			document.getElementById("bE2txt").classList.remove("luzJoyBtnD");
		}
		if (bE3) {
			document.getElementById("bE3txt").classList.add("luzJoyBtnE");
		} else {
			document.getElementById("bE3txt").classList.remove("luzJoyBtnE");
		}
		if (bE4) {
			document.getElementById("bE4txt").classList.add("luzJoyBtnD");
		} else {
			document.getElementById("bE4txt").classList.remove("luzJoyBtnD");
		}
		if (bE5) {
			// document.getElementById("bE5txt").classList.remove("text-white");
			// document.getElementById("bE5txt").classList.add("text-info");
		} else {
			// document.getElementById("bE5txt").classList.remove("text-info");
			// document.getElementById("bE5txt").classList.add("text-white");
		}
	}

	axesEsq(Gc1X, Gc1Y) {
		if (Gc1X > 0) {
			document.getElementById("bEXtxt").innerText = Gc1X;
			document.getElementById("bEDirtxt").classList.add("direita");
			document.getElementById("bEDirtxt").classList.add("luzJoy");
		} else {
			document.getElementById("bEDirtxt").classList.remove("direita");
			document.getElementById("bEDirtxt").classList.remove("luzJoy");
			if (Gc1X < 0) {
				document.getElementById("bEXtxt").innerText = -Gc1X;
				document.getElementById("bEEsqtxt").classList.add("esquerda");
				document.getElementById("bEEsqtxt").classList.add("luzJoy");
			} else {
				document.getElementById("bEEsqtxt").classList.remove("esquerda");
				document.getElementById("bEEsqtxt").classList.remove("luzJoy");
				document.getElementById("bEXtxt").innerText = 0;
			}
		}

		if (Gc1Y > 0) {
			document.getElementById("bEYtxt").innerText = Gc1Y;
			document.getElementById("bECimatxt").classList.add("cima");
			document.getElementById("bECimatxt").classList.add("luzJoy");
		} else {
			document.getElementById("bECimatxt").classList.remove("cima");
			document.getElementById("bECimatxt").classList.remove("luzJoy");
			if (Gc1Y < 0) {
				document.getElementById("bEYtxt").innerText = -Gc1Y;
				document.getElementById("bEBaixotxt").classList.add("baixo");
				document.getElementById("bEBaixotxt").classList.add("luzJoy");
			} else {
				document.getElementById("bEBaixotxt").classList.remove("baixo");
				document.getElementById("bEBaixotxt").classList.remove("luzJoy");
				document.getElementById("bEYtxt").innerText = 0;
			}
		}
	}

	axesPedal(Gc2Y, Gc3Y) {
		if (Gc2Y > 0) {
			document.getElementById("bPEYtxt").innerText = Gc2Y;
			document.getElementById("bPECimatxt").classList.add("cimaP");
			document.getElementById("bPECimatxt").classList.add("luzJoy");

		} else {
			document.getElementById("bPECimatxt").classList.remove("cimaP");
			document.getElementById("bPECimatxt").classList.remove("luzJoy");
			if (Gc2Y == 0) document.getElementById("bPEYtxt").innerText = 0;
			else document.getElementById("bPEYtxt").innerText = "";

		}

		if (Gc3Y > 0) {
			document.getElementById("bPDYtxt").innerText = Gc3Y;
			document.getElementById("bPDCimatxt").classList.add("cimaP");
			document.getElementById("bPDCimatxt").classList.add("luzJoy");
		} else {
			document.getElementById("bPDCimatxt").classList.remove("cimaP");
			document.getElementById("bPDCimatxt").classList.remove("luzJoy");
			if (Gc3Y == 0) document.getElementById("bPDYtxt").innerText = 0;
			else document.getElementById("bPDYtxt").innerText = "";

		}
	}

	axesDir(Gc4X, Gc4Y) {
		if (Gc4X > 0) {
			document.getElementById("bDXtxt").innerText = Gc4X;
			document.getElementById("bDDirtxt").classList.add("luzJoy");
			document.getElementById("bDDirtxt").classList.add("direita");

		} else {
			document.getElementById("bDDirtxt").classList.remove("luzJoy");
			document.getElementById("bDDirtxt").classList.remove("direita");
			if (Gc4X < 0) {
				document.getElementById("bDXtxt").innerText = -Gc4X;
				document.getElementById("bDEsqtxt").classList.add("esquerda");
				document.getElementById("bDEsqtxt").classList.add("luzJoy");
			} else {
				document.getElementById("bDEsqtxt").classList.remove("esquerda");
				document.getElementById("bDEsqtxt").classList.remove("luzJoy");
				document.getElementById("bDXtxt").innerText = 0;
			}
		}

		if (Gc4Y > 0) {
			document.getElementById("bDYtxt").innerText = Gc4Y;
			document.getElementById("bDCimatxt").classList.add("cima");
			document.getElementById("bDCimatxt").classList.add("luzJoy");
		} else {
			document.getElementById("bDCimatxt").classList.remove("cima");
			document.getElementById("bDCimatxt").classList.remove("luzJoy");
			if (Gc4Y < 0) {
				document.getElementById("bDYtxt").innerText = -Gc4Y;
				document.getElementById("bDBaixotxt").classList.add("baixo");
				document.getElementById("bDBaixotxt").classList.add("luzJoy");
			} else {
				document.getElementById("bDBaixotxt").classList.remove("baixo");
				document.getElementById("bDBaixotxt").classList.remove("luzJoy");
				document.getElementById("bDYtxt").innerText = 0;
			}
		}
	}
}

export { GaizGamePad };

