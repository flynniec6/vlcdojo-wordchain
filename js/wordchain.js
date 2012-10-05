$(function() {
    // document ready
    $('#iChainButton').click(function() {
    	var sStart = $('#iStartWord').val();
    	var sEnd   = $('#iEndWord').val();
        chainWords(sStart, sEnd);
    });
});

function chainWords(sStart, sEnd) {
	var msg = 'Chainy chainy!';
	msg = msg + '\nstart: ' + sStart;
	msg = msg + '\nend: ' + sEnd;
	alert(msg);
}
