var  bStatusHome_check = 0;
var  bStatusSeta1_check = 0;
var  bStatusMenu_check = 0;
var  bStatusSeta2_check = 0;
var  bStatusOk_check = 0;
var  bStatusSeta3_check = 0;
var  bStatusSeta4_check = 0;
var  bStatusSeta5_check = 0;
var  bStatusSeta6_check = 0;
var  bStatus1_check = 0;
var  bStatus2_check = 0;
var  bStatus3_check = 0;
var  bStatusAuto_check = 0;
var  bStatusFarol1_check = 0;
var  bStatusFarol2_check = 0;
var  bStatusFAuxJ_check = 0;
var  bStatusAuxMais_check = 0;
var  bStatusTracao_check = 0;
var  bStatusFreioEstPres_check = 0;
var  bStatusAuxMen_check = 0;
var  bStatusTForc_check = 0;
var  bStatusEngStarStop_check = 0;
var  bStatusOn_check = 0;
var  bStatusHydBlock_check = 0;
var  bStatusRpmMais_check = 0;
var  bStatusRpmMen_check = 0;
var  bStatusLebreJ_check = 0;
var  bStatusTartaruga_check = 0;
var  Gc1X_check = 0;
var  Gc2Y_check = 0;
var  temp = 3;

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
		bStatusAuto, bStatusFarol1, bStatusFarol2, bStatusHydBlock, bStatusRpmMais, bStatusLebreJ, bStatusFreioEstPres, bStatusRpmMen, bStatusTartaruga, bStatusEngStarStop, bStatusOn, bStatusOff) {
		if (bStatusHome) {
			bStatusHome_check ++;
			document.getElementById("bHomeBadge").classList.remove("bg-info_ok");
			document.getElementById("bHomeBadge").classList.add("bg-info");
		} else {
			document.getElementById("bHomeBadge").classList.remove("bg-info");
			if (bStatusHome_check > temp)
			document.getElementById("bHomeBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusSeta1) {
			bStatusSeta1_check ++;
			document.getElementById("bCimaBadge").classList.remove("bg-info_ok");
			document.getElementById("bCimaBadge").classList.add("bg-info");
		} else {
			document.getElementById("bCimaBadge").classList.remove("bg-info");
			if (bStatusSeta1_check > temp)
			document.getElementById("bCimaBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusSeta5) {
			bStatusSeta5_check ++;
			document.getElementById("bBaixoBadge").classList.remove("bg-info_ok");
			document.getElementById("bBaixoBadge").classList.add("bg-info");
		} else {
			document.getElementById("bBaixoBadge").classList.remove("bg-info");
			if (bStatusSeta5_check > temp)
			document.getElementById("bBaixoBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusSeta3) {
			bStatusSeta3_check ++;
			document.getElementById("bDireitaBadge").classList.remove("bg-info_ok");
			document.getElementById("bDireitaBadge").classList.add("bg-info");
		} else {
			document.getElementById("bDireitaBadge").classList.remove("bg-info");
			if (bStatusSeta3_check > temp)
			document.getElementById("bDireitaBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusSeta2) {
			bStatusSeta2_check ++;
			document.getElementById("bEsqBadge").classList.remove("bg-info_ok");
			document.getElementById("bEsqBadge").classList.add("bg-info");
		} else {
			document.getElementById("bEsqBadge").classList.remove("bg-info");
			if (bStatusSeta2_check > temp)
			document.getElementById("bEsqBadge").classList.add("bg-info_ok");
		}			

		if (bStatusOk) {
			bStatusOk_check ++;
			document.getElementById("bOkBadge").classList.remove("bg-info_ok");
			document.getElementById("bOkBadge").classList.add("bg-info");
		} else {
			document.getElementById("bOkBadge").classList.remove("bg-info");
			if (bStatusOk_check > temp)
			document.getElementById("bOkBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusMenu) {
			bStatusMenu_check ++;
			document.getElementById("bMenuBadge").classList.remove("bg-info_ok");
			document.getElementById("bMenuBadge").classList.add("bg-info");
		} else {
			document.getElementById("bMenuBadge").classList.remove("bg-info");
			if (bStatusMenu_check > temp)
			document.getElementById("bMenuBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusSeta4) {
			bStatusSeta4_check ++;
			document.getElementById("bSeta1Badge").classList.remove("bg-info_ok");
			document.getElementById("bSeta1Badge").classList.add("bg-info");
		} else {
			document.getElementById("bSeta1Badge").classList.remove("bg-info");
			if (bStatusSeta4_check > temp)
			document.getElementById("bSeta1Badge").classList.add("bg-info_ok");
		}
			

		if (bStatusSeta6) {
			bStatusSeta6_check ++;
			document.getElementById("bSeta2Badge").classList.remove("bg-info_ok");
			document.getElementById("bSeta2Badge").classList.add("bg-info");
		} else {
			document.getElementById("bSeta2Badge").classList.remove("bg-info");
			if (bStatusSeta6_check > temp)
			document.getElementById("bSeta2Badge").classList.add("bg-info_ok");
		}
			

		if (bStatus1) {
			bStatus1_check ++;
			document.getElementById("b1Badge").classList.remove("bg-info_ok");
			document.getElementById("b1Badge").classList.add("bg-info");
		} else {
			document.getElementById("b1Badge").classList.remove("bg-info");
			if (bStatus1_check > temp)
			document.getElementById("b1Badge").classList.add("bg-info_ok");
		}
			

		if (bStatus2) {
			bStatus2_check ++;
			document.getElementById("b2Badge").classList.remove("bg-info_ok");
			document.getElementById("b2Badge").classList.add("bg-info");
		} else {
			document.getElementById("b2Badge").classList.remove("bg-info");
			if (bStatus2_check > temp)
			document.getElementById("b2Badge").classList.add("bg-info_ok");
		}
			

		if (bStatus3) {
			bStatus3_check ++;
			document.getElementById("b3Badge").classList.remove("bg-info_ok");
			document.getElementById("b3Badge").classList.add("bg-info");
		} else {
			document.getElementById("b3Badge").classList.remove("bg-info");
			if (bStatus3_check > temp)
			document.getElementById("b3Badge").classList.add("bg-info_ok");
		}
			

		if (bStatusAuto) {
			bStatusAuto_check ++;
			document.getElementById("bAutoBadge").classList.remove("bg-info_ok");
			document.getElementById("bAutoBadge").classList.add("bg-info");
		} else {
			document.getElementById("bAutoBadge").classList.remove("bg-info");
			if (bStatusAuto_check > temp)
			document.getElementById("bAutoBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusFarol1) {
			bStatusFarol1_check ++;
			document.getElementById("bFarol1Badge").classList.remove("bg-info_ok");
			document.getElementById("bFarol1Badge").classList.add("bg-info");
		} else {
			document.getElementById("bFarol1Badge").classList.remove("bg-info");
			if (bStatusFarol1_check > temp)
			document.getElementById("bFarol1Badge").classList.add("bg-info_ok");
		}
			

		if (bStatusFarol2) {
			bStatusFarol2_check ++;
			document.getElementById("bFarol2Badge").classList.remove("bg-info_ok");
			document.getElementById("bFarol2Badge").classList.add("bg-info");
		} else {
			document.getElementById("bFarol2Badge").classList.remove("bg-info");
			if (bStatusFarol2_check > temp)
			document.getElementById("bFarol2Badge").classList.add("bg-info_ok");
		}
			

		if (bStatusHydBlock) {
			bStatusHydBlock_check ++;
			document.getElementById("bTravaBadge").classList.remove("bg-info_ok");
			document.getElementById("bTravaBadge").classList.add("bg-info");
		} else {
			document.getElementById("bTravaBadge").classList.remove("bg-info");
			if (bStatusHydBlock_check > temp)
			document.getElementById("bTravaBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusRpmMais) {
			bStatusRpmMais_check ++;
			document.getElementById("bRpmMaisBadge").classList.remove("bg-info_ok");
			document.getElementById("bRpmMaisBadge").classList.add("bg-info");
		} else {
			document.getElementById("bRpmMaisBadge").classList.remove("bg-info");
			if (bStatusRpmMais_check > temp)
			document.getElementById("bRpmMaisBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusRpmMen) {
			bStatusRpmMen_check ++;
			document.getElementById("bRpmMenBadge").classList.remove("bg-info_ok");
			document.getElementById("bRpmMenBadge").classList.add("bg-info");
		} else {
			document.getElementById("bRpmMenBadge").classList.remove("bg-info");
			if (bStatusRpmMen_check > temp)
			document.getElementById("bRpmMenBadge").classList.add("bg-info_ok");
		}
			
		if (bStatusLebreJ) {
			bStatusLebreJ_check ++;
			document.getElementById("bLebreBadgeJ").classList.remove("bg-info_ok");
			document.getElementById("bLebreBadgeJ").classList.add("bg-info");
		} else {
			document.getElementById("bLebreBadgeJ").classList.remove("bg-info");
			if (bStatusLebreJ_check > temp)
			document.getElementById("bLebreBadgeJ").classList.add("bg-info_ok");
		}
			

		if (bStatusTartaruga) {
			bStatusTartaruga_check ++;
			document.getElementById("bTartarugaBadge").classList.remove("bg-info_ok");
			document.getElementById("bTartarugaBadge").classList.add("bg-info");
		} else {
			document.getElementById("bTartarugaBadge").classList.remove("bg-info");
			if (bStatusTartaruga_check > temp)
			document.getElementById("bTartarugaBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusFreioEstPres) {
			bStatusFreioEstPres_check ++;
			document.getElementById("bFreioEstPresBadge").classList.remove("bg-info_ok");
			document.getElementById("bFreioEstPresBadge").classList.add("bg-info");
		} else {
			document.getElementById("bFreioEstPresBadge").classList.remove("bg-info");
			if (bStatusFreioEstPres_check > temp)
			document.getElementById("bFreioEstPresBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusEngStarStop) {
			bStatusEngStarStop_check ++;
			document.getElementById("stast").classList.remove("bg-info_ok");
			document.getElementById("stast").classList.remove("bg-danger_ok");
			document.getElementById("stast").classList.remove("bg-danger");
			document.getElementById("stast").classList.add("bg-info");
		} else {
			document.getElementById("stast").classList.remove("bg-info");
			
			if (bStatusEngStarStop_check)
			document.getElementById("stast").classList.add("bg-info_ok");
			document.getElementById("stast").classList.add("bg-danger_ok");
		}

	}

	cockiptbtnNum(bD1, bD2, bD3, bD4, bD5, bE1, bE2, bE3, bE4, bE5) {
		if (bD1) {
			document.getElementById("bD1txt").classList.add("luzJoyBtnE");
		} else {
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

		} else {

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
		} else {
		}
	}

	axesEsq(Gc1X, Gc1Y) {
		if (Gc1X > 0) {
			if (Gc1X == 20)
			Gc1X_check ++;
			document.getElementById("bEEsqtxt").classList.remove("esquerda");
			document.getElementById("bEEsqtxt").classList.remove("luzJoy");
			document.getElementById("bEDirtxt").classList.remove("direita");
			document.getElementById("bEDirtxt").classList.remove("luzJoy");

			document.getElementById("bEXtxt").innerText = Gc1X;
			document.getElementById("bEDirtxt").classList.add("direita");
			document.getElementById("bEDirtxt").classList.add("luzJoy");
		} else {
			if (Gc1X_check > 0){
				document.getElementById("bEEsqtxt").classList.add("esquerda");
				document.getElementById("bEEsqtxt").classList.add("luzJoy");
			}

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
			document.getElementById("bEBaixotxt").classList.remove("baixo");
			document.getElementById("bEBaixotxt").classList.remove("luzJoy");
			document.getElementById("bECimatxt").classList.remove("cima");
			document.getElementById("bECimatxt").classList.remove("luzJoy");

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
			if (Gc2Y > 19 )
			Gc2Y_check ++;
			
			if (Gc2Y_check > 0) {
				document.getElementById("bPECimatxt").classList.remove("cimaP");
			document.getElementById("bPECimatxt").classList.remove("luzJoy");
			document.getElementById("bPEBaixotxt").classList.remove("baixoP");
			document.getElementById("bPEBaixotxt").classList.remove("luzJoy");
			}
			document.getElementById("bPECimatxt").classList.remove("cimaP");
			document.getElementById("bPECimatxt").classList.remove("luzJoy");
			document.getElementById("bPEBaixotxt").classList.remove("baixoP");
			document.getElementById("bPEBaixotxt").classList.remove("luzJoy");

			document.getElementById("bPEYtxt").innerText = Gc2Y;
			document.getElementById("bPECimatxt").classList.add("cimaP");
			document.getElementById("bPECimatxt").classList.add("luzJoy");

		} else {
			document.getElementById("bPECimatxt").classList.remove("cimaP");
			document.getElementById("bPECimatxt").classList.remove("luzJoy");
			if (Gc2Y < 0) {
				document.getElementById("bPEYtxt").innerText = -Gc2Y;
				document.getElementById("bPEBaixotxt").classList.add("baixoP");
				document.getElementById("bPEBaixotxt").classList.add("luzJoy");
			} else {
				document.getElementById("bPEBaixotxt").classList.remove("baixoP");
				document.getElementById("bPEBaixotxt").classList.remove("luzJoy");
				document.getElementById("bPEYtxt").innerText = 0;
			}
		}

		if (Gc3Y > 0) {
			document.getElementById("bPDBaixotxt").classList.remove("baixoP");
			document.getElementById("bPDBaixotxt").classList.remove("luzJoy");
			document.getElementById("bPDCimatxt").classList.remove("cimaP");
			document.getElementById("bPDCimatxt").classList.remove("luzJoy");

			document.getElementById("bPDYtxt").innerText = Gc3Y;
			document.getElementById("bPDCimatxt").classList.add("cimaP");
			document.getElementById("bPDCimatxt").classList.add("luzJoy");
		} else {
			document.getElementById("bPDCimatxt").classList.remove("cimaP");
			document.getElementById("bPDCimatxt").classList.remove("luzJoy");
			if (Gc3Y < 0) {
				document.getElementById("bPDYtxt").innerText = -Gc3Y;
				document.getElementById("bPDBaixotxt").classList.add("baixoP");
				document.getElementById("bPDBaixotxt").classList.add("luzJoy");
			} else {
				document.getElementById("bPDBaixotxt").classList.remove("baixoP");
				document.getElementById("bPDBaixotxt").classList.remove("luzJoy");
				document.getElementById("bPDYtxt").innerText = 0;
			}
		}
	}

	axesDir(Gc4X, Gc4Y) {
		document.getElementById("bDDirtxt").classList.remove("luzJoy");
		document.getElementById("bDDirtxt").classList.remove("direita");
		document.getElementById("bDEsqtxt").classList.remove("esquerda");
		document.getElementById("bDEsqtxt").classList.remove("luzJoy");

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
			document.getElementById("bDCimatxt").classList.remove("cima");
			document.getElementById("bDCimatxt").classList.remove("luzJoy");
			document.getElementById("bDBaixotxt").classList.remove("baixo");
			document.getElementById("bDBaixotxt").classList.remove("luzJoy");

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

