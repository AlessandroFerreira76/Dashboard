
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
		console.log("🚀 ~ file: gaizgamepadcami.js:45 ~ GaizGamePad ~ updateStatus ~ controllers:", controllers)
		if (controllers[m].buttons.length == 24 || controllers[m].buttons.length == 30) {
			return "btn";
		} else {
			return "cockpit"
		}
	}

	axesEsq(Gc1X, Gc1Y, Gc1Z) {
		document.getElementById("bEDirtxt").classList.remove("direita");
		document.getElementById("bEDirtxt").classList.remove("luzJoy");
		document.getElementById("bEEsqtxt").classList.remove("esquerda");
		document.getElementById("bEEsqtxt").classList.remove("luzJoy");			
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

		if (Gc1Z > 0) {
			document.getElementById("bECimaZtxt").classList.add("cima");
			document.getElementById("bECimaZtxt").classList.add("luzJoy");
		} else {
			document.getElementById("bECimaZtxt").classList.remove("cima");
			document.getElementById("bECimaZtxt").classList.remove("luzJoy");
			if (Gc1Z < 0) {
				document.getElementById("bEBaixoZtxt").classList.add("baixo");
				document.getElementById("bEBaixoZtxt").classList.add("luzJoy");
			} else {
				document.getElementById("bEBaixoZtxt").classList.remove("baixo");
				document.getElementById("bEBaixoZtxt").classList.remove("luzJoy");
			}
		}
	}

	axesPedal(Gc2Y, Gc3Y) {
		if (Gc2Y > 0) {
			document.getElementById("bPEYtxt").innerText = Gc2Y;
			document.getElementById("bPECimatxt").classList.add("cimaP");
			document.getElementById("bPECimatxt").classList.add("luzJoy");

		} else {
			document.getElementById("bPEYtxt").innerText = 0;
			document.getElementById("bPECimatxt").classList.remove("cimaP");
			document.getElementById("bPECimatxt").classList.remove("luzJoy");
		}

		if (Gc3Y > 0) {
			document.getElementById("bPDYtxt").innerText = Gc3Y;
			document.getElementById("bPDCimatxt").classList.add("cimaP");
			document.getElementById("bPDCimatxt").classList.add("luzJoy");
		} else {
			document.getElementById("bPDYtxt").innerText = 0;
			document.getElementById("bPDCimatxt").classList.remove("cimaP");
			document.getElementById("bPDCimatxt").classList.remove("luzJoy");
		}
	}

	axesDir(Gc4Y) {
		if (Gc4Y > 0) {
			document.getElementById("bDCimatxt").classList.add("cima");
			document.getElementById("bDCimatxt").classList.add("luzJoy");
		} else {
			document.getElementById("bDCimatxt").classList.remove("cima");
			document.getElementById("bDCimatxt").classList.remove("luzJoy");
			if (Gc4Y < 0) {
				document.getElementById("bDBaixotxt").classList.add("baixo");
				document.getElementById("bDBaixotxt").classList.add("luzJoy");
			} else {
				document.getElementById("bDBaixotxt").classList.remove("baixo");
				document.getElementById("bDBaixotxt").classList.remove("luzJoy");
			}
		}
	}

	cockiptbtn(bStatusHome, bStatusSeta1, bStatusMenu, bStatusSeta2, bStatusOk, bStatusSeta3, bStatusSeta4, bStatusSeta5, bStatusSeta6, bStatus1, bStatus2, bStatus3,
		bStatusAuto, bStatusFarol1, bStatusFarol2, bStatusFAuxJ, bStatusAuxMais, bStatusTracao, bStatusFreioEstPres, bStatusAuxMen, bStatusTForc, bStatusEngStarStop, bStatusOn, bStatusOff) {
			
		if (bStatusHome) {
				bStatusHome_check++;				
				document.getElementById("bHomeBadge").classList.remove("bg-info_ok");
				document.getElementById("bHomeBadge").classList.add("bg-info");						
		} else	{
			document.getElementById("bHomeBadge").classList.remove("bg-info");
			if (bStatusHome_check > temp )
			document.getElementById("bHomeBadge").classList.add("bg-info_ok");
		}	

		if (bStatusSeta1) {
			bStatusSeta1_check ++;
			document.getElementById("bCimaBadge").classList.remove("bg-info_ok");
			document.getElementById("bCimaBadge").classList.add("bg-info");
		} else{
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
			if(bStatusOk_check > temp)
			document.getElementById("bOkBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusMenu) {
			bStatusMenu_check ++;
			document.getElementById("bMenuBadge").classList.add("bg-info");
			document.getElementById("bMenuBadge").classList.remove("bg-info_ok");
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
		} else{
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
			document.getElementById("bFarol2Badge").classList.add("bg-info");
			document.getElementById("bFarol2Badge").classList.remove("bg-info_ok");
		} else {
			document.getElementById("bFarol2Badge").classList.remove("bg-info");
			if (bStatusFarol2_check > temp)
			document.getElementById("bFarol2Badge").classList.add("bg-info_ok");
		}
			

		if (bStatusFAuxJ) {
			bStatusFAuxJ_check ++;
			document.getElementById("bFAuxJBadge").classList.remove("bg-info_ok");
			document.getElementById("bFAuxJBadge").classList.add("bg-info");
		} else {
			document.getElementById("bFAuxJBadge").classList.remove("bg-info");
			if (bStatusFAuxJ_check > temp)
			document.getElementById("bFAuxJBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusAuxMais) {
			bStatusAuxMais_check ++;
			document.getElementById("bAuxMaisBadge").classList.remove("bg-info_ok");
			document.getElementById("bAuxMaisBadge").classList.add("bg-info");			
		} else {
			document.getElementById("bAuxMaisBadge").classList.remove("bg-info");
			if (bStatusAuxMais_check > temp)
			document.getElementById("bAuxMaisBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusAuxMen) {
			bStatusAuxMen_check ++;
			document.getElementById("bAuxMenBadge").classList.remove("bg-info_ok");
			document.getElementById("bAuxMenBadge").classList.add("bg-info");
		} else {
			document.getElementById("bAuxMenBadge").classList.remove("bg-info");
			if (bStatusAuxMen_check > temp)
			document.getElementById("bAuxMenBadge").classList.add("bg-info_ok");
		}
			
		if (bStatusTracao) {
			bStatusTracao_check ++;
			document.getElementById("bTracaoBadge").classList.remove("bg-info_ok");
			document.getElementById("bTracaoBadge").classList.add("bg-info");
		} else {
			document.getElementById("bTracaoBadge").classList.remove("bg-info");
			if (bStatusTracao_check > temp)
			document.getElementById("bTracaoBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusTForc) {
			bStatusTForc_check ++;
			document.getElementById("bTForceBadge").classList.remove("bg-info_ok");
			document.getElementById("bTForceBadge").classList.add("bg-info");			
		} else {
			document.getElementById("bTForceBadge").classList.remove("bg-info");
			if (bStatusTForc_check > 3)
			document.getElementById("bTForceBadge").classList.add("bg-info_ok");
		}
			

		if (bStatusFreioEstPres) {
			bStatusFreioEstPres ++;
			document.getElementById("bFreioEstPresBadge").classList.remove("bg-info_ok");
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
			document.getElementById("bD1txt").classList.add("azul-luz2");
		} else {
			document.getElementById("bD1txt").classList.remove("azul-luz2");
		}
		if (bD2) {
			document.getElementById("bD2txt").classList.add("azul-luz2");
		} else {
			document.getElementById("bD2txt").classList.remove("azul-luz2");
		}
		if (bD3) {
			document.getElementById("bD3txt").classList.add("azul-luz");
		} else {
			document.getElementById("bD3txt").classList.remove("azul-luz");
		}

		if (bE1) {
			document.getElementById("bE1txt").classList.add("azul-luz");
		} else {
			document.getElementById("bE1txt").classList.remove("azul-luz");
		}
		if (bE2) {
			document.getElementById("bE2txt").classList.add("azul-luz");
		} else {
			document.getElementById("bE2txt").classList.remove("azul-luz");
		}
		if (bE3) {
			document.getElementById("bE3txt").classList.add("azul-luz");
		} else {
			document.getElementById("bE3txt").classList.remove("azul-luz");
		}
		if (bE4) {
			document.getElementById("bE4txt").classList.add("azul-luz2");
			document.getElementById("bBuzinaBadge").classList.add("azul-buzina");

		} else {
			document.getElementById("bE4txt").classList.remove("azul-luz2");
		}
		if (bE5) {
			document.getElementById("bE5txt").classList.add("azul-luz2");
		} else {
			document.getElementById("bE5txt").classList.remove("azul-luz2");
		}
	}
}

export { GaizGamePad };

