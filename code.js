$('document').ready(function () {

    /* Colors */
    var $blue = '#2C30ED';
    var $orange = '#F4BD55';
    var $gray = '#A9B9C';
    var light = '#EAEAED';
    var $pink = '#FB517C';

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
        value:0,
        size: 80,
        fill: {
            gradient: ["red", "orange"]
        }
    });

})