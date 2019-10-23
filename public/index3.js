const currentUrl = $(location).attr('href');
$(function () {
  $("#tabs").tabs();
});
console.log("загрузил")
////--------START--------//////
if (localStorage.jsontext1) { $(jsontext1).val(localStorage.jsontext1) }
////--------Build--------//////
$(loader).hide()
function submitform() {
  var dataFrom1 = jsontext1.value;
  var dataFrom2 = jsontext2.value
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

function successSendJson(data) {
  console.log(data)
}

function checkJson(json) {
  try {
    JSON.parse(json);
  } catch (e) {
    return false;
  }
  return true;
}

function Table() {
  this.numbers = [];
  this.textarea
  this.cardtable
  this.winPattern = []
  this.chests = []
  this.coins = []
  this.balls = []
  this.coinsCost
  $(editorHolder).change((e) => {
    var target = e.target
    var isNumbersArea = $.contains(config1_table_numbers, target)
    var isPatternArea = $.contains(config1_table_win_patterns, target)
    var isChestsArea = $.contains(config1_table_chests, target)
    var isCoinsArea = $.contains(config1_table_coins, target)
    var isBallsArea = $.contains(config1_table_balls, target)
    var isCoinsCostArea = $.contains(config1_table_coinsCost, target)
    switch (true) {
      case isNumbersArea: this.updateNumbersInText();
        break;
      case isPatternArea: this.updateWinPatternInText();
        break;
      case isChestsArea: this.updateChestsInText();
        break;
      case isCoinsArea: this.updateCoinsInText();
        break;
      case isBallsArea: this.updateBallsInText();
        break;
      case isCoinsCostArea: this.updateCoinsCostInText();
        break;
    }
    this.findFirstWinPattern()
  })
  $(jsontext1).change((e) => {
    var target = e.target
    console.log("тук")
    this.setNewinTable();
    console.log("тук")
  })
};
Table.prototype.setNewinTable = function () {
  var text = $(jsontext1).val();
  var json = JSON.parse(text);
  localStorage.jsontext1 = text;
  this.numbers = json.cards[0].numbers;
  this.winPattern = json.cards[0].winPattern;
  this.chests = json.cards[0].chests;
  this.coins = json.cards[0].coins;
  this.balls = json.balls;
  this.coinsCost = json.coinsCost;
  $(config1_table_numbers).find("input").each((i, e) => {
    $(e).val(this.numbers[i]);
  });
  $(config1_table_win_patterns).find("input").each((i, e) => {
    $(e).val(this.winPattern[i]);
  });
  $(config1_table_chests).find("input").val(this.chests);
  $(config1_table_coins).find("input").val(this.coins);
  $(config1_table_balls).find("input").each((i, e) => {
    $(e).val(this.balls[i]);
  });
  $(config1_table_coinsCost).find("input").val(this.coinsCost);
  this.findFirstWinPattern()
}
Table.prototype.updateNumbersInText = function () {
  $(config1_table_numbers).find("input").each((i, e) => {
    var value = $(e).val() || 0
    this.numbers[i] = +value
  });
  var text = $(jsontext1).val()
  var json = JSON.parse(text)
  json.cards[0].numbers = this.numbers
  $(jsontext1).val(JSON.stringify(json, null, "\t"))
}
Table.prototype.updateWinPatternInText = function () {
  this.winPattern = []
  $(config1_table_win_patterns).find("input").each((i, e) => {
    var value = $(e).val() || false;
    if (value != 0) { this.winPattern.push(+value) }
    console.log(value != 0)
  });
  var text = $(jsontext1).val()
  var json = JSON.parse(text)
  json.cards[0].winPattern = this.winPattern
  $(jsontext1).val(JSON.stringify(json, null, "\t"))
}
Table.prototype.updateChestsInText = function () {
  this.chests = $(config1_table_chests).find("input").val().split(",").map(Number)
  var text = $(jsontext1).val()
  var json = JSON.parse(text)
  json.cards[0].chests = this.chests
  $(jsontext1).val(JSON.stringify(json, null, "\t"))
}
Table.prototype.updateCoinsInText = function () {
  this.coins = $(config1_table_coins).find("input").val().split(",").map(Number)
  var text = $(jsontext1).val()
  var json = JSON.parse(text)
  json.cards[0].coins = this.coins
  $(jsontext1).val(JSON.stringify(json, null, "\t"))
}
Table.prototype.updateBallsInText = function () {
  $(config1_table_balls).find("input").each((i, e) => {
    var value = $(e).val() || 0
    this.balls[i] = +value
  });
  var text = $(jsontext1).val()
  var json = JSON.parse(text)
  json.balls = this.balls
  $(jsontext1).val(JSON.stringify(json, null, "\t"))
}
Table.prototype.updateCoinsCostInText = function () {
  this.coinsCost = +$(config1_table_coinsCost).find("input").val()
  var text = $(jsontext1).val()
  var json = JSON.parse(text)
  json.coinsCost = this.coinsCost
  $(jsontext1).val(JSON.stringify(json, null, "\t"))
}
Table.prototype.findFirstWinPattern = function () {
  var numbersArr = this.numbers;
  var ballsArr = this.balls.slice().reverse()
  var winPatterns = [
    [0, 5, 10, 14, 19],
    [1, 6, 11, 15, 20],
    [2, 7, 16, 21],
    [3, 8, 12, 17, 22],
    [4, 9, 13, 18, 23],

    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13],
    [14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23],

    [0, 4, 19, 23],
    [0, 6, 17, 23],
    [19, 15, 8, 4]
  ];
  var controlSummPatterns = winPatterns.map((e, i) => {
    var summPattern = e.map((e, i) => {
      var cardElem = numbersArr[e]
      var newElem = ballsArr.findIndex((elem) => { return elem == cardElem })
      return newElem
    }).reduce((a, b) => a + b)
    return summPattern
  })
  var firstWinPatternIndex = indexOfSmallest(controlSummPatterns);
  var counter = 0
  $(config1_table_numbers).find("input").each((i, e) => {
    winPatterns[firstWinPatternIndex]
    if (winPatterns[firstWinPatternIndex].some((elem) => { return elem == i })) {
      $(e).addClass('greenHighlight');
    }
    else {
      $(e).removeClass('greenHighlight');
    }
  });
}

var mainTable = new Table()
mainTable.setNewinTable()



function indexOfSmallest(a) {
  var lowest = 0;
  for (var i = 1; i < a.length; i++) {
    if (a[i] < a[lowest])
      lowest = i;
  }
  return lowest;
}

function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }

  return maxIndex;
}