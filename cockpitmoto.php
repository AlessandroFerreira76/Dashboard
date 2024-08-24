<!doctype html>

<?php
if (session_status() !== PHP_SESSION_NONE) {
    session_start();
}
?>

<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Dashboard | Grupo AIZ</title>

    <link href="assets/libs/chartist/chartist.min.css" rel="stylesheet">
    <link href="assets/css/bootstrap-dark.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <link href="assets/css/app-dark.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <link href="assets/css/dashboard.css" rel="stylesheet" type="text/css" />
    <link href="assets/images/fontawesome/css/all.css" rel="stylesheet">

    <script src="assets/js/socket.io.js"></script>

    <style>
        .bgCockipti {
            background-image: url(assets/images/cockpit/joy4.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 50px;
            height: 75px;
        }

        .fundobloqueio {
            background-image: url(assets/images/infoImg/bloqueio.png);
            background-size: 28%;
            background-repeat: no-repeat;
            background-position-y: center;
            background-position-x: 2%;
            opacity: 0.7;
        }

        .radiusMain {
            border-radius: 99% 99% 99% 99% / 5%;
            height: 130px;
        }
    </style>
</head>

<body id="app" class="overflow-hidden " data-sidebar="dark">
    <div class="row justify-content-center">
        <div class=" col-11">
            <div class="card overflow-hidden radiusMain">
                <div class="row no-gutters justify-content-center">

                    <!-- Alert welcome msg -->
                    <div class="alertwelcome text-success text-center" style="display: true;" id="alertaboasvindas">
                        <h1 style="font-size: 80px; font-family:Lucida Sans;">
                            BEM VINDO!!!
                        </h1>
                    </div>
                    <!-- Joysticks -->
                    <div class="col-5" id="cockpit1" style="display: none;">
                        <div class="row no-gutters ">
                            <!-- Joystick Esquerdo -->
                            <div class="col-3 mt-2 mb-0">
                                <div class="row align-items-center no-gutters">
                                    <!-- Joystick-->
                                    <div class="col-7 mb-0" style="text-align:center; ">
                                        <div class="row align-items-center no-gutters bgCockipti" style="margin-left: auto; margin-right: auto;">
                                            <div class="col-6" style="text-align:center;">
                                                <p class="mb-0 mr-0 mt-1 ml-1 cockiFontSize text-white" id="bE1txt">1</p>
                                                <p class="mb-0 ml-3 cockiFontSize text-white" id="bE3txt">3</p>
                                            </div>
                                            <div class="col-6" style="text-align:center;">
                                                <p class="mb-0 ml-0 mt-1 mr-1 cockiFontSize text-white" id="bE2txt">2</p>
                                                <p class="mb-0 mr-3 text-white cockiFontSize" id="bE4txt">4</p>
                                            </div>
                                            <div class="col-10" style="text-align:center; ">
                                                <p class="mb-0 ml-2 cockiFontSize" style="color:black;" id="bE5txt">|</p>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- Eixo Y -->
                                    <div class="col-5 mb-0" style="height: 60px">
                                        <div class="row no-gutters justify-content-center mt-0">
                                            <div class="col-10"><span class="mb-0 mt-0 eixoFontSize"><i class="fa-solid fa-angle-up" id="bECimatxt" style="width: 10px;"></i></span></div>
                                            <div class="col-10"><span class="mb-0 mt-0 eixoFontSize" id="bEYtxt">0</span></div>
                                            <div class="col-10"><span class="mb-0 mt-0 eixoFontSize"><i class="fa-solid fa-angle-down" id="bEBaixotxt" style="width: 10px;"></i></span></div>

                                        </div>
                                    </div>
                                    <!-- Eixo X -->
                                    <div class="col-7 mt-0" style="text-align:center; position: relative; bottom:8px; ">
                                        <div class="row no-gutters mt-2 mb-0" style="margin-left: auto; margin-right: auto;">
                                            <div class="col-3 text-right"><span class="mb-0 mt-0 eixoFontSize"><i class="fa-solid fa-angle-left" id="bEEsqtxt"></i></span></div>
                                            <div class="col-6 text-center"><span class="mb-0 mt-0 eixoFontSize" id="bEXtxt">0</span></div>
                                            <div class="col-3 text-left "><span class="mb-0 mt-0 eixoFontSize"><i class="fa-solid fa-angle-right" id="bEDirtxt"></i></span></div>
                                        </div>
                                    </div>
                                    <!-- Espaçamento Eixo X-->
                                    <div class="col-5 mb-0" style="text-align:center;"></div>
                                </div>
                            </div>

                            <!-- Pedal Esquerdo -->
                            <div class="col-2 mt-2 mb-0">
                                <div class="row no-gutters justify-content-center">
                                    <div class="col-12 text-center">
                                        <span class="mb-0 mt-0 eixoFontSize text-center">
                                            <i class="fa-solid fa-angle-up" style="display: block; width: 15px; margin-left: auto; margin-right:auto" id="bPECimatxt"></i>
                                        </span>
                                    </div>
                                    <div class="col-12 text-center"><span class="mb-0 mt-0 eixoFontSize text-center" id="bPEYtxt">0</span></div>
                                    <div class="col-12 mt-0 text-center">
                                        <img src="assets/images/cockpit/pedal1.png" alt="" height="60">
                                    </div>
                                    <div class="col-4 mb-0 mt-4 text-left" style="display: none;">
                                        <canvas class="img-fluid" id="gaugepadC2y"></canvas>
                                    </div>
                                </div>
                            </div>

                            <!-- Pedal Direito -->
                            <div class="col-2 mt-2 mb-0">
                                <div class="row no-gutters justify-content-center">
                                    <div class="col-12 text-center">
                                        <span class="mb-0 mt-0 eixoFontSize">
                                            <i class="fa-solid fa-angle-up" style="display: block; width: 15px; margin-left: auto; margin-right:auto" id="bPDCimatxt"></i>
                                        </span>
                                    </div>
                                    <div class="col-12 text-center"><span class="mb-0 mt-0 eixoFontSize text-center" id="bPDYtxt">0</span></div>
                                    <div class="col-12 text-center">
                                        <img src="assets/images/cockpit/pedal2.png" alt="" height="60">
                                    </div>
                                </div>
                            </div>

                            <!-- Joystick Direito -->
                            <div class="col-3 mt-2 mb-0">
                                <div class="row align-items-center no-gutters">
                                    <!-- Eixo Y -->
                                    <div class="col-5 mb-0" style="text-align:center; height: 60px">
                                        <div class="row no-gutters justify-content-center mt-0">
                                            <div class="col-10 text-right"><span class="mb-0 mt-0 eixoFontSize"><i class="fa-solid fa-angle-up" id="bDCimatxt" style="width: 10px; margin-left:auto"></i></span></div>
                                            <div class="col-10 text-right"><span class="mb-0 mt-0 eixoFontSize" id="bDYtxt">0</span></div>
                                            <div class="col-10 text-right"><span class="mb-0 mt-0 eixoFontSize"><i class="fa-solid fa-angle-down" id="bDBaixotxt" style="width: 10px; margin-left:auto"></i></span> </div>
                                        </div>
                                    </div>

                                    <!-- Joystick -->
                                    <div class="col-7 mb-0" style="text-align:center;">
                                        <div class="row align-items-center no-gutters bgCockipti" style="margin-left: auto; margin-right: auto;">
                                            <div class="col-6" style="text-align:center;">
                                                <p class="mb-0 mr-0 mt-1 ml-0 cockiFontSize text-white" id="bD1txt">1</p>
                                                <p class="mb-0 ml-3 cockiFontSize text-white" id="bD3txt">3</p>
                                            </div>
                                            <div class="col-6" style="text-align:center;">
                                                <p class="mb-0 ml-0 mt-1 mr-0 cockiFontSize text-white" id="bD2txt">2</p>
                                                <p class="mb-0 mr-3 cockiFontSize text-white" id="bD4txt">4</p>
                                            </div>
                                            <div class="col-10" style="text-align:center;">
                                                <p class="mb-0 ml-2 cockiFontSize" style="color:black;" id="bD5txt">|</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Espaçamento Eixo X-->
                                    <div class="col-5 mb-0" style="text-align:center;"></div>
                                    <!-- Eixo X -->
                                    <div class="col-7 mt-0" style="text-align:center; position: relative; bottom:8px;">
                                        <div class="row no-gutters mt-2 mb-0" style="margin-left: auto; margin-right: auto;">
                                            <div class="col-3 text-right"><span class="mb-0 mt-0 eixoFontSize"><i class="fa-solid fa-angle-left" id="bDEsqtxt"></i></span></div>
                                            <div class="col-6 text-center"><span class="mb-0 mt-0 eixoFontSize" id="bDXtxt">0</span></div>
                                            <div class="col-3 text-left "><span class="mb-0 mt-0 eixoFontSize"><i class="fa-solid fa-angle-right" id="bDDirtxt"></i></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- col teclado -->
                    <div class="col-6 mt-1">
                        <div class="row no-gutters mt-2 mb-2" id="cockpit2" style="display: none;">
                            <div class="col-5">
                                <div class="row no-gutters" style="position: relative; right: 5px">
                                    <div class="col-3 border border-warning radiusTopEsquerdoBtn" id="bHomeBadge" style="text-align:center;">
                                        <h3 class="mb-0"><i class="fas fa-home"></i></h3>
                                    </div>
                                    <div class="col-3 border border-warning" id="bCimaBadge" style="text-align:center;">
                                        <h3 class="mb-0"><i class="fas fa-arrow-up"></i></h3>
                                    </div>

                                    <div class="col-3 border border-warning " id="bMenuBadge" style="text-align:center;">
                                        <h3 class="mb-0 "><i class="fa-solid fa-list-ul"></i></h3>
                                    </div>

                                    <div class="col-3 border border-warning" id="b1Badge" style="text-align:center;">
                                        <h3 class="mb-0">1</h3>
                                    </div>
                                    <div class="col-3 border border-warning" id="bEsqBadge" style="text-align:center;">
                                        <h3 class="mb-0"><i class="fas fa-arrow-left"></i></h3>
                                    </div>
                                    <div class="col-3 border border-warning" id="bOkBadge" style="text-align:center;">
                                        <h6 class="mb-0 mt-2">OK</h6>
                                    </div>
                                    <div class="col-3 border border-warning" id="bDireitaBadge" style="text-align:center;">
                                        <h3 class="mb-0"><i class="fas fa-arrow-right"></i></h3>
                                    </div>
                                    <div class="col-3 border border-warning" id="b2Badge" style="text-align:center;">
                                        <h3 class="mb-0">2</h3>
                                    </div>

                                    <div class="col-3 border border-warning radiusEsquerdoBtn" id="bSeta2Badge" style="text-align:center;">
                                        <h3 class="mb-0"><i class="fas fa-reply rot"></i></h3>
                                    </div>

                                    <div class="col-3 border border-warning" id="bBaixoBadge" style="text-align:center;">
                                        <h3 class="mb-0"><i class="fas fa-arrow-down"></i></h3>
                                    </div>



                                    <div class="col-3 border border-warning" id="bSeta1Badge" style="text-align:center;">
                                        <h3 class="mb-0"><i class="fas fa-share rot1"></i></h3>
                                    </div>


                                    <div class="col-3 border border-warning" id="b3Badge" style="text-align:center;">
                                        <h3 class="mb-0">3</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="row no-gutters">
                                    <div class="col-9" style="position: relative; right: 5px">
                                        <div class="row no-gutters">
                                            <div class="col-4 border border-warning" id="bAutoBadge" style="text-align:center;">
                                                <h6 class="mb-0 mt-1">AUTO</h6>
                                            </div>
                                            <div class="col-4 border border-warning" id="bTracaoBadge" style="text-align:center;">
                                                <img src="assets/images/cockpit/tforceB.png" alt="" id="bTracaoImgC" height="29">
                                            </div>
                                            <div class="col-4 border border-warning radiusTopDireitoBtn" id="bTForceBadge" style="text-align:center;">
                                                <img src="assets/images/infoImg/tforceB1.png" alt="" id="bTForceImg" height="29">
                                            </div>
                                            <div class="col-4 border border-warning" id="bFreioEstPresBadge" style="text-align:center;">
                                                <img src="assets/images/infoImg/parkbB.png" alt="" id="bFreioEstPresImg" height="28">
                                            </div>
                                            <div class="col-4 border border-warning" id="bFarol2Badge" style="text-align:center;">
                                                <img src="assets/images/cockpit/farol2.png" alt="" id="bFarol2Img" height="30">
                                            </div>
                                            <div class="col-4 border border-warning" id="bFarol1Badge" style="text-align:center;">
                                                <img src="assets/images/cockpit/farol1.png" alt="" id="bFarol1Img" height="30">
                                            </div>
                                            <div class="col-4 border border-warning" id="bFAuxJBadge" style="text-align:center;">
                                                <img src="assets/images/infoImg/freioauxB.png" alt="" id="bFAuxJImg" height="29">
                                            </div>
                                            <div class="col-4 border border-warning" id="bAuxMaisBadge" style="text-align:center;">
                                                <span>
                                                    <img src="assets/images/infoImg/freioauxB.png" alt="" id="bAuxMaisImg" height="25" class="mt-1">
                                                </span>
                                            </div>
                                            <div class="col-4 border border-warning radiusDireitoBtn" id="bAuxMenBadge" style="text-align:center;">
                                                <span>
                                                    <img src="assets/images/infoImg/freioauxB.png" alt="" id="bAuxMenImg" height="25" class="mt-1">
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-3 align-items-center">
                                        <div class="card shadow-none eng" id="bEngineBadge">
                                            <div class="card shadow-none engEnd centerAuto" style="border-radius: 50%; border-width: 3px; border-color:#4F4F4F" id="stast">
                                                <h6 class="text-center mb-1 mt-2" style="font-size: 10px; ">ENGINE</h6>
                                                <h6 class="text-center mb-0" style="font-size: 12px;">START</h6>
                                                <h6 class="text-center mb-2" style="font-size: 12px;">STOP</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- JAVASCRIPT -->
            <script src="assets/libs/jquery/jquery.min.js"></script>

            <script src="assets/libs/metismenu/metisMenu.min.js"></script>

            <script src="assets/libs/peity/jquery.peity.min.js"></script>

            <script type="text/javascript" src="assets/js/dist/echarts.min.js"></script>

            <script type="module" src="assets/js/cockpitmoto.js"></script>

</body>

</html>