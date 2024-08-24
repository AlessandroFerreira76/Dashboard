import { GaizGamePad } from "./modules/gaizgamepadesca.js"


// VARIAVEIS
{
	var socket;
	var namepad = "";
	var bStatusGamePad = false;
	var ADBLUE = 0;
	var bStatusDiferencial = 0;
	var bStatusRampa = 0;
	var inclinometro = document.getElementsByName("inclinometro");
	var testCon = 0;
	var contCC01 = 0;
	var contCon = 0;
	var naoresponde = false;

	var alarme_id = 0;
	var alarme_vet = ["", "INCLINAÇÃO EXCEDIDA!", "", "INCLINÔMETRO INDISPONÍVEL!"];
	var dial_lebre_tar = 0;
	var dir_drt = 0;
	var dir_esq = 0;
	var dir_value = 0;
	var entrada_id = 0;
	var entrada_vet = [".   .   .", "TOMADA DE FORÇA", "BASCULA ALTA", "TDF E BASCULA ALTA"];
	var hodo = 0;
	var hori = 0;
	var inc_x = 0;
	var inc_y = 0;
	var inter_conect_aut = 0;
	var inter_gauge = 0;
	var inter_gauge_2 = 0;
	var inter_gauge_ar = 0;
	var inter_gauge_inc = 0;
	var inter_radar = 0;
	var inter_test_conect = 0;
	var inter_visual_status = 0;
	var inter_zera_tela = 0;
	var marcha_fnr = 0;
	var modo = "";
	var niv_bat = 0;
	var niv_comb = 0;
	var operacao_id = 0;
	var operacao_vet = [".   .   .", "EM OPERAÇÃO!", ".   .   .", "EM BASCULAMENTO!", "DESCIDA DE BÁSCULA", "SUBIDA DE BÁSCULA", "FINAL DE BASCULAMENTO"];
	var pos_marcha_atual = 0;
	var pres_ar = 0;
	var pres_oleo = 0;
	//RADAR 1
	var rad1_a_obj_1 = 0;
	var rad1_a_obj_2 = 0;
	var rad1_a_obj_3 = 0;
	var rad1_a_obj_4 = 0;
	var rad1_a_obj_5 = 0;
	var rad1_a_obj_6 = 0;
	var rad1_a_obj_7 = 0;
	var rad1_a_obj_8 = 0;
	var rad1_r_obj_1 = 0;
	var rad1_r_obj_2 = 0;
	var rad1_r_obj_3 = 0;
	var rad1_r_obj_4 = 0;
	var rad1_r_obj_5 = 0;
	var rad1_r_obj_6 = 0;
	var rad1_r_obj_7 = 0;
	var rad1_r_obj_8 = 0;
	//RADAR 2
	var rad2_a_obj_1 = 0;
	var rad2_a_obj_2 = 0;
	var rad2_a_obj_3 = 0;
	var rad2_a_obj_4 = 0;
	var rad2_a_obj_5 = 0;
	var rad2_a_obj_6 = 0;
	var rad2_a_obj_7 = 0;
	var rad2_a_obj_8 = 0;
	var rad2_r_obj_1 = 0;
	var rad2_r_obj_2 = 0;
	var rad2_r_obj_3 = 0;
	var rad2_r_obj_4 = 0;
	var rad2_r_obj_5 = 0;
	var rad2_r_obj_6 = 0;
	var rad2_r_obj_7 = 0;
	var rad2_r_obj_8 = 0;
	var rpm = 0;
	var saida_id = 0;
	var status_bidir = false;
	var status_cockpit = true;
	var status_conectar = false;
	var status_disconect = false;
	var status_freio_aux = false;
	var status_freio_est = false;
	var status_ignicao = false;
	var status_lamp = false;
	var status_lebre = false;
	var status_port = 0;
	var status_retarder = false;
	var status_rpm_auto = false;
	var status_siren = false;
	var status_t_forca = false;
	var status_trava_hid = false;
	var suf_oil = 0;
	var tema = document.getElementsByName("tema");
	var temp_hid = 0;
	var temp_motor = 0;
	var temp_power_train = 0;
	var temp_transm_ol = 0;
	var vel_kmh = 0;

	var rad1_dist1 = 30;
	var rad1_dist2 = 30;
	var rad1_dist3 = 30;
	var rad1_dist4 = 30;
	var rad1_dist5 = 30;

	var rad2_dist1 = 30;
	var rad2_dist2 = 30;
	var rad2_dist3 = 30;
	var rad2_dist4 = 30;
	var rad2_dist5 = 30;


	var Gc1X = 0;
	var Gc1Y = 0;
	var Gc1Z = 0;
	var Gc2Y = 0;
	var Gc3Y = 0
	var Gc4X = 0;
	var Gc4Y = 0;

	var bStatusHome = false;
	var bStatusSeta1 = false; //cima
	var bStatusSeta2 = false; //esquerda
	var bStatusSeta3 = false; //direita
	var bStatusSeta4 = false; //diagonal esquerdo
	var bStatusSeta5 = false; //baixo
	var bStatusSeta6 = false; //diagonal direito
	var bStatusOk = false;
	var bStatusMenu = false;
	var bStatus1 = false;
	var bStatus2 = false;
	var bStatus3 = false;
	var bStatusAuto = false;
	var bStatusManual = false;
	var bStatusFarol1 = false;
	var bStatusFarol2 = false;
	var bStatusFAuxJ = false;
	var bStatusAuxMais = false;
	var bStatusAuxMen = false;
	var bStatusTracao = false;
	var bStatusTForc = false;
	var bStatusFreioEstPres = false;
	var bStatusEngStarStop = false;
	var bStatusOn = false;
	var bStatusOff = false;
	var bD1 = false;
	var bD2 = false;
	var bD3 = false;
	var bD4 = false;
	var bD5 = false;
	var bE1 = false;
	var bE2 = false;
	var bE3 = false;
	var bE4 = false;
	var bE5 = false;

	var myGamePad = new GaizGamePad();
}

// FUNCOES
{
	var OutputLog2 = function (msg) {
		var content = '<p>' + msg + '</p>';
		$('#consolebox2').empty();
		$('#consolebox2').append(content);
	}

	var atualizaVisualStatus = function () {
		if (contResizeStop < 6) contResizeStop++;
		if (contResizeStop == 5) {
			contResizeStop = 6;
			margintop();
		}

		if (contResize !== 0) {
			contResize++;
			margintop();
		}

		myGamePad.cockiptbtnNum(bD1, bD2, bD3, bD4, bD5, bE1, bE2, bE3, bE4, bE5);
		myGamePad.axesEsq(Gc1X, Gc1Y, Gc1Z);
		myGamePad.axesPedal(Gc2Y, Gc3Y);
		myGamePad.axesDir(Gc4X, Gc4Y);
		myGamePad.cockiptbtn(bStatusHome, bStatusSeta1, bStatusMenu, bStatusSeta2, bStatusOk, bStatusSeta3, bStatusSeta4, bStatusSeta5, bStatusSeta6, bStatus1,
			bStatus2, bStatus3, bStatusAuto, bStatusFarol1, bStatusFarol2, bStatusFAuxJ, bStatusAuxMais, bStatusTracao, bStatusFreioEstPres, bStatusAuxMen, bStatusTForc,
			bStatusEngStarStop, bStatusOn, bStatusOff);
	}

	var buttonPressed = function (b) {
		if (typeof (b) == "object") {
			return b.pressed;
		}
		return b == 1.0;
	}

	var atualizaBtn = function (controllers, m) {
		document.getElementById("cockpit1").style.display = "";
		document.getElementById("cockpit2").style.display = "";

		bStatusHome = (buttonPressed(controllers[m].buttons[0]) == 1);
		bStatusSeta1 = (buttonPressed(controllers[m].buttons[1]) == 1); //cima
		bStatusMenu = (buttonPressed(controllers[m].buttons[2]) == 1);

		bStatusSeta2 = (buttonPressed(controllers[m].buttons[3]) == 1); //esquerda
		bStatusOk = (buttonPressed(controllers[m].buttons[4]) == 1);
		bStatusSeta3 = (buttonPressed(controllers[m].buttons[5]) == 1); //direita

		bStatusSeta4 = (buttonPressed(controllers[m].buttons[8]) == 1); //diagonal esquerdo
		bStatusSeta5 = (buttonPressed(controllers[m].buttons[7]) == 1); //baixo
		bStatusSeta6 = (buttonPressed(controllers[m].buttons[6]) == 1); //diagonal direito

		bStatus1 = (buttonPressed(controllers[m].buttons[9]) == 1);
		bStatus2 = (buttonPressed(controllers[m].buttons[10]) == 1);
		bStatus3 = (buttonPressed(controllers[m].buttons[11]) == 1);

		bStatusAuto = (buttonPressed(controllers[m].buttons[12]) == 1);
		bStatusFarol2 = (buttonPressed(controllers[m].buttons[13]) == 1);
		bStatusFarol1 = (buttonPressed(controllers[m].buttons[14]) == 1);

		bStatusFAuxJ = (buttonPressed(controllers[m].buttons[15]) == 1);
		bStatusAuxMais = (buttonPressed(controllers[m].buttons[16]) == 1);
		bStatusTracao = (buttonPressed(controllers[m].buttons[17]) == 1);

		bStatusFreioEstPres = (buttonPressed(controllers[m].buttons[18]) == 1);
		bStatusAuxMen = (buttonPressed(controllers[m].buttons[19]) == 1);
		bStatusTForc = (buttonPressed(controllers[m].buttons[20]) == 1);

		bStatusEngStarStop = (buttonPressed(controllers[m].buttons[21]) == 1);
		bStatusOn = (buttonPressed(controllers[m].buttons[22]) == 1);
		bStatusOff = (buttonPressed(controllers[m].buttons[23]) == 1);

		if (bStatusOff == true) status_cockpit = false;
		else if (bStatusOff == false) status_cockpit = true;
	}

	var AtualizaJoysticks = function (controllers, m) {
		document.getElementById("cockpit1").style.display = "";
		document.getElementById("cockpit2").style.display = "";

		Gc1X = (Math.round(scale(controllers[m].axes[3], -1, 1, -1000, 1000))) / 50; // LH  X
		Gc1Y = (Math.round(scale(controllers[m].axes[4], -1, 1, -1000, 1000))) / 50; // LH  Y

		// ("cockpitpedalesquerdo"):
		Gc2Y = (Math.round(scale(controllers[m].axes[2], -1, 1, -1000, 1000))) / 50;// LH Z

		// ("cockpitpedaldireito"):
		Gc3Y = (Math.round(scale(controllers[m].axes[5], -1, 1, -1000, 1000))) / 50;// RH Z

		// ("cockpitjoydireito"):
		Gc4X = (Math.round(scale(controllers[m].axes[0], -1, 1, -1000, 1000))) / 50; // RH  X
		Gc4Y = (Math.round(scale(controllers[m].axes[1], -1, 1, -1000, 1000))) / 50; // RH  Y

		let content = "";
		content += "Gc1X:" + Gc1X + "     ";
		content += "Gc1Y:" + Gc1Y + "     ";
		content += "Gc1Z:" + Gc1Z + "     ";
		content += "Gc2Y:" + Gc2Y + "     ";
		content += "Gc3Y:" + Gc3Y + "     ";
		content += "Gc4Y:" + Gc4Y + "     ";
		OutputLog2(content);

		bD1 = (buttonPressed(controllers[m].buttons[0]) == 1);
		bD2 = (buttonPressed(controllers[m].buttons[1]) == 1); //cima
		bD3 = (buttonPressed(controllers[m].buttons[2]) == 1);
		bD4 = (buttonPressed(controllers[m].buttons[3]) == 1); //esquerda
		bD5 = (buttonPressed(controllers[m].buttons[4]) == 1);

		bE1 = (buttonPressed(controllers[m].buttons[5]) == 1); //direita
		bE2 = (buttonPressed(controllers[m].buttons[6]) == 1); //diagonal esquerdo
		bE3 = (buttonPressed(controllers[m].buttons[7]) == 1); //baixo
		bE4 = (buttonPressed(controllers[m].buttons[8]) == 1); //diagonal direito
		bE5 = (buttonPressed(controllers[m].buttons[9]) == 1);
	}

	var scale = function (x, in_min, in_max, out_min, out_max) {
		let escala = (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
		if (escala > out_max) return out_max;
		if (escala < out_min) return out_min;
		return escala;
	}

	var contResize = 0;
	var contResizeStop = 0;
	var mt = 0;
	var ab = 0;
	var margintop = function () {
		mt = 0;
		let bod = 130;

		mt = ((document.documentElement.clientHeight - bod) / 2);

		if (mt > 0) document.getElementById("app").style.marginTop = mt + 'px';

		contResize = 0;
	}
}

$(document).ready(function () {
	window.addEventListener("resize", function () {
		if (contResize == 0) {
			contResize++
			contResizeStop = 0;
		}
	});

	// BOTOES STATUS
	inter_visual_status = setInterval(atualizaVisualStatus, 350);

	// GAMEPAD
	{
		//GAMEPAD USB
		var haveEvents = 'GamepadEvent' in window;
		var haveWebkitEvents = 'WebKitGamepadEvent' in window;
		var controllers = {};
		var rAF = window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.requestAnimationFrame;

		function connecthandler(e) {
			addgamepad(e.gamepad);
		}

		function disconnecthandler(e) {
			removegamepad(e.gamepad);
		}

		function addgamepad(gamepad) {
			bStatusGamePad = true;
			myGamePad = new GaizGamePad(gamepad);
			controllers = myGamePad.addgamepad(controllers);
			rAF(updateStatus);
		}

		function removegamepad(gamepad) {
			bStatusGamePad = false;
			myGamePad.removegamepad(controllers, gamepad);
			if (namepad == "cockpit" || "btn") {
				document.getElementById("cockpit1").style.display = "none";
				document.getElementById("cockpit2").style.display = "none";
			}
		}

		function scangamepads() {
			let gamepads;
			gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
			document.getElementById("alertaboasvindas").style.display = "";
			for (var i = 0; i < gamepads.length; i++) {
				if (gamepads[i]) {
					if (!(gamepads[i].index in controllers)) {
						addgamepad(gamepads[i]);
					} else {
						controllers[gamepads[i].index] = gamepads[i];
					}
				}
			}
		}

		function updateStatus() {
			scangamepads();
			if (controllers.length < 1 || controllers === undefined) {

				console.log("Entrei length")
				return;
			}

			var m = 0;
			let clenght = Object.keys(controllers).length;
			for (m = 0; m < clenght; m++) {
				document.getElementById("alertaboasvindas").style.display = "none";
				if (controllers[m] !== undefined) {
					namepad = myGamePad.updateStatus(controllers, m);
				} else clenght++;
				switch (namepad) {
					case ("btn"):
						if (controllers[m] !== undefined) {
							atualizaBtn(controllers, m);
						}
						break;
					case ("cockpit"):
						if (controllers[m] !== undefined) {
							AtualizaJoysticks(controllers, m);
						}
						break;
				}
			}
			rAF(updateStatus);
		}
		if (haveEvents) {
			window.addEventListener("gamepadconnected", connecthandler);
			window.addEventListener("gamepaddisconnected", disconnecthandler);
			if (controllers.length < 1 || controllers.length === undefined) {
				scangamepads();
			}
		} else if (haveWebkitEvents) {
			window.addEventListener("webkitgamepadconnected", connecthandler);
			window.addEventListener("webkitgamepaddisconnected", disconnecthandler);
		} else {
			setInterval(scangamepads, 600);
		}
	}

	function telaCheia() {
		document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement;
	}
	margintop();
});