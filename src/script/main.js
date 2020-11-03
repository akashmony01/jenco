// page loader script 
// ========================================================================
$(window).on('load', function(){
	$(".loader").addClass("hidden");
});

// lang option opener 
// ========================================================================
$(document).ready(function(){
    $("#langOptionOpener").click(function(){
    	$("#langMenu").toggleClass('showed');
	});
});



// check form validation type
// ========================================================================

$(document).ready(function(){
    // check confirm password function
	function chkConfPass(e) {
        // main pass value
        var adminPass = $( "#userPass" ).val();
        // confirm pass value
        var confPass = $( "#confirmPass" ).val();

        // fail msg
        var failMsg = "<span class='failAlert'>Password doesn't match<span>";

        // getting the current parent
        var containerParent = $("#confirmPass").parents(".inputItem");


        if (adminPass != confPass) {
            $(containerParent).children(".failAlert").remove();
            $(containerParent).prepend(failMsg);

            e.preventDefault();
        }else{
            $(containerParent).children(".failAlert").remove();
        }
	}

    // form alidation function
    function formValidation() {
        $('form.regForm').find('input, textarea, select').each(function(){
            if($(this).prop('required')){
                // get input type
                var inputType = $(this).attr('type');

                // fail alert with span tatg and class 
                var failMsg = "<span class='failAlert'>This field is required<span>";

                // getting the current parent
                var containerParent = $( this ).parents(".inputItem");
                // alert container
                var alertContainer = $( containerParent ).children(".failAlert");

                // show fail msg
                function showFailMsg() {
                    // reseting label if already has alert
                    $( alertContainer ).remove();
                    // append fail message
                    $( containerParent ).prepend(failMsg);
                }

                // hide fail msg
                function hideFailMsg(){
                    $( alertContainer ).remove();
                }
                
                // for radio type input
                if (inputType == "radio") {                
                    if ($('input[type="radio"]:checked').length == 0) {        
                        showFailMsg();
                    }else{
                        hideFailMsg();
                    }
                }
                // for checkbox type input
                else if (inputType == "checkbox") {
                    if ($('input[type="checkbox"]:checked').length == 0) {        
                        showFailMsg();
                    }else{
                        hideFailMsg();
                    }
                }
                // for text, password, email, textare input 
                else{
                    if (!$(this).val()) {        
                        showFailMsg();
                    }else{
                        hideFailMsg();
                    }
                }

            }
        });
    }

    // hide fail msg by self focus out
    $( "input, textarea, select" ).focusout(function() {
        // getting the current parent
        var containerParent = $( this ).parents(".inputItem");
        // alert container
        var alertContainer = $( containerParent ).children(".failAlert");

        if ($(this).val()) {        
            // reseting label if already has alert
            $( alertContainer ).remove();
        }
    });

    // call conifrm password function 
    $( "#confirmPass" ).focusout(function(e) {
        chkConfPass(e);
    });

    // call validation function
    $("#submitForm").click(function(e){
        formValidation();
        chkConfPass(e);
    });
});