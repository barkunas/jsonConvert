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
        console.log("tututu")
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

            edgeCaseWinPattern(data)
            function edgeCaseWinPattern(modelData) {
                var cards = modelData.cards
                for (i = 0; i < cards.length; i++) {
                    var winPattern = cards[i].winPattern
                    modelData.cards[i].winPattern = winPattern.filter(function (e) {
                        var check = e > 0
                        console.log(check)
                        return check 
                    })
                }
            }
        }
    }
}