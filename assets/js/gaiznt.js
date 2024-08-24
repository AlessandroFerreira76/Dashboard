import { Gauge } from "./modules/gaizgauge.js"
import { VisualStatus } from "./modules/gaizvisualstatus.js"
import { IpConnect } from "./modules/gaizipconnect.js"
import { GaizGamePad } from "./modules/gaizgamepad.js"
import { NomeMaquina } from "./modules/nomemaquina.js"

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

	// COMUNICAÇÃO
	{
		var MAQUINA = JSON.parse("{\"RECV\" : {\"TYPE\":0}, \"SEND\" : {\"TYPE\":0}}");

		// RECEBER
		{
			MAQUINA.RECV.TYPE = 0;
			MAQUINA.RECV.CC00 = 0;
			MAQUINA.RECV.CC01 = 0;

			MAQUINA.RECV.ST000 = 0;
			MAQUINA.RECV.ST001 = 0;
			MAQUINA.RECV.ST002 = 0;
			MAQUINA.RECV.ST003 = 0;
			MAQUINA.RECV.ST004 = 0;
			MAQUINA.RECV.ST005 = 0;
			MAQUINA.RECV.ST006 = 0;
			MAQUINA.RECV.ST007 = 0;
			MAQUINA.RECV.ST008 = 0;
			MAQUINA.RECV.ST009 = 0;
			MAQUINA.RECV.ST011 = 0;
			MAQUINA.RECV.ST012 = 0;
			MAQUINA.RECV.ST013 = 0;
			MAQUINA.RECV.ST014 = 0;
			MAQUINA.RECV.ST015 = 0;
			MAQUINA.RECV.ST016 = 0;
			MAQUINA.RECV.ST017 = 0;
			MAQUINA.RECV.ST018 = 0;
			MAQUINA.RECV.ST019 = 0;
			MAQUINA.RECV.ST020 = 0;
			MAQUINA.RECV.ST021 = 0;
			MAQUINA.RECV.ST022 = 0;
			MAQUINA.RECV.ST023 = 0;
			MAQUINA.RECV.ST024 = 0;
			MAQUINA.RECV.ST025 = 0;
			MAQUINA.RECV.ST026 = 0;
			MAQUINA.RECV.ST027 = 0;
			MAQUINA.RECV.ST028 = 0;
			MAQUINA.RECV.ST029 = 0;
			MAQUINA.RECV.ST030 = 0;
			MAQUINA.RECV.ST031 = 0;
			MAQUINA.RECV.ST032 = 0;
			MAQUINA.RECV.ST033 = 0;
			MAQUINA.RECV.ST034 = 0;
			MAQUINA.RECV.ST035 = 0;
			MAQUINA.RECV.ST036 = 0;
			MAQUINA.RECV.ST037 = 0;
			MAQUINA.RECV.ST038 = 0;
			MAQUINA.RECV.ST039 = 0;
			MAQUINA.RECV.ST040 = 0;
			MAQUINA.RECV.ST041 = 0;
			MAQUINA.RECV.ST042 = 0;
			MAQUINA.RECV.ST043 = 0;
			MAQUINA.RECV.ST044 = 0;
			MAQUINA.RECV.ST045 = 0;
			MAQUINA.RECV.ST046 = 0;
			MAQUINA.RECV.ST047 = 0;
			MAQUINA.RECV.ST048 = 0;
			MAQUINA.RECV.ST049 = 0;
			MAQUINA.RECV.ST050 = 0;
		}

		// ENVIAR
		{
			MAQUINA.SEND.TYPE = 0;
			MAQUINA.SEND.CC00 = 0;
			MAQUINA.SEND.CC01 = 0;
		}
	}

	//gauge
	var myGauge = new Gauge();

	var myGamePad = new GaizGamePad();

	// VisualStatus
	var myVisualStatus = new VisualStatus();

	// Ips conexao
	var myIpConnect = new IpConnect();

	var myNomeMaquina = new NomeMaquina();
}

// FUNCOES
{
	var reconnectTry = function () {
		if (status_conectar == false) {
			connect();
			if (status_conectar == false && status_disconect == true) {
				document.getElementById("msgCon").classList.remove("ml-5");
				document.getElementById("msgCon").classList.remove("mr-n5");
				document.getElementById("alertaSeg").classList.remove("fundobloqueio");
				document.getElementById("msgCon").style.left = "0px";
				document.getElementById("msgCon").classList.remove("text-warning");
				document.getElementById("msgCon").classList.remove("text-black-50");
				document.getElementById("msgCon").classList.add("text-danger");
				document.getElementById("msgCon").classList.add("mt-4");
				document.getElementById("msgCon").innerText = "DASHBOARD INDISPONÍVEL";
				document.getElementById("loading").style.display = "none";
				document.getElementById("alertaSeg").style.display = "";
			}
		}
	}

	var OutputLog = function (msg) {
		var content = '<p>' + msg + '</p>';
		$('#consolebox').empty();
		$('#consolebox').append(content);
	}

	var OutputLog2 = function (msg) {
		var content = '<p>' + msg + '</p>';
		$('#consolebox2').empty();
		$('#consolebox2').append(content);
	}

	var OutDebug = function (msg) {
		var content = '<p>' + msg + '</p>';
		$('#consolebox4').empty();
		$('#consolebox4').append(content);
	};

	// **************CONECTAR**************
	{
		var connect = function () {
			var host = "ws://" + myIpConnect.M_NUC_IP() + ":81";
			if (contCon >= 7) status_disconect = true;
			contCon++;
			try {

				socket = new WebSocket(host);

				socket.onopen = function () {
					contCon = 0.
					clearFun();
					clearInterval(inter_visual_status);
					status_conectar = true;
					status_disconect = false;
					inter_visual_status = setInterval(atualizaVisualStatus, 350);
					inter_test_conect = setInterval(testConect, 200);
					inter_gauge = setInterval(UPT_gauge, 300);
					inter_gauge_2 = setInterval(UPT_gauge2, 2500);
					inter_gauge_inc = setInterval(UPT_gaugeAclive, 350);
					inter_radar = setInterval(UPT_radar, 200);
					inter_gauge_ar = setInterval(UPT_gaugePAr, 700);
					document.getElementById("alertaSeg").style.display = "none";
					socket.send(JSON.stringify(MAQUINA.SEND));
				}

				socket.onmessage = function (msg) {
					var str = msg.data;
					var jsonMsg = JSON.parse(str);

					MAQUINA.RECV.CC00 = jsonMsg.CC00;
					MAQUINA.RECV.CC01 = jsonMsg.CC01;

					MAQUINA.RECV.ST000 = jsonMsg.ST000;
					MAQUINA.RECV.ST001 = jsonMsg.ST001;
					MAQUINA.RECV.ST002 = jsonMsg.ST002;
					MAQUINA.RECV.ST003 = jsonMsg.ST003;
					MAQUINA.RECV.ST004 = jsonMsg.ST004;
					MAQUINA.RECV.ST005 = jsonMsg.ST005;
					MAQUINA.RECV.ST006 = jsonMsg.ST006;
					MAQUINA.RECV.ST007 = jsonMsg.ST007;
					MAQUINA.RECV.ST008 = jsonMsg.ST008;
					MAQUINA.RECV.ST009 = jsonMsg.ST009;
					MAQUINA.RECV.ST010 = jsonMsg.ST010;
					MAQUINA.RECV.ST011 = jsonMsg.ST011;
					MAQUINA.RECV.ST012 = jsonMsg.ST012;
					MAQUINA.RECV.ST013 = jsonMsg.ST013;
					MAQUINA.RECV.ST014 = jsonMsg.ST014;
					MAQUINA.RECV.ST015 = jsonMsg.ST015;
					MAQUINA.RECV.ST016 = jsonMsg.ST016;
					MAQUINA.RECV.ST017 = jsonMsg.ST017;
					MAQUINA.RECV.ST018 = jsonMsg.ST018;
					MAQUINA.RECV.ST019 = jsonMsg.ST019;
					MAQUINA.RECV.ST020 = jsonMsg.ST020;
					MAQUINA.RECV.ST021 = jsonMsg.ST021;
					MAQUINA.RECV.ST022 = jsonMsg.ST022;
					MAQUINA.RECV.ST023 = jsonMsg.ST023;
					MAQUINA.RECV.ST024 = jsonMsg.ST024;
					MAQUINA.RECV.ST025 = jsonMsg.ST025;
					MAQUINA.RECV.ST026 = jsonMsg.ST026;
					MAQUINA.RECV.ST027 = jsonMsg.ST027;
					MAQUINA.RECV.ST028 = jsonMsg.ST028;
					MAQUINA.RECV.ST029 = jsonMsg.ST029;
					MAQUINA.RECV.ST030 = jsonMsg.ST030;
					MAQUINA.RECV.ST031 = jsonMsg.ST031;
					MAQUINA.RECV.ST032 = jsonMsg.ST032;
					MAQUINA.RECV.ST033 = jsonMsg.ST033;
					MAQUINA.RECV.ST034 = jsonMsg.ST034;
					MAQUINA.RECV.ST035 = jsonMsg.ST035;
					MAQUINA.RECV.ST036 = jsonMsg.ST036;
					MAQUINA.RECV.ST037 = jsonMsg.ST037;
					MAQUINA.RECV.ST038 = jsonMsg.ST038;
					MAQUINA.RECV.ST039 = jsonMsg.ST039;
					MAQUINA.RECV.ST040 = jsonMsg.ST040;
					MAQUINA.RECV.ST041 = jsonMsg.ST041;
					MAQUINA.RECV.ST042 = jsonMsg.ST042;
					MAQUINA.RECV.ST043 = jsonMsg.ST043;
					MAQUINA.RECV.ST044 = jsonMsg.ST044;
					MAQUINA.RECV.ST045 = jsonMsg.ST045;
					MAQUINA.RECV.ST046 = jsonMsg.ST046;
					MAQUINA.RECV.ST047 = jsonMsg.ST047;
					MAQUINA.RECV.ST048 = jsonMsg.ST048;
					MAQUINA.RECV.ST049 = jsonMsg.ST049;
					MAQUINA.RECV.ST050 = jsonMsg.ST050;
					MAQUINA.RECV.ST051 = jsonMsg.ST051;
					MAQUINA.RECV.ST052 = jsonMsg.ST052;
					MAQUINA.RECV.ST053 = jsonMsg.ST053;
					MAQUINA.RECV.ST054 = jsonMsg.ST054;
					MAQUINA.RECV.ST055 = jsonMsg.ST055;
					MAQUINA.RECV.ST056 = jsonMsg.ST056;
					MAQUINA.RECV.ST057 = jsonMsg.ST057;
					MAQUINA.RECV.ST058 = jsonMsg.ST058;
					MAQUINA.RECV.ST059 = jsonMsg.ST059;
					MAQUINA.RECV.ST060 = jsonMsg.ST060;
					MAQUINA.RECV.ST061 = jsonMsg.ST061;
					MAQUINA.RECV.ST062 = jsonMsg.ST062;
					MAQUINA.RECV.ST063 = jsonMsg.ST063;
					MAQUINA.RECV.ST064 = jsonMsg.ST064;
					MAQUINA.RECV.ST065 = jsonMsg.ST065;
					MAQUINA.RECV.ST066 = jsonMsg.ST066;
					MAQUINA.RECV.ST067 = jsonMsg.ST067;
					MAQUINA.RECV.ST068 = jsonMsg.ST068;
					MAQUINA.RECV.ST069 = jsonMsg.ST069;
					MAQUINA.RECV.ST070 = jsonMsg.ST070;
					MAQUINA.RECV.ST071 = jsonMsg.ST071;
					MAQUINA.RECV.ST072 = jsonMsg.ST072;
					MAQUINA.RECV.ST073 = jsonMsg.ST073;
					MAQUINA.RECV.ST074 = jsonMsg.ST074;
					MAQUINA.RECV.ST075 = jsonMsg.ST075;
					MAQUINA.RECV.ST076 = jsonMsg.ST076;
					MAQUINA.RECV.ST077 = jsonMsg.ST077;
					MAQUINA.RECV.ST078 = jsonMsg.ST078;
					MAQUINA.RECV.ST079 = jsonMsg.ST079;
					MAQUINA.RECV.ST080 = jsonMsg.ST080;
					MAQUINA.RECV.ST081 = jsonMsg.ST081;
					MAQUINA.RECV.ST082 = jsonMsg.ST082;
					MAQUINA.RECV.ST083 = jsonMsg.ST083;
					MAQUINA.RECV.ST084 = jsonMsg.ST084;
					MAQUINA.RECV.ST085 = jsonMsg.ST085;
					MAQUINA.RECV.ST086 = jsonMsg.ST086;
					MAQUINA.RECV.ST087 = jsonMsg.ST087;
					MAQUINA.RECV.ST088 = jsonMsg.ST088;
					MAQUINA.RECV.ST079 = jsonMsg.ST089;
					MAQUINA.RECV.ST090 = jsonMsg.ST080;
					MAQUINA.RECV.ST091 = jsonMsg.ST091;
					MAQUINA.RECV.ST092 = jsonMsg.ST092;
					MAQUINA.RECV.ST093 = jsonMsg.ST093;
					MAQUINA.RECV.ST094 = jsonMsg.ST094;
					MAQUINA.RECV.ST095 = jsonMsg.ST095;
					MAQUINA.RECV.ST096 = jsonMsg.ST096;
					MAQUINA.RECV.ST097 = jsonMsg.ST097;
					MAQUINA.RECV.ST098 = jsonMsg.ST098;
					MAQUINA.RECV.ST099 = jsonMsg.ST099;
					MAQUINA.RECV.ST100 = jsonMsg.ST100;
					MAQUINA.RECV.ST101 = jsonMsg.ST101;
					MAQUINA.RECV.ST102 = jsonMsg.ST102;
					MAQUINA.RECV.ST103 = jsonMsg.ST103;
					MAQUINA.RECV.ST104 = jsonMsg.ST104;
					MAQUINA.RECV.ST105 = jsonMsg.ST105;
					MAQUINA.RECV.ST106 = jsonMsg.ST106;
					MAQUINA.RECV.ST107 = jsonMsg.ST107;
					MAQUINA.RECV.ST108 = jsonMsg.ST108;
					MAQUINA.RECV.ST109 = jsonMsg.ST109;
					MAQUINA.RECV.ST110 = jsonMsg.ST110;
					MAQUINA.RECV.ST111 = jsonMsg.ST111;
					MAQUINA.RECV.ST112 = jsonMsg.ST112;
					MAQUINA.RECV.ST113 = jsonMsg.ST113;
					MAQUINA.RECV.ST114 = jsonMsg.ST114;
					MAQUINA.RECV.ST115 = jsonMsg.ST115;
					MAQUINA.RECV.ST116 = jsonMsg.ST116;
					MAQUINA.RECV.ST117 = jsonMsg.ST117;
					MAQUINA.RECV.ST118 = jsonMsg.ST118;
					MAQUINA.RECV.ST119 = jsonMsg.ST119;
					MAQUINA.RECV.ST120 = jsonMsg.ST120;

					// Velocidade = (MAQUINA.RECV.ST000) / 256;  //Velocidade em km/h
					// RPM = (MAQUINA.RECV.ST001) / 6;  //Rpm em rpm
					// Hodometro = (MAQUINA.RECV.ST002) / 200;  //Hodometro em km
					// Ar = (MAQUINA.RECV.ST003) / 12.5;  //Pressão Ar em Bar
					// Temp = (MAQUINA.RECV.ST004) / 1;  //Temperatura em ºC
					// Gear = (MAQUINA.RECV.ST005) / 1;  //Marcha em
					// bStatusParkBreak = (MAQUINA.RECV.ST006 == "true") / 1;  //Park Break em bool
					// Tforca = (MAQUINA.RECV.ST007 == "true") / 1;  //Tomada de Força em bool
					// FUELx = (MAQUINA.RECV.ST008) / 2.5;  //Combustível em %
					// TopBrake = (MAQUINA.RECV.ST009 == "true") / 1;  //Top Brake em bool
					// combustivel = MAQUINA.ST00

					vel_kmh = (MAQUINA.RECV.ST000 !== undefined) ? parseInt((MAQUINA.RECV.ST000) / 256) : '-'; //Velocidade em km/h
					rpm = (MAQUINA.RECV.ST001 !== undefined) ? parseInt((MAQUINA.RECV.ST001) / 6) : '-';  //Rpm em rpm
					hodo = (MAQUINA.RECV.ST002 !== undefined) ? (parseFloat(MAQUINA.RECV.ST002 / 200).toFixed(1)) : '-';  //Hodometro em km
					pres_ar = (MAQUINA.RECV.ST003 !== undefined) ? MAQUINA.RECV.ST003 / 12.5 : '-';  //Pressão Ar em Bar
					temp_motor = (MAQUINA.RECV.ST004 !== undefined) ? MAQUINA.RECV.ST004 : '-';  //Temperatura em ºC
					pos_marcha_atual = (MAQUINA.RECV.ST005 !== undefined) ? MAQUINA.RECV.ST005 : '-'; //Marcha
					status_freio_est = (MAQUINA.RECV.ST006 !== undefined) ? (MAQUINA.RECV.ST006 == "true") : '-'; //Park Break em bool
					status_t_forca = (MAQUINA.RECV.ST007 !== undefined) ? (MAQUINA.RECV.ST007 == "true") : '-';  //Tomada de Força em bool
					niv_comb = (MAQUINA.RECV.ST008 !== undefined) ? (MAQUINA.RECV.ST008) / 2.5 : '-';  //Combustível em %
					ADBLUE = (MAQUINA.RECV.ST008 !== undefined) ? (MAQUINA.RECV.ST008) / 2.5 : '-';  //Combustível em %
					status_freio_aux = (MAQUINA.RECV.ST009 !== undefined) ? (MAQUINA.RECV.ST009 > 0) : '-';  //Top Brake em bool

					// Inc_x = (MAQUINA.RECV.ST010) / 10; //Inclinometro X em º
					// Inc_Y = (MAQUINA.RECV.ST011) / 10; //Inclinometro em º
					// Ind_entrada12 = MAQUINA.RECV.ST012; // em index"
					// Ind_saida = MAQUINA.RECV.ST013; // em index
					// Ind_operacao = MAQUINA.RECV.ST014 / 1; //Ind_operacao em index
					// Ind_alarme15 = MAQUINA.RECV.ST015 / 1; // em index"
					// Steeringpos = (MAQUINA.RECV.ST016)/1;  //Direção


					status_ignicao = (MAQUINA.RECV.ST010 !== undefined) ? true : false;// Inclinometro X

					alarme_id = (MAQUINA.RECV.ST015 !== undefined) ? MAQUINA.RECV.ST015 : '-';
					entrada_id = (MAQUINA.RECV.ST012 !== undefined && MAQUINA.RECV.ST012 < 4) ? MAQUINA.RECV.ST012 : '-';
					operacao_id = (MAQUINA.RECV.ST014 !== undefined && MAQUINA.RECV.ST014 < 7) ? MAQUINA.RECV.ST014 : '-';


					if (alarme_id == 3) {
						inc_x = 0;// Inclinometro X
						inc_y = 0;// Inclinometro
					} else {
						if (inclinometro[1].checked) {
							inc_x = (MAQUINA.RECV.ST010 !== undefined) ? -(parseFloat(MAQUINA.RECV.ST010 / 10).toFixed(1)) : 0;// Inclinometro X

							inc_y = (MAQUINA.RECV.ST011 !== undefined) ? -(parseFloat(MAQUINA.RECV.ST011 / 10).toFixed(1)) : 0;// Inclinometro
						} else {
							inc_x = (MAQUINA.RECV.ST010 !== undefined) ? (parseFloat(MAQUINA.RECV.ST010 / 10).toFixed(1)) : 0;// Inclinometro X

							inc_y = (MAQUINA.RECV.ST011 !== undefined) ? (parseFloat(MAQUINA.RECV.ST011 / 10).toFixed(1)) : 0;// Inclinometro
						}
					}

					if (MAQUINA.RECV.ST016 !== undefined) {
						if (MAQUINA.RECV.ST016 >= -32 && MAQUINA.RECV.ST016 <= 32) {
							dir_esq = 0;
							dir_drt = 0;
						} else if (MAQUINA.RECV.ST016 > 32) {
							dir_drt = MAQUINA.RECV.ST016;
							dir_esq = 0;
							dir_value = MAQUINA.RECV.ST016;
						}
						else if (MAQUINA.RECV.ST016 < -32) {
							dir_esq = -MAQUINA.RECV.ST016;
							dir_drt = 0;
							dir_value = MAQUINA.RECV.ST016;
						}
					} else {
						dir_esq = '-';
						dir_drt = '-';
					}

					//RADAR 1
					if (MAQUINA.RECV.ST017 === undefined) rad1_r_obj_1 = (MAQUINA.RECV.ST017);
					else rad1_r_obj_1 = (MAQUINA.RECV.ST017) / 4;  //Radius em m
					rad1_a_obj_1 = (MAQUINA.RECV.ST018);  //Angle em º

					if (MAQUINA.RECV.ST020 === undefined) rad1_r_obj_2 = (MAQUINA.RECV.ST020);
					else rad1_r_obj_2 = (MAQUINA.RECV.ST020) / 4;  //Radius em m
					rad1_a_obj_2 = (MAQUINA.RECV.ST021);  //Angle em º

					if (MAQUINA.RECV.ST023 === undefined) rad1_r_obj_3 = (MAQUINA.RECV.ST023);
					else rad1_r_obj_3 = (MAQUINA.RECV.ST023) / 4;  //Radius em m
					rad1_a_obj_3 = (MAQUINA.RECV.ST024);  //Angle em º

					if (MAQUINA.RECV.ST026 === undefined) rad1_r_obj_4 = (MAQUINA.RECV.ST026);
					rad1_r_obj_4 = (MAQUINA.RECV.ST026) / 4;  //Radius em m
					rad1_a_obj_4 = (MAQUINA.RECV.ST027);  //Angle em º

					if (MAQUINA.RECV.ST029 === undefined) rad1_r_obj_5 = (MAQUINA.RECV.ST029);
					else rad1_r_obj_5 = (MAQUINA.RECV.ST029) / 4;  //Radius em m
					rad1_a_obj_5 = (MAQUINA.RECV.ST030);  //Angle em º

					if (MAQUINA.RECV.ST032 === undefined) rad1_r_obj_6 = (MAQUINA.RECV.ST032);
					rad1_r_obj_6 = (MAQUINA.RECV.ST032) / 4;  //Radius em m
					rad1_a_obj_6 = (MAQUINA.RECV.ST033);  //Angle em º

					if (MAQUINA.RECV.ST035 === undefined) rad1_r_obj_7 = (MAQUINA.RECV.ST035);
					rad1_r_obj_7 = (MAQUINA.RECV.ST035) / 4;  //Radius em m
					rad1_a_obj_7 = (MAQUINA.RECV.ST036);  //Angle em º

					if (MAQUINA.RECV.ST038 === undefined) rad1_r_obj_8 = (MAQUINA.RECV.ST038);
					rad1_r_obj_8 = (MAQUINA.RECV.ST038) / 4;  //Radius em m
					rad1_a_obj_8 = (MAQUINA.RECV.ST039);  //Angle em º

					// distancia 1
					if (rad1_a_obj_1 < -36 || rad1_a_obj_2 < -36 || rad1_a_obj_3 < -36 || rad1_a_obj_4 < -36
						|| rad1_a_obj_5 < -36 || rad1_a_obj_6 < -36 || rad1_a_obj_7 < -36 || rad1_a_obj_8 < -36) {

						let raios1 = new Array(8);
						if (rad1_a_obj_1 < -36) {
							raios1[0] = rad1_r_obj_1;
						} else raios1[0] = 30;

						if (rad1_a_obj_2 < -36) {
							raios1[1] = rad1_r_obj_2;
						} else raios1[1] = 30;

						if (rad1_a_obj_3 < -36) {
							raios1[2] = rad1_r_obj_3;
						} else raios1[2] = 30;

						if (rad1_a_obj_4 < -36) {
							raios1[3] = rad1_r_obj_4;
						} else raios1[3] = 30;

						if (rad1_a_obj_5 < -36) {
							raios1[4] = rad1_r_obj_5;
						} else raios1[4] = 30;

						if (rad1_a_obj_6 < -36) {
							raios1[5] = rad1_r_obj_6;
						} else raios1[5] = 30;

						if (rad1_a_obj_7 < -36) {
							raios1[6] = rad1_r_obj_7;
						} else raios1[6] = 30;

						if (rad1_a_obj_8 < -36) {
							raios1[7] = rad1_r_obj_8;
						} else raios1[7] = 30;

						let menorVal = raios1[0];
						for (let i = 1; i < 8; i++) {
							if (raios1[i] < menorVal) menorVal = raios1[i];
						}
						rad1_dist1 = parseFloat(menorVal).toFixed(1);
					} else rad1_dist1 = 30;

					// distancia 2
					if ((rad1_a_obj_1 >= -36 && rad1_a_obj_1 < -12) || (rad1_a_obj_2 >= -36 && rad1_a_obj_2 < -12) || (rad1_a_obj_3 >= -36 && rad1_a_obj_3 < -12) || (rad1_a_obj_4 >= -36 && rad1_a_obj_4 < -12)
						|| (rad1_a_obj_5 >= -36 && rad1_a_obj_5 < -12) || (rad1_a_obj_6 >= -36 && rad1_a_obj_6 < -12) || (rad1_a_obj_7 >= -36 && rad1_a_obj_7 < -12) || (rad1_a_obj_8 >= -36 && rad1_a_obj_8 < -12)) {

						let raios1 = new Array(8);
						if (rad1_a_obj_1 >= -36 && rad1_a_obj_1 < -12) {
							raios1[0] = rad1_r_obj_1;
						} else raios1[0] = 30;

						if (rad1_a_obj_2 >= -36 && rad1_a_obj_2 < -12) {
							raios1[1] = rad1_r_obj_2;
						} else raios1[1] = 30;

						if (rad1_a_obj_3 >= -36 && rad1_a_obj_3 < -12) {
							raios1[2] = rad1_r_obj_3;
						} else raios1[2] = 30;

						if (rad1_a_obj_4 >= -36 && rad1_a_obj_4 < -12) {
							raios1[3] = rad1_r_obj_4;
						} else raios1[3] = 30;

						if (rad1_a_obj_5 >= -36 && rad1_a_obj_5 < -12) {
							raios1[4] = rad1_r_obj_5;
						} else raios1[4] = 30;

						if (rad1_a_obj_6 >= -36 && rad1_a_obj_6 < -12) {
							raios1[5] = rad1_r_obj_6;
						} else raios1[5] = 30;

						if (rad1_a_obj_7 >= -36 && rad1_a_obj_7 < -12) {
							raios1[6] = rad1_r_obj_7;
						} else raios1[6] = 30;

						if (rad1_a_obj_8 >= -36 && rad1_a_obj_8 < -12) {
							raios1[7] = rad1_r_obj_8;
						} else raios1[7] = 30;

						let menorVal = raios1[0];
						for (let i = 1; i < 8; i++) {
							if (raios1[i] < menorVal) menorVal = raios1[i];
						}
						rad1_dist2 = parseFloat(menorVal).toFixed(1);
					} else rad1_dist2 = 30;

					// distancia 3
					if ((rad1_a_obj_1 >= -12 && rad1_a_obj_1 < 12) || (rad1_a_obj_2 >= -12 && rad1_a_obj_2 < 12) || (rad1_a_obj_3 >= -12 && rad1_a_obj_3 < 12) || (rad1_a_obj_4 >= -12 && rad1_a_obj_4 < 12)
						|| (rad1_a_obj_5 >= -12 && rad1_a_obj_5 < 12) || (rad1_a_obj_6 >= -12 && rad1_a_obj_6 < 12) || (rad1_a_obj_7 >= -12 && rad1_a_obj_7 < 12) || (rad1_a_obj_1 >= -12 && rad1_a_obj_8 < 12)) {
						let raios1 = new Array(8);
						if (rad1_a_obj_1 >= -12 && rad1_a_obj_1 < 12) {
							raios1[0] = rad1_r_obj_1;
						} else raios1[0] = 30;

						if (rad1_a_obj_2 >= -12 && rad1_a_obj_2 < 12) {
							raios1[1] = rad1_r_obj_2;
						} else raios1[1] = 30;

						if (rad1_a_obj_3 >= -12 && rad1_a_obj_3 < 12) {
							raios1[2] = rad1_r_obj_3;
						} else raios1[2] = 30;

						if (rad1_a_obj_4 >= -12 && rad1_a_obj_4 < 12) {
							raios1[3] = rad1_r_obj_4;
						} else raios1[3] = 30;

						if (rad1_a_obj_5 >= -12 && rad1_a_obj_5 < 12) {
							raios1[4] = rad1_r_obj_5;
						} else raios1[4] = 30;

						if (rad1_a_obj_6 >= -12 && rad1_a_obj_6 < 12) {
							raios1[5] = rad1_r_obj_6;
						} else raios1[5] = 30;

						if (rad1_a_obj_7 >= -12 && rad1_a_obj_7 < 12) {
							raios1[6] = rad1_r_obj_7;
						} else raios1[6] = 30;

						if (rad1_a_obj_8 >= -12 && rad1_a_obj_8 < 12) {
							raios1[7] = rad1_r_obj_8;
						} else raios1[7] = 30;

						let menorVal = raios1[0];
						for (let i = 1; i < 8; i++) {
							if (raios1[i] < menorVal) menorVal = raios1[i];
						}
						rad1_dist3 = parseFloat(menorVal).toFixed(1);

					} else rad1_dist3 = 30;

					// distancia 4
					if ((rad1_a_obj_1 >= 12 && rad1_a_obj_1 < 36) || (rad1_a_obj_2 >= 12 && rad1_a_obj_2 < 36) || (rad1_a_obj_3 >= 12 && rad1_a_obj_3 < 36) || (rad1_a_obj_4 >= 12 && rad1_a_obj_4 < 36)
						|| (rad1_a_obj_5 >= 12 && rad1_a_obj_5 < 36) || (rad1_a_obj_6 >= 12 && rad1_a_obj_7 < 36) || (rad1_a_obj_7 >= 12 && rad1_a_obj_7 < 36) || (rad1_a_obj_8 >= 12 && rad1_a_obj_8 < 36)) {
						let raios1 = new Array(8);
						if (rad1_a_obj_1 >= 12 && rad1_a_obj_1 < 36) {
							raios1[0] = rad1_r_obj_1;
						} else raios1[0] = 30;

						if (rad1_a_obj_2 >= 12 && rad1_a_obj_2 < 36) {
							raios1[1] = rad1_r_obj_2;
						} else raios1[1] = 30;

						if (rad1_a_obj_3 >= 12 && rad1_a_obj_3 < 36) {
							raios1[2] = rad1_r_obj_3;
						} else raios1[2] = 30;

						if (rad1_a_obj_4 >= 12 && rad1_a_obj_4 < 36) {
							raios1[3] = rad1_r_obj_4;
						} else raios1[3] = 30;

						if (rad1_a_obj_5 >= 12 && rad1_a_obj_5 < 36) {
							raios1[4] = rad1_r_obj_5;
						} else raios1[4] = 30;

						if (rad1_a_obj_6 >= 12 && rad1_a_obj_6 < 36) {
							raios1[5] = rad1_r_obj_6;
						} else raios1[5] = 30;

						if (rad1_a_obj_7 >= 12 && rad1_a_obj_7 < 36) {
							raios1[6] = rad1_r_obj_7;
						} else raios1[6] = 30;

						if (rad1_a_obj_8 >= 12 && rad1_a_obj_8 < 36) {
							raios1[7] = rad1_r_obj_8;
						} else raios1[7] = 30;

						let menorVal = raios1[0];
						for (let i = 1; i < 8; i++) {
							if (raios1[i] < menorVal) menorVal = raios1[i];
						}
						rad1_dist4 = parseFloat(menorVal).toFixed(1);
					} else rad1_dist4 = 30

					// distancia 5
					if ((rad1_a_obj_1 >= 36) || (rad1_a_obj_2 >= 36) || (rad1_a_obj_3 >= 36) || (rad1_a_obj_4 >= 36)
						|| (rad1_a_obj_5 >= 36) || (rad1_a_obj_6 >= 36) || (rad1_a_obj_7 >= 36) || (rad1_a_obj_8 >= 36)) {
						let raios1 = new Array(8);
						if (rad1_a_obj_1 >= 36) {
							raios1[0] = rad1_r_obj_1;
						} else raios1[0] = 30;

						if (rad1_a_obj_2 >= 36) {
							raios1[1] = rad1_r_obj_2;
						} else raios1[1] = 30;

						if (rad1_a_obj_3 >= 36) {
							raios1[2] = rad1_r_obj_3;
						} else raios1[2] = 30;

						if (rad1_a_obj_4 >= 36) {
							raios1[3] = rad1_r_obj_4;
						} else raios1[3] = 30;

						if (rad1_a_obj_5 >= 36) {
							raios1[4] = rad1_r_obj_5;
						} else raios1[4] = 30;

						if (rad1_a_obj_6 >= 36) {
							raios1[5] = rad1_r_obj_6;
						} else raios1[5] = 30;

						if (rad1_a_obj_7 >= 36) {
							raios1[6] = rad1_r_obj_7;
						} else raios1[6] = 30;

						if (rad1_a_obj_8 >= 36) {
							raios1[7] = rad1_r_obj_8;
						} else raios1[7] = 30;

						let menorVal = raios1[0];
						for (let i = 1; i < 8; i++) {
							if (raios1[i] < menorVal) menorVal = raios1[i];
						}
						rad1_dist5 = parseFloat(menorVal).toFixed(1);
					} else rad1_dist5 = 30;



					MAQUINA.SEND.CC01 = (MAQUINA.SEND.CC01 == 255) ? 1 : MAQUINA.SEND.CC01 + 1;

					  //************************************************//
					 /**/	socket.send(JSON.stringify(MAQUINA.SEND)); // ENVIA
					//************************************************//

					// }
					OutputLog("\nsrv: " + str);
				}

				socket.onclose = function () {
					status_conectar = false;
					status_disconect = true;
					clearFun();
				}

				socket.ondisconnect = function () {
					status_conectar = false;
					status_disconect = true;
					clearFun();
				}

			} catch (exception) {
				OutputLog('Error' + exception);
			}
		}
	}

	var clearFun = function () {
		clearInterval(inter_test_conect);
		clearInterval(inter_gauge);
		clearInterval(inter_gauge_2);
		clearInterval(inter_gauge_inc);
		clearInterval(inter_radar);
		clearInterval(inter_gauge_ar);
	}

	//Update Gauge
	var UPT_gauge = function () {
		myVisualStatus.pintaDirecao(dir_value);
		myVisualStatus.pintaRpm(rpm);
		myGauge.updategaugefast(vel_kmh, rpm, tema, dir_drt, dir_esq);
	}

	var UPT_gauge2 = function () {
		clearInterval(inter_gauge_2)
		myGauge.updategaugeslow(niv_comb, temp_motor);
		myVisualStatus.adblueBarra(ADBLUE);
		inter_gauge_2 = setInterval(UPT_gauge2, 2500);

	}

	var UPT_gaugeAclive = function () {
		myVisualStatus.atualizaAclive(inc_y, inc_x, alarme_id, alarme_vet[alarme_id]);
		myGauge.updategaugeaclive(inc_y, inc_x, alarme_id);
	}

	var UPT_radar = function () {
		myGauge.updateradarfrente(rad1_dist1, rad1_dist2, rad1_dist3, rad1_dist4, rad1_dist5);
	}

	var UPT_gaugePAr = function () {
		myGauge.updategaugepar(pres_ar);
	}

	var UPT_zeratela = function () {
		vel_kmh = 0;
		rpm = 0;
		niv_comb = 0;
		pres_ar = 0;
		temp_motor = 0;
		inc_y = 0;
		inc_x = 0;
		alarme_id = 0;
		dir_drt = 0;
		dir_esq = 0;
		status_freio_aux = false;
		status_freio_est = false;
		status_t_forca = false;
		bStatusRampa = 0;
		bStatusDiferencial = 0;
		niv_bat = 0;
		pos_marcha_atual = 0;
		hodo = 0;
		operacao_id = 0;
		entrada_id = 0;
		rad1_dist1 = 0;
		rad1_dist2 = 0;
		rad1_dist3 = 0;
		rad1_dist4 = 0;
		rad1_dist5 = 0;
		myVisualStatus.create(status_conectar, status_ignicao, status_disconect, status_freio_aux, status_freio_est, status_t_forca, niv_bat, pos_marcha_atual, hodo,
			operacao_vet[operacao_id], entrada_vet[entrada_id], rad1_dist1, rad1_dist2, rad1_dist3, rad1_dist4, rad1_dist5, naoresponde, status_cockpit);
	}

	var connectAut = function () {
		if (status_conectar == false) {
			connect();
		} else {
			clearInterval(inter_conect_aut)
		}
	}

	var atualizaVisualStatus = function () {
		if (!status_conectar) UPT_zeratela();

		if ((status_disconect == true && status_conectar == false)) {
			reconnectTry();
		}

		if (contResizeStop < 6) contResizeStop++;
		if (contResizeStop == 5) {
			contResizeStop = 6;
			margintop();
		}

		if (contResize == 0) {
			myVisualStatus.create(status_conectar, status_ignicao, status_disconect, status_freio_aux, status_freio_est, status_t_forca, niv_bat, pos_marcha_atual, hodo,
				operacao_vet[operacao_id], entrada_vet[entrada_id], rad1_dist1, rad1_dist2, rad1_dist3, rad1_dist4, rad1_dist5, naoresponde, status_cockpit);
		} else {
			contResize++;
			margintop();
		}

		myVisualStatus.cockiptbtn(bStatusHome, bStatusSeta1, bStatusMenu, bStatusSeta2, bStatusOk, bStatusSeta3, bStatusSeta4, bStatusSeta5, bStatusSeta6, bStatus1,
			bStatus2, bStatus3, bStatusAuto, bStatusFarol1, bStatusFarol2, bStatusFAuxJ, bStatusAuxMais, bStatusTracao, bStatusFreioEstPres, bStatusAuxMen, bStatusTForc,
			bStatusEngStarStop, bStatusOn, bStatusOff);

		myVisualStatus.cockiptbtnNum(bD1, bD2, bD3, bD4, bD5, bE1, bE2, bE3, bE4, bE5);
		myVisualStatus.aprocimacao(rad1_dist1, rad1_dist2, rad1_dist3, rad1_dist4, rad1_dist5);
		myVisualStatus.axesEsq(Gc1X, Gc1Y, Gc1Z);
		myVisualStatus.axesPedal(Gc2Y, Gc3Y);
		myVisualStatus.axesDir(Gc4Y);
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
		// ("cockpitjoyesquerdo"):
		Gc1X = Math.round(scale(controllers[m].axes[3], -1, 1, -1000, 1000)) / 50; // LH  X
		Gc1Y = Math.round(scale(controllers[m].axes[4], -1, 1, -1000, 1000)) / 50; // LH  Y
		Gc1Z = Math.round(scale(controllers[m].axes[1], -1, 1, -1000, 1000)); // LH  Z

		// ("cockpitpedalesquerdo"):
		Gc2Y = Math.round(scale(controllers[m].axes[5], -1, 1, -1000, 1000)) / 50;// LH Y

		// ("cockpitpedaldireito"):
		Gc3Y = Math.round(scale(controllers[m].axes[2], -1, 1, -1000, 1000)) / 50;// RH Y

		// ("cockpitjoydireito"):
		if (buttonPressed(controllers[m].buttons[3]) == 1) Gc4Y = 1000;
		else {
			Gc4Y = 0;
			if (buttonPressed(controllers[m].buttons[1]) == 1) Gc4Y = -1000;
			else Gc4Y = 0;
		}

		let content = "";
		content += "Gc1X:" + Gc1X + "     ";
		content += "Gc1Y:" + Gc1Y + "     ";
		content += "Gc1Z:" + Gc1Z + "     ";
		content += "Gc2Y:" + Gc2Y + "     ";
		content += "Gc3Y:" + Gc3Y + "     ";
		content += "Gc4Y:" + Gc4Y + "     ";
		OutputLog2(content);

		bD1 = (buttonPressed(controllers[m].buttons[0]) == 1);
		bD2 = (buttonPressed(controllers[m].buttons[2]) == 1); //cima
		//bD3 = (buttonPressed(controllers[m].buttons[2]) == 1);
		//bD4 = (buttonPressed(controllers[m].buttons[3]) == 1); //esquerda
		//bD5 = (buttonPressed(controllers[m].buttons[4]) == 1);
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

	var fundoGauge = function () {
		if (tema[0].checked) {
			myGauge.gaugeBlack();
		}

		if (tema[1].checked) {
			myGauge.gaugeWhite();
		}
	}

	var contResize = 0;
	var contResizeStop = 0;
	var mt = 0;
	var ab = 0;
	var margintop = function () {
		mt = 0;
		let bod = ($("header").height() + $("footer").height() + $("main").height());
		if (window.innerWidth >= 800 || screen.width == 1280) {
			mt = ((document.documentElement.clientHeight - bod) / 2);
			mt = mt + (mt / 10);

			if (mt < 0 || document.documentElement.clientHeight < 810) mt = 10;
			document.getElementById("myHeader").style.marginTop = mt + 'px';
		} else document.getElementById("myHeader").style.marginTop = '0.5%';
		ab = ((document.documentElement.scrollWidth) / 2) - 165;
		document.getElementById("alertaSeg").style.left = ab + 'px';
		contResize = 0;
	}

	var testConect = function () {
		if (testCon != MAQUINA.RECV.CC01) {
			if (naoresponde) {
				naoresponde = false;
				document.getElementById("alertaSeg").style.display = "none";
			}
			contCC01 = 0;
		} else if (testCon == MAQUINA.RECV.CC01) {
			contCC01++;
			if (contCC01 >= 10) {

				UPT_zeratela();
				naoresponde = true;
				if (status_conectar == true) {
					document.getElementById("msgCon").classList.remove("ml-5");
					document.getElementById("msgCon").classList.remove("mr-n5");
					document.getElementById("alertaSeg").classList.remove("fundobloqueio");
					document.getElementById("msgCon").style.left = "0px";
					document.getElementById("msgCon").classList.remove("text-warning");
					document.getElementById("msgCon").classList.remove("text-black-50");
					document.getElementById("msgCon").classList.remove("mt-3");
					document.getElementById("msgCon").classList.remove("text-danger");
					document.getElementById("msgCon").classList.remove("text-black-50");
					document.getElementById("msgCon").classList.remove("mt-4");
					document.getElementById("msgCon").classList.add("text-warning");
					document.getElementById("msgCon").innerText = "DASHBOARD NÃO ESTÁ RESPONDENDO";
					document.getElementById("alertaSeg").style.display = "";
				}
			}
		}
		testCon = MAQUINA.RECV.CC01;
	}

	var drawInterval = 0;
	var draw = function () {
		clearInterval(drawInterval);
		myGauge.desenhaRadar();
		UPT_radar();
	}

	var IncMax = function () {
		let eixoX = document.getElementById("eixoXset").value;
		let eixoY = document.getElementById("eixoYset").value;

		if (!isNaN(eixoX) && eixoX <= 8 && eixoX >= 1) {
			document.getElementById("eixoX-msg").style.display = "none";
			MAQUINA.SEND.ST020 = eixoX;
		} else {
			document.getElementById("eixoX-msg").style.display = "";
		}

		if (!isNaN(eixoY) && eixoY <= 20 && eixoY >= 1) {
			document.getElementById("eixoY-msg").style.display = "none";
			MAQUINA.SEND.ST021 = eixoY;
		} else {
			document.getElementById("eixoY-msg").style.display = "";
		}

		if ((!isNaN(eixoY) && eixoY <= 20 && eixoY >= 1) && (!isNaN(eixoX) && eixoX <= 8 && eixoX >= 1)) {
			document.getElementById("btnIncMaxIcon").classList.remove("fa-pen-to-square");
			document.getElementById("btnIncMaxIcon").classList.remove("fa-xmark");
			document.getElementById("btnIncMaxSpan").classList.remove("text-danger");

			document.getElementById("btnIncMaxIcon").classList.add("fa-check");
			document.getElementById("btnIncMaxSpan").classList.add("text-success");
			document.getElementById("btnIncMax-success").style.display = "";
			document.getElementById("btnIncMax-fail").style.display = "none";
		} else {
			document.getElementById("btnIncMaxSpan").classList.remove("text-success");
			document.getElementById("btnIncMaxIcon").classList.remove("fa-pen-to-square");
			document.getElementById("btnIncMaxIcon").classList.remove("fa-check");

			document.getElementById("btnIncMaxIcon").classList.add("fa-xmark");
			document.getElementById("btnIncMaxSpan").classList.add("text-danger");
			document.getElementById("btnIncMax-success").style.display = "none";
			document.getElementById("btnIncMax-fail").style.display = "";
		}
	}
}

$(document).ready(function () {
	myGauge.desenhaGauge();
	drawInterval = setInterval(draw, 1000);
	UPT_gaugeAclive();

	document.getElementById("dark-mode-switch").addEventListener("mousedown", function () {
		myGauge.gaugeBlack();
	});

	document.getElementById("dark-mode-switch-label").addEventListener("mousedown", function () {
		myGauge.gaugeBlack();
	});

	document.getElementById("light-mode-switch").addEventListener("mousedown", function () {
		myGauge.gaugeWhite();
	});

	document.getElementById("light-mode-switch-label").addEventListener("mousedown", function () {
		myGauge.gaugeWhite();
	});

	document.getElementById("btnIncMax").addEventListener("mousedown", function () {
		IncMax();
	});

	$("#manual").click(function (e) {
		e.preventDefault();
		window.location = "assets/js/down/DOD_MB4144.pdf";
	});

	document.addEventListener("fullscreenchange", telaCheia), document.addEventListener("webkitfullscreenchange", telaCheia), document.addEventListener("mozfullscreenchange", telaCheia);

	addEventListener('orientationchange', event => {
		if (contResize == 0) {
			contResize++
			myGauge.desenhaGauge();
			fundoGauge();
			myGauge.desenhaRadar();
			myVisualStatus.create(status_conectar, status_ignicao, status_disconect, status_freio_aux, status_freio_est, status_t_forca, niv_bat, pos_marcha_atual, hodo,
				operacao_vet[operacao_id], entrada_vet[entrada_id], rad1_dist1, rad1_dist2, rad1_dist3, rad1_dist4, rad1_dist5, naoresponde, status_cockpit);
		}
	});


	window.addEventListener("resize", function () {
		if (contResize == 0) {
			contResize++
			contResizeStop = 0;
			myVisualStatus.create(status_conectar, status_ignicao, status_disconect, status_freio_aux, status_freio_est, status_t_forca, niv_bat, pos_marcha_atual, hodo,
				operacao_vet[operacao_id], entrada_vet[entrada_id], rad1_dist1, rad1_dist2, rad1_dist3, rad1_dist4, rad1_dist5, naoresponde, status_cockpit);
		}
	});

	// Atuaiza Nome da Maquina
	myNomeMaquina.nomeMaquina();

	// BOTOES STATUS
	inter_visual_status = setInterval(atualizaVisualStatus, 350);

	// Inicio
	inter_conect_aut = setInterval(connectAut, 1200);

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
				return;
			}

			var m = 0;
			let clenght = Object.keys(controllers).length;
			for (m = 0; m < clenght; m++) {
				namepad = myGamePad.updateStatus(controllers, m);
				switch (namepad) {
					case ("btn"):
						atualizaBtn(controllers, m);
						break;
					case ("cockpit"):
						AtualizaJoysticks(controllers, m);
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