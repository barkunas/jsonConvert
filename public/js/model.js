class Model {
    constructor(jsonFiled, viewPort) {
        this.viewPort = viewPort
        this.jsonFiled = jsonFiled;
        this.data
    }
    updateFromTextModel() {
        try {
            this.data = JSON.parse($(this.jsonFiled).val())
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }
    updateFromEditorModel() {
        var thisModel = this
        new ModelValidator()
        try {
            checkEdgeCases(this.data)
            var jsonFromTextField = JSON.parse($(this.jsonFiled).val())
            for (var configElem in this.data) {
                jsonFromTextField[configElem] = this.data[configElem]
            }
            $(this.jsonFiled).val(JSON.stringify(jsonFromTextField, null, "\t"))
            return true
        } catch (e) {
            console.log(e)
            return false
        }
        function checkEdgeCases(data) {

            edgeCasebingoPattern(data)
            function edgeCasebingoPattern(modelData) {
                var cards = modelData.cards
                for (i = 0; i < cards.length; i++) {
                    var bingoPattern = cards[i].bingoPattern
                    modelData.cards[i].bingoPattern = bingoPattern.filter(function (e) {
                        var check = e > 0
                        console.log(check)
                        return check 
                    })
                }
            }
        }
    }
}
