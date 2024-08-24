<!doctype html>


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
        </style>
    </head>

    <body id="app" data-sidebar="dark">
        <header id="myHeader">
            <div class="card mb-0 mt-xl-0" style="border: 0; border-radius:0 0 85% 85% / 15%; transition: 0.5s; z-index: 100" id="cardHeader">
                <div class="row justify-content-center">
                    <!--Nome Maquina -->
                    <div class="col-xxl-3 col-xl-4 col-lg-4 col-sm-4 mt-0 mb-0" id="colNome">
                        <div class="row no-gutters" style="height:100%;">
                            <div class="col-4" style="position:relative; margin-top: auto; margin-bottom:auto">
                                <h3 class="text-center"><img src="" alt="" id="maquinaImg" height="35"></i></h3>
                            </div>
                            <div class="col-5" style="position:relative; margin-top: auto; margin-bottom:auto">
                                <h4 class="mt-1">
                                    <span id="cabecalhoMaquinaTexto">Maquina</span>
                                </h4>
                            </div>

                        </div>
                    </div>
                    <!--Final Nome Maquina -->

                    <!-- LOGO -->
                    <div class="col-xxl-6 col-xl-4 col-lg-4 col-sm-4 mt-2 mb-0 " id="colLogo">
                        <div class="row align-items-center mb-0">
                            <div class="col mb-0 mr-0">
                                <p class="text-center mr-0 mt-2">
                                    <img src="assets/images/logo-dark.png" alt="" height="35">
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--Final LOGO -->

                    <!-- botoes cabecalho direita -->
                    <div class="col-xxl-3 col-xl-4 col-lg-4 col-sm-4 mb-0" id="colBtn">
                        <div class="text-right mt-3">
                            <!--botao dowload-->
                            <a href="assets/js/down/DOD_MB4144.pdf" class="btn mt-n2 mr-4" download title="Manual Dashboard" style="display: true;">
                                <h2 class="mb-0">
                                    <i class="fa-solid fa-info"></i>
                                </h2>
                            </a>
                            <!--Final dowload-->
                            <!--botao tela cheia-->
                            <button id="telaCheia" type="button" class="btn mr-4" title="Tela Cheia" data-toggle="fullscreen">
                                <h2 class="mb-0">
                                    <i class="fa-solid fa-expand"></i>
                                </h2>
                            </button>
                            <!--Final botao tela cheia-->

                            <!--menu layout-->
                            <button id="menuLayout" type="button" class="btn waves-effect right-bar-toggle mt-n1 mr-4" title="Temas">
                                <h2 class="mb-0"><i class="fa-solid fa-moon" id="mode-icon"></i></h2>
                            </button>
                            <!--Final menu layout-->

                            <!--menu opcoes-->
                            <button id="menuOption" type="button" class="btn waves-effect right-bar-inc-toggle ml-n4" style="display: none;" title="Opções">
                                <h2 class="mb-2 mr-2"><i class="fa-solid fa-ellipsis"></i></h2>
                            </button>
                            <!--Final menu opcoes-->
                        </div>
                        <!--Final navbar-->
                    </div>
                    <!-- botoes cabecalho direita -->
                </div>
            </div>
        </header>

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <main>
            <div class="card baseLayout ">
                <div class="row no-gutters layout align-items-center" style="min-width: 800px;" dir="ltr" id="Rtl">
                    <!--Coluna esquerda-->
                    <div class="col-xl-12 col-xxl-2">
                        <div class="base" id="cardEsquerda">
                            <div class="row justify-content-center" dir="ltr" style="position: relative; margin-left:auto; margin-right:auto; transition: 1.5s;" id="rowesq">
                                <div class="alertboxInc" style="display: none;" id="alertaSegInc">
                                    <h4 class="text-danger" id="msgConInc">ALERTA INCLINÔMETRO</h4>
                                </div>

                                <div class="col-xxl-12 col-xl-2 col-lg-2 col-sm-2 text-center mt-xxl-n2 mt-xl-4 mt-lg-4 mt-sm-4 mb-1">
                                    <img src="assets/images/caminhao/testeX2.png" alt="" height="115" id="acliveImgX" style="position:relative;">
                                </div>

                                <div class="col-xxl-12 col-xl-7 col-lg-7 col-sm-7 mb-1">
                                    <div class="bg-transparent" id="gaugeaclive" style="position: relative; height: 310px; width: 200px; top: 15px;
                                     margin-left:auto; margin-right:auto; z-index: 99; display: none"> </div>
                                    <div class="bg-transparent" id="gaugeacliveSm" style="position: relative; height: 195px; width: 500px; top: -10px; left: -40px;
                                    margin-left:auto; margin-right:auto; z-index: 99; display: none"></div>

                                    <div class="bg-transparent p-1 tooltip-black" style="position: relative; height: 110px; width: 100%; top:-330px; z-index: 100;" id="tooltipTransv">
                                        <span class="tooltiptext-black mt-n5" style="z-index: 100;">
                                            <h5> Inclinação Eixo Transversal </h5>
                                        </span>
                                    </div>

                                    <span class="bg-transparent p-1 tooltip-black" style="position: relative; height: 110px; width: 100%; z-index: 100;" id="tooltipLongit">
                                        <span class="tooltiptext-black" style="z-index: 100;">
                                            <h5> Inclinação Eixo Longitudinal </h5>
                                        </span>
                                    </span>

                                </div>

                                <div class="col-xxl-12 col-xl-3 col-lg-3 col-sm-3 mb-0" style="position: relative; margin-top: -130px; top: 10px;" id="colAcliveImgY">
                                    <img src="assets/images/caminhao/testeX1.png" alt="" height="70" id="acliveImgY" style="position:relative;">
                                </div>

                            </div>
                        </div>
                        <!--Final Card Base-->
                    </div>
                    <!--Final Coluna esquerda-->

                    <!--Coluna Central-->
                    <div class="col-xl-12 col-xxl-8 col-sm-12 colCentral mt-xxl-0 mt-xl-1 mt-lg-1 mt-sm-1" id="colCentro">
                        <div class="base" dir="ltr">
                            <!-- gauges -->
                            <div class="row justify-content-center no-gutters align-items-center" style="width: 800px; height: 405px; position: relative; margin-left:auto; margin-right:auto; margin-top: -57px; 
                           transition: 1.5s; border-radius: 33%;" id="rowGauges">
                                <div class="col-12" style="position:relative; height: 700px; z-index:99; margin-top:-120px" id="gauges">
                                </div>
                            </div>

                            <!-- inclinometro msg -->
                            <div class="alertbox" style="display: none;" id="alertaSeg">
                                <h1 class="text-warning" style="position:relative; left: 10px;" id="msgCon">DASHBOARD NÃO ESTÁ RESPONDENDO</h1>
                                <div class="load mt-n3" style="display: none;" id="loading">
                                    <div class="gear one"><svg id="blue" viewbox="0 0 100 100" fill="#86c2d1">
                                            <path d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6              c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3              l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9              c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"></path>
                                        </svg></div>
                                    <div class="gear two"><svg id="pink" viewbox="0 0 100 100" fill="#79abb8">
                                            <path d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6              c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3              l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9              c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"></path>
                                        </svg></div>
                                    <div class="gear three"><svg id="yellow" viewbox="0 0 100 100" fill="#597e87">
                                            <path d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6              c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3              l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9              c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"></path>
                                        </svg></div>
                                    <div class="lil-circle"></div><svg class="blur-circle">
                                        <filter id="blur">
                                            <fegaussianblur in="SourceGraphic" stddeviation="13"></fegaussianblur>
                                        </filter>
                                        <circle cx="15" cy="15" r="6" fill="transparent" stroke="transparent" stroke-width="40" filter="url(#blur)"></circle>
                                    </svg>
                                </div>
                            </div>

                            <!-- Info -->
                            <div class="row justify-content-center no-gutters align-items-center bg-transparent mb-2" style="width: 800px; position: relative; margin-left:auto; margin-right:auto; margin-top: -90px" id="infoCenter">

                                <!-- tooltip e marcha -->
                                <div class="row justify-content-center" style="position: relative; margin-top: -150px; width: 800px;">
                                    <!-- Icone Pressao Ar -->
                                    <div class="col-4">
                                        <span class="bg-transparent p-3 tooltip-black" style="position: relative; width: 70px; height: 70px; margin-left:50px; margin-top: 35px; z-index: 100;">
                                            <img src="assets/images/infoImg/airpresB.png" alt="" height="30" id="anchorBar">
                                            <span class="tooltiptext-black" style="z-index: 100;">
                                                <h5>Pressão do Ar</h5>
                                            </span>
                                        </span>
                                    </div>

                                    <div class="col-4 text-center" style="height: 160px;">
                                        <h3 class="pt-2 tooltip-black" style="position: relative; margin-top: 145px; z-index:100; right:9.5%">
                                            <span class="ml-5 mr-0 text-right sizeT" id="textMarchaSen" style="position: relative; z-index: 10;">N</span>
                                            <span class="ml-0 mb-2 text-left align-top" id="textMarcha" style="position: relative; z-index: 10;"></span>
                                            <span class="tooltiptext-black" style="z-index: 100; left: 65px;">
                                                <h5>Marcha Ativa</h5>
                                            </span>
                                        </h3>

                                        <!-- RPM crítico -->
                                        <div class="bg-danger" style="position: relative; margin-top: -302px; left: -50px; width: 345px; height: 345px; border-radius: 100%; visibility: hidden" id="fundoRPM"></div>

                                        <span class="bg-transparent p-1 tooltip-black" style="position: relative; width: 200px; height: 50px; margin-left:-10px; z-index: 100; top: -275px">
                                            <span class="tooltiptext-black" style="z-index: 100;">
                                                <h5>RPM do Motor</h5>
                                            </span>
                                        </span>

                                        <span class="bg-transparent p-1 tooltip-black" style="position: relative; width: 200px; height: 100px; margin-left: -10px; top: -260px; z-index: 100;">
                                            <span class="tooltiptext-black" style="z-index: 100;">
                                                <h5>Velocímetro</h5>
                                            </span>
                                        </span>
                                    </div>

                                    <div class="col-4">
                                        <span class="bg-transparent p-3 tooltip-black" style="position: relative; width: 100px; height: 100px; margin-left: 92px; margin-top: -30px; z-index: 100;">
                                            <span class="tooltiptext-black" style="z-index: 100;">
                                                <h5>Nível do Combustível</h5>
                                            </span>
                                        </span>

                                        <span class="bg-transparent pt-3 tooltip-black" style="position: relative; width: 100px; height: 100px; margin-left:92px; margin-top: 100px; z-index: 100;">
                                            <span class="tooltiptext-black" style="z-index: 100;">
                                                <h5>Temperatura do Motor</h5>
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <!-- BTNs info -->
                                <div class="row justify-content-center" style="position: relative; margin-top: -80px; width: 800px;" id="rowbtn">
                                    <!-- Tomada de Força -->
                                    <div class="col-1 mt-5 mb-2" style="height: 50px; width: 60px;">
                                        <h1 class=" mt-xl-1 mt-sm-0 tooltip-warning ml-n2" id="bTFtooltip" style="z-index: 100;">
                                            <span class="border border-warning radius tooltip-warning" style="text-align:center; height: 40px; width: 60px;" id="bTFBadge">
                                                <span class="tooltiptext-warning" id="toltipjs" style="z-index: 91;">
                                                    <h5> Tomada de Força </h5>
                                                </span>
                                                <img src="assets/images/infoImg/tforceA1.png" alt="" height="35" style="z-index: 100;" id="bTFImg">
                                            </span>
                                        </h1>
                                    </div>

                                    <!-- freio aux -->
                                    <div class="col-1" style="height: 50px; display:true"></div>
                                    <div class="col-1 mt-5 mb-2" style="height: 50px;  display:true">
                                        <h1 class="text-center mt-xxl-1 mt-sm-0 tooltip-warning ml-n2" style="z-index: 100;">
                                            <span class="border border-warning radius tooltip-warning" style="text-align:center; height: 40px; width: 60px; display: block; margin-left:auto; margin-right:auto" id="bFreioAuxBadge">
                                                <span class="tooltiptext-warning">
                                                    <h5> Freio Auxiliar</h5>
                                                </span>
                                                <img src="assets/images/infoImg/freioaux.png" alt="" height="35" id="bFreioAuxImg">
                                            </span>
                                        </h1>
                                    </div>

                                    <!-- freio aux nivel-->
                                    <div class="col-1" style="height: 50px; display:none"></div>
                                    <div class="col-1 mt-5 mb-2" style="height: 50px;  display:none">
                                        <h1 class="text-center mt-xl-1 mt-sm-0 tooltip-warning ml-n2" style="z-index: 100;">
                                            <span class="border border-warning radius tooltip-warning " style="text-align:center; height: 40px; width: 60px; display: block; margin-left:auto; margin-right:auto" id="bFreioAuxNivelBadge">
                                                <span class="tooltiptext-warning">
                                                    <h5> Nível Freio Auxiliar</h5>
                                                </span>
                                                <img src="assets/images/infoImg/freioaux.png" alt="" height="24" style="position: relative; z-index: 100; top: 10px; left: -10px;" id="bFreioAuxNivelImg">
                                                <span class="ml-4 text-warning sizeT-aux" style="position: relative; z-index: 100; top: -40px; left: 3px;" id="freioAuxNi">. . .</span>
                                            </span>

                                        </h1>
                                    </div>

                                    <!-- Buzina -->
                                    <div class="col-1" style="height: 50px; display:none"></div>
                                    <div class="col-1- mt-5 mb-2" style="height: 50px; display:none">
                                        <h1 class="text-center mt-xl-1 mt-sm-0 tooltip-info" style="z-index: 100; ">
                                            <span class="border border-white radius tooltip-info" style="text-align:center; height: 40px; width: 60px; display: block; margin-left:auto; margin-right:auto; " id="bBuzinaBadge">
                                                <span class="tooltiptext-info" style="z-index: 91;">
                                                    <h5> Buzina </h5>
                                                </span>
                                                <i class="fa-solid fa-volume-high"></i>
                                            </span>
                                        </h1>
                                    </div>

                                    <!-- freio Estacionario -->
                                    <div class="col-1" style="height: 50px; display:true"></div>
                                    <div class="col-1 mt-5 mb-2" style="height: 50px;">
                                        <h1 class="text-center mt-xl-1 mt-sm-0 tooltip-danger ml-n2" style="z-index: 100;">
                                            <span class="border border-danger radius tooltip-danger" style="text-align:center; height: 40px; width: 60px; display: block; margin-left:auto; margin-right:auto" id="bFreioEstBadge">
                                                <span class="tooltiptext-danger" style="z-index: 91;">
                                                    <h5> Freio Estacionário </h5>
                                                </span>
                                                <img src="assets/images/infoImg/parkb.png" alt="" height="35" id="bFreioEstImg">
                                            </span>
                                        </h1>
                                    </div>
                                </div>

                                <!-- quadro info -->
                                <div class="row justify-content-center no-gutters align-items-center" style="width: 800px;">
                                    <!-- Bateria -->
                                    <div class="col-4 mt-n1" style="height: 150px; border-style: inset; border-right-width:0px">
                                        <div class="row no-gutters justify-content-center align-items-center" style="height: 150px;" dir="ltr">
                                            <div class="col-2" style="display:none"></div>
                                            <div class="col-2 mt-1 text-center text-info" style="display:none">
                                                <h2 class="mt-2 mr-3"><i class="fa-solid fa-gas-pump"></i></h2>
                                            </div>
                                            <div class="col-8" style="display:none">
                                                <div class="row justify-content-center align-items-center">
                                                    <div class="col-12 text-center">
                                                        <h5>Adblue</h5>
                                                    </div>
                                                    <div class="col-1 border border-info mb-0 ml-1 mr-2" id="bAdbluelBadge1" style="width: 3px; height: 8px"></div>
                                                    <div class="col-xl-1 col-sm-1 border border-info mb-0 mr-2" id="bAdbluelBadge2" style="width: 3px; height: 8px"></div>
                                                    <div class="col-xl-1 col-sm-1 border border-info mb-0 mr-2" id="bAdbluelBadge3" style="width: 3px; height: 8px"></div>
                                                    <div class="col-xl-1 col-sm-1 border border-info mb-0 mr-2" id="bAdbluelBadge4" style="width: 3px; height: 8px"></div>
                                                    <div class="col-xl-1 col-sm-1 border border-info mb-0" id="bAdbluelBadge5" style="width: 3px; height: 8px"></div>
                                                </div>
                                            </div>
                                            <span class="bg-transparent  p-3 tooltip-info" style="position: relative; width: 220px; height: 50px; margin-left:40px; top: -40px; z-index: 100; display:none">
                                                <span class="tooltiptext-info" style="z-index: 100;">
                                                    <h5>Nível Arla 32</h5>
                                                </span>
                                            </span>

                                            <div class="col-2" style="display:none"></div>
                                            <div class="col-2 mt-1" style="display:none">
                                                <img src="assets/images/infoImg/bateriaA2.ico" class="ml-xl-0 ml-sm-1" alt="" height="40">
                                            </div>
                                            <div class="col-8 mb-0 mt-3" style="display:none">
                                                <h5 class="text-xl-left text-sm-left mb-0 dirB" id="textBat">45.5 v</h5>
                                            </div>

                                            <div class="col-2 mt-5"></div>
                                            <div class="col-2 text-center text-warning mt-5">
                                                <h3 class="mt-2 mr-4"> <i class="fa-solid fa-gauge"></i></h3>
                                            </div>
                                            <div class="col-8 mt-5">
                                                <h5 class="mr-3 mb-0 dirB" id="textHodometro">7425.5 km</h5>
                                            </div>
                                            <span class="bg-transparent  p-1 tooltip-black" style="position: relative; width: 220px; height: 50px; margin-left:20px; top: -60px; z-index: 100;">
                                                <span class="tooltiptext-black" style="z-index: 100;">
                                                    <h5>Hodômetro</h5>
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    <!-- Gauge Direção -->
                                    <div class="col-4 text-center mt-n1" style="position: relative;height: 150px; border-style: inset; border-right-width:0px; border-left-width:0px">
                                        <div class="rotDir2 rounded-circle mt-n2" id="gaugedirecao" style="position: relative; height: 160px; width: 160px; position: relative; margin-left:auto; margin-right:auto"></div>
                                        <span class="bg-transparent  p-3 tooltip-info" style="position: relative; width: 100px; height: 100px; top: -130px; z-index: 100;">
                                            <span class="tooltiptext-info" style="z-index: 100;">
                                                <h5>Direção</h5>
                                            </span>
                                        </span>
                                    </div>
                                    <img src="assets/images/caminhao/volante.png" alt="" height="58" style="position: absolute; margin-top: -3px">

                                    <!-- Marca e msg inclinometro -->
                                    <div class="col-4 mt-n1" style="height: 150px; border-style: inset; border-left-width:0px">
                                        <div class="row no-gutters justify-content-center align-items-center" style="height: 150px;" dir="ltr">
                                            <div class="col-12">
                                                <h5 class="text-center" id="txtoperacoes">OPERAÇÃO</h5>
                                            </div>
                                            <div class="col-12 mt-1">
                                                <h5 class="text-center" id="txtentradas">ENTRADA</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Final Card base -->
                    </div>
                    <!--Final Coluna Central-->

                    <!--Coluna direita-->
                    <div class="col-xl-12 col-xxl-2" id="colDireita">
                        <div class="base" id="cardDireita" dir="ltr">
                            <div class="row no-gutters justify-content-center" style="width: 200px; position: relative; margin-left:auto; margin-right:auto;" id="rowdir">
                                <div class="col-12 mt-3" style="z-index: 100;">
                                    <div class="card bg-transparent border-0 shadow-none" style="height: 20px;">
                                        <div class="row no-gutters justify-content-center mt-n5" style="display: none; " id="rowMetros">
                                            <div class="col-2">
                                                <div class="row no-gutters justify-content-center">
                                                    <div class="col-11 " style="height: 12px;  border-radius: 70% 35% 70% 70% / 60%; transform: rotate(320deg);
                                                     margin-left:-30px; margin-top:98px">
                                                        <h6 class="text-success text-center" id="d1dir"> 99,9 m </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-2 ml-1 mr-1">
                                                <div class="row no-gutters justify-content-center">
                                                    <div class="col-11" style="border-radius: 70% 70% 70% 70% / 60%; transform: rotate(337deg);
                                                    margin-left:-35px; margin-top:70px">
                                                        <h6 class="text-success text-center" style="size: 5;" id="d2dir">99,9 m</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <div class="row no-gutters justify-content-center">
                                                    <div class="col-11" style="height: 12px; border-radius: 70% 70% 70% 70% / 60%;
                                                    margin-left:5px; margin-top:50px">
                                                        <h6 class="text-success text-center" id="d3dir"> 99,9 m </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-2 ml-1 mr-1">
                                                <div class="row no-gutters justify-content-center">
                                                    <div class="col-11" style="height: 12px; border-radius: 70% 70% 70% 70% / 60%; transform: rotate(22.5deg);
                                                    margin-left:60px; margin-top:75px">
                                                        <h6 class="text-success text-center" id="d4dir"> 99,9 m </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <div class="row no-gutters justify-content-center" id="1-5">
                                                    <div class="col-11" style="height: 12px; border-radius: 35% 70% 70% 70% / 60%; transform: rotate(45deg);
                                                     margin-left:45px; margin-top: 95px">
                                                        <h6 class="text-success text-center mt-1" id="d5dir"> 99,9 m </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-1 text-center mt-n5" style="position:relative; margin-left: 120px; left: -35px; top: -28px; transition: 0.5s; transform: rotate(90deg); display:none" id="parkImgSm">
                                    <img src="assets/images/caminhao/testeX3.png" alt="" height="160">
                                </div>

                                <div class="col-xxl-12 col-xl-4 col-lg-4 col-sm-4 mt-xxl-n2 mt-xl-n4 mt-lg-n4 mt-sm-n4 text-center" style="position:relative; height: 185px;" id="radarFrente">
                                </div>

                                <div class="col-1 mt-n4" style="display: none; z-index: 90;" id="colMetros">
                                    <div class="card bg-transparent border-0 shadow-none mt-n4" style="right: 75px;">
                                        <div class="row no-gutters justify-content-center">
                                            <div class="col-11 mt-n2 mr-5" style="height: 22px;">
                                                <div class="row no-gutters justify-content-center" id="1-1">
                                                    <div class="col-11">
                                                        <h6 class="text-success text-center mt-1" id="d1"> 99,9 m </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-11 mt-4 mb-2 ml-2" style="height: 22px;">
                                                <div class="row no-gutters justify-content-center" id="1-2d">
                                                    <div class="col-11">
                                                        <h6 class="text-success text-center mt-0" style="size: 5;" id="d2">99,9 m</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-11 mt-4 mb-2 ml-3" style="height: 22px;">
                                                <div class="row no-gutters justify-content-center" id="1-3">
                                                    <div class="col-11">
                                                        <h6 class="text-success text-center mt-0" id="d3"> 99,9 m </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-11 mt-3 mb-2 ml-2" style="height: 22px;">
                                                <div class="row no-gutters justify-content-center" id="1-4">
                                                    <div class="col-11">
                                                        <h6 class="text-success text-center mt-0" id="d4"> 99,9 m </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-11 mt-3 mr-4" style="height: 22px;">
                                                <div class="row no-gutters justify-content-center" id="1-5">
                                                    <div class="col-11">
                                                        <h6 class="text-success text-center mt-0" id="d5"> 99,9 m </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 text-center mt-n4 ml-1 " style="transition: 0.5s; display:none;" id="parkImg">
                                    <img src="assets/images/caminhao/testeX3.png" alt="" height="140">
                                </div>
                            </div>
                        </div>
                        <!--Final Coluna direita-->
                    </div>
                </div>
                <!--Final main row-->
        </main>
        <!--Final main-->

        <footer id="myFooter">
            <div class="card" style="border: 0; transition: 0.5s;" id="cardFooter">
                <div class="row  mb-0  align-items-center">
                    <!-- Col Cockpit -->
                    <div class="col-5 mt-2">
                        <div class="row no-gutters ml-3" id="cockpit1" style="display: none;">
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
                                                <span class="azul-luz luz mt-1" id="bE1txt" style="position: relative; left: 20px;"></span>
                                                <span class="azul-luz luz" id="bE2txt" style="position: relative; left: 30px; top: 1px;"></span>
                                                <span class="azul-luz luz" id="bE3txt" style="position: relative; left: 20px; top: 1px;"></span>
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
                    <div class="col-6 mt-0">
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

                                    <div class="col-3 radiusDireito align-items-center">
                                        <div class="card shadow-none eng bg-transparent" id="bEngineBadge">
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
                    <!--Final col teclado -->

                    <!-- col Conecta -->
                    <div class="col-1 text-right">
                        <a id="bConectar" class="btn disabled" role="button" style="margin-top: 10%; margin-left: -35%;">
                            <button class="btn border border-white btnComunicacao rounded-circle mb-0 mt-0" type="button" id="bConectarBadge">
                                <h1 class="mb-0 mt-0"><i class="fa-solid fa-key"></i></h1>
                            </button>
                        </a>
                        <span class="tooltip-chave" style="position: relative; width: 110px; height: 75px; left: 20px; margin-bottom:-50px; 
                        margin-top: -50px; top: -60px; z-index: 1000;" id="toolchave">
                            <span class="tooltiptext-chave" style="z-index: 1000;">
                                <h5>Status Pós-chave</h5>
                            </span>
                        </span>
                    </div>
                    <!--Final col Conecta -->
                </div>
            </div>
        </footer>

        <!-- Right Sidebar -->
        <div class="right-bar border-info" style="border-left: 1px solid; border-top: 2px solid; border-bottom: 1px solid;">
            <div data-simplebar class="h-100">
                <div class="rightbar-title px-3 py-4 mt-3">
                    <a href="javascript:void(0);" class="right-bar-toggle float-right">
                        <i class="fa-solid fa-xmark"></i>
                    </a>
                    <h4 class="mt-4">DASH 2.0.2</h4>
                </div>

                <!-- Layouts -->
                <h5 class="text-center mb-4">Escolha o Modo do Tema</h5>

                <form class="text-center">
                    <a href="javascript:void(0);" class="right-bar-toggle"></a>
                    <label for="dark-mode-switch" id="dark-mode-switch-label">

                        <input type="radio" id="dark-mode-switch" name="tema" class="right-bar-toggle float-right" value="option10" checked>
                        <img src="assets/images/layouts/layout-2.jpg" class="img-fluid img-thumbnail" id="layoutDark" alt="">

                    </label> <br>
                    <label for="light-mode-switch" id="light-mode-switch-label">
                        <input type="radio" id="light-mode-switch" name="tema" class="right-bar-toggle float-right" value="option5">
                        <img src="assets/images/layouts/layout-1.jpg" class="img-fluid img-thumbnail" id="layoutLight" alt="">
                    </label>
                </form>

                <div class="row mt-4" id="rowRTL" style="display: none">
                    <div class="col">
                        <h5 class="mb-2 text-center mt-4">Modo RTL:</h5>
                        <h6 class="text-center mb-4">
                            <div class="form-check form-check-inline border border-warning radius mt-2" style="width: 107px;" id="ori0">
                                <input class="form-check-input right-bar-toggle" type="radio" name="orientacao" id="inlineRadio1" value="option1" checked>
                                <label class="form-check-label" for="inlineRadio1" style="right:auto; left:auto; position:relative"> Direito</label>
                            </div>

                            <div class="form-check form-check-inline border border-warning radius ml-1" style="width: 107px;" id="ori1">
                                <input class="form-check-input text-center right-bar-toggle" type="radio" name="orientacao" id="inlineRadio2" value="option2">
                                <label class="form-check-label text-center" for="inlineRadio2" style="right:auto; left:auto; position:relative">Esquerdo</label>
                            </div>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <!--Final Right Sidebar-->

        <!-- Right Sidebar Opçoes-->
        <div class="right-bar-inc border-info" style="border-left: 1px solid; border-top: 2px solid; border-bottom: 1px solid;">
            <div data-simplebar class="h-100">
                <div class="rightbar-title px-3 py-4 mt-3">
                    <a href="javascript:void(0);" class="right-bar-inc-toggle float-right">
                        <i class="fa-solid fa-xmark"></i>
                    </a>
                    <h4 class="mt-4">Opções</h4>
                </div>

                <div class="row mt-n1">
                    <div class="col">
                        <h5 class="mb-2 text-center mt-4">Valor Máximo Inclinômetro</h5>
                        <form class="text-center mb-4">
                            <div class="form-group text-left">
                                <div class="input-group">
                                    <input type="number" class="form-control" id="eixoXset" aria-describedby="eixoX-example" aria-describedby="eixoX-msg" placeholder="Eixo X">
                                    <div class="input-group-append">
                                        <span class="input-group-text mr-2" id="eixoX-example">4</span>
                                    </div>
                                </div>
                                <small class="form-text text-muted ml-2" id="eixoX-msg" style="display: none;">
                                    <span class="text-danger mb-n4"><i class="fa-solid fa-xmark"></i></span> Valor Inválido! <br>
                                    Digite um valor entre 1-8.<span class="text-success mb-n4"><i class="fa-solid fa-check"></i></span>
                                </small>
                            </div>
                            <div class="form-group text-left">
                                <div class="input-group">
                                    <input type="number" class="form-control" id="eixoYset" aria-describedby="eixoY-example" aria-describedby="eixoY-msg" placeholder="Eixo Y">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="eixoY-example">15</span>
                                    </div>
                                </div>
                                <small class="form-text text-muted ml-2" id="eixoY-msg" style="display: none;">
                                    <span class="text-danger mb-n4"><i class="fa-solid fa-xmark"></i></span> Valor Inválido! <br>
                                    Digite um valor entre 1-20.<span class="text-success mb-n4"><i class="fa-solid fa-check"></i></span>
                                </small>
                            </div>
                            <button type="button" class="btn btn-warning raidus mb-2" style="width: 160px;" id="btnIncMax">
                                <span class="mb-n4 mr-2" id="btnIncMaxSpan"><i class="fa-solid fa-pen-to-square" id="btnIncMaxIcon"></i></span>Submiter Valores
                            </button>
                            <small class="form-text text-muted ml-2" id="btnIncMax-fail" style="display: none;">
                                Verefique os valores dos campos marcados: <span class="text-danger mb-n4"><i class="fa-solid fa-xmark"></i></span>
                            </small>
                            <small class="form-text text-muted ml-2" id="btnIncMax-success" style="display: none;">
                                Valores submetidos com sucesso! <span class="text-sucess mb-n4 ml-2"><i class="fa-solid fa-check"></i></span>
                            </small>
                        </form>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col">
                        <h5 class="mb-2 text-center mt-4">Inverter Valores Inclinômetro</h5>
                        <h6 class="text-center mb-4 ml-1">
                            <div class="form-check form-check-inline border border-warning radius" style="width: 80px;" id="ii0">
                                <input class="form-check-input text-center right-bar-inc-toggle" type="radio" name="inclinometro" id="inlineRadio3" value="option3" checked>
                                <label class="form-check-label text-center" for="inlineRadio3">Não</label>
                            </div>
                            <div class="form-check form-check-inline border border-warning radius" style="width: 80px;" id="ii1">
                                <input class="form-check-input text-center right-bar-inc-toggle" type="radio" name="inclinometro" id="inlineRadio4" value="option4">
                                <label class="form-check-label text-center" for="inlineRadio4">Sim</label>
                            </div>
                        </h6>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col">
                        <h5 class="mb-2 text-center mt-4">Zerar Inclinômetro</h5>
                        <form class="text-center">
                            <button type="submit" class="btn btn-warning raidus " style="width: 160px;">
                                <i class="fa-solid fa-rotate"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!--Final Right Sidebar-->

        <!-- JAVASCRIPT -->
        <script src="assets/libs/jquery/jquery.min.js"></script>

        <script src="assets/libs/metismenu/metisMenu.min.js"></script>

        <script src="assets/libs/peity/jquery.peity.min.js"></script>

        <script type="text/javascript" src="assets/js/dist/echarts.min.js"></script>

        <script type="module" src="assets/js/gaiznt.js"></script>

        <script src="assets/js/app.js"></script>
    </body>



    </html>