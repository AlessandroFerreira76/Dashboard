var statAux = false;
var statTForc = false;
var statEst = false;
var stat_Critc = false;
var conectLoading = false;
var colorsensor = "a";
var radius = "";

class VisualStatus {
	create(bStatusConectar, bStatusIgnicao, bStatusReconectar, bStatusFreioAux, bStatusFreioEst, bStatusTForca, BATTERY_VOLTAGE, MARCHA, HODOMETRO,
		OPERACAO, ENTRADA, distacia1, distacia2, distacia3, distacia4, distacia5, naoresponde, bStatusCockpit) {
		radius = document.getElementsByName("orientacao");
		var tema = document.getElementsByName("tema");
		var ii = document.getElementsByName("inclinometro");

		if (radius[0].checked) {
			document.getElementById("Rtl").dir = "ltr";
			document.getElementById("ori1").classList.remove("bg-warning");
			document.getElementById("ori0").classList.add("bg-warning");
		} else if (radius[1].checked) {
			document.getElementById("Rtl").dir = "rtl";
			document.getElementById("ori0").classList.remove("bg-warning");
			document.getElementById("ori1").classList.add("bg-warning");
		}

		if (tema[0].checked) {
			document.getElementById("maquinaImg").src = "assets/images/caminhao/camiB.png";
			document.getElementById("anchorBar").src = "assets/images/infoImg/airpresB.png";
			document.getElementById("bTForceImg").src = "assets/images/infoImg/tforceB1.png";
			document.getElementById("bTracaoImgC").src = "assets/images/cockpit/tforceB.png";
			document.getElementById("bFAuxJImg").src = "assets/images/infoImg/freioauxB.png";
			document.getElementById("bFarol1Img").src = "assets/images/cockpit/farol1.png";
			document.getElementById("bFarol2Img").src = "assets/images/cockpit/farol2.png";
			document.getElementById("bFreioEstPresImg").src = "assets/images/infoImg/parkbB.png";
			document.getElementById("bAuxMaisImg").src = "assets/images/infoImg/freioauxplusB.png";
			document.getElementById("bAuxMenImg").src = "assets/images/infoImg/freioauxmenosB.png";
			document.getElementById("bConectarBadge").classList.remove("border-dark");
			document.getElementById("bBuzinaBadge").classList.remove("border-dark");
			document.getElementById("mode-icon").classList.remove("fa-sun");
			document.getElementById("mode-icon").classList.add("fa-moon");
			document.getElementById("bConectarBadge").classList.add("border-white");
			document.getElementById("bBuzinaBadge").classList.add("border-white");
		} else if (tema[1].checked) {
			document.getElementById("maquinaImg").src = "assets/images/caminhao/camiP.png";
			document.getElementById("anchorBar").src = "assets/images/infoImg/airpresP.png";
			document.getElementById("bTForceImg").src = "assets/images/cockpit/tforceP1.png";
			document.getElementById("bTracaoImgC").src = "assets/images/cockpit/tforceP.png";
			document.getElementById("bFAuxJImg").src = "assets/images/cockpit/freioauxP.png";
			document.getElementById("bFarol1Img").src = "assets/images/cockpit/farol1P.png";
			document.getElementById("bFarol2Img").src = "assets/images/cockpit/farol2P.png";
			document.getElementById("bFreioEstPresImg").src = "assets/images/cockpit/parkbP.png";
			document.getElementById("bAuxMaisImg").src = "assets/images/infoImg/freioauxplus.png";
			document.getElementById("bAuxMenImg").src = "assets/images/infoImg/freioauxmenos.png";
			document.getElementById("bConectarBadge").classList.remove("border-white");
			document.getElementById("bBuzinaBadge").classList.remove("border-white");
			document.getElementById("mode-icon").classList.remove("fa-moon");
			document.getElementById("mode-icon").classList.add("fa-sun");
			document.getElementById("bConectarBadge").classList.add("border-dark");
			document.getElementById("bBuzinaBadge").classList.add("border-dark");
		}

		if (ii[0].checked) {
			document.getElementById("ii1").classList.remove("bg-warning");
			document.getElementById("ii0").classList.add("bg-warning");
		} else if (ii[1].checked) {
			document.getElementById("ii0").classList.remove("bg-warning");
			document.getElementById("ii1").classList.add("bg-warning");

		}

		if (MARCHA > 0) {
			document.getElementById("textMarchaSen").innerText = "D";
			document.getElementById("textMarcha").innerText = MARCHA.toString();
		} else {
			switch (MARCHA) {
				case 'A':
					document.getElementById("textMarchaSen").innerText = "D";
					document.getElementById("textMarcha").innerText = 10;
					break;
				case 'B':
					document.getElementById("textMarchaSen").innerText = "D";
					document.getElementById("textMarcha").innerText = 11;
					break;
				case 'C':
					document.getElementById("textMarchaSen").innerText = "D";
					document.getElementById("textMarcha").innerText = 12;
					break;
				case 'N':
					document.getElementById("textMarchaSen").innerText = MARCHA.toString();
					document.getElementById("textMarcha").innerText = "";
					break;
				case 'R':
					document.getElementById("textMarchaSen").innerText = MARCHA.toString();
					document.getElementById("textMarcha").innerText = "";
					break;
				case 'E':
					document.getElementById("textMarchaSen").innerText = MARCHA.toString();
					document.getElementById("textMarcha").innerText = "";
					break;
			}
		}

		if (bStatusConectar == true) {
			document.getElementById("bConectarBadge").classList.remove("btn-danger");
			document.getElementById("bConectarBadge").classList.remove("btn-secundary");
			document.getElementById("bConectarBadge").classList.add("btn-success");

			if (conectLoading) {
				document.getElementById("alertaSeg").style.display = "none";
				document.getElementById("loading").style.display = "none";
				conectLoading = false;
			}

			if (!bStatusIgnicao) {
				document.getElementById("bConectarBadge").classList.remove("btn-secundary");
				document.getElementById("bConectarBadge").classList.remove("btn-success");
				document.getElementById("bConectarBadge").classList.remove("bg-success");
				document.getElementById("bConectarBadge").classList.remove("ligado");
				document.getElementById("bConectarBadge").classList.add("btn-danger");
				document.getElementById("bConectarBadge").classList.add("desligado");
				document.getElementById("bConectarBadge").classList.add("bg-danger");
			} else {
				document.getElementById("bConectarBadge").classList.remove("btn-danger");
				document.getElementById("bConectarBadge").classList.remove("btn-success");
				document.getElementById("bConectarBadge").classList.remove("bg-danger");
				document.getElementById("bConectarBadge").classList.remove("desligado");
				document.getElementById("bConectarBadge").classList.add("btn-success");
				document.getElementById("bConectarBadge").classList.add("ligado");
				document.getElementById("bConectarBadge").classList.add("bg-success");
			}

			if (bStatusCockpit == false && naoresponde == false) {
				document.getElementById("msgCon").classList.remove("text-warning");
				document.getElementById("msgCon").classList.remove("text-black-50");
				document.getElementById("msgCon").classList.add("text-danger");
				document.getElementById("msgCon").classList.add("mt-3");
				document.getElementById("msgCon").classList.add("ml-5");
				document.getElementById("msgCon").classList.add("mr-n5");
				document.getElementById("msgCon").style.left = "10px";
				document.getElementById("msgCon").innerText = "COCKPIT INDISPONÍVEL";
				document.getElementById("alertaSeg").style.display = "";
				document.getElementById("alertaSeg").classList.add("fundobloqueio");
			}
		} else {
			document.getElementById("bConectarBadge").classList.remove("btn-success");
			document.getElementById("bConectarBadge").classList.remove("btn-danger");
			document.getElementById("bConectarBadge").classList.add("btn-secundary");

			if (bStatusConectar == false && bStatusReconectar == false) {
				if (conectLoading == false) {
					document.getElementById("msgCon").classList.remove("ml-5");
					document.getElementById("msgCon").classList.remove("mr-n5");
					document.getElementById("alertaSeg").classList.remove("fundobloqueio");
					document.getElementById("msgCon").style.left = "0px";

					document.getElementById("alertaSeg").style.display = "";
					document.getElementById("loading").style.display = "";
					document.getElementById("msgCon").innerText = "CONECTANDO";
					document.getElementById("msgCon").classList.remove("mt-4");
					document.getElementById("msgCon").classList.remove("text-warning");
					document.getElementById("msgCon").classList.remove("text-danger");
					document.getElementById("msgCon").classList.add("text-black-50");
				}
				conectLoading = true;
			}

		}
		if (screen.width < 1280 || window.innerWidth < 1280) {
			if ((document.body.clientHeight <= 990) && (window.innerHeight >= 975)) {
				document.body.style.overflowY = "hidden";
			} else document.body.style.overflow = "auto";

			document.getElementById("rowdir").style.width = "800px";
			document.getElementById("rowesq").style.width = "800px";

			document.getElementById("alertaSegInc").classList.remove("alertboxInc");
			document.getElementById("alertaSegInc").classList.add("alertboxIncSm");

			document.getElementById("cardEsquerda").style.height = "175px";
			document.getElementById("cardDireita").style.height = "220px";
			document.getElementById("gaugeaclive").style.marginLeft = "0%";
			document.getElementById("textBat").classList.remove("text-left");
			document.getElementById("textBat").classList.remove("text-center");
			document.getElementById("textBat").classList.add("text-right");
			document.getElementById("colDireita").classList.remove("col-xl-2");
			document.getElementById("rowesq").style.marginTop = "1px";
			document.getElementById("rowesq").style.top = "3px";
			document.getElementById("colAcliveImgY").style.marginTop = "35px";
			document.getElementById("acliveImgY").style.left = "25px";
			document.getElementById("acliveImgY").height = "75";

			document.getElementById("tooltipTransv").style.height = "80%";
			document.getElementById("tooltipTransv").style.width = "150px";
			document.getElementById("tooltipTransv").style.top = "-180px"
			document.getElementById("tooltipTransv").style.left = "-15px";

			document.getElementById("tooltipLongit").style.height = "80%";
			document.getElementById("tooltipLongit").style.width = "150px";
			document.getElementById("tooltipLongit").style.top = "-180px"
			document.getElementById("tooltipLongit").style.marginTop = "0px"
			document.getElementById("tooltipLongit").style.left = "135px"

			document.getElementById("layoutDark").src = "assets/images/layouts/layout-4.jpg";
			document.getElementById("layoutLight").src = "assets/images/layouts/layout-3.jpg";
			document.getElementById("acliveImgX").style.marginLeft = "-20%";
			document.getElementById("acliveImgX").height = "110";
			document.getElementById("gaugeaclive").style.display = "none";
			document.getElementById("rowMetros").style.display = "none";
			document.getElementById("parkImg").style.display = "none";
			document.getElementById("rowRTL").style.display = "none";
			document.getElementById("gaugeacliveSm").style.display = "";

			document.getElementById("colMetros").style.display = "";

			document.getElementById("parkImgSm").style.display = "";

			document.getElementById("radarFrente").style.transform = "rotate(85deg)";
			document.getElementById("radarFrente").style.marginLeft = "0px";
			document.getElementById("radarFrente").style.top = "-16px";

			document.getElementById("bConectar").style.marginLeft = "-35%";

			document.getElementById("toolchave").style.marginLeft = "-25px";
			if (window.innerWidth < 1180) {
				document.getElementById("bConectar").style.marginLeft = "-45%";
				document.getElementById("toolchave").style.marginLeft = "-30px";
				if (window.innerWidth < 1000) {
					document.getElementById("bConectar").style.marginLeft = "-65%";
					document.getElementById("toolchave").style.marginLeft = "-35px";
				}
			}
		} else {
			if ((document.body.clientHeight <= 800) && (window.innerHeight >= 775)) {
				document.body.style.overflowY = "hidden";
			} else document.body.style.overflow = "auto";


			document.getElementById("Rtl").classList.add("layout");
			document.getElementById("gaugeaclive").style.marginLeft = "auto";
			document.getElementById("cardEsquerda").style.height = "100%";
			document.getElementById("textBat").classList.remove("text-right");
			document.getElementById("textBat").classList.remove("text-center");
			document.getElementById("rowesq").style.marginTop = "10px";
			document.getElementById("rowesq").style.top = "20px";
			document.getElementById("colAcliveImgY").style.marginTop = "-130px";
			document.getElementById("acliveImgY").style.left = "0px";
			document.getElementById("acliveImgY").height = "70";
			document.getElementById("textBat").classList.add("text-left");
			document.getElementById("colDireita").classList.add("col-xl-2");
			document.getElementById("cardDireita").style.height = "auto";
			document.getElementById("acliveImgX").style.marginLeft = "auto";
			document.getElementById("acliveImgX").height = "115";
			document.getElementById("gaugeacliveSm").style.display = "none";
			document.getElementById("colMetros").style.display = "none";
			document.getElementById("parkImgSm").style.display = "none";
			document.getElementById("gaugeaclive").style.display = "";
			document.getElementById("rowMetros").style.display = "";
			document.getElementById("parkImg").style.display = "";
			document.getElementById("rowRTL").style.display = "";

			document.getElementById("radarFrente").style.transform = "rotate(-5deg)";
			document.getElementById("radarFrente").style.marginLeft = "10px";
			document.getElementById("radarFrente").style.top = "0px";

			document.getElementById("rowdir").style.width = "200px";
			document.getElementById("rowesq").style.width = "200px";

			document.getElementById("alertaSegInc").classList.remove("alertboxIncSm");
			document.getElementById("alertaSegInc").classList.add("alertboxInc");

			document.getElementById("tooltipTransv").style.height = "110px";
			document.getElementById("tooltipTransv").style.width = "100%";
			document.getElementById("tooltipTransv").style.top = "-305px"
			document.getElementById("tooltipTransv").style.left = "-3px";

			document.getElementById("tooltipLongit").style.height = "110px";
			document.getElementById("tooltipLongit").style.width = "100%";
			document.getElementById("tooltipLongit").style.top = "-130px"
			document.getElementById("tooltipLongit").style.marginTop = "-150px"
			document.getElementById("tooltipLongit").style.left = "-3px"

			document.getElementById("layoutDark").src = "assets/images/layouts/layout-2.jpg";
			document.getElementById("layoutLight").src = "assets/images/layouts/layout-1.jpg";
			document.getElementById("gaugeaclive").style.display = "";
			document.getElementById("gaugeacliveSm").style.display = "none";

			document.getElementById("bConectar").style.marginLeft = "0px";

			document.getElementById("toolchave").style.marginLeft = "0px";
		}

		if (isNaN(HODOMETRO)) HODOMETRO = "...";

		if (bStatusConectar == true) {
			document.getElementById("textBat").innerText = " " + BATTERY_VOLTAGE + " V";
			document.getElementById("textHodometro").innerText = HODOMETRO + " km";
			if (OPERACAO === undefined) OPERACAO = ".  .  .";
			if (ENTRADA === undefined) ENTRADA = ".  .  .";
			document.getElementById("txtoperacoes").innerText = OPERACAO;
			document.getElementById("txtentradas").innerText = ENTRADA;
			if (distacia1 <= 30) document.getElementById("d1").innerText = distacia1 + " m";
			if (distacia2 <= 30) document.getElementById("d2").innerText = distacia2 + " m";
			if (distacia3 <= 30) document.getElementById("d3").innerText = distacia3 + " m";
			if (distacia4 <= 30) document.getElementById("d4").innerText = distacia4 + " m";
			if (distacia5 <= 30) document.getElementById("d5").innerText = distacia5 + " m";

			if (distacia1 <= 30) document.getElementById("d1dir").innerText = distacia1 + " m";
			if (distacia2 <= 30) document.getElementById("d2dir").innerText = distacia2 + " m";
			if (distacia3 <= 30) document.getElementById("d3dir").innerText = distacia3 + " m";
			if (distacia4 <= 30) document.getElementById("d4dir").innerText = distacia4 + " m";
			if (distacia5 <= 30) document.getElementById("d5dir").innerText = distacia5 + " m";

			//-----------------------------------------------------------------------------------
		} else {
			document.getElementById("textBat").innerText = BATTERY_VOLTAGE + " V";
			document.getElementById("textHodometro").innerText = ".   .   .";
			document.getElementById("txtoperacoes").innerText = ".   .   .";
			document.getElementById("txtentradas").innerText = ".   .   .";

			document.getElementById("d1").innerText = 30 + "m";
			document.getElementById("d2").innerText = 30 + "m";
			document.getElementById("d3").innerText = 30 + "m";
			document.getElementById("d4").innerText = 30 + "m";
			document.getElementById("d5").innerText = 30 + "m";

			document.getElementById("d1dir").innerText = 30 + "m";
			document.getElementById("d2dir").innerText = 30 + "m";
			document.getElementById("d3dir").innerText = 30 + "m";
			document.getElementById("d4dir").innerText = 30 + "m";
			document.getElementById("d5dir").innerText = 30 + "m";
		}

		if (bStatusFreioEst == true) {
			statEst = true
			document.getElementById("bFreioEstBadge").classList.add("bg-danger");
			document.getElementById("bFreioEstImg").src = "assets/images/infoImg/parkbB.png";
		} else {
			statEst = false;
			document.getElementById("bFreioEstBadge").classList.remove("bg-danger");
			document.getElementById("bFreioEstImg").src = "assets/images/infoImg/parkb.png";
		}

		if (bStatusFreioAux == true) {
			statAux = true;
			document.getElementById("bFreioAuxBadge").classList.add("bg-warning");
			document.getElementById("bFreioAuxImg").src = "assets/images/infoImg/freioauxB.png";
		} else {
			statAux = false;
			document.getElementById("bFreioAuxBadge").classList.remove("bg-warning");
			document.getElementById("bFreioAuxImg").src = "assets/images/infoImg/freioaux.png";
		}

		if (bStatusTForca == true) {
			statTForc = true;
			document.getElementById("bTFBadge").classList.add("bg-warning");
			document.getElementById("bTFImg").src = "assets/images/infoImg/tforceB1.png";
		} else {
			statTForc = false;
			document.getElementById("bTFBadge").classList.remove("bg-warning");
			document.getElementById("bTFImg").src = "assets/images/infoImg/tforceA1.png";
		}
	}

	atualizaAclive(ACLIVE, ACLIVE2, idAlarme, ALARME) {
		if (idAlarme == 1 || idAlarme == 3) {
			if (idAlarme == 1) {
				stat_Critc = true;
				this.paintCritical(stat_Critc);
				if (ACLIVE2 >= 0 && ACLIVE2 <= 50) {
					document.getElementById("msgConInc").innerText = ALARME;
					document.getElementById("alertaSegInc").style.display = "";
					document.getElementById("acliveImgX").classList.remove("rot3");
					document.getElementById("acliveImgX").classList.add("rot2");
					document.getElementById("acliveImgX").src = "assets/images/caminhao/testeX2V.png"
					document.getElementById("acliveImgY").src = "assets/images/caminhao/testeX1V.png"
					document.getElementById("acliveImgY").classList.remove("escalAmarelo");
					document.getElementById("acliveImgX").classList.remove("escalAmarelo");
					document.getElementById("acliveImgY").classList.add("escaVermelho");
					document.getElementById("acliveImgX").classList.add("escaVermelho");
				} else if (ACLIVE2 <= 0 && ACLIVE2 >= -50) {
					document.getElementById("msgConInc").innerText = ALARME;
					document.getElementById("alertaSegInc").style.display = "";
					document.getElementById("acliveImgX").classList.remove("rot2");
					document.getElementById("acliveImgX").classList.add("rot3");
					document.getElementById("acliveImgX").src = "assets/images/caminhao/testeX2V.png"
					document.getElementById("acliveImgY").src = "assets/images/caminhao/testeX1V.png"
					document.getElementById("acliveImgY").classList.remove("escalAmarelo");
					document.getElementById("acliveImgX").classList.remove("escalAmarelo");
					document.getElementById("acliveImgY").classList.add("escaVermelho");
					document.getElementById("acliveImgX").classList.add("escaVermelho");
				} else {
					document.getElementById("acliveImgX").classList.remove("rot2");
					document.getElementById("acliveImgX").classList.remove("rot3");
					document.getElementById("acliveImgY").classList.remove("escaVermelho");
					document.getElementById("acliveImgX").classList.remove("escaVermelho");
					document.getElementById("acliveImgY").classList.remove("escalAmarelo");
					document.getElementById("acliveImgX").classList.remove("escalAmarelo");
					document.getElementById("acliveImgX").src = "assets/images/caminhao/testeX2.png"
					document.getElementById("acliveImgY").src = "assets/images/caminhao/testeX1.png"
				}

				if (ACLIVE >= 0 && ACLIVE <= 50) {
					document.getElementById("msgConInc").innerText = ALARME;
					document.getElementById("alertaSegInc").style.display = "";
					document.getElementById("acliveImgY").classList.remove("rot3");
					document.getElementById("acliveImgY").classList.add("rot2");
					document.getElementById("acliveImgX").src = "assets/images/caminhao/testeX2V.png"
					document.getElementById("acliveImgY").src = "assets/images/caminhao/testeX1V.png"
					document.getElementById("acliveImgY").classList.remove("escalAmarelo");
					document.getElementById("acliveImgX").classList.remove("escalAmarelo");
					document.getElementById("acliveImgY").classList.add("escaVermelho");
					document.getElementById("acliveImgX").classList.add("escaVermelho");
				} else if (ACLIVE <= 0 && ACLIVE >= -50) {
					document.getElementById("msgConInc").innerText = ALARME;
					document.getElementById("alertaSegInc").style.display = "";
					document.getElementById("acliveImgY").classList.remove("rot2");
					document.getElementById("acliveImgY").classList.add("rot3");
					document.getElementById("acliveImgX").src = "assets/images/caminhao/testeX2V.png"
					document.getElementById("acliveImgY").src = "assets/images/caminhao/testeX1V.png"
					document.getElementById("acliveImgY").classList.remove("escalAmarelo");
					document.getElementById("acliveImgX").classList.remove("escalAmarelo");
					document.getElementById("acliveImgY").classList.add("escaVermelho");
					document.getElementById("acliveImgX").classList.add("escaVermelho");
				} else {
					document.getElementById("acliveImgY").classList.remove("rot2");
					document.getElementById("acliveImgY").classList.remove("rot3");
					document.getElementById("acliveImgY").classList.remove("escaVermelho");
					document.getElementById("acliveImgX").classList.remove("escaVermelho");
					document.getElementById("acliveImgY").classList.remove("escalAmarelo");
					document.getElementById("acliveImgX").classList.remove("escalAmarelo");
					document.getElementById("acliveImgX").src = "assets/images/caminhao/testeX2.png"
					document.getElementById("acliveImgY").src = "assets/images/caminhao/testeX1.png"
				}
			} else if (idAlarme == 3) {
				stat_Critc = false;
				if (colorsensor == "v") this.paintCritical(stat_Critc);
				document.getElementById("msgConInc").innerText = ALARME;
				document.getElementById("alertaSegInc").style.display = "";
				document.getElementById("acliveImgX").src = "assets/images/caminhao/testeX2.png"
				document.getElementById("acliveImgY").src = "assets/images/caminhao/testeX1.png"
				document.getElementById("acliveImgY").classList.remove("escaVermelho");
				document.getElementById("acliveImgX").classList.remove("escaVermelho");
				document.getElementById("acliveImgY").classList.remove("escalAmarelo");
				document.getElementById("acliveImgX").classList.remove("escalAmarelo");
				document.getElementById("acliveImgY").classList.remove("rot2");
				document.getElementById("acliveImgY").classList.remove("rot3");
				document.getElementById("acliveImgX").classList.remove("rot2");
				document.getElementById("acliveImgX").classList.remove("rot3");
			}

		} else {
			stat_Critc = false;
			if (colorsensor == "v") this.paintCritical(stat_Critc);
			document.getElementById("acliveImgX").src = "assets/images/caminhao/testeX2.png"
			document.getElementById("acliveImgY").src = "assets/images/caminhao/testeX1.png"
			document.getElementById("alertaSegInc").style.display = "none";
			document.getElementById("acliveImgY").classList.remove("escaVermelho");
			document.getElementById("acliveImgX").classList.remove("escaVermelho");
			if (ACLIVE2 > 0 && ACLIVE2 <= 50) {
				document.getElementById("acliveImgX").classList.remove("rot3");
				document.getElementById("acliveImgX").classList.add("rot2");
			} else if (ACLIVE2 < 0 && ACLIVE2 >= -50) {
				document.getElementById("acliveImgX").classList.remove("rot2");
				document.getElementById("acliveImgX").classList.add("rot3");
			} else {
				document.getElementById("acliveImgX").classList.remove("rot2");
				document.getElementById("acliveImgX").classList.remove("rot3");
			}

			if (ACLIVE > 0 && ACLIVE <= 50) {
				document.getElementById("acliveImgY").classList.remove("rot3");
				document.getElementById("acliveImgY").classList.add("rot2");
			} else if (ACLIVE < 0 && ACLIVE >= -50) {
				document.getElementById("acliveImgY").classList.remove("rot2");
				document.getElementById("acliveImgY").classList.add("rot3");
			} else {
				document.getElementById("acliveImgY").classList.remove("rot2");
				document.getElementById("acliveImgY").classList.remove("rot3");
			}

			if ((ACLIVE >= 15 && ACLIVE <= 50) || (ACLIVE <= -15 && ACLIVE >= -50)) {
				document.getElementById("acliveImgY").classList.add("escalAmarelo");
				document.getElementById("acliveImgY").src = "assets/images/caminhao/testeX1A.png"
			} else if (ACLIVE < 15 && ACLIVE > -15) {
				document.getElementById("acliveImgY").classList.remove("escalAmarelo");
				document.getElementById("acliveImgY").src = "assets/images/caminhao/testeX1.png"
			}

			if ((ACLIVE2 >= 4 && ACLIVE2 <= 50) || (ACLIVE2 <= -4 && ACLIVE2 >= -50)) {
				document.getElementById("acliveImgX").classList.add("escalAmarelo");
				document.getElementById("acliveImgX").src = "assets/images/caminhao/testeX2A.png"
			} else if (ACLIVE2 < 4 && ACLIVE2 > -4) {
				document.getElementById("acliveImgX").classList.remove("escalAmarelo");
				document.getElementById("acliveImgX").src = "assets/images/caminhao/testeX2.png"
			}
		}
	}

	paintCritical(stat) {
		if (stat == true) {
			switch (colorsensor) {
				case 'v':
					colorsensor = 'a';
					this.paintBody(colorsensor);
					break;

				case 'a':
					colorsensor = 'v';
					this.paintBody(colorsensor);
					break;
			}
		} else if (stat == false) {
			this.paintBody('a');
		}
	}

	paintBody(pisca) {
		switch (pisca) {
			case 'v':
				document.body.style.backgroundColor = "rgb(252, 0, 0)";
				document.body.style.backgroundImage = "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,113,113,1) 100%)";

				if (radius[0].checked) {
					document.getElementById("colCentro").classList.remove("colCentral");
					document.getElementById("colCentro").classList.remove("colCentralDir");
					document.getElementById("colCentro").classList.remove("colCentralDirV");
					document.getElementById("colCentro").classList.add("colCentralV");
				} else if (radius[1].checked) {
					document.getElementById("colCentro").classList.remove("colCentral");
					document.getElementById("colCentro").classList.remove("colCentralDir");
					document.getElementById("colCentro").classList.remove("colCentralV");
					document.getElementById("colCentro").classList.add("colCentralV");
				}
				break;

			case 'a':
				document.body.style.backgroundColor = "#d9e2f3e0";
				document.body.style.backgroundImage = "radial-gradient(circle, #2b5876 0%, rgba(148, 187, 233, 1) 100%)";
				if (radius[0].checked) {
					document.getElementById("colCentro").classList.remove("colCentralV");
					document.getElementById("colCentro").classList.remove("colCentralDirV");
					document.getElementById("colCentro").classList.remove("colCentralDir");
					document.getElementById("colCentro").classList.add("colCentral");
				} else if (radius[1].checked) {
					document.getElementById("colCentro").classList.remove("colCentralV");
					document.getElementById("colCentro").classList.remove("colCentralDirV")
					document.getElementById("colCentro").classList.remove("colCentral");;
					document.getElementById("colCentro").classList.add("colCentral");
				}
				break;
		}
	}

	pintaDirecao(valueDir) {
		if (valueDir < 0) {
			document.getElementById("gaugedirecao").classList.remove("rotDir2");
			document.getElementById("gaugedirecao").classList.add("rotDir");
		} else if (valueDir > 0) {
			document.getElementById("gaugedirecao").classList.remove("rotDir");
			document.getElementById("gaugedirecao").classList.add("rotDir2");
		}
	}

	pintaRpm(valueRPM) {
		if (valueRPM >= 2250) {
			document.getElementById("fundoRPM").style.visibility = "visible";
		} else {
			document.getElementById("fundoRPM").style.visibility = "hidden";
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
			document.getElementById("bBuzinaBadge").classList.remove("azul-buzina");
		}
		if (bE5) {
			document.getElementById("bE5txt").classList.add("azul-luz2");
		} else {
			document.getElementById("bE5txt").classList.remove("azul-luz2");
		}
	}

	adblueBarra(adblue) {
		if (adblue < 20) {
			//********************** Remove Backgorund **********************/
			document.getElementById("bAdbluelBadge1").classList.remove("bg-danger");
			document.getElementById("bAdbluelBadge1").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge2").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge3").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge4").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge5").classList.remove("bg-info");


			//********************** Remove Bordas **********************/
			document.getElementById("bAdbluelBadge1").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge1").classList.remove("border-info");

			document.getElementById("bAdbluelBadge2").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge2").classList.remove("border-info");

			document.getElementById("bAdbluelBadge3").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge3").classList.remove("border-info");

			document.getElementById("bAdbluelBadge4").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge4").classList.remove("border-info");

			document.getElementById("bAdbluelBadge5").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge5").classList.remove("border-info");

			//********************** Adiciona Backgorund e Bordas **********************/
			document.getElementById("bAdbluelBadge1").classList.add("bg-danger");
			document.getElementById("bAdbluelBadge1").classList.add("border-danger");

			document.getElementById("bAdbluelBadge2").classList.add("border-danger");

			document.getElementById("bAdbluelBadge3").classList.add("border-danger");

			document.getElementById("bAdbluelBadge4").classList.add("border-danger");

			document.getElementById("bAdbluelBadge5").classList.add("border-danger");

		} else if (adblue < 40) {
			//********************** Remove Backgorund **********************/
			document.getElementById("bAdbluelBadge1").classList.remove("bg-danger");
			document.getElementById("bAdbluelBadge1").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge2").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge3").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge4").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge5").classList.remove("bg-info");


			//********************** Remove Bordas **********************/
			document.getElementById("bAdbluelBadge1").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge1").classList.remove("border-info");

			document.getElementById("bAdbluelBadge2").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge2").classList.remove("border-info");

			document.getElementById("bAdbluelBadge3").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge3").classList.remove("border-info");

			document.getElementById("bAdbluelBadge4").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge4").classList.remove("border-info");

			document.getElementById("bAdbluelBadge5").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge5").classList.remove("border-info");

			//********************** Adiciona Backgorund e Bordas **********************/
			document.getElementById("bAdbluelBadge1").classList.add("bg-info");
			document.getElementById("bAdbluelBadge1").classList.add("border-info");

			document.getElementById("bAdbluelBadge2").classList.add("bg-info");
			document.getElementById("bAdbluelBadge2").classList.add("border-info");

			document.getElementById("bAdbluelBadge3").classList.add("border-info");

			document.getElementById("bAdbluelBadge4").classList.add("border-info");

			document.getElementById("bAdbluelBadge5").classList.add("border-info");

		} else if (adblue < 60) {
			//********************** Remove Backgorund **********************/
			document.getElementById("bAdbluelBadge1").classList.remove("bg-danger");
			document.getElementById("bAdbluelBadge1").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge2").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge3").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge4").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge5").classList.remove("bg-info");


			//********************** Remove Bordas **********************/
			document.getElementById("bAdbluelBadge1").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge1").classList.remove("border-info");

			document.getElementById("bAdbluelBadge2").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge2").classList.remove("border-info");

			document.getElementById("bAdbluelBadge3").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge3").classList.remove("border-info");

			document.getElementById("bAdbluelBadge4").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge4").classList.remove("border-info");

			document.getElementById("bAdbluelBadge5").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge5").classList.remove("border-info");

			//********************** Adiciona Backgorund e Bordas **********************/
			document.getElementById("bAdbluelBadge1").classList.add("bg-info");
			document.getElementById("bAdbluelBadge1").classList.add("border-info");

			document.getElementById("bAdbluelBadge2").classList.add("bg-info");
			document.getElementById("bAdbluelBadge2").classList.add("border-info");

			document.getElementById("bAdbluelBadge2").classList.add("bg-info");
			document.getElementById("bAdbluelBadge3").classList.add("border-info");

			document.getElementById("bAdbluelBadge4").classList.add("border-info");

			document.getElementById("bAdbluelBadge5").classList.add("border-info");


		} else if (adblue < 80) {
			//********************** Remove Backgorund **********************/
			document.getElementById("bAdbluelBadge1").classList.remove("bg-danger");
			document.getElementById("bAdbluelBadge1").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge2").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge3").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge4").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge5").classList.remove("bg-info");


			//********************** Remove Bordas **********************/
			document.getElementById("bAdbluelBadge1").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge1").classList.remove("border-info");

			document.getElementById("bAdbluelBadge2").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge2").classList.remove("border-info");

			document.getElementById("bAdbluelBadge3").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge3").classList.remove("border-info");

			document.getElementById("bAdbluelBadge4").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge4").classList.remove("border-info");

			document.getElementById("bAdbluelBadge5").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge5").classList.remove("border-info");

			//********************** Adiciona Backgorund e Bordas **********************/
			document.getElementById("bAdbluelBadge1").classList.add("bg-info");
			document.getElementById("bAdbluelBadge1").classList.add("border-info");

			document.getElementById("bAdbluelBadge2").classList.add("bg-info");
			document.getElementById("bAdbluelBadge2").classList.add("border-info");

			document.getElementById("bAdbluelBadge3").classList.add("bg-info");
			document.getElementById("bAdbluelBadge3").classList.add("border-info");

			document.getElementById("bAdbluelBadge4").classList.add("bg-info");
			document.getElementById("bAdbluelBadge4").classList.add("border-info");

			document.getElementById("bAdbluelBadge5").classList.add("border-info");

		} else if (adblue < 101) {
			//********************** Remove Backgorund **********************/
			document.getElementById("bAdbluelBadge1").classList.remove("bg-danger");
			document.getElementById("bAdbluelBadge1").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge2").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge3").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge4").classList.remove("bg-info");

			document.getElementById("bAdbluelBadge5").classList.remove("bg-info");


			//********************** Remove Bordas **********************/
			document.getElementById("bAdbluelBadge1").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge1").classList.remove("border-info");

			document.getElementById("bAdbluelBadge2").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge2").classList.remove("border-info");

			document.getElementById("bAdbluelBadge3").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge3").classList.remove("border-info");

			document.getElementById("bAdbluelBadge4").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge4").classList.remove("border-info");

			document.getElementById("bAdbluelBadge5").classList.remove("border-danger");
			document.getElementById("bAdbluelBadge5").classList.remove("border-info");

			//********************** Adiciona Backgorund e Bordas **********************/
			document.getElementById("bAdbluelBadge1").classList.add("bg-info");
			document.getElementById("bAdbluelBadge1").classList.add("border-info");

			document.getElementById("bAdbluelBadge2").classList.add("bg-info");
			document.getElementById("bAdbluelBadge2").classList.add("border-info");

			document.getElementById("bAdbluelBadge3").classList.add("bg-info");
			document.getElementById("bAdbluelBadge3").classList.add("border-info");

			document.getElementById("bAdbluelBadge4").classList.add("bg-info");
			document.getElementById("bAdbluelBadge4").classList.add("border-info");

			document.getElementById("bAdbluelBadge5").classList.add("bg-info");
			document.getElementById("bAdbluelBadge5").classList.add("border-info");
		}
	}

	axesEsq(Gc1X, Gc1Y, Gc1Z) {
		document.getElementById("bEDirtxt").classList.remove("direita");
		document.getElementById("bEDirtxt").classList.remove("luzJoy");
		document.getElementById("bEEsqtxt").classList.remove("esquerda");
		document.getElementById("bEEsqtxt").classList.remove("luzJoy");
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

	aprocimacao(distacia1, distacia2, distacia3, distacia4, distacia5) {
		if (distacia1 <= 0 || distacia1 == 30 || distacia1 === undefined || isNaN(distacia1)) {
			document.getElementById("d1").style.display = "none";
			document.getElementById("d1dir").style.display = "none";
		} else if (distacia1 <= 10) {
			document.getElementById("d1").style.display = "";
			document.getElementById("d1dir").style.display = "";

			document.getElementById("d1").classList.remove("text-success");
			document.getElementById("d1").classList.remove("text-warning");
			document.getElementById("d1").classList.remove("text-success");
			document.getElementById("d1").classList.remove("text-warning");
			document.getElementById("d1").classList.add("text-danger");

			document.getElementById("d1dir").classList.remove("text-success");
			document.getElementById("d1dir").classList.remove("text-warning");
			document.getElementById("d1dir").classList.remove("text-success");
			document.getElementById("d1dir").classList.remove("text-warning");
			document.getElementById("d1dir").classList.add("text-danger");
		} else if (distacia1 <= 20) {
			document.getElementById("d1").style.display = "";
			document.getElementById("d1dir").style.display = "";

			document.getElementById("d1").classList.remove("text-success");
			document.getElementById("d1").classList.remove("text-success");
			document.getElementById("d1").classList.add("text-warning");
			document.getElementById("d1").classList.remove("text-danger");
			document.getElementById("d1").classList.remove("text-danger");

			document.getElementById("d1dir").classList.remove("text-success");
			document.getElementById("d1dir").classList.remove("text-success");
			document.getElementById("d1dir").classList.add("text-warning");
			document.getElementById("d1dir").classList.remove("text-danger");
			document.getElementById("d1dir").classList.remove("text-danger");
		} else if (distacia1 < 30) {
			document.getElementById("d1").style.display = "";
			document.getElementById("d1dir").style.display = "";

			document.getElementById("d1").classList.add("text-success");
			document.getElementById("d1").classList.remove("text-warning");
			document.getElementById("d1").classList.remove("text-danger");
			document.getElementById("d1").classList.remove("text-warning");
			document.getElementById("d1").classList.remove("text-danger");

			document.getElementById("d1dir").classList.add("text-success");
			document.getElementById("d1dir").classList.remove("text-warning");
			document.getElementById("d1dir").classList.remove("text-danger");
			document.getElementById("d1dir").classList.remove("text-warning");
			document.getElementById("d1dir").classList.remove("text-danger");
		}

		if (distacia2 <= 0 || distacia2 == 30 || distacia2 === undefined || isNaN(distacia2)) {
			document.getElementById("d2").style.display = "none";
			document.getElementById("d2dir").style.display = "none";
		} else if (distacia2 <= 10) {
			document.getElementById("d2").style.display = "";
			document.getElementById("d2dir").style.display = "";

			document.getElementById("d2").classList.remove("text-success");
			document.getElementById("d2").classList.remove("text-warning");
			document.getElementById("d2").classList.remove("text-success");
			document.getElementById("d2").classList.remove("text-warning");
			document.getElementById("d2").classList.add("text-danger");

			document.getElementById("d2dir").classList.remove("text-success");
			document.getElementById("d2dir").classList.remove("text-warning");
			document.getElementById("d2dir").classList.remove("text-success");
			document.getElementById("d2dir").classList.remove("text-warning");
			document.getElementById("d2dir").classList.add("text-danger");
		} else if (distacia2 <= 20) {
			document.getElementById("d2").style.display = "";
			document.getElementById("d2dir").style.display = "";

			document.getElementById("d2").classList.remove("text-success");
			document.getElementById("d2").classList.remove("text-success");
			document.getElementById("d2").classList.add("text-warning");
			document.getElementById("d2").classList.remove("text-danger");
			document.getElementById("d2").classList.remove("text-danger");

			document.getElementById("d2dir").classList.remove("text-success");
			document.getElementById("d2dir").classList.remove("text-success");
			document.getElementById("d2dir").classList.add("text-warning");
			document.getElementById("d2dir").classList.remove("text-danger");
			document.getElementById("d2dir").classList.remove("text-danger");
		} else if (distacia2 < 30) {
			document.getElementById("d2").style.display = "";
			document.getElementById("d2dir").style.display = "";

			document.getElementById("d2").classList.add("text-success");
			document.getElementById("d2").classList.remove("text-warning");
			document.getElementById("d2").classList.remove("text-danger");
			document.getElementById("d2").classList.remove("text-warning");
			document.getElementById("d2").classList.remove("text-danger")

			document.getElementById("d2dir").classList.add("text-success");
			document.getElementById("d2dir").classList.remove("text-warning");
			document.getElementById("d2dir").classList.remove("text-danger");
			document.getElementById("d2dir").classList.remove("text-warning");
			document.getElementById("d2dir").classList.remove("text-danger")
		}

		if (distacia3 <= 0 || distacia3 == 30 || distacia3 === undefined || isNaN(distacia3)) {
			document.getElementById("d3").style.display = "none";
			document.getElementById("d3dir").style.display = "none";
		} else if (distacia3 <= 10) {
			document.getElementById("d3").style.display = "";
			document.getElementById("d3dir").style.display = "";

			document.getElementById("d3").classList.remove("text-success");
			document.getElementById("d3").classList.remove("text-warning");
			document.getElementById("d3").classList.remove("text-success");
			document.getElementById("d3").classList.remove("text-warning");
			document.getElementById("d3").classList.add("text-danger");

			document.getElementById("d3dir").classList.remove("text-success");
			document.getElementById("d3dir").classList.remove("text-warning");
			document.getElementById("d3dir").classList.remove("text-success");
			document.getElementById("d3dir").classList.remove("text-warning");
			document.getElementById("d3dir").classList.add("text-danger");
		} else if (distacia3 <= 20) {
			document.getElementById("d3").style.display = "";
			document.getElementById("d3dir").style.display = "";

			document.getElementById("d3").classList.remove("text-success");
			document.getElementById("d3").classList.remove("text-success");
			document.getElementById("d3").classList.add("text-warning");
			document.getElementById("d3").classList.remove("text-danger");
			document.getElementById("d3").classList.remove("text-danger");

			document.getElementById("d3dir").classList.remove("text-success");
			document.getElementById("d3dir").classList.remove("text-success");
			document.getElementById("d3dir").classList.add("text-warning");
			document.getElementById("d3dir").classList.remove("text-danger");
			document.getElementById("d3dir").classList.remove("text-danger");
		} else if (distacia3 < 30) {
			document.getElementById("d3").style.display = "";
			document.getElementById("d3dir").style.display = "";

			document.getElementById("d3").classList.add("text-success");
			document.getElementById("d3").classList.remove("text-warning");
			document.getElementById("d3").classList.remove("text-danger");
			document.getElementById("d3").classList.remove("text-warning");
			document.getElementById("d3").classList.remove("text-danger");

			document.getElementById("d3dir").classList.add("text-success");
			document.getElementById("d3dir").classList.remove("text-warning");
			document.getElementById("d3dir").classList.remove("text-danger");
			document.getElementById("d3dir").classList.remove("text-warning");
			document.getElementById("d3dir").classList.remove("text-danger");
		}

		if (distacia4 <= 0 || distacia4 == 30 || distacia4 === undefined || isNaN(distacia4)) {
			document.getElementById("d4").style.display = "none";
			document.getElementById("d4dir").style.display = "none";

		} else if (distacia4 <= 10) {
			document.getElementById("d4").style.display = "";
			document.getElementById("d4dir").style.display = "";

			document.getElementById("d4").classList.remove("text-success");
			document.getElementById("d4").classList.remove("text-warning");
			document.getElementById("d4").classList.remove("text-success");
			document.getElementById("d4").classList.remove("text-warning");
			document.getElementById("d4").classList.add("text-danger");

			document.getElementById("d4dir").classList.remove("text-success");
			document.getElementById("d4dir").classList.remove("text-warning");
			document.getElementById("d4dir").classList.remove("text-success");
			document.getElementById("d4dir").classList.remove("text-warning");
			document.getElementById("d4dir").classList.add("text-danger");
		} else if (distacia4 <= 20) {
			document.getElementById("d4").style.display = "";
			document.getElementById("d4dir").style.display = "";

			document.getElementById("d4").classList.remove("text-success");
			document.getElementById("d4").classList.remove("text-success");
			document.getElementById("d4").classList.add("text-warning");
			document.getElementById("d4").classList.remove("text-danger");
			document.getElementById("d4").classList.remove("text-danger");

			document.getElementById("d4dir").classList.remove("text-success");
			document.getElementById("d4dir").classList.remove("text-success");
			document.getElementById("d4dir").classList.add("text-warning");
			document.getElementById("d4dir").classList.remove("text-danger");
			document.getElementById("d4dir").classList.remove("text-danger");
		} else if (distacia4 < 30) {
			document.getElementById("d4").style.display = "";
			document.getElementById("d4dir").style.display = "";

			document.getElementById("d4").classList.add("text-success");
			document.getElementById("d4").classList.remove("text-warning");
			document.getElementById("d4").classList.remove("text-danger");
			document.getElementById("d4").classList.remove("text-warning");
			document.getElementById("d4").classList.remove("text-danger");

			document.getElementById("d4dir").classList.add("text-success");
			document.getElementById("d4dir").classList.remove("text-warning");
			document.getElementById("d4dir").classList.remove("text-danger");
			document.getElementById("d4dir").classList.remove("text-warning");
			document.getElementById("d4dir").classList.remove("text-danger");
		}

		if (distacia5 <= 0 || distacia5 == 30 || distacia5 === undefined || isNaN(distacia5)) {
			document.getElementById("d5").style.display = "none";
			document.getElementById("d5dir").style.display = "none";
		} else if (distacia5 <= 10) {
			document.getElementById("d5").style.display = "";
			document.getElementById("d5dir").style.display = "";

			document.getElementById("d5").classList.remove("text-success");
			document.getElementById("d5").classList.remove("text-warning");
			document.getElementById("d5").classList.remove("text-success");
			document.getElementById("d5").classList.remove("text-warning");
			document.getElementById("d5").classList.add("text-danger");

			document.getElementById("d5dir").classList.remove("text-success");
			document.getElementById("d5dir").classList.remove("text-warning");
			document.getElementById("d5dir").classList.remove("text-success");
			document.getElementById("d5dir").classList.remove("text-warning");
			document.getElementById("d5dir").classList.add("text-danger");
		} else if (distacia5 <= 20) {
			document.getElementById("d5").style.display = "";
			document.getElementById("d5dir").style.display = "";

			document.getElementById("d5").classList.remove("text-success");
			document.getElementById("d5").classList.remove("text-success");
			document.getElementById("d5").classList.add("text-warning");
			document.getElementById("d5").classList.remove("text-danger");
			document.getElementById("d5").classList.remove("text-danger");

			document.getElementById("d5dir").classList.remove("text-success");
			document.getElementById("d5dir").classList.remove("text-success");
			document.getElementById("d5dir").classList.add("text-warning");
			document.getElementById("d5dir").classList.remove("text-danger");
			document.getElementById("d5dir").classList.remove("text-danger");
		} else if (distacia5 < 30) {
			document.getElementById("d5").style.display = "";
			document.getElementById("d5dir").style.display = "";

			document.getElementById("d5").classList.add("text-success");
			document.getElementById("d5").classList.remove("text-warning");
			document.getElementById("d5").classList.remove("text-danger");
			document.getElementById("d5").classList.remove("text-warning");
			document.getElementById("d5").classList.remove("text-danger");

			document.getElementById("d5dir").classList.add("text-success");
			document.getElementById("d5dir").classList.remove("text-warning");
			document.getElementById("d5dir").classList.remove("text-danger");
			document.getElementById("d5dir").classList.remove("text-warning");
			document.getElementById("d5dir").classList.remove("text-danger");
		}
	}

}
export { VisualStatus };