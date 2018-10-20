$('document').ready(function () {
    var $blue = '#2C30ED';
    var $orange = '#F4BD55';
    var $gray = '#A9B9C';
    var light = '#EAEAED';
    var $pink = '#FB517C';

    // progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    /* Remainingtime */
    var bar = new ProgressBar.Circle('#Remainingtime', {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {color: '#aaa', width: 1},
        to: {color: $orange, width: 4},
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText('');
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(1.0);  // Number from 0.0 to 1.0

    /* AvgSpeed */
    var bar = new ProgressBar.SemiCircle('#AvgSpeed', {
        strokeWidth: 6,
        color: $pink,
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: {color: '#FFEA82'},
        to: {color: $pink},
        // Set default step function for all animate calls
        step: function (state, bar) {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 100);
            bar.setText('');


            bar.text.style.color = state.color;
        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(1.0);  // Number from 0.0 to 1.0


})