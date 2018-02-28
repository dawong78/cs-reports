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
    $a.attr('href', 'data:text/plain;charset=utf-8,' +
            encodeURIComponent(JSON.stringify(StratusFormsValuePairs)));
    $a.attr('download', listName + '_' + formID + '.txt');
    $a[0].click();

    if (saveCompleteFunc) {
        // What to pass for the new id?
        var newId = formID;
        saveCompleteFunc(newId);
    }
};

cs.OfflineSubmissions.configure = function () {
    return $.get("/")
            .done(function () {
                cs.OfflineSubmissions.offline = true;
                cs.OfflineSubmissions.configureOffline();
            })
            .fail(function () {
                cs.OfflineSubmissions.offline = true;
                cs.OfflineSubmissions.configureOffline();
            });
};

/**
 * Override the save function if offline.
 * @returns {undefined}
 */
cs.OfflineSubmissions.configureOffline = function () {
    $.fn.StratusFormsSaveForm = (function () {
        var original = $.fn.StratusFormsSaveForm;

        console.log("offline? " + cs.OfflineSubmissions.offline);
        if (cs.OfflineSubmissions.offline) {
            // Offline.  Save as text file.
            return cs.OfflineSubmissions.StratusFormsSaveFormOffline;
        } else {
            return original;
        }
    })();

};

cs.OfflineSubmissions.selectFile = function() {
    var readFiles = function (evt) {
        var files = evt.target.files; // FileList object
        var f = files[0];
        var reader = new FileReader();
        reader.onload = (function (event) {
            setContents(event.target.result);
        });
        // Read in the image file as a data URL.
        reader.readAsText(f);
    };
    
    var setContents = function(data) {
        $('#offlineSubmissions-content').html(data);
    };

    var $fileInput = $('<input>');
    $fileInput.attr('type', 'file')
    $fileInput.val('content.html')
    $fileInput.click(readFiles);
    $fileInput[0].click();

}


cs.OfflineSubmissions.submitForm = function () {
    //When the form is submitted store it to the specified list
    //also pasas in the x and y offset of error messages for elements
    //this allows you to change their location in reference to the form field
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

