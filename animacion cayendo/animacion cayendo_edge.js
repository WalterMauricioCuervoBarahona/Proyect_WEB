/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cielo_nuevo',
                            type: 'image',
                            rect: ['0px', '0px', '700px', '425px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cielo%20nuevo.png",'0px','0px']
                        },
                        {
                            id: 'vector_bueno2_symbol_1',
                            symbolName: 'vector_bueno2_symbol_1',
                            type: 'rect',
                            rect: ['-388px', '-260px', '1184px', '1099px', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['0.09099','0.09099']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '700px', '425px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    data: [
                        [
                            "eid151",
                            "top",
                            0,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-260px',
                            '-260px'
                        ],
                        [
                            "eid152",
                            "top",
                            250,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-260px',
                            '-260px'
                        ],
                        [
                            "eid153",
                            "top",
                            500,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-260px',
                            '-260px'
                        ],
                        [
                            "eid154",
                            "top",
                            750,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-260px',
                            '-260px'
                        ],
                        [
                            "eid155",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-260px',
                            '-260px'
                        ],
                        [
                            "eid156",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-260px',
                            '-260px'
                        ],
                        [
                            "eid124",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-260px',
                            '-259px'
                        ],
                        [
                            "eid157",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-259px',
                            '-260px'
                        ],
                        [
                            "eid158",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-260px',
                            '-259px'
                        ],
                        [
                            "eid159",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-259px',
                            '-260px'
                        ],
                        [
                            "eid162",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-260px',
                            '-260px'
                        ],
                        [
                            "eid127",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid130",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid136",
                            "scaleX",
                            750,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            1000,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid145",
                            "scaleX",
                            1250,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid146",
                            "scaleX",
                            1500,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid147",
                            "scaleX",
                            2750,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid113",
                            "left",
                            0,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-488px',
                            '-478px'
                        ],
                        [
                            "eid114",
                            "left",
                            250,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-478px',
                            '-468px'
                        ],
                        [
                            "eid115",
                            "left",
                            500,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-468px',
                            '-458px'
                        ],
                        [
                            "eid116",
                            "left",
                            750,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-458px',
                            '-448px'
                        ],
                        [
                            "eid117",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-448px',
                            '-438px'
                        ],
                        [
                            "eid118",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-438px',
                            '-428px'
                        ],
                        [
                            "eid119",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-428px',
                            '-418px'
                        ],
                        [
                            "eid120",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-418px',
                            '-408px'
                        ],
                        [
                            "eid121",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-408px',
                            '-398px'
                        ],
                        [
                            "eid122",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-398px',
                            '-388px'
                        ],
                        [
                            "eid161",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '-388px',
                            '-388px'
                        ],
                        [
                            "eid128",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid131",
                            "scaleY",
                            250,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid137",
                            "scaleY",
                            750,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid140",
                            "scaleY",
                            1000,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid148",
                            "scaleY",
                            1250,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid149",
                            "scaleY",
                            1500,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ],
                        [
                            "eid150",
                            "scaleY",
                            2750,
                            0,
                            "linear",
                            "${vector_bueno2_symbol_1}",
                            '0.09099',
                            '0.09099'
                        ]
                    ]
                }
            },
            "vector_4_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'vector_4',
                            type: 'image',
                            rect: ['0px', '0px', '7208px', '376px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vector%204.png', '0px', '0px', '7208px', '376px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '400px', '376px']
                        }
                    }
                },
                timeline: {
                    duration: 3400,
                    autoPlay: true,
                    data: [
                        [
                            "eid19",
                            "height",
                            0,
                            0,
                            "linear",
                            "${vector_4}",
                            '0px',
                            '376px'
                        ],
                        [
                            "eid20",
                            "width",
                            0,
                            0,
                            "linear",
                            "${vector_4}",
                            '0px',
                            '400px'
                        ],
                        [
                            "eid21",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${vector_4}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid22",
                            "background-position",
                            200,
                            0,
                            "linear",
                            "${vector_4}",
                            [0,0],
                            [-400,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid23",
                            "background-position",
                            400,
                            0,
                            "linear",
                            "${vector_4}",
                            [-400,0],
                            [-800,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid24",
                            "background-position",
                            600,
                            0,
                            "linear",
                            "${vector_4}",
                            [-800,0],
                            [-1200,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid25",
                            "background-position",
                            800,
                            0,
                            "linear",
                            "${vector_4}",
                            [-1200,0],
                            [-1600,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid26",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${vector_4}",
                            [-1600,0],
                            [-2000,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid27",
                            "background-position",
                            1200,
                            0,
                            "linear",
                            "${vector_4}",
                            [-2000,0],
                            [-2400,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid28",
                            "background-position",
                            1400,
                            0,
                            "linear",
                            "${vector_4}",
                            [-2400,0],
                            [-2800,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid29",
                            "background-position",
                            1600,
                            0,
                            "linear",
                            "${vector_4}",
                            [-2800,0],
                            [-3200,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid30",
                            "background-position",
                            1800,
                            0,
                            "linear",
                            "${vector_4}",
                            [-3200,0],
                            [-3600,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid31",
                            "background-position",
                            2000,
                            0,
                            "linear",
                            "${vector_4}",
                            [-3600,0],
                            [-4000,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid32",
                            "background-position",
                            2200,
                            0,
                            "linear",
                            "${vector_4}",
                            [-4000,0],
                            [-4400,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid33",
                            "background-position",
                            2400,
                            0,
                            "linear",
                            "${vector_4}",
                            [-4400,0],
                            [-4800,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid34",
                            "background-position",
                            2600,
                            0,
                            "linear",
                            "${vector_4}",
                            [-4800,0],
                            [-5200,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid35",
                            "background-position",
                            2800,
                            0,
                            "linear",
                            "${vector_4}",
                            [-5200,0],
                            [-5600,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid36",
                            "background-position",
                            3000,
                            0,
                            "linear",
                            "${vector_4}",
                            [-5600,0],
                            [-6000,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid37",
                            "background-position",
                            3200,
                            0,
                            "linear",
                            "${vector_4}",
                            [-6000,0],
                            [-6400,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid38",
                            "background-position",
                            3400,
                            0,
                            "linear",
                            "${vector_4}",
                            [-6400,0],
                            [-6800,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "vector_5_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'vector_5',
                            type: 'image',
                            rect: ['0px', '0px', '4659px', '1077px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vector%205.png', '0px', '0px', '4659px', '1077px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1156px', '1057px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid46",
                            "height",
                            0,
                            0,
                            "linear",
                            "${vector_5}",
                            '0px',
                            '1057px'
                        ],
                        [
                            "eid47",
                            "width",
                            0,
                            0,
                            "linear",
                            "${vector_5}",
                            '0px',
                            '1156px'
                        ],
                        [
                            "eid48",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${vector_5}",
                            [0,0],
                            [-10,-10],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid49",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${vector_5}",
                            [-10,-10],
                            [-1171,-10],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid50",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${vector_5}",
                            [-1171,-10],
                            [-2332,-10],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid51",
                            "background-position",
                            1500,
                            0,
                            "linear",
                            "${vector_5}",
                            [-2332,-10],
                            [-3493,-10],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "vector_bueno2_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'vector_bueno',
                            type: 'image',
                            rect: ['0px', '0px', '14210px', '1099px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vector%20bueno2.png', '0px', '0px', '14210px', '1099px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1184px', '1099px']
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    data: [
                        [
                            "eid95",
                            "height",
                            0,
                            0,
                            "linear",
                            "${vector_bueno}",
                            '0px',
                            '1099px'
                        ],
                        [
                            "eid97",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${vector_bueno}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid98",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${vector_bueno}",
                            [0,0],
                            [-1184,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid99",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${vector_bueno}",
                            [-1184,0],
                            [-2368,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid100",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${vector_bueno}",
                            [-2368,0],
                            [-3552,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid101",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${vector_bueno}",
                            [-3552,0],
                            [-4736,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid102",
                            "background-position",
                            1250,
                            0,
                            "linear",
                            "${vector_bueno}",
                            [-4736,0],
                            [-5920,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid103",
                            "background-position",
                            1500,
                            0,
                            "linear",
                            "${vector_bueno}",
                            [-5920,0],
                            [-7104,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid104",
                            "background-position",
                            1750,
                            0,
                            "linear",
                            "${vector_bueno}",
                            [-7104,0],
                            [-8288,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid105",
                            "background-position",
                            2000,
                            0,
                            "linear",
                            "${vector_bueno}",
                            [-8288,0],
                            [-9472,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid106",
                            "background-position",
                            2250,
                            0,
                            "linear",
                            "${vector_bueno}",
                            [-9472,0],
                            [-10656,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid107",
                            "background-position",
                            2500,
                            0,
                            "linear",
                            "${vector_bueno}",
                            [-10656,0],
                            [-11840,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid108",
                            "background-position",
                            2750,
                            0,
                            "linear",
                            "${vector_bueno}",
                            [-11840,0],
                            [-13024,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid96",
                            "width",
                            0,
                            0,
                            "linear",
                            "${vector_bueno}",
                            '0px',
                            '1184px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animacion%20cayendo_edgeActions.js");
})("EDGE-1466370173");
