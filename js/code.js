$('document').ready(function () {

    /* Colors */
    var $blue = '#2C30ED';
    var $orange = '#F4BD55';
    var $gray = '#A9B9C';
    var light = '#EAEAED';
    var $pink = '#FB517C';


    /* Drop down*/
    //Initialize with the list of symbols
    let names = ["New York", "Alaska", "Minnesota"]

//Find the input search box
    let search = document.getElementById("searchCoin")

//Find every item inside the dropdown
    let items = document.getElementsByClassName("dropdown-item")

    function buildDropDown(values) {
        let contents = []
        for (let name of values) {
            contents.push('<input type="button" class="dropdown-item" type="button" value="' + name + '"/>')
        }
        $('#menuItems').append(contents.join(""))

        $('#dropdown_coins').text($('.dropdown-item')[0].value)
        //Hide the row that shows no items were found
        $('#empty').hide()
    }

//Capture the event when user types into the search box
    window.addEventListener('input', function () {
        filter(search.value.trim().toLowerCase())
    })

//For every word entered by the user, check if the symbol starts with that word
//If it does show the symbol, else hide it
    function filter(word) {
        let length = items.length
        let collection = []
        let hidden = 0
        for (let i = 0; i < length; i++) {
            if (items[i].value.toLowerCase().startsWith(word)) {
                $(items[i]).css({display: 'block'})
            }
            else {
                $(items[i]).css({display: 'none'})
                hidden++
            }
        }

        //If all items are hidden, show the empty view
        if (hidden === length) {
            $('#empty').show()
        }
        else {
            $('#empty').hide()
        }
    }

//If the user clicks on any item, set the title of the button as the text of the item
    $('#menuItems').on('click', '.dropdown-item', function () {
        $('#dropdown_coins').text($(this)[0].value)
        $("#dropdown_coins").dropdown('toggle');
        $('#searchCoin').val("")
        filter("")
    })
    buildDropDown(names)


    /* ################### Remainingtime #################### */
    $('#Remainingtime').circleProgress({
        value: 0.75,
        size: 80,
        fill: {
            gradient: ["red", "orange"]
        }
    });
    /* ################### AvgSpeed #################### */

    $('#AvgSpeed').circleProgress({
        value: 0,
        size: 80,
        fill: {
            gradient: ["red", "orange"]
        }
    });

})