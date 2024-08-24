<!doctype html>

<?php
if (session_status() !== PHP_SESSION_NONE) {
    session_start();
}
?>

<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Dashboard | NEXT </title>

    <link href="assets/libs/chartist/chartist.min.css" rel="stylesheet">
    <link href="assets/css/bootstrap-dark.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <link href="assets/css/app-dark.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <link href="assets/css/dashboard.css" rel="stylesheet" type="text/css" />
    <link href="assets/images/fontawesome/css/all.css" rel="stylesheet">

    <script src="assets/js/socket.io.js"></script>

    <style>
        .bgCockipti {
            background-image: url(assets/images/cockpit/JoyCaminhao.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 50px;
            height: 75px;
        }

        .bgCockiptiMarcha {
            background-image: url(assets/images/cockpit/MarchaCaminhao.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 50px;
            height: 80px;
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
    <!-- Alert testOK msg -->    
    <div class="alerttest text-success text-center" style="display: none;" id="alertatesteok">
    <div class="card overflow-hidden radiusMain">
                        <h1 style="font-size: 80px; font-family:Lucida Sans;">
                            TESTE REALIZADO COM SUCESSO!!!
                        </h1>
                    </div>
    </div>
    <!-- Alert testOK msg --> 
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
                    <!-- Col Cockpit -->
                    <div class="col-6 mt-2 mb-0">
                        <div class="row no-gutters" id="cockpit1" style="display: none;">
                            <!-- Joy Esquerdo -->
                            <div class="col-4 mt-2 mb-0">
                                <div class="row align-items-center no-gutters">
                                    <!-- Gauge Z -->
                                    <div class="col-2 mt-3 mb-0" style="text-align:left;">
                                        <div class="row no-gutters justify-content-center mt-0" style="position: relative; bottom: 18px;">
                                            <div class="col-12 text-center"><span class="mb-0 mt-0 eixoFontSize"><i class="fa-solid fa-angle-up" id="bECimaZtxt"></i></span></div>
                                            <div class="col-12 text-center"><span class="mb-0 mt-0 eixoFontSize text-center"><i class="fa-solid fa-angle-down" id="bEBaixoZtxt"></i></span></div>
                                        </div>
                                    </div>
                                    <!-- Controle / gauge X -->
                                    <div class="col-6 mb-0 ml-0" style="text-align:center; ">
                                        <div class="row align-items-center no-gutters bgCockipti" style="margin-left:auto; margin-right:auto">
                                            <div class="col-sm-12">
                                                <span class="azul-luz luz mt-1" id="bE1txt" style="position: relative; left: 22.5px; top: 2.5px"></span>
                                                <span class="azul-luz luz" id="bE2txt" style="position: relative; left: 32.5px; top: 4px;"></span>
                                                <span class="azul-luz luz" id="bE3txt" style="position: relative; left: 22.5px; top: 6px;"></span>
                                            </div>

                                            <div class="col-sm-12">
                                                <span class="mb-0 mt-2  azul-luz2 luz2" id="bE4txt" style="position: relative; left: 21px;"></span>
                                            </div>
                                            <div class="col-sm-12 mb-2" style="text-align:center;">
                                                <span class="mb-0 azul-luz2 luz2" id="bE5txt" style="position: relative; left: 21px;"></span>
                                            </div>
                                        </div>
                                        <canvas id="gaugepadC1x" style="display: none; margin-left:auto; margin-right:auto"></canvas>
                                    </div>

                                    <!-- Eixo Y -->
                                    <div class="col-2 mb-0" style="text-align:left; height: 60px">
                                        <div style="display: none;"><canvas class="mr-1" id="gaugepadC1y"></canvas></div>
                                        <div class="row no-gutters justify-content-center mt-0">
                                            <div class="col-12 text-center"><span class="mb-0 mt-0 eixoFontSize"><i class="fa-solid fa-angle-up" id="bECimatxt"></i></span></div>
                                            <div class="col-12 text-center"><span class="mb-0 mt-0 eixoFontSize text-center" id="bEYtxt">0</span></div>
                                            <div class="col-12 text-center"><span class="mb-0 mt-0 eixoFontSize text-center"><i class="fa-solid fa-angle-down" id="bEBaixotxt"></i></span></div>
                                        </div>
                                    </div>

                                    <!-- Eixo X -->
                                    <div class="col-10 mt-0" style="text-align:center; position: relative; bottom:8px;">
                                        <div class="row no-gutters mt-2 mb-0">
                                            <div class="col-3 text-right"><span class="mb-0 mt-0 eixoFontSize"><i class="fa-solid fa-angle-left" id="bEEsqtxt"></i></span></div>
                                            <div class="col-6 text-center"><span class="mb-0 mt-0 eixoFontSize" id="bEXtxt">0</span></div>
                                            <div class="col-3 text-left "><span class="mb-0 mt-0 eixoFontSize"><i class="fa-solid fa-angle-right" id="bEDirtxt"></i></span></div>
                                        </div>
                                    </div>
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
                                    <div class="col-128 mt-0 text-center">
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
                                    <div class="col-12 mt-4 text-right" style="display: none;">
                                        <canvas class="img-fluid" id="gaugepadC3y"></canvas>
                                    </div>
                                    <div class="col-8 mt-0">
                                        <img src="assets/images/cockpit/pedal2.png" alt="" height="60">
                                    </div>
                                </div>
                            </div>

                            <!-- Joy Direito -->
                            <div class="col-3 mt-2 mb-0">
                                <div class="row no-gutters">
                                    <!-- Controle-->
                                    <div class="col-sm-8 col-lg-7 col-xl-6 col-xxl-5 mb-0" style="text-align:right;">
                                        <div class="row align-items-center no-gutters bgCockiptiMarcha mt-2" style="margin-left:auto; margin-right:auto">
                                            <div class="col-sm-6">
                                                <span class="mb-0 mt-2  azul-luz2 luz2" id="bD1txt" style="position: relative; bottom: 18px; left: 2px;"></span>
                                            </div>
                                            <div class="col-sm-6">
                                                <span class="mb-0 mt-2  azul-luz2 luz2" id="bD2txt" style="position: relative; bottom: 18px; left: 16px;"></span>
                                            </div>
                                            <div class="col-sm-12 mb-2" style="text-align:center;">
                                                <span class="mb-0 azul-luz luz" id="bD3txt" style="position: relative; left: 20px; top: 8px;"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Gauge Y -->
                                    <div class="col-4 mb-0 mt-3" style="text-align:left;">
                                        <div class="row no-gutters justify-content-center mt-0">
                                            <div class="col-12 text-center" style="position: relative; top: 10px;"><span class="mb-0 mt-0 eixoFontSize"><i class="fa-solid fa-angle-up" id="bDCimatxt"></i></span></div>
                                            <div class="col-12 text-center" style="position: relative; top: 25px;"><span class="mb-0 mt-0 eixoFontSize text-center"><i class="fa-solid fa-angle-down" id="bDBaixotxt"></i></span></div>
                                        </div>
                                        <canvas class="img-fluid" id="gaugepadC4y" style="display: none;"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Final Col Cockpit -->

                    <!-- col teclado -->
                    <div class="col-6 mt-2 mb-0">
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
                                                <h6 class="mb-0 mt-2">AUTO</h6>
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

                                    <div class="col-3 align-items-center">
                                        <div class="card shadow-none" id="bEngineBadge">
                                            <div class="card shadow-none engEnd" style="border-radius: 50%; border-width: 3px; border-color:#4F4F4F" id="stast">
                                                <h6 class="text-center mt-2 mb-1" style="font-size: 10px; ">ENGINE</h6>
                                                <h6 class="text-center mb-1" style="font-size: 12px;">START</h6>
                                                <h6 class="text-center" style="font-size: 12px;">STOP</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Final col teclado -->
                </div>
            </div>
        </div>
    </div>


    <!-- JAVASCRIPT -->
    <script src="assets/libs/jquery/jquery.min.js"></script>

    <script src="assets/libs/metismenu/metisMenu.min.js"></script>

    <script src="assets/libs/peity/jquery.peity.min.js"></script>

    <script type="text/javascript" src="assets/js/dist/echarts.min.js"></script>

    <script type="module" src="assets/js/cockpitcami.js"></script>

</body>

</html>