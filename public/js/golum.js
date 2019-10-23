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
            id="jsontext${count}">{"cards": [{"numbers": [
                            68,12,32,58,48,
                            61,19,59,22,44,
                            37,70,   38,72,
                            35,31,51,57,30,
                            55,7,18,75,64
                        ],"winPattern": [37,70,38,72],
                        "chests": [32,61,22,38,30,56],
                        "coins": [70,55],
                        "powerups": [ {
                                "id": 0,
                                "numbers": [
                                    48]}],"collectionItems": null},
                    {
                        "numbers": [
                            68,12,32,58,48,
                            61,19,59,22,44,
                            37,70,   38,72,
                            35,31,51,57,30,
                            55,7,18,75,64
                        ],
                        "winPattern": [
                            37,70,38,72
                        ],
                        "chests": [
                            32,61,
                            22,38,
                            30,56
                        ],
                        "coins": [
                            70,55
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
                "coinsCost": 73,
                "balls": [1,50,55,17,71,56,70,61,67,34,40,42,22,
                    20,74,2,26,10,44,49,16,52,58,7,72,23,21,66,
                    47,51,6,33,12,15,14,28,41,73,38,45,37,59,9,31,
                    39,8,29,64,27,11,32,57,5,75,68,3,
                    36,53,43,62,4,48,35,46,65,24,25,60,30,19,54,18,13,69,63],
                "powerups": [{
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
                        "name": "roundEnded"
                    },
                    {
                        "name": "bingoWon"
                    },
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