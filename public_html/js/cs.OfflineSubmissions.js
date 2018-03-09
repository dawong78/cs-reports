var cs = {};
cs.OfflineSubmissions = {};

/**
 * Controls whether the form is saved to a live website or downloaded.
 * @type Boolean
 */
cs.OfflineSubmissions.offline = false;

/**
 * Save the stratus form as a file for the user to download.
 * @param {type} listName
 * @param {type} formID
 * @param {type} StratusFormsValuePairs
 * @param {type} saveCompleteFunc
 * @param {type} StratusFormsChildListData
 * @returns {undefined}
 */
cs.OfflineSubmissions.StratusFormsSaveFormOffline = function (listName, formID,
        StratusFormsValuePairs, saveCompleteFunc, StratusFormsChildListData) {
    console.log("saving offline");
    console.log(StratusFormsValuePairs);

    $a = $('<a>');
    $a.css({'visible': false});
    $a.attr('href', 'data:text/plain;charset=utf-8,' + StratusFormsValuePairs[0][1]);
    $a.attr('download', listName + '_' + formID + '.txt');
    $('body').append($a);
    $a[0].click();
    $a.remove();

    if (saveCompleteFunc) {
        // What to pass for the new id?
        var newId = formID;
        saveCompleteFunc(newId);
    }
};

/**
 * Override the load behavior.  Instead of grabbing data from sharepoint,
 * grab it from a file the user selects.
 * @param {type} form
 * @param {type} id
 * @param {type} listName
 * @param {type} StratusFormsDataField
 * @param {type} listFieldsArray
 * @returns {Promise}
 */
cs.OfflineSubmissions.StratusFormsLoadFormFields = function (form, id, listName, 
        StratusFormsDataField, listFieldsArray) {
    var $defer = $.Deferred();
    cs.OfflineSubmissions.readFiles()
            .done(function(json) {
                $defer.resolve(json, '', null, listFieldsArray);
            });
    return $defer;
};

/**
 * Configure for offline or online.
 * If get() fails, then we are offline.
 * @returns
 */
cs.OfflineSubmissions.configure = function () {
    return $.get("/")
            .done(function () {
                cs.OfflineSubmissions.offline = false;
            })
            .fail(function () {
                cs.OfflineSubmissions.offline = true;
                cs.OfflineSubmissions.configureOffline();
            });
};

/**
 * Override the sharepoint functions if offline.
 * @returns {undefined}
 */
cs.OfflineSubmissions.configureOffline = function () {
    // Override the save function
    $.fn.StratusFormsSaveForm = cs.OfflineSubmissions.StratusFormsSaveFormOffline;
    
    // Override the load function
    $.fn.StratusFormsLoadFormFields = cs.OfflineSubmissions.StratusFormsLoadFormFields;
    
    cs.OfflineSubmissions.addOpenButton();
};

cs.OfflineSubmissions.addOpenButton = function() {
    // Add an open button
    
    var $div = $('<div>');
    var $fileInput = $('<input id="cs-file" type="file">');
    $fileInput.css({'display': 'none'});
    $fileInput.change(function() {
        $('#cs-file-name').val($('#cs-file').val());
        cs.OfflineSubmissions.initializeForm();
    });
    $div.append($fileInput);
    
    var $textInput = $('<input id="cs-file-name" readonly>');
    $div.append($textInput);
    
    var $openButton = $('<button>Open</button>');
    $openButton.click(function() {
        $('#cs-file')[0].click();
    });
    $div.append($openButton);
    // Add to top of page
    $('#SFForm').before($div);

};

/**
 * When loading a file, need to call StratusFormsInitialize.
 * @returns {undefined}
 */
cs.OfflineSubmissions.initializeForm = function() {
    $("#SFForm").StratusFormsInitialize({
        'listID': 1
    });
};

/**
 * Select a file, load its contents, pass the contents to the promise.
 * @returns {Promise}
 */
cs.OfflineSubmissions.readFiles = function() {
    var files = $('#cs-file')[0].files;
    var $d = new $.Deferred();
    var f = files[0];
    var reader = new FileReader();
    reader.onload = (function (event) {
        $d.resolve(event.target.result);
    });
    // Read in the image file as a data URL.
    reader.readAsText(f);
    return $d;
};

/**
 * Call to save the form.
 */
cs.OfflineSubmissions.submitForm = function () {
    //When the form is submitted store it to the specified list
    $("#SFForm").StratusFormsSubmit({
        listName: "MyList",
        completefunc: function (id) {
            // Don't reload when offline.
            if (!cs.OfflineSubmissions.offline) {
                alert("Save was successful. ID = " + id);
                window.location = window.location.pathname + "?formID=" + id;
            }
        }
    });
};



$(function () {
    //Initialization function. Tells StratusForms which Query String Variable
    //has the ID of the form, and the name of the list to read data from
    $("#SFForm").StratusFormsInitialize({
        queryStringVar: "formID",
        listName: "MyList"
    });

    // Override on document ready to allow html page to set the offline flag.
    cs.OfflineSubmissions.configure();
});

