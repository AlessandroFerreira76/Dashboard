
var optiongauges;
var optionradar;
var optionradarD;
var optionradarDsm;
var optiongaugesAclive;
var optiongaugesAcliveSm;
var progressFuel = 0;
var progressTempMotor = 0;
var progressTempHyd = 0;
var progressAr = 0;

var statIncl = 0;
var acli = 0;
var acli2 = 0;

var optiondirecao;
const _animationDuration = 250;
const _animationDurationUpdate = 250;
const _animationEasingUpdate = 'quarticOutIn';
const _valOnRadianMax = 100;
const _outerRadius = 65;
const _innerRadius = 60;
const _pointerInnerRadius = 15;
const _insidePanelRadius = 35;
const _currentDataIndex = 0;
const _panelImageURL = 'assets/js/dist/img/custom-gauge-panel.png';
const maxDir1 = 2250;
const maxDir2 = 1820;

class Gauge {
	constructor(gaugekmh, gaugerpm, /* gaugefuel, */ gaugepar, gaugetempmotor, gaugepoleo, tema, gaugedirecao, gauges) {
		this.gauges = gauges;
		this.gaugekmh = gaugekmh;
		this.gaugepoleo = gaugepoleo;
		this.gaugerpm = gaugerpm;
		//this.gaugefuel = gaugefuel;
		this.gaugepar = gaugepar;
		this.gaugetempmotor = gaugetempmotor;
		this.gaugepoleo = gaugepoleo;
		this.tema = tema;
	}

	desenhaGauge() {
		this.tema = document.getElementsByName("tema");

		// Gauge Direção
		var domdirecao = document.getElementById('gaugedirecao');
		this.gaugedirecao = echarts.init(domdirecao, null, {
			renderer: 'canvas',
			useDirtyRect: false
		});
		function renderItem(params, api) {
			var valOnRadian = api.value(1);
			var coords = api.coord([api.value(0), valOnRadian]);
			var polarEndRadian = coords[3];
			var imageStyle = {
				image: _panelImageURL,
				x: params.coordSys.cx - _outerRadius,
				y: params.coordSys.cy - _outerRadius,
				width: _outerRadius * 2,
				height: _outerRadius * 2
			};
			return {
				type: 'group',
				children: [
					{
						type: 'image',
						style: imageStyle,
						clipPath: {
							type: 'sector',
							shape: {
								cx: params.coordSys.cx,
								cy: params.coordSys.cy,
								r: _outerRadius,
								r0: _innerRadius,
								startAngle: 0,
								endAngle: -polarEndRadian,
								transition: 'endAngle',
								enterFrom: { endAngle: 0 }
							}
						}
					},
					{
						type: 'image',
						style: imageStyle,
						clipPath: {
							type: 'polygon',
							shape: {
								points: makePionterPoints(params, polarEndRadian)
							},
							extra: {
								polarEndRadian: polarEndRadian,
								transition: 'polarEndRadian',
								enterFrom: { polarEndRadian: 0 }
							},
							during: function (apiDuring) {
								apiDuring.setShape(
									'points',
									makePionterPoints(params, apiDuring.getExtra('polarEndRadian'))
								);
							}
						}
					},
					{
						type: 'circle',
						shape: {
							cx: params.coordSys.cx,
							cy: params.coordSys.cy,
							r: _insidePanelRadius
						},
						style: {
							fill: '#343a40',
							shadowBlur: 50,
							shadowOffsetX: 10,
							shadowOffsetY: 0,
							shadowColor: '#6c757d'
						}
					},
					{
						type: 'text',
						extra: {
							valOnRadian: valOnRadian,
							transition: 'valOnRadian',
							enterFrom: { valOnRadian: 0 }
						},
						style: {
							text: makeText(valOnRadian),
							fontSize: 50,
							fontWeight: 700,
							x: params.coordSys.cx,
							y: params.coordSys.cy,
							fill: '#6c757d',
							align: 'center',
							verticalAlign: 'middle',
							enterFrom: { opacity: 0 }
						},
						during: function (apiDuring) {
							apiDuring.setStyle(
								'text',
								makeText(apiDuring.getExtra('valOnRadian'))
							);
						}
					}
				]
			};
		}

		function convertToPolarPoint(renderItemParams, radius, radian) {
			return [
				Math.cos(radian) * radius + renderItemParams.coordSys.cx,
				-Math.sin(radian) * radius + renderItemParams.coordSys.cy
			];
		}

		function makePionterPoints(renderItemParams, polarEndRadian) {
			return [
				convertToPolarPoint(renderItemParams, _outerRadius, polarEndRadian),
				convertToPolarPoint(
					renderItemParams,
					_outerRadius,
					polarEndRadian + Math.PI * 0.03
				),
				convertToPolarPoint(renderItemParams, _pointerInnerRadius, polarEndRadian)
			];
		}
		function makeText(valOnRadian) {

			return '';
		}

		optiondirecao = {
			animationEasing: _animationEasingUpdate,
			animationDuration: _animationDuration,
			animationDurationUpdate: _animationDurationUpdate,
			animationEasingUpdate: _animationEasingUpdate,
			dataset: {
				source: [[1, 0]]
			},
			angleAxis: {
				type: 'value',
				startAngle: 0,
				show: false,
				min: 0,
				max: _valOnRadianMax
			},
			radiusAxis: {
				type: 'value',
				show: false
			},
			polar: {},
			series: [
				{
					type: 'custom',
					coordinateSystem: 'polar',
					renderItem: renderItem
				}
			]
		};

		if (optiondirecao && typeof optiondirecao === 'object') {
			this.gaugedirecao.setOption(optiondirecao);
		}
		window.addEventListener('resize', this.gaugedirecao.resize);

		var domgauges = document.getElementById('gauges');
		this.gauges = echarts.init(domgauges, null, {
			renderer: 'canvas',
			useDirtyRect: false
		});

		optiongauges = {
			tooltip: {
				show: false
			},
			series: [

				//MOTOR °C
				{
					name: 'Temperatua do Motor',
					type: 'gauge',
					center: ['86%', '80%'],
					radius: '30%',
					startAngle: 135,
					endAngle: 45,
					min: 0,
					max: 100,
					splitNumber: 2,
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false

					},
					splitLine: {
						show: false
					},
					anchor: {
						show: true,
						itemStyle: {},
						itemStyle: {
							color: '#fff'
						},
						size: 40,
						offsetCenter: [0, '-50%'],
						icon: 'path://M-34.1-1.1L-34.1-1.1c0-0.3-0.3-0.6-0.6-0.6h-3.6v-1.5c0-0.5-0.2-0.9-0.6-1.1s-0.9-0.2-1.3,0c-0.4,0.2-0.6,0.7-0.6,1.1V7.9c0,0,0,0.1,0,0.1c-0.8,0.5-1.2,1.5-0.9,2.5c0.3,0.9,1.1,1.6,2.1,1.6c1,0,1.8-0.6,2.1-1.5c0.3-0.9,0-1.9-0.8-2.5V6.3h3.5c0.4,0,0.7-0.3,0.7-0.7l0,0c0-0.4-0.3-0.7-0.7-0.7h-3.5V2.9h3.5c0.4,0,0.7-0.3,0.7-0.7l0,0c0-0.4-0.3-0.7-0.7-0.7h-3.5v-2.1h3.6C-34.4-0.5-34.1-0.8-34.1-1.1z M-44.9,11.6c-0.7,0-1.4-0.2-2-0.6c-0.4-0.3-0.9-0.4-1.4-0.4c-0.4,0-0.9,0.2-1.2,0.4c-0.4,0.2-1.4-0.9-0.9-1.3c0.6-0.4,1.3-0.6,2-0.7c0.8,0,1.5,0.2,2.2,0.5c0.4,0.3,0.9,0.4,1.3,0.4c0.6,0,1.1-0.2,1.5-0.6s1.6,0.7,0.9,1.3S-44,11.6-44.9,11.6L-44.9,11.6z M-34.3,11.6c-0.7,0-1.4-0.3-2-0.7c-0.6-0.4,0.5-1.6,0.9-1.3s0.8,0.4,1.2,0.4c0.5,0,1-0.1,1.4-0.4c0.6-0.3,1.3-0.5,2-0.6h0c0.9,0,1.7,0.3,2.4,0.9c0.7,0.5-0.5,1.6-0.9,1.3c-0.4-0.3-1-0.6-1.5-0.6h0c-0.5,0-0.9,0.2-1.3,0.4c-0.6,0.3-1.3,0.5-2,0.6H-34.3z M-33.5,16.3c-0.7,0-1.4-0.3-1.9-0.8c-0.4-0.3-0.6-0.5-1-0.5c-0.4,0-0.7,0.2-1,0.4c-0.6,0.5-1.3,0.7-2,0.7c-0.7,0-1.4-0.3-1.9-0.8c-0.2-0.3-0.6-0.4-0.9-0.4c-0.4,0-0.7,0.1-1.1,0.5c-0.6,0.5-1.3,0.7-2.1,0.7c-0.7-0.1-1.4-0.4-1.9-0.9c-0.4-0.3-0.6-0.5-1-0.5c-0.3,0-0.6,0.2-0.9,0.4s-1.6-0.7-1.1-1.2c0.5-0.5,1.2-0.8,1.9-0.9c1-0.1,1.6,0.4,2.1,0.8c0.3,0.3,0.6,0.5,1,0.5c0.4,0,0.6-0.1,1-0.4c0.6-0.5,1.4-0.8,2.1-0.8c0.7,0,1.4,0.3,1.9,0.8c0.2,0.2,0.6,0.4,0.9,0.4c0.4,0,0.6-0.1,1-0.4c0.6-0.5,1.3-0.7,2-0.7c0.8,0,1.5,0.3,2,0.9c0.4,0.3,0.6,0.4,0.9,0.4c0.3,0,0.7-0.2,1.1-0.5c0.5-0.4,1.2-0.9,2.3-0.8c0.7,0,1.4,0.3,1.9,0.7c0.5,0.4-0.7,1.5-1,1.3s-0.6-0.4-1-0.4c-0.4,0-0.7,0.2-1.2,0.5C-32,15.9-32.7,16.2-33.5,16.3L-33.5,16.3z'
					},
					pointer: {
						icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
						width: 8,
						length: '30%',
						offsetCenter: [0, '-69%'],
						itemStyle: {
							color: '#FF7F50',
							shadowColor: 'rgba(255,218,185,0.9)',
							shadowBlur: 5,
							shadowOffsetY: 2
						}
					},
					progress: {
						show: true,
						width: 25,
						itemStyle: {
							color: 'rgba(255,218,185,0.4)'
						}
					},
					title: {
						show: false

					},
					detail: {
						show: false
					},
					data: [{
						value: 0
					}]
				},

				//RPM
				{
					name: 'gauege1',
					type: 'gauge',
					center: ['50%', '52%'],
					radius: '50%',
					min: 0,
					max: 3000,
					splitNumber: 6,

					axisLine: {
						show: false,
					},
					axisTick: {
						show: false,
					},
					splitLine: {
						show: false,
					},
					pointer: {
						icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
						width: 8,
						length: '30%',
						offsetCenter: [0, '-69%'],
						itemStyle: {
							color: '#FF7F50',
							shadowColor: 'rgba(255,218,185,0.9)',
							shadowBlur: 5,
							shadowOffsetY: 2
						}
					},
					progress: {
						show: true,
						width: 25,
						itemStyle: {
							color: 'rgba(255,218,185,0.4)'
						}
					},
					axisLabel: {
						show: false,
					},

					title: {
						show: false,
					},

					detail: {
						offsetCenter: [0, '-40%'],
						formatter: '{a|{value}}{b|RPM}',
						rich: {
							a: {
								fontSize: 30,
								fontWeight: 800,
								fontFamily: 'Arial',
								color: '#fff',
								align: 'center',
								padding: [0, 4, 0, 0]
							},
							b: {
								fontSize: 20,
								fontWeight: 800,
								fontFamily: 'Arial',
								color: '#fff',
								padding: [0, 0, 6, 0]
							}
						}
					},
					data: [{
						value: 0,
						name: '',
					}]
				},

				//KMH
				{
					name: 'gauge2',
					type: 'gauge',
					min: 0,
					max: 80,
					center: ['50%', '53%'],
					splitNumber: 0,
					radius: '52%',
					axisLine: {
						show: false,
					},
					splitLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false
					},
					anchor: {},
					pointer: {
						show: false
					},
					title: {
						show: false
					},
					detail: {
						offsetCenter: [0, "4%"],
						formatter: '{a|{value}}{b|km/h}',
						rich: {
							a: {
								fontSize: 70,
								fontWeight: 800,
								fontFamily: 'Arial',
								color: '#fff',
								align: 'center',
								padding: [0, 5, 0, 0]
							},
							b: {
								fontSize: 20,
								fontWeight: 800,
								fontFamily: 'Arial',
								color: '#fff',
								padding: [0, 0, 20, 0]
							}
						}
					},
					data: [{
						value: 0,
						name: ''
					}]
				},

				//FUEL
				/* {
					name: 'gauge3',
					type: 'gauge',
					center: ['86%', '50%'],
					radius: '30%',
					startAngle: 135,
					endAngle: 45,
					min: 0,
					max: 100,
					splitNumber: 2,
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false

					},
					splitLine: {
						show: false
					},
					pointer: {
						icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
						width: 8,
						length: '35%',
						offsetCenter: [0, '-64%'],
						itemStyle: {
							color: '#FF7F50',
							shadowColor: 'rgba(255,218,185,0.9)',
							shadowBlur: 5,
							shadowOffsetY: 2
						}
					},
					progress: {
						show: true,
						width: 25,
						itemStyle: {
							color: 'rgba(255,218,185,0.4)'
						}
					},
					anchor: {
						show: true,
						itemStyle: {},
						itemStyle: {
							color: '#fff'
						},
						offsetCenter: ['5%', '-50%'],
						size: 32.5,
						icon: 'path://M1.11979167,1.11111112 C1.11979167,0.497461393 1.61725306,0 2.23090279,0 L12.2309028,0 C12.8445525,1.43824153e-08 13.3420139,0.497461403 13.3420139,1.11111112 L13.3420139,10 L15.5642361,10 C16.7915356,10 17.7864583,10.9949228 17.7864583,12.2222222 L17.7864583,16.6666667 C17.7865523,17.28025 18.2839861,17.7776077 18.8975694,17.7776077 C19.5111527,17.7776077 20.0085866,17.28025 20.0086805,16.6666667 L20.0086805,8.88888888 L17.7864583,8.88888888 C17.1728086,8.88888888 16.6753472,8.3914275 16.6753472,7.77777779 L16.6753472,3.79333333 L15.6197917,2.73777777 C15.1859413,2.30392741 15.1859413,1.60051702 15.6197917,1.16666667 L15.6197917,1.16666667 C16.053642,0.732816318 16.7570524,0.732816318 17.1909028,1.16666667 L21.9053472,5.88111112 C22.1140468,6.08922811 22.2312072,6.37193273 22.2309028,6.66666667 L22.2309028,16.6666667 C22.2309028,18.5076158 20.7385186,20 18.8975695,20 C17.0566203,20 15.5642361,18.5076158 15.5642361,16.6666667 L15.5642361,12.2222222 L13.3420139,12.2222222 L13.3420139,17.7777778 L13.3420139,17.7777778 C13.9556636,17.7777778 14.453125,18.2752392 14.453125,18.8888889 L14.453125,18.8888889 C14.453125,19.5025386 13.9556636,20 13.3420139,20 L1.11979165,20 C0.506141934,20 0.00868054688,19.5025386 0.00868054687,18.8888889 L0.00868054687,18.8888889 C0.00868054688,18.2752392 0.506141934,17.7777778 1.11979165,17.7777778 L1.11979167,17.7777778 L1.11979167,1.11111112 Z M3.34201388,2.22222221 L3.34201388,8.88888888 L11.1197917,8.88888888 L11.1197917,2.22222221 L3.34201388,2.22222221 Z'
					},
					title: {
						show: false

					},
					detail: {
						show: false
					},
					data: [{
						value: 0
					}]
				}, */

				//PRESSÃO DO Ar
				{
					name: 'gauge4',
					type: 'gauge',
					center: ['18%', '50.5%'],
					radius: '30%',

					endAngle: 100,
					min: 0,
					max: 12,
					splitNumber: 2,
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false

					},
					splitLine: {
						show: false
					},
					pointer: {
						icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
						width: 8,
						length: '30%',
						offsetCenter: [0, '-69%'],
						itemStyle: {
							color: '#FF7F50',
							shadowColor: 'rgba(255,218,185,0.9)',
							shadowBlur: 5,
							shadowOffsetY: 2
						}
					},
					progress: {
						show: true,
						width: 25,
						itemStyle: {
							color: 'rgba(255,218,185,0.4)'
						}
					},
					title: {
						show: false

					},
					detail: {
						show: false
					},
					data: [{
						value: 0,
					}]
				},

				//MOTOR °C 2
				{
					name: 'Temperatua do Motor 2',
					type: 'gauge',
					center: ['86%', '80%'],
					radius: '32%',
					startAngle: 135,
					endAngle: 45,
					min: 0,
					max: 100,
					splitNumber: 2,
					axisLine: {
						lineStyle: {
							color: [
								[0.2, 'rgba(0,65,0,.9)'],
								[0.8, 'rgba(155,115,2,.90)'],
								[1, 'rgba(145,30,0,.90)']
							],
							width: 8
						}
					},
					axisTick: {
						splitNumber: 5,
						length: 8,
						lineStyle: {
							color: 'auto'
						},
						distance: 5,
					},

					axisLabel: {
						color: '#2a3142',
						distance: -50,
						fontWeight: 'bolder',
						fontSize: 18,
						formatter: function (value) {
							if (value === 0) {
								return '0°';
							} else if (value === 50) {
								return '50°';
							} else if (value === 100) {
								return '100°';
							}
							return '';
						}

					},
					anchor: {
						show: false
					},
					splitLine: {
						length: 15,
						lineStyle: {
							color: 'auto'
						},
						distance: 5,
					},
					pointer: {
						show: false
					},
					title: {
						show: false
					},
					detail: {
						show: false
					},
					data: [{
						show: false
					}]
				},

				//RPM 2
				{
					type: 'gauge',
					center: ['50%', '52%'],
					radius: '52%',
					min: 0,
					max: 3000,
					splitNumber: 6,

					axisLine: {
						lineStyle: {
							width: 10,
							color: [
								[0.585, 'rgba(0,65,0,.9)'],
								[0.75, 'rgba(155,115,2,.90)'],
								[1, 'rgba(145,30,0,.90)']
							]
						}
					},
					axisTick: {
						splitNumber: 5,
						length: 8,
						distance: 5,
						lineStyle: {
							color: 'auto'
						},
					},
					splitLine: {
						length: 15,
						lineStyle: {
							color: 'auto'
						}
					},

					pointer: {
						show: false,
					},
					progress: {
						show: false,
					},
					axisLabel: {
						formatter: function (value) {
							if (value === 3000) {
								return '30';
							} else if (value === 2500) {
								return '25';
							}
							if (value === 2000) {
								return '20';
							} else if (value === 1500) {
								return '15';
							}
							if (value === 1000) {
								return '10';
							} else if (value === 500) {
								return '5';
							} else if (value === 0) {
								return '0';
							}
							return '';
						},
						fontWeight: 'bolder',
						fontSize: 25,
						color: '#fff',
					},

					title: {
						show: false,
					},

					detail: {
						show: false,
					},
					data: [{
						show: false,
					}]
				},

				/* //FUEL 2
				{
					type: 'gauge',
					center: ['86%', '50%'],
					radius: '32%',
					startAngle: 135,
					endAngle: 45,
					max: 100,
					splitNumber: 2,
					axisLine: {
						lineStyle: {
							color: [
								[0.25, 'rgba(145,30,0,.90)'],
								[0.75, 'rgba(155,115,2,.90)'],
								[1, 'rgba(0,65,0,.9)']
							],
							width: 8
						}
					},
					axisTick: {
						splitNumber: 5,
						length: 8,
						distance: 5,
						lineStyle: {
							color: 'auto'
						},
					},
					axisLabel: {
						color: '#2a3142',
						distance: -50,
						fontWeight: 'bolder',
						fontSize: 18,
						formatter: function (value) {
							if (value === 100) {
								return 'F';
							} else if (value === 50) {
								return '1/2';
							} else if (value === 0) {
								return 'E';
							}
							return '';
						}
					},
					anchor: {
						show: false
					},
					splitLine: {
						length: 15,
						lineStyle: {
							color: 'auto'
						}
					},
					title: {
						show: false
					},
					pointer: {
						show: false
					},
					progress: {
						show: false
					},
					detail: {
						show: false
					},
					data: [{
						value: 0,
						name: 'Combustível'
					}]
				}, */

				//PRESSÃO DO Ar 2
				{
					type: 'gauge',
					center: ['18%', '50.5%'],
					radius: '32%',
					endAngle: 100,
					min: 0,
					max: 12,
					splitNumber: 3,
					axisLine: {
						lineStyle: {
							color: [
								[0.65, 'rgba(145,30,0,.90)'],
								[1, 'rgba(0,65,0,9)']
							],
							width: 10
						}
					},
					axisTick: {
						splitNumber: 5,
						distance: 5,
						length: 8,
						lineStyle: {
							color: 'auto'
						}
					},
					axisLabel: {
						color: '#2a3142',
						distance: -40,
						fontWeight: 'bolder',
						fontSize: 18,
					},
					splitLine: {
						length: 15,
						lineStyle: {
							color: 'auto'
						},
						distance: 5,
					},
					pointer: {
						show: false
					},
					progress: {
						show: false
					},
					title: {
						show: true,
						offsetCenter: ['5%', 0],
						fontWeight: 'bolder',
						fontSize: 20
					},
					detail: {
						show: false
					},
					data: [{
						value: 0,
						name: 'bar'
					}]
				}
			]
		};

		if (optiongauges && typeof optiongauges === 'object') {
			this.gauges.setOption(optiongauges);
		}

		// Gauge Aclive 
		var domaclive = document.getElementById('gaugeaclive');
		this.gaugeaclive = echarts.init(domaclive, null, {
			renderer: 'canvas',
			useDirtyRect: false
		});

		optiongaugesAclive = {
			series: [
				{
					name: 'eixoX',
					type: 'gauge',
					center: ['42.5%', '35%'],
					startAngle: 135,
					endAngle: 45,
					min: -50,
					max: 50,
					splitNumber: 10,
					axisLine: {
						lineStyle: {
							width: 6,
							color: [
								[1, '#fff']
							]
						}
					},
					itemStyle: {
						shadowColor: 'rgba(255,218,185,0.9)',
						shadowBlur: 1,
						shadowOffsetX: 1,
						shadowOffsetY: 1
					},
					pointer: {
						offsetCenter: [0, '-25%'],
						icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
						length: '60%',
						width: 5,
						itemStyle: {
							color: '#FF7F50',
							shadowColor: 'rgba(255,218,185,0.9)',
							shadowBlur: 5,
							shadowOffsetY: 2
						}
					},
					axisTick: {
						length: 5,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						length: 10,
						lineStyle: {
							color: 'auto',
							width: 3
						}
					},
					axisLabel: {
						show: false,
						color: 'auto',
						distance: -40,
						fontSize: 11
					},
					title: {
						color: 'auto',
						offsetCenter: [0, '-120%'],
						fontSize: 30
					},
					detail: {
						valueAnimation: true,
						color: 'auto',
						offsetCenter: [0, 0],
						formatter: '{value}',
						fontSize: 30
					},
					data: [
						{
							value: 0,
							name: 'X'
						}
					]
				},
				{
					name: 'eixoY',
					type: 'gauge',
					center: ['42.5%', '65%'],
					startAngle: 315,
					endAngle: 225,
					min: 50,
					max: -50,
					splitNumber: 10,
					axisLine: {
						lineStyle: {
							width: 6,
							color: [
								[1, '#fff']
							]
						}
					},
					itemStyle: {
						shadowColor: 'rgba(255,218,185,0.9)',
						shadowBlur: 1,
						shadowOffsetX: 1,
						shadowOffsetY: 1
					},
					pointer: {
						offsetCenter: [0, '-30%'],
						icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
						length: '60%',
						width: 5,
						itemStyle: {
							color: '#FF7F50',
							shadowColor: 'rgba(255,218,185,0.9)',
							shadowBlur: 5,
							shadowOffsetY: 2
						}
					},
					axisTick: {
						length: 5,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						length: 10,
						lineStyle: {
							color: 'auto',
							width: 3
						}
					},
					axisLabel: {
						show: false,
						color: 'auto',
						distance: -40,
						fontSize: 11
					},
					title: {
						color: 'auto',
						offsetCenter: [0, '130%'],
						fontSize: 30
					},
					detail: {
						valueAnimation: true,
						color: 'auto',
						offsetCenter: [0, '15%'],
						formatter: '{value}',
						fontSize: 30
					},
					data: [
						{
							value: 0,
							name: 'Y'
						}
					]
				}
			]
		};

		if (optiongaugesAclive && typeof optiongaugesAclive === 'object') {
			this.gaugeaclive.setOption(optiongaugesAclive);
		}
		window.addEventListener('resize', this.gaugeaclive.resize);

		// Gauge Aclive SM
		var domacliveSm = document.getElementById('gaugeacliveSm');
		this.gaugeacliveSm = echarts.init(domacliveSm, null, {
			renderer: 'canvas',
			useDirtyRect: false
		});

		optiongaugesAcliveSm = {
			series: [
				{
					name: 'eixoX',
					type: 'gauge',
					center: ['25%', '50%'],
					radius: '90%',
					startAngle: -110,
					endAngle: -250,
					min: -50,
					max: 50,
					splitNumber: 10,
					axisLine: {
						lineStyle: {
							width: 6,
							color: [
								[1, '#fff']
							]
						}
					},
					itemStyle: {
						shadowColor: 'rgba(255,218,185,0.9)',
						shadowBlur: 1,
						shadowOffsetX: 1,
						shadowOffsetY: 1
					},
					pointer: {
						offsetCenter: [0, '-25%'],
						icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
						length: '60%',
						width: 5,
						itemStyle: {
							color: '#FF7F50',
							shadowColor: 'rgba(255,218,185,0.9)',
							shadowBlur: 5,
							shadowOffsetY: 2
						}
					},
					axisTick: {
						length: 5,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						length: 10,
						lineStyle: {
							color: 'auto',
							width: 3
						}
					},
					axisLabel: {
						show: false,
						color: 'auto',
						distance: -40,
						fontSize: 11
					},
					title: {
						color: 'auto',
						offsetCenter: ['-120%', 0],
						fontSize: 30
					},
					detail: {
						valueAnimation: true,
						color: 'auto',
						offsetCenter: ['20%', 0],
						formatter: '{value}',
						fontSize: 30
					},
					data: [
						{
							value: 0,
							name: 'X'
						}
					]
				},

				{
					name: 'eixoY',
					type: 'gauge',
					center: ['75%', '50%'],
					radius: '90%',
					startAngle: 70,
					endAngle: 290,
					min: 50,
					max: -50,
					splitNumber: 10,
					axisLine: {
						lineStyle: {
							width: 6,
							color: [
								[1, '#fff']
							]
						}
					},
					itemStyle: {
						shadowColor: 'rgba(255,218,185,0.9)',
						shadowBlur: 1,
						shadowOffsetX: 1,
						shadowOffsetY: 1
					},
					pointer: {
						offsetCenter: [0, '-22.5%'],
						icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
						length: '60%',
						width: 5,
						itemStyle: {
							color: '#FF7F50',
							shadowColor: 'rgba(255,218,185,0.9)',
							shadowBlur: 5,
							shadowOffsetY: 2
						}
					},
					axisTick: {
						length: 5,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						length: 10,
						lineStyle: {
							color: 'auto',
							width: 3
						}
					},
					axisLabel: {
						show: false,
						color: 'auto',
						distance: -40,
						fontSize: 11
					},
					title: {
						color: 'auto',
						offsetCenter: ['120%', 0],
						fontSize: 30
					},
					detail: {
						valueAnimation: true,
						color: 'auto',
						offsetCenter: ['-20%', 0],
						formatter: '{value}',
						fontSize: 30
					},
					data: [
						{
							value: 0,
							name: 'Y'
						}
					]
				}
			]
		};

		if (optiongaugesAcliveSm && typeof optiongaugesAcliveSm === 'object') {
			this.gaugeacliveSm.setOption(optiongaugesAcliveSm);
		}
		window.addEventListener('resize', this.gaugeacliveSm.resize);

		if (this.tema[0].checked) {
			this.gaugeBlack();
		}
		else if (this.tema[1].checked) {
			this.gaugeWhite();
		}
	}
	
	desenhaRadar() {
		var cor1 = '#02a499';
		var cor2 = '#02a499';
		var cor3 = '#02a499';
		var cor4 = '#02a499';
		var cor5 = '#02a499';

		var val1 = 27;
		var val2 = 27;
		var val3 = 27;
		var val4 = 27;
		var val5 = 27;

		var domRadarFrente = document.getElementById('radarFrente');
		this.radarFrente = echarts.init(domRadarFrente, null, {
			renderer: 'canvas',
			useDirtyRect: false
		});

		optionradar = {
			title: [{
				show: false
			}],
			polar: {
				radius: [40, '150%'],
				center: ['45.75%', '85%'],
			},
			radiusAxis: {
				max: 30,
				show: false
			},
			angleAxis: {
				type: 'category',
				data: ['D_1', 'D_2', 'D1', 'D2', 'D3', 'D4', 'D5', 'D__1', 'D__2', 'D__3', 'D6', 'D7', 'D8', 'D9', 'D10',
					'D___1', 'D___2'
				],
				startAngle: 180,
				show: false
			},
			tooltip: {
				show: false
			},
			series: {
				type: 'bar',
				data: ['', '', {
					value: val1,
					itemStyle: {
						color: cor1
					}
				},
					{
						value: val2,
						itemStyle: {
							color: cor2
						}
					},
					{
						value: val3,
						itemStyle: {
							color: cor3
						}
					},
					{
						value: val4,
						itemStyle: {
							color: cor4
						}
					},
					{
						value: val5,
						itemStyle: {
							color: cor5
						}
					}, '', '', '', '', '', '', '', '', '', ''
				],
				coordinateSystem: 'polar',
				label: {
					show: false
				}
			},
			animation: false
		};
		if (optionradar && typeof optionradar === 'object') {
			this.radarFrente.setOption(optionradar);
		}
		window.addEventListener('resize', this.radarFrente.resize);
		window.addEventListener('orientationchange', this.radarFrente.resize);
	}

	renderInfo() {
		function renderItem(params, api) {
			var valOnRadian = api.value(1);
			var coords = api.coord([api.value(0), valOnRadian]);
			var polarEndRadian = coords[3];
			var imageStyle = {
				image: _panelImageURL,
				x: params.coordSys.cx - _outerRadius,
				y: params.coordSys.cy - _outerRadius,
				width: _outerRadius * 2,
				height: _outerRadius * 2
			};
			return {
				type: 'group',
				children: [
					{
						type: 'image',
						style: imageStyle,
						clipPath: {
							type: 'sector',
							shape: {
								cx: params.coordSys.cx,
								cy: params.coordSys.cy,
								r: _outerRadius,
								r0: _innerRadius,
								startAngle: 0,
								endAngle: -polarEndRadian,
								transition: 'endAngle',
								enterFrom: { endAngle: 0 }
							}
						}
					},
					{
						type: 'image',
						style: imageStyle,
						clipPath: {
							type: 'polygon',
							shape: {
								points: makePionterPoints(params, polarEndRadian)
							},
							extra: {
								polarEndRadian: polarEndRadian,
								transition: 'polarEndRadian',
								enterFrom: { polarEndRadian: 0 }
							},
							during: function (apiDuring) {
								apiDuring.setShape(
									'points',
									makePionterPoints(params, apiDuring.getExtra('polarEndRadian'))
								);
							}
						}
					},
					{
						type: 'circle',
						shape: {
							cx: params.coordSys.cx,
							cy: params.coordSys.cy,
							r: _insidePanelRadius
						},
						style: {
							fill: '#38a4f8',
							shadowBlur: 28,
							shadowOffsetX: 5,
							shadowOffsetY: 0,
							shadowColor: '#38a4f8'
						}
					},
					{
						type: 'text',
						extra: {
							valOnRadian: valOnRadian,
							transition: 'valOnRadian',
							enterFrom: { valOnRadian: 0 }
						},
						style: {
							text: makeText(valOnRadian),
							fontSize: 50,
							fontWeight: 700,
							x: params.coordSys.cx,
							y: params.coordSys.cy,
							fill: '#38a4f8',
							align: 'center',
							verticalAlign: 'middle',
							enterFrom: { opacity: 0 }
						},
						during: function (apiDuring) {
							apiDuring.setStyle(
								'text',
								makeText(apiDuring.getExtra('valOnRadian'))
							);
						}
					}
				]
			};
		}
		function convertToPolarPoint(renderItemParams, radius, radian) {
			return [
				Math.cos(radian) * radius + renderItemParams.coordSys.cx,
				-Math.sin(radian) * radius + renderItemParams.coordSys.cy
			];
		}
		function makePionterPoints(renderItemParams, polarEndRadian) {
			return [
				convertToPolarPoint(renderItemParams, _outerRadius, polarEndRadian),
				convertToPolarPoint(
					renderItemParams,
					_outerRadius,
					polarEndRadian + Math.PI * 0.03
				),
				convertToPolarPoint(renderItemParams, _pointerInnerRadius, polarEndRadian)
			];
		}
		function makeText(valOnRadian) {

			return '';
		}
		this.gaugedirecao.setOption({
			series: [{
				type: 'custom',
				coordinateSystem: 'polar',
				renderItem: renderItem
			}]
		});
	}

	renderSuccess() {
		function renderItem(params, api) {
			var valOnRadian = api.value(1);
			var coords = api.coord([api.value(0), valOnRadian]);
			var polarEndRadian = coords[3];
			var imageStyle = {
				image: _panelImageURL,
				x: params.coordSys.cx - _outerRadius,
				y: params.coordSys.cy - _outerRadius,
				width: _outerRadius * 2,
				height: _outerRadius * 2
			};
			return {
				type: 'group',
				children: [
					{
						type: 'image',
						style: imageStyle,
						clipPath: {
							type: 'sector',
							shape: {
								cx: params.coordSys.cx,
								cy: params.coordSys.cy,
								r: _outerRadius,
								r0: _innerRadius,
								startAngle: 0,
								endAngle: -polarEndRadian,
								transition: 'endAngle',
								enterFrom: { endAngle: 0 }
							}
						}
					},
					{
						type: 'image',
						style: imageStyle,
						clipPath: {
							type: 'polygon',
							shape: {
								points: makePionterPoints(params, polarEndRadian)
							},
							extra: {
								polarEndRadian: polarEndRadian,
								transition: 'polarEndRadian',
								enterFrom: { polarEndRadian: 0 }
							},
							during: function (apiDuring) {
								apiDuring.setShape(
									'points',
									makePionterPoints(params, apiDuring.getExtra('polarEndRadian'))
								);
							}
						}
					},
					{
						type: 'circle',
						shape: {
							cx: params.coordSys.cx,
							cy: params.coordSys.cy,
							r: _insidePanelRadius
						},
						style: {
							fill: '#02a499',
							shadowBlur: 50,
							shadowOffsetX: 8,
							shadowOffsetY: 0,
							shadowColor: '#02a499'
						}
					},
					{
						type: 'text',
						extra: {
							valOnRadian: valOnRadian,
							transition: 'valOnRadian',
							enterFrom: { valOnRadian: 0 }
						},
						style: {
							text: makeText(valOnRadian),
							fontSize: 50,
							fontWeight: 700,
							x: params.coordSys.cx,
							y: params.coordSys.cy,
							fill: '#02a499',
							align: 'center',
							verticalAlign: 'middle',
							enterFrom: { opacity: 0 }
						},
						during: function (apiDuring) {
							apiDuring.setStyle(
								'text',
								makeText(apiDuring.getExtra('valOnRadian'))
							);
						}
					}
				]
			};
		}
		function convertToPolarPoint(renderItemParams, radius, radian) {
			return [
				Math.cos(radian) * radius + renderItemParams.coordSys.cx,
				-Math.sin(radian) * radius + renderItemParams.coordSys.cy
			];
		}
		function makePionterPoints(renderItemParams, polarEndRadian) {
			return [
				convertToPolarPoint(renderItemParams, _outerRadius, polarEndRadian),
				convertToPolarPoint(
					renderItemParams,
					_outerRadius,
					polarEndRadian + Math.PI * 0.03
				),
				convertToPolarPoint(renderItemParams, _pointerInnerRadius, polarEndRadian)
			];
		}
		function makeText(valOnRadian) {

			return '';
		}
		this.gaugedirecao.setOption({
			series: [{
				type: 'custom',
				coordinateSystem: 'polar',
				renderItem: renderItem
			}]
		});
	}

	renderDanger() {
		function renderItem(params, api) {
			var valOnRadian = api.value(1);
			var coords = api.coord([api.value(0), valOnRadian]);
			var polarEndRadian = coords[3];
			var imageStyle = {
				image: _panelImageURL,
				x: params.coordSys.cx - _outerRadius,
				y: params.coordSys.cy - _outerRadius,
				width: _outerRadius * 2,
				height: _outerRadius * 2
			};
			return {
				type: 'group',
				children: [
					{
						type: 'image',
						style: imageStyle,
						clipPath: {
							type: 'sector',
							shape: {
								cx: params.coordSys.cx,
								cy: params.coordSys.cy,
								r: _outerRadius,
								r0: _innerRadius,
								startAngle: 0,
								endAngle: -polarEndRadian,
								transition: 'endAngle',
								enterFrom: { endAngle: 0 }
							}
						}
					},
					{
						type: 'image',
						style: imageStyle,
						clipPath: {
							type: 'polygon',
							shape: {
								points: makePionterPoints(params, polarEndRadian)
							},
							extra: {
								polarEndRadian: polarEndRadian,
								transition: 'polarEndRadian',
								enterFrom: { polarEndRadian: 0 }
							},
							during: function (apiDuring) {
								apiDuring.setShape(
									'points',
									makePionterPoints(params, apiDuring.getExtra('polarEndRadian'))
								);
							}
						}
					},
					{
						type: 'circle',
						shape: {
							cx: params.coordSys.cx,
							cy: params.coordSys.cy,
							r: _insidePanelRadius
						},
						style: {
							fill: '#ec4561',
							shadowBlur: 25,
							shadowOffsetX: 3,
							shadowOffsetY: 3,
							shadowColor: '#ec4561'
						}
					},
					{
						type: 'text',
						extra: {
							valOnRadian: valOnRadian,
							transition: 'valOnRadian',
							enterFrom: { valOnRadian: 0 }
						},
						style: {
							text: makeText(valOnRadian),
							fontSize: 50,
							fontWeight: 700,
							x: params.coordSys.cx,
							y: params.coordSys.cy,
							fill: '#ec4561',
							align: 'center',
							verticalAlign: 'middle',
							enterFrom: { opacity: 0 }
						},
						during: function (apiDuring) {
							apiDuring.setStyle(
								'text',
								makeText(apiDuring.getExtra('valOnRadian'))
							);
						}
					}
				]
			};
		}
		function convertToPolarPoint(renderItemParams, radius, radian) {
			return [
				Math.cos(radian) * radius + renderItemParams.coordSys.cx,
				-Math.sin(radian) * radius + renderItemParams.coordSys.cy
			];
		}
		function makePionterPoints(renderItemParams, polarEndRadian) {
			return [
				convertToPolarPoint(renderItemParams, _outerRadius, polarEndRadian),
				convertToPolarPoint(
					renderItemParams,
					_outerRadius,
					polarEndRadian + Math.PI * 0.03
				),
				convertToPolarPoint(renderItemParams, _pointerInnerRadius, polarEndRadian)
			];
		}
		function makeText(valOnRadian) {

			return '';
		}
		this.gaugedirecao.setOption({
			dataset: {
				source: [[1, 0]]
			},
			series: [{
				type: 'custom',
				coordinateSystem: 'polar',
				renderItem: renderItem
			}]
		});
	}

	updategaugeslow(FUELx, ENGINE_COOLANT_TEMP) {
		if (isNaN(FUELx)) FUELx = 0;
		if (isNaN(ENGINE_COOLANT_TEMP)) ENGINE_COOLANT_TEMP = 0;
		if (FUELx >= 0 && FUELx <= 100) {
			progressFuel = FUELx;
			optiongauges.series[3].data[0].value = FUELx;
		}

		if (ENGINE_COOLANT_TEMP >= 0) {
			progressTempMotor = ENGINE_COOLANT_TEMP;
			optiongauges.series[0].data[0].value = ENGINE_COOLANT_TEMP;
		}
	}

	updategaugefast(KMH, RPM, tema, DIR, DIR2) {
		if (KMH >= 0 && KMH <= 80) {
			optiongauges.series[2].data[0].value = KMH;
		}

		if ((RPM >= 0) || RPM == '-') {
			if (RPM == '-') RPM = 0;
			optiongauges.series[1].data[0].value = RPM;
		}

		this.gauges.setOption(optiongauges, false, true);
		if (tema[0].checked) {
			this.gaugeBlack();
			if (RPM >= 2250) {
				this.gauges.setOption({
					series: [
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(255,30,0,.25)'
								}
							}
						}
					]
				});
			} else if (RPM >= 1750) {
				this.gauges.setOption({
					series: [
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(218,165,32,.40)'
								}
							}
						}
					]
				});
			} else {
				this.gauges.setOption({
					series: [
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(0,255,0,.15)'
								}
							}
						}
					]
				});
			}

			if (progressFuel >= 75) {
				this.gauges.setOption({
					series: [
						{},
						{},
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(0,255,0,.15)'
								}
							}
						}
					]
				});
			} else if (progressFuel >= 25) {
				this.gauges.setOption({
					series: [
						{},
						{},
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(218,165,32,.40)'
								}
							}
						}
					]
				});
			} else {
				this.gauges.setOption({
					series: [
						{},
						{},
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(255,30,0,.25)'
								}
							}
						}
					]
				});
			}

			if (progressTempMotor >= 75) {
				this.gauges.setOption({
					series: [
						{
							progress: {
								itemStyle: {
									color: 'rgba(255,30,0,.25)'
								}
							}
						}
					]
				});
			} else if (progressTempMotor >= 20) {
				this.gauges.setOption({
					series: [
						{
							progress: {
								itemStyle: {
									color: 'rgba(218,165,32,.40)'
								}
							}
						}
					]
				});
			} else {
				this.gauges.setOption({
					series: [
						{
							progress: {
								itemStyle: {
									color: 'rgba(0,255,0,.15)'
								}
							}
						}
					]
				});
			}

			if (progressAr <= 8) {
				this.gauges.setOption({
					series: [
						{},
						{},
						{},
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(255,30,0,.25)'
								}
							}
						}
					]
				});
			} else {
				this.gauges.setOption({
					series: [
						{},
						{},
						{},
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(0,255,0,.15)'
								}
							}
						}
					]
				});
			}
		}
		else if (tema[1].checked) {
			this.gaugeWhite();

			if (RPM >= 2250) {
				this.gauges.setOption({
					series: [
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(145,30,0,.90)'
								}
							}
						}
					]
				});
			} else if (RPM >= 1750) {
				this.gauges.setOption({
					series: [
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(155,115,2,.90)'
								}
							}
						}
					]
				});
			} else {
				this.gauges.setOption({
					series: [
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(0,65,0,.9)'
								}
							}
						}
					]
				});
			}

			if (progressFuel >= 75) {
				this.gauges.setOption({
					series: [
						{},
						{},
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(0,65,0,.9)'
								}
							}
						}
					]
				});
			} else if (progressFuel >= 25) {
				this.gauges.setOption({
					series: [
						{},
						{},
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(155,115,2,.90)'
								}
							}
						}
					]
				});
			} else {
				this.gauges.setOption({
					series: [
						{},
						{},
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(145,30,0,.90)'
								}
							}
						}
					]
				});
			}

			if (progressTempMotor >= 75) {
				this.gauges.setOption({
					series: [
						{
							progress: {
								itemStyle: {
									color: 'rgba(145,30,0,.90)'
								}
							}
						}
					]
				});
			} else if (progressTempMotor >= 20) {
				this.gauges.setOption({
					series: [
						{
							progress: {
								itemStyle: {
									color: 'rgba(155,115,2,.90)'
								}
							}
						}
					]
				});
			} else {
				this.gauges.setOption({
					series: [
						{
							progress: {
								itemStyle: {
									color: 'rgba(0,65,0,.9)'
								}
							}
						}
					]
				});
			}

			if (progressAr <= 8) {
				this.gauges.setOption({
					series: [
						{},
						{},
						{},
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(145,30,0,.90)'
								}
							}
						}
					]
				});
			} else {
				this.gauges.setOption({
					series: [
						{},
						{},
						{},
						{},
						{
							progress: {
								itemStyle: {
									color: 'rgba(0,65,0,.9)'
								}
							}
						}
					]
				});
			}
		}

		if (DIR >= 0 && DIR <= maxDir1 / 1.5 && DIR2 == 0) {
			let nextSource = [[1, DIR]];
			this.gaugedirecao.setOption({
				dataset: {
					source: nextSource
				},
				angleAxis: {
					max: maxDir1
				}
			});
		}

		if (DIR2 >= 0 && DIR2 <= maxDir2 / 1.5 && DIR == 0) {
			let nextSource = [
				[1, DIR2]
			];

			this.gaugedirecao.setOption({
				dataset: {
					source: nextSource
				},
				angleAxis: {
					max: maxDir2
				}
			});
		}

		if (DIR == 0 && DIR2 == 0) {
			this.renderSuccess();
		} else if (DIR > maxDir1 / 1.5 || DIR2 > maxDir2 / 1.5 || (DIR == "-" && DIR2 == "-")) {
			this.renderDanger();
		} else if ((DIR > 0 && DIR <= maxDir1 / 1.5) || (DIR2 > 0 && DIR2 <= maxDir2 / 1.5)) {
			this.renderInfo();
		}
	}

	updategaugeaclive(ACLIVE, ACLIVE2, ALARME_STATUS) {
		statIncl = ALARME_STATUS;
		acli = ACLIVE;
		acli2 = ACLIVE2;

		if (isNaN(ACLIVE) || ACLIVE == "-" || ALARME_STATUS == 3) ACLIVE = 0;
		if (isNaN(ACLIVE2) || ACLIVE2 == "-" || ALARME_STATUS == 3) ACLIVE2 = 0;

		if (ACLIVE2 > -500) {
			optiongaugesAclive.series[0].data[0].value = ACLIVE2;
			optiongaugesAcliveSm.series[0].data[0].value = ACLIVE2;
		}

		if (ACLIVE > -500) {
			optiongaugesAclive.series[1].data[0].value = ACLIVE;
			optiongaugesAcliveSm.series[1].data[0].value = ACLIVE;
		}
		this.gaugeaclive.setOption(optiongaugesAclive, false, true);
		this.gaugeacliveSm.setOption(optiongaugesAcliveSm, false, true);

		if (this.tema[0].checked) {
			this.gaugeBlack();
		} else if (this.tema[1].checked) {
			this.gaugeWhite();	
		}
		this.pintaInc(acli, acli2, statIncl);
	}

	updategaugepar(air_pressure) {
		if (air_pressure >= 0) {
			progressAr = air_pressure;
			optiongauges.series[4].data[0].value = air_pressure;
		}
	}

	updateradarfrente(D1, D2, D3, D4, D5) {
		let cor1 = this.selCor(D1);
		let cor2 = this.selCor(D2);
		let cor3 = this.selCor(D3);
		let cor4 = this.selCor(D4);
		let cor5 = this.selCor(D5);

		if (D1 <= 0 || D1 >= 30 || isNaN(D1)) D1 = 0;
		if (D2 <= 0 || D2 >= 30 || isNaN(D2)) D2 = 0;
		if (D3 <= 0 || D3 >= 30 || isNaN(D3)) D3 = 0;
		if (D4 <= 0 || D4 >= 30 || isNaN(D4)) D4 = 0;
		if (D5 <= 0 || D5 >= 30 || isNaN(D5)) D5 = 0;

		if (D1 >= 0 || D2 >= 0 || D3 >= 0 || D4 >= 0 || D5 >= 0) {
			this.radarFrente.setOption({
				series: {
					data: ['', '', {
						value: D1,
						itemStyle: {
							color: cor1
						}
					},
						{
							value: D2,
							itemStyle: {
								color: cor2
							}
						},
						{
							value: D3,
							itemStyle: {
								color: cor3
							}
						},
						{
							value: D4,
							itemStyle: {
								color: cor4
							}
						},
						{
							value: D5,
							itemStyle: {
								color: cor5
							}
						}]
				}
			});
		}

	}
	
	gaugeWhite() {
		let option = {
			series: [

				//MOTOR °C
				{
					splitLine: {
						lineStyle: {
							color: 'auto',
						}
					},
					axisLabel: {
						color: '#2a3142',
					},
					detail: {
						color: '#2a3142',
					},

					title: {
						color: '#2a3142',
					},
					axisLine: {
						lineStyle: {
							color: [
								[0.2, 'rgba(0,65,0,.9)'],
								[0.8, 'rgba(155,115,2,.90)'],
								[1, 'rgba(145,30,0,.90)']
							]
						}
					},
					anchor: {
						itemStyle: {
							color: '#2a3142',
						}
					}
				},

				//RPM
				{
					axisLabel: {
						color: '#2a3142',
					},
					detail: {
						rich: {
							a: {
								color: '#2a3142',
							},
							b: {
								color: '#2a3142',
							}
						}

					},
					title: {
						color: '#2a3142',
					}
				},

				//KMH
				{
					detail: {
						rich: {
							a: {
								color: '#2a3142',
							},
							b: {
								color: '#2a3142',
							}
						}

					}
				},

				//FUEL
				{
					axisLine: {
						lineStyle: {
							color: [
								[0.25, 'rgba(145,30,0,.90)'],
								[0.75, 'rgba(155,115,2,.90)'],
								[1, 'rgba(0,65,0,.9)']
							],
							width: 8
						}
					}, splitLine: {
						lineStyle: {
							color: 'auto',
						}
					},
					axisLabel: {
						color: '#2a3142',
					},
					detail: {
						color: '#2a3142',
					},
					title: {
						color: '#2a3142',
					},
					anchor: {
						itemStyle: {
							color: '#2a3142',
						}
					}
				},

				// PRESSÃO DO AR
				{

					splitLine: {
						lineStyle: {
							color: 'auto',
						}
					},
					axisLabel: {
						color: '#2a3142',
					},
					detail: {
						color: '#2a3142',
					},
					title: {
						color: '#2a3142',
					}
				}, {},
				//RPM 2
				{
					axisLabel: {
						color: '#2a3142',
					}
				}, {},
				//PRESSÃO DO Ar 2
				{
					axisLine: {
						lineStyle: {
							color: [
								[0.67, 'rgba(145,30,0,.90)'],
								[1, 'rgba(0,65,0,.9)']
							],
							width: 8
						}
					},
					title: {
						color: '#2a3142',
					}
				}
			]
		};
		if (option && typeof option === 'object') {
			this.gauges.setOption(option);
		}

		this.gaugeaclive.setOption({
			series: [
				{
					axisLine: {
						lineStyle: {
							color: [
								[1, '#2a3142']
							]
						}
					}
				},
				{
					axisLine: {
						lineStyle: {
							color: [
								[1, '#2a3142']
							]
						}
					}
				}
			]
		});

		this.gaugeacliveSm.setOption({
			series: [
				{
					axisLine: {
						lineStyle: {
							color: [
								[1, '#2a3142']
							]
						}
					}
				},
				{
					axisLine: {
						lineStyle: {
							color: [
								[1, '#2a3142']
							]
						}
					}
				}
			]
		});
	}

	gaugeBlack() {
		let option = {
			series: [

				//MOTOR °C
				{
					name: 'gauge0',
					splitLine: {
						lineStyle: {
							color: 'auto',
						}
					},
					axisLabel: {
						color: '#fff',
					},
					detail: {
						color: '#fff',
					},
					title: {
						color: '#fff',
					},
					axisLine: {
						lineStyle: {
							color: [
								[0.2, 'rgba(0,255,0,.15)'],
								[0.8, 'rgba(218,165,32,.40)'],
								[1, 'rgba(255,30,0,.25)']
							]
						}
					},
					anchor: {
						itemStyle: {
							color: '#fff',
						}
					}
				},

				//RPM
				{
					axisLabel: {
						color: '#fff',
					},
					detail: {
						rich: {
							a: {
								color: '#fff',
							},
							b: {
								color: '#fff',
							}
						}
					},
					title: {
						color: '#fff',
					}
				},

				//KMH
				{
					name: 'gauge2',
					axisLine: {
						lineStyle: {
							color: [
								[0.1, 'rgba(0,255,0,.15)'],
								[0.9, 'transparent'],
								[1, 'rgba(255,30,0,.25)']
							]
						}
					},
					detail: {
						rich: {
							a: {
								color: '#fff',
							},
							b: {
								color: '#fff',
							}
						}
					}
				},

				//FUEL
				{
					name: 'gauge3',
					axisLine: {
						lineStyle: {
							color: [
								[0.25, 'rgba(255,30,0,.25)'],
								[0.75, 'rgba(218,165,32,.40)'],
								[1, 'rgba(0,255,0,.15)']
							]
						}
					}, splitLine: {
						lineStyle: {
							color: 'auto',
						}
					},
					axisLabel: {
						color: '#fff',
					},
					detail: {
						color: '#fff',
					},
					title: {
						color: '#fff',
					},
					anchor: {
						itemStyle: {
							color: '#fff',
						}
					}
				},

				// PRESSÃO DO Ar
				{
					name: 'gauge4',

					splitLine: {
						lineStyle: {
							color: 'auto',
						}
					},
					axisLabel: {
						color: '#fff',
					},
					detail: {
						color: '#fff',
					},
					title: {
						color: '#fff',
					}
				},

				//MOTOR °C 2
				{
					axisLine: {
						lineStyle: {
							color: [
								[0.2, 'rgba(0,255,0,.15)'],
								[0.75, 'rgba(218,165,32,.40)'],
								[1, 'rgba(255,30,0,.25)']
							]
						}
					},
					splitLine: {
						lineStyle: {
							color: 'auto',
						}
					},
					axisLabel: {
						color: '#fff',
					}
				},

				//RPM 2
				{
					axisLine: {
						lineStyle: {
							color: [
								[0.585, 'rgba(0,255,0,.15)'],
								[0.75, 'rgba(218,165,32,.40)'],
								[1, 'rgba(255,30,0,.25)']
							]
						}
					},
					splitLine: {
						lineStyle: {
							color: 'auto',
						}
					},
					axisLabel: {
						color: '#fff',
					}
				},

				//FUEL 2
				{
					name: 'gauge3',
					axisLine: {
						lineStyle: {
							color: [
								[0.25, 'rgba(255,30,0,.25)'],
								[0.75, 'rgba(218,165,32,.40)'],
								[1, 'rgba(0,255,0,.15)']
							]
						}
					}, splitLine: {
						lineStyle: {
							color: 'auto',
						}
					},
					axisLabel: {
						color: '#fff',
					}
				},

				//PRESSÃO DO Ar 2
				{
					name: 'gauge4',
					axisLine: {
						lineStyle: {
							color: [
								[0.67, 'rgba(255,30,0,.25)'],
								[1, 'rgba(0,255,0,.15)']
							]
						}
					},
					splitLine: {
						lineStyle: {
							color: 'auto',
						}
					},
					axisLabel: {
						color: '#fff',
					},
					title: {
						color: '#fff',
					}
				}
			]
		};
		if (option && typeof option === 'object') {
			this.gauges.setOption(option);
		}

		this.gaugeaclive.setOption({
			series: [
				{
					axisLine: {
						lineStyle: {
							color: [
								[1, '#fff']
							]
						}
					}
				},
				{
					axisLine: {
						lineStyle: {
							color: [
								[1, '#fff']
							]
						}
					}
				}
			]
		});

		this.gaugeacliveSm.setOption({
			series: [
				{
					axisLine: {
						lineStyle: {
							color: [
								[1, '#fff']
							]
						}
					}
				},
				{
					axisLine: {
						lineStyle: {
							color: [
								[1, '#fff']
							]
						}
					}
				}
			]
		});
	}

	selCor(val) {
		if (val <= 10) {
			return '#ec4561'
		} else if (val <= 20) {
			return '#f8b425'
		} else if (val > 20) {
			return '#02a499'
		}
	}

	pintaInc(ACLIVE, ACLIVE2, ALARME_STATUS) {
		if (ALARME_STATUS == 1 && ALARME_STATUS != 3) {

			this.gaugeaclive.setOption({
				series: [
					{
						axisLine: {
							lineStyle: {
								color: [
									[1, '#ec4561']
								]
							}
						}
					},
					{
						axisLine: {
							lineStyle: {
								color: [
									[1, '#ec4561']
								]
							}
						}
					}
				]
			});

			this.gaugeacliveSm.setOption({
				series: [
					{
						axisLine: {
							lineStyle: {
								color: [
									[1, '#ec4561']
								]
							}
						}
					},
					{
						axisLine: {
							lineStyle: {
								color: [
									[1, '#ec4561']
								]
							}
						}
					}
				]
			});
		} else if (ALARME_STATUS != 3) {
			if (ACLIVE >= 15 || ACLIVE <= -15) {
				this.gaugeaclive.setOption({
					series: [
						{},
						{
							axisLine: {
								lineStyle: {
									color: [
										[1, '#f8b425']
									]
								}
							}
						}
					]
				});
				this.gaugeacliveSm.setOption({
					series: [
						{},
						{
							axisLine: {
								lineStyle: {
									color: [
										[1, '#f8b425']
									]
								}
							}
						}
					]
				});
			}

			if (ACLIVE2 >= 4 || ACLIVE2 <= -4) {
				this.gaugeaclive.setOption({
					series: [
						{
							axisLine: {
								lineStyle: {
									color: [
										[1, '#f8b425']
									]
								}
							}
						}
					]
				});
				this.gaugeacliveSm.setOption({
					series: [
						{
							axisLine: {
								lineStyle: {
									color: [
										[1, '#f8b425']
									]
								}
							}
						}
					]
				});
			} 
		}
	}
}
export { Gauge };