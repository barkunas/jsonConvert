class Golum {
    constructor() {
        this.modeleArr = [];
        this.controllerArr = [];
        this.viewArr = [];
        this.countGolum = 0
        $(btnStartBuild).on('click', (e) => {
            this.submitform()
        })
    }
    createNewConfig() {
        var count = this.countGolum++
        this.generateTabsContainer(count)
        $(window).ready(() => {
            var jtxtfiled = document.getElementById("jsontext" + count)
            var vp = document.getElementById("viewPort" + count)
            this.modeleArr[count] = new Model(jtxtfiled, vp)
            this.controllerArr[count] = new Controller(this.modeleArr[count])
            this.viewArr[count] = new View(this.modeleArr[count])
        })
    }
    generateTabsContainer(num) {
        var count = num
        var liTemplate = `<li><a href="#tabs-${count}">round${count + 1}_config.json</a></li>`
        $(tabs).find("ul").append($(liTemplate))
        var template =
            `<div id="tabs-${count}"><div class="bblock">
        <textarea  style="width: 700px; height: 600px; margin: 1em; background: rgb(255, 243, 211)"
            id="jsontext${count}">{
                "isLastRound":false,
                "cards": [
                    {
                        "numbers": [
                            11,
                            18,
                            37,
                            54,
                            75,
                            8,
                            22,
                            40,
                            55,
                            67,
                            1,
                            30,
                            51,
                            62,
                            5,
                            19,
                            41,
                            60,
                            71,
                            15,
                            16,
                            38,
                            47,
                            66
                        ],
                        "bingoPattern": [
                            1,
                            30,
                            51,
                            62
                        ],
                        "chests": [
                            11,
                            40,
                            62,
                            15,
                            38
                        ],
                        "coins": [
                            75
                        ],
                        "powerups": [
                            {
                                "id": 0,
                                "numbers": [
                                    48
                                ]
                            }
                        ],
                        "collectionItems": null
                    }
                ],
                "cellCoinsPrize": 73,
                "balls": [5, 60, 14, 53, 70, 18, 57, 47, 42, 50, 43, 1, 21, 15, 
                          55, 33, 9, 32, 40, 29, 56, 41, 38, 59, 36, 39, 27, 10, 
                          30, 51, 6, 76, 44, 74, 46, 35, 17, 28, 45, 48, 68, 34, 
                          64, 22, 11, 37, 49, 26, 2, 62, 65, 54, 19, 72, 63, 52, 
                          67, 58, 16, 8, 31, 23, 66, 20, 12, 7, 73, 24, 61, 69, 25, 71, 3, 13, 4],
                "powerups": [
                    {
                        "id": 0,
                        "name": "instantWin"
                    },
                    {
                        "id": 1,
                        "name": "dobleXP"
                    }
                ],
                "statsEnabled": true,
                "ranksEnabled": true,
                "events": [
                    {
                        "name": "ballCalled",
                        "coreHandler": "//LOGIC WILL BE HARDCODED, BUT PARAMS MAY BE CONFIGURABLE",
                        "everyTimeHandler": null,
                        "sequentialHandlers": [
                            {
                                "index": 4,
                                "actions": [
                                    {
                                        "name": "showTip",
                                        "config": {
                                            "nodeId": "less_bingos_left_alert",
                                            "state": "show"
                                        }
                                    },
                                    {
                                        "name": "WinBingo",
                                        "config": {
                                            "nodeId": "top3",
                                            "state": "1st_won"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "powerupClicked",
                        "coreHandler": "//LOGIC WILL BE HARDCODED, BUT PARAMS MAY BE CONFIGURABLE",
                        "everyTimeHandler": {
                            "actions": [
                                {
                                    "name": "sendAnalitics",
                                    "config": {}
                                }
                            ]
                        },
                        "sequentialHandlers": null
                    },
                    {
                        "name": "bingoClicked",
                        "coreHandler": "//LOGIC WILL BE HARDCODED, BUT PARAMS MAY BE CONFIGURABLE",
                        "everyTimeHandler": {
                            "actions": [
                                {
                                    "name": "sendAnalitics",
                                    "config": {}
                                }
                            ]
                        },
                        "sequentialHandlers": null
                    },
                    {
                        "name": "badBingoClicked",
                        "everyTimeHandler": {
                            "actions": [
                                {
                                    "name": "sendAnalitics",
                                    "config": {}
                                }
                            ]
                        },
                        "sequentialHandlers": null
                    },
                    {
                        "name": "bingoReached",
                        "coreHandler": "//LOGIC WILL BE HARDCODED, BUT PARAMS MAY BE CONFIGURABLE",
                        "everyTimeHandler": {
                            "actions": [
                                {
                                    "name": "sendAnalitics",
                                    "config": {}
                                }
                            ]
                        },
                        "sequentialHandlers": null
                    }
                ],
                "cellEvents": [
                    {
                        "name": "cellDaubed",
                        "coreHandler": "//LOGIC WILL BE HARDCODED, BUT PARAMS MAY BE CONFIGURABLE",
                        "everyTimeHandler": {
                            "actions": [
                                {
                                    "name": "sendAnalitics",
                                    "config": {}
                                }
                            ]
                        },
                        "sequentialHandlers": null
                    },
                    {
                        "name": "badCellDaubed",
                        "everyTimeHandler": {
                            "actions": [
                                {
                                    "name": "sendAnalitics",
                                    "config": {}
                                }
                            ]
                        },
                        "sequentialHandlers": null
                    },
                    {
                        "name": "missedCellDaubed",
                        "coreHandler": "//LOGIC WILL BE HARDCODED, BUT PARAMS MAY BE CONFIGURABLE",
                        "everyTimeHandler": {
                            "actions": [
                                {
                                    "name": "sendAnalitics",
                                    "config": {}
                                }
                            ]
                        },
                        "sequentialHandlers": null
                    },
                    {
                        "name": "chestCellDaubed",
                        "coreHandler": "//LOGIC WILL BE HARDCODED, BUT PARAMS MAY BE CONFIGURABLE",
                        "everyTimeHandler": {
                            "actions": [
                                {
                                    "name": "sendAnalitics",
                                    "config": {}
                                }
                            ]
                        },
                        "sequentialHandlers": null
                    },
                    {
                        "name": "coinsCellDaubed",
                        "coreHandler": "//LOGIC WILL BE HARDCODED, BUT PARAMS MAY BE CONFIGURABLE",
                        "everyTimeHandler": {
                            "actions": [
                                {
                                    "name": "sendAnalitics",
                                    "config": {}
                                }
                            ]
                        },
                        "sequentialHandlers": null
                    }
                ]
            }</textarea></div>
            <div  id="viewPort${count}" class="container bblock"><p>Balls</p>
                    
                </div>
      </div>`
        $(tabs).append($(template))
    }
    submitform() {
        const currentUrl = $(location)[0].origin + "/";
        var dataFrom1 = jsontext0.value;
        var dataFrom2 = jsontext1.value
        var dataFrom = "[" + dataFrom1 + "," + dataFrom2 + "]"
        if (!checkJson(dataFrom)) {
            $(jsontext1).animate({
                backgroundColor: "#aa0000",
                color: "#fff"
            }, 300);
            $(jsontext1).animate({
                backgroundColor: "#ffffff",
                color: "#000"
            }, 300);
            return false
        }
        $(loader).show()


        $.ajax({
            type: "POST",
            url: currentUrl + "sendjson",
            data: dataFrom,
            success: function (data) {
                $(placeholder).text(currentUrl + 'results/' + data.segment + '/package.bip').attr("href", currentUrl + 'results/' + data.segment + '/package.bip')
                $(loader).hide()
            },
            dataType: "json",
            contentType: "application/json"
        });
    }
}

//---------------------------------------------------//
function checkJson(json) {
    try {
        JSON.parse(json);
    } catch (e) {
        return false;
    }
    return true;
}