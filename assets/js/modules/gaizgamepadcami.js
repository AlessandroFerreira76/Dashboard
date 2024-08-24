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
var  Gc1X_check = 0;
var  Gc1Y_check = 0;
var  Gc1Z_check = 0;
var  Gc1X_check_m = 0;
var  Gc1Y_check_m = 0;
var  Gc1Z_check_m = 0;
var  Gc2Y_check = 0;
var  Gc3Y_check = 0;
var  Gc4Y_check = 0;
var  Gc4Y_check_m = 0;
var  bD1_check = 0;
var  bD2_check = 0;
var  bD3_check = 0;
var  bD4_check = 0;
var  bD5_check = 0;
var  bE1_check = 0;
var  bE2_check = 0;
var  bE3_check = 0;
var  bE4_check = 0;
var  bE5_check = 0;
var  test_ok;
var  temp = 2;
var  temp = 2;
var  t1 = false; 
var  t2 = false; 
var  t3 = false;
var  t4 = false;
var  t5 = false;
var  t6 = false;
var  t7 = false;
var  t8 = false;
var  t9 = false;
var  t10 = false;
var  t11 = false; 
var  t12 = false; 
var  t13 = false;
var  t14 = false;
var  t15 = false;
var  t16 = false;
var  t17 = false;
var  t18 = false;
var  t19 = false;
var  t20 = false; 
var  t21 = false; 
var  t22 = false; 
var  t23 = false;
var  t24 = false;
var  t25 = false;
var  t26 = false;
var  t27 = false;
var  t28 = false;
var  t29 = false;
var  t30 = false;
var  t31 = false; 
var  t32 = false; 
var  t33 = false;
var  t34 = false;
var  t35 = false;
var  t36 = false;
var  t37 = false;
var  t38 = false;
var  t39 = false;
var  t40 = false;


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
		//console.log("🚀 ~ file: gaizgamepadcami.js:45 ~ GaizGamePad ~ updateStatus ~ controllers:", controllers)
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
		if (Gc1X > 0) {
			if (Gc1X > 19)
			Gc1X_check ++;
			document.getElementById("bEXtxt").innerText = Gc1X;
			document.getElementById("bEDirtxt").classList.add("direita");
			document.getElementById("bEDirtxt").classList.add("luzJoy");
		} else {
			if (Gc1X_check > temp) {
				document.getElementById("bEDirtxt").classList.add("luzJoy_ok");
				t31 = true;
			}
			
			document.getElementById("bEDirtxt").classList.remove("direita");
			document.getElementById("bEDirtxt").classList.remove("luzJoy");
			if (Gc1X < 0) {
				if (Gc1X < 19)
				Gc1X_check_m ++;
				document.getElementById("bEXtxt").innerText = -Gc1X;
				document.getElementById("bEEsqtxt").classList.add("esquerda");
				document.getElementById("bEEsqtxt").classList.add("luzJoy");
			} else {
				if (Gc1X_check_m > temp) {
					document.getElementById("bEEsqtxt").classList.add("luzJoy_ok");
					t32 = true;
				}				
				document.getElementById("bEEsqtxt").classList.remove("esquerda");
				document.getElementById("bEEsqtxt").classList.remove("luzJoy");
				document.getElementById("bEXtxt").innerText = 0;
			}
		}

		if (Gc1Y > 0) {
			if (Gc1Y > 19)
			Gc1Y_check ++;
			document.getElementById("bEYtxt").innerText = Gc1Y;
			document.getElementById("bECimatxt").classList.add("cima");
			document.getElementById("bECimatxt").classList.add("luzJoy");
		} else {
			if (Gc1Y_check > temp) {
				document.getElementById("bECimatxt").classList.add("luzJoy_ok");
				t33 = true;
			}			
			document.getElementById("bECimatxt").classList.remove("cima");
			document.getElementById("bECimatxt").classList.remove("luzJoy");
			if (Gc1Y < 0) {	
				if (Gc1Y < 19)
				Gc1Y_check_m ++;		
				document.getElementById("bEYtxt").innerText = -Gc1Y;
				document.getElementById("bEBaixotxt").classList.add("baixo");
				document.getElementById("bEBaixotxt").classList.add("luzJoy");
			} else {
				if (Gc1Y_check_m > temp) {
					document.getElementById("bEBaixotxt").classList.add("luzJoy_ok");
					t34 = true;
				}				
				document.getElementById("bEBaixotxt").classList.remove("baixo");
				document.getElementById("bEBaixotxt").classList.remove("luzJoy");
				document.getElementById("bEYtxt").innerText = 0;
			}
		}

		if (Gc1Z > 0) {
			if (Gc1Z > 19)
			Gc1Z_check ++;
			document.getElementById("bECimaZtxt").classList.add("cima");
			document.getElementById("bECimaZtxt").classList.add("luzJoy");
		} else {
			if (Gc1Z_check > temp) {
				document.getElementById("bECimaZtxt").classList.add("luzJoy_ok");
				t35 = true;
			}			
			document.getElementById("bECimaZtxt").classList.remove("cima");
			document.getElementById("bECimaZtxt").classList.remove("luzJoy");
			if (Gc1Z < 0) {
				if (Gc1Z < 19)
				Gc1Z_check_m ++;
				document.getElementById("bEBaixoZtxt").classList.add("baixo");
				document.getElementById("bEBaixoZtxt").classList.add("luzJoy");
			} else {
				if (Gc1Z_check_m > temp) {
					document.getElementById("bEBaixoZtxt").classList.add("luzJoy_ok");
					t36 = true;
				}				
				document.getElementById("bEBaixoZtxt").classList.remove("baixo");
				document.getElementById("bEBaixoZtxt").classList.remove("luzJoy");
			}
		}
	}

	axesPedal(Gc2Y, Gc3Y) {
		if (Gc2Y > 0) {
			if (Gc2Y > 19)
			Gc2Y_check ++;
			document.getElementById("bPEYtxt").innerText = Gc2Y;
			document.getElementById("bPECimatxt").classList.add("cimaP");
			document.getElementById("bPECimatxt").classList.add("luzJoy");

		} else {
			if (Gc2Y_check > temp) {
				document.getElementById("bPECimatxt").classList.add("luzJoy_ok");
				t37 = true;
			}			
			document.getElementById("bPEYtxt").innerText = 0;
			document.getElementById("bPECimatxt").classList.remove("cimaP");
			document.getElementById("bPECimatxt").classList.remove("luzJoy");
		

		if (Gc3Y > 0) {
			if (Gc3Y > 19)
			Gc3Y_check ++;
			document.getElementById("bPDYtxt").innerText = Gc3Y;
			document.getElementById("bPDCimatxt").classList.add("cimaP");
			document.getElementById("bPDCimatxt").classList.add("luzJoy");
		} else {
			if (Gc3Y_check > temp) {
				document.getElementById("bPDCimatxt").classList.add("luzJoy_ok");
				t38 = true;
			}			
			document.getElementById("bPDYtxt").innerText = 0;
			document.getElementById("bPDCimatxt").classList.remove("cimaP");
			document.getElementById("bPDCimatxt").classList.remove("luzJoy");
		}
	}
	}

	axesDir(Gc4Y) {
		if (Gc4Y > 0) {
			if (Gc4Y > 19)
			Gc4Y_check ++;
			document.getElementById("bDCimatxt").classList.add("cima");
			document.getElementById("bDCimatxt").classList.add("luzJoy");
		} else {
			if (Gc4Y_check > temp) {
				document.getElementById("bDCimatxt").classList.add("luzJoy_ok");
				t39 = true;
			}			
			document.getElementById("bDCimatxt").classList.remove("cima");
			document.getElementById("bDCimatxt").classList.remove("luzJoy");
			if (Gc4Y < 0) {
				if (Gc4Y < 19)
				Gc4Y_check_m ++;
				document.getElementById("bDBaixotxt").classList.add("baixo");
				document.getElementById("bDBaixotxt").classList.add("luzJoy");
			} else {
				if (Gc4Y_check_m > temp) {
				t40 = true;	
				document.getElementById("bDBaixotxt").classList.add("luzJoy_ok");
				}
				document.getElementById("bDBaixotxt").classList.remove("baixo");
				document.getElementById("bDBaixotxt").classList.remove("luzJoy");
			}
		}
	}

	cockiptbtn(bStatusHome, bStatusSeta1, bStatusMenu, bStatusSeta2, bStatusOk, bStatusSeta3, bStatusSeta4, bStatusSeta5, bStatusSeta6, bStatus1, bStatus2, bStatus3,
		bStatusAuto, bStatusFarol1, bStatusFarol2, bStatusFAuxJ, bStatusAuxMais, bStatusTracao, bStatusFreioEstPres, bStatusAuxMen, bStatusTForc, bStatusEngStarStop, bStatusOn, bStatusOff) {
			
		if (bStatusHome) {
				bStatusHome_check++;				
				document.getElementById("bHomeBadge").classList.remove("luzJoyBtnE_ok");
				document.getElementById("bHomeBadge").classList.add("bg-info");						
		} else	{
			document.getElementById("bHomeBadge").classList.remove("bg-info");
			if (bStatusHome_check > temp ){
				document.getElementById("bHomeBadge").classList.add("luzJoyBtnE_ok");
				t1 = true;
			}
			
		}	

		if (bStatusSeta1) {
			bStatusSeta1_check ++;
			document.getElementById("bCimaBadge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bCimaBadge").classList.add("bg-info");
		} else{
			document.getElementById("bCimaBadge").classList.remove("bg-info");
			if (bStatusSeta1_check > temp){
				document.getElementById("bCimaBadge").classList.add("luzJoyBtnE_ok");
				t2 = true;
			}
			
		}
			

		if (bStatusSeta5) {
			bStatusSeta5_check ++;
			document.getElementById("bBaixoBadge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bBaixoBadge").classList.add("bg-info");
		} else {
			document.getElementById("bBaixoBadge").classList.remove("bg-info");
			if (bStatusSeta5_check > temp) {
				document.getElementById("bBaixoBadge").classList.add("luzJoyBtnE_ok");
				t3 = true;
			}
			
		}
			

		if (bStatusSeta3) {
			bStatusSeta3_check ++;
			document.getElementById("bDireitaBadge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bDireitaBadge").classList.add("bg-info");
		} else {
			document.getElementById("bDireitaBadge").classList.remove("bg-info");
			if (bStatusSeta3_check > temp){
				document.getElementById("bDireitaBadge").classList.add("luzJoyBtnE_ok");
				t4 = true;
			}
			
		}
			

		if (bStatusSeta2) {
			bStatusSeta2_check ++;
			document.getElementById("bEsqBadge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bEsqBadge").classList.add("bg-info");
		} else {
			document.getElementById("bEsqBadge").classList.remove("bg-info");
			if (bStatusSeta2_check > temp) {
				document.getElementById("bEsqBadge").classList.add("luzJoyBtnE_ok");
				t5 = true;
			}
			
		}
			

		if (bStatusOk) {
			test_ok = 1;
			//console.log(test_ok);
			bStatusOk_check ++;
			document.getElementById("bOkBadge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bOkBadge").classList.add("bg-info");
		} else {
			document.getElementById("bOkBadge").classList.remove("bg-info");
			if(bStatusOk_check > temp) {
				document.getElementById("bOkBadge").classList.add("luzJoyBtnE_ok");
				t6 = true;
			}
			
		}
		//test_ok = bStatusOk_check;

		if (bStatusMenu) {
			bStatusMenu_check ++;			
			document.getElementById("bMenuBadge").classList.add("bg-info");
			document.getElementById("bMenuBadge").classList.remove("luzJoyBtnE_ok");
		} else {
			document.getElementById("bMenuBadge").classList.remove("bg-info");
			if (bStatusMenu_check > temp) {
				document.getElementById("bMenuBadge").classList.add("luzJoyBtnE_ok");
				t7 = true;
			}
			
		}
			

		if (bStatusSeta4) {
			bStatusSeta4_check ++;
			document.getElementById("bSeta1Badge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bSeta1Badge").classList.add("bg-info");
		} else {
			document.getElementById("bSeta1Badge").classList.remove("bg-info");
			if (bStatusSeta4_check > temp) {
				document.getElementById("bSeta1Badge").classList.add("luzJoyBtnE_ok");
				t8 = true;
			}
			
		}
			

		if (bStatusSeta6) {
			bStatusSeta6_check ++;
			document.getElementById("bSeta2Badge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bSeta2Badge").classList.add("bg-info");
		} else {
			document.getElementById("bSeta2Badge").classList.remove("bg-info");
			if (bStatusSeta6_check > temp) {
				document.getElementById("bSeta2Badge").classList.add("luzJoyBtnE_ok");
				t9 = true;
			}
			
		}			

		if (bStatus1) {
			bStatus1_check ++;
			document.getElementById("b1Badge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("b1Badge").classList.add("bg-info");
		} else {
			document.getElementById("b1Badge").classList.remove("bg-info");
			if (bStatus1_check > temp) {
				document.getElementById("b1Badge").classList.add("luzJoyBtnE_ok");
				t10 = true;
			}
			
		}
			

		if (bStatus2) {
			bStatus2_check ++;
			document.getElementById("b2Badge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("b2Badge").classList.add("bg-info");
		} else {
			document.getElementById("b2Badge").classList.remove("bg-info");
			if (bStatus2_check > temp) {
				document.getElementById("b2Badge").classList.add("luzJoyBtnE_ok");
			    t11 = true;	
			}
					
		}
			

		if (bStatus3) {
			bStatus3_check ++;
			document.getElementById("b3Badge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("b3Badge").classList.add("bg-info");
		} else{
			document.getElementById("b3Badge").classList.remove("bg-info");
			if (bStatus3_check > temp) {
				document.getElementById("b3Badge").classList.add("luzJoyBtnE_ok");
				t12 = true;
			}
			 
		}
			

		if (bStatusAuto) {
			bStatusAuto_check ++;
			document.getElementById("bAutoBadge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bAutoBadge").classList.add("bg-info");
		} else {
			document.getElementById("bAutoBadge").classList.remove("bg-info");
			if (bStatusAuto_check > temp) {
				document.getElementById("bAutoBadge").classList.add("luzJoyBtnE_ok");
				t13 = true;
			}
			
		}
			

		if (bStatusFarol1) {
			bStatusFarol1_check ++;
			document.getElementById("bFarol1Badge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bFarol1Badge").classList.add("bg-info");
		} else {
			document.getElementById("bFarol1Badge").classList.remove("bg-info");
			if (bStatusFarol1_check > temp) {
				document.getElementById("bFarol1Badge").classList.add("luzJoyBtnE_ok");
				t14 = true;
			}
			
		}
			

		if (bStatusFarol2) {
			bStatusFarol2_check ++;
			document.getElementById("bFarol2Badge").classList.add("bg-info");
			document.getElementById("bFarol2Badge").classList.remove("luzJoyBtnE_ok");
		} else {
			document.getElementById("bFarol2Badge").classList.remove("bg-info");
			if (bStatusFarol2_check > temp) {
				document.getElementById("bFarol2Badge").classList.add("luzJoyBtnE_ok");
				t15 = true;
			}
			
		}
			

		if (bStatusFAuxJ) {
			bStatusFAuxJ_check ++;
			document.getElementById("bFAuxJBadge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bFAuxJBadge").classList.add("bg-info");
		} else {
			document.getElementById("bFAuxJBadge").classList.remove("bg-info");
			if (bStatusFAuxJ_check > temp) {
				document.getElementById("bFAuxJBadge").classList.add("luzJoyBtnE_ok");
				t16 = true;
			}
			
		}
			

		if (bStatusAuxMais) {
			bStatusAuxMais_check ++;
			document.getElementById("bAuxMaisBadge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bAuxMaisBadge").classList.add("bg-info");			
		} else {
			document.getElementById("bAuxMaisBadge").classList.remove("bg-info");
			if (bStatusAuxMais_check > temp) {
				document.getElementById("bAuxMaisBadge").classList.add("luzJoyBtnE_ok");
				t17 = true;
			}
			
		}
			

		if (bStatusAuxMen) {
			bStatusAuxMen_check ++;
			document.getElementById("bAuxMenBadge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bAuxMenBadge").classList.add("bg-info");
		} else {
			document.getElementById("bAuxMenBadge").classList.remove("bg-info");
			if (bStatusAuxMen_check > temp) {
				document.getElementById("bAuxMenBadge").classList.add("luzJoyBtnE_ok");
				t18 = true;
			}
			
		}
			
		if (bStatusTracao) {
			bStatusTracao_check ++;
			document.getElementById("bTracaoBadge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bTracaoBadge").classList.add("bg-info");
		} else {
			document.getElementById("bTracaoBadge").classList.remove("bg-info");
			if (bStatusTracao_check > temp) {
				document.getElementById("bTracaoBadge").classList.add("luzJoyBtnE_ok");
				t19 = true;
			}
			
		}
			

		if (bStatusTForc) {
			bStatusTForc_check ++;
			document.getElementById("bTForceBadge").classList.remove("luzJoyBtnE_ok");
			document.getElementById("bTForceBadge").classList.add("bg-info");			
		} else {
			document.getElementById("bTForceBadge").classList.remove("bg-info");
			if (bStatusTForc_check > temp) {
				document.getElementById("bTForceBadge").classList.add("luzJoyBtnE_ok");
				t20 = true;
			}
			
		}
			

		if (bStatusFreioEstPres) {
			bStatusFreioEstPres_check ++;
			document.getElementById("bFreioEstPresBadge").classList.remove("luzJoyBtnE_ok");			
			document.getElementById("bFreioEstPresBadge").classList.add("bg-info");
		} else {
			document.getElementById("bFreioEstPresBadge").classList.remove("bg-info");
			if (bStatusFreioEstPres_check > temp) {
				document.getElementById("bFreioEstPresBadge").classList.add("luzJoyBtnE_ok");
				t21 = true;
			}
			
		}		
			

		if (bStatusEngStarStop) {
			bStatusEngStarStop_check ++;
			document.getElementById("stast").classList.remove("bg-danger");
			document.getElementById("stast").classList.add("bg-info");
		} else {
			if (bStatusEngStarStop_check > temp)
			document.getElementById("stast").classList.add("luzJoyBtnE_ok");
			document.getElementById("stast").classList.remove("bg-info");
			if (bStatusEngStarStop_check > temp) {
				document.getElementById("stast").classList.remove("bg-danger");
				t22 = true;
			}
			
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
			bD1_check ++;
			document.getElementById("bD1txt").classList.add("azul-luz2");
		} else {
			if (bD1_check > temp) {
				document.getElementById("bD1txt").classList.add("azul-luz2_ok");
				t23 = true;
			}
			
			document.getElementById("bD1txt").classList.remove("azul-luz2");
		}
		if (bD2) {
			bD2_check ++;
			document.getElementById("bD2txt").classList.add("azul-luz2");
		} else {
			if (bD2_check > temp) {
				document.getElementById("bD2txt").classList.add("azul-luz2_ok");
				t24 = true;
			}
			
			document.getElementById("bD2txt").classList.remove("azul-luz2");
		}
		if (bD3) {
			bD3_check ++;
			document.getElementById("bD3txt").classList.add("azul-luz");
		} else {
			if (bD3_check > temp) {
				document.getElementById("bD3txt").classList.add("azul-luz_ok");
				t25 = true;
			}
			
			document.getElementById("bD3txt").classList.remove("azul-luz");
		}

		if (bE1) {
			bE1_check ++;
			document.getElementById("bE1txt").classList.add("azul-luz");
		} else {
			if (bE1_check > temp) {
				document.getElementById("bE1txt").classList.add("azul-luz_ok");
				t26 = true;
			}
			
			document.getElementById("bE1txt").classList.remove("azul-luz");
		}
		if (bE2) {
			bE2_check ++;
			document.getElementById("bE2txt").classList.add("azul-luz");
		} else {
			if (bE2_check > temp) {
				document.getElementById("bE2txt").classList.add("azul-luz_ok");
				t27 = true;
			}
			
			document.getElementById("bE2txt").classList.remove("azul-luz");
		}
		if (bE3) {
			bE3_check ++;
			document.getElementById("bE3txt").classList.add("azul-luz");
		} else {
			if (bE3_check > temp) {
				document.getElementById("bE3txt").classList.add("azul-luz_ok");
				t28 = true;
			}
			
			document.getElementById("bE3txt").classList.remove("azul-luz");
		}
		if (bE4) {
			bE4_check ++;
			document.getElementById("bE4txt").classList.add("azul-luz2");
			document.getElementById("bBuzinaBadge").classList.add("azul-buzina");

		} else {
			if (bE4_check > temp) {
				document.getElementById("bE4txt").classList.add("azul-luz2_ok");
				t29 = true;
			}
			
			document.getElementById("bE4txt").classList.remove("azul-luz2");
		}
		if (bE5) {
			bE5_check ++;
			document.getElementById("bE5txt").classList.add("azul-luz2");
		} else {
			if (bE5_check > temp) {
				document.getElementById("bE5txt").classList.add("azul-luz2_ok");
				t30 = true;
			}
			
			document.getElementById("bE5txt").classList.remove("azul-luz2");
		}
		
		if (t1 && t2 && t3 && t4 && t5 && t6 && t7 && t8 && t9 && t10 && t11 && t12 && t13 && t14 && t15 && t16 && t17 && t18 && t19 && t20 && t21 && t22 && t23 && t24 && t25 && t26 && t27 && t28 && t29 && t30 && t31 && t32 && t33 && t34 && t35 && t36 && t37 && t38 && t39 && t40){
			document.getElementById("alertatesteok").style.display = "block";
		}
		//&& t14 && t15 && t16 && t17 && t18 && t19 && t20 && t21 && t22 && t23 && t24 && t25 && t26 && t27 && t28 && t29 && t30 && t31 && t32 && t33 && t34 && t35 && t36 && t37 && t38 && t39 && t40
		/*console.log('t1', t1);
		console.log('t2', t2);
		console.log('t3', t3);
		console.log('t4', t4);
		console.log('t5', t5);
		console.log('t6', t6);
		console.log('t7', t7);
		console.log('t8', t8);
		console.log('t9', t9);
		console.log('t10', t10);
		console.log('t11', t11);
		console.log('t12', t12);
		console.log('t13', t13);
		*/
		console.log('t14', t14);
		console.log('t15', t15);
		console.log('t16', t16);
		console.log('t17', t17);
		console.log('t18', t18);
		console.log('t19', t19);
		console.log('t20', t20);
		console.log('t21', t21);
		console.log('t22', t22);
		console.log('t23', t23);
		console.log('t24', t24);
		console.log('t25', t25);
		console.log('t26', t26);
	}
	
}


export { GaizGamePad };

