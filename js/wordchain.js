$(function() {
    // document ready
    $('#iStartWord').focus(function() {
        $('#dStartWord').removeClass('error');
        $('#mStartWord').text('');
    });

    $('#iEndWord').focus(function() {
        $('#dEndWord').removeClass('error');
        $('#mEndWord').text('');
    });

    $('#iChainButton').click(function() {
        checkInputs();
    });
    
    $('input').keypress(function(e) {
        if(e.which == 13) {
        	checkInputs();
        }
    });

	$('#iStartWord').focus();
});

function checkInputs() {
	var sStart = $('#iStartWord').val();
	var msgStart = "";
	var errStart = false;
	if (sStart == "") { 
		msgStart = "Starting word required";
		errStart = true;
	}
		
	var sEnd   = $('#iEndWord').val();
	var msgEnd = "";
	var errEnd = false;
	if (sEnd == "") { 
		msgEnd = "Ending word required";
		errEnd = true;
	}
	
	// update screen
	if (errStart || errEnd) {
		if (errStart) {
			$('#mStartWord').text(msgStart);
			$('#dStartWord').addClass("error");
		}
	
		if (errEnd) {
			$('#mEndWord').text(msgEnd);
			$('#dEndWord').addClass("error");
		}
	}
	else {	// no errors in input
		chainWords(sStart, sEnd);
	}
}

function chainWords(start, end) {
	var chainer = new Chainer(start, end);

	if (!chainer.isValid()) { 
		$('#chainResults').html('<p>Says the words are not valid.</p>'); 
		return;
	}

	if (!chainer.isOKDictionary()) { 
		$('#chainResults').html('<p>Says the words are not in the dictionary.</p>'); 
		return;
	}

	if (chainer.isImpossible()) {
		$('#chainResults').html('<p>' + 'No chain possible' + '</p>');
		return;
	}

	$('#blist').html('<p>' + dump(chainer.getChain()) + '</p>');
}

function dump(obj) {
    var out = '';
    for (var i in obj) {
        out = out + i + ": " + obj[i] + "\n";
    }
	return(out);
}

