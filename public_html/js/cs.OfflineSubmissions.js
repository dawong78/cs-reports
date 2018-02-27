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

$(function () {
    // Override the save function if offline.
    // Override on document ready to allow html page to set the offline flag.
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

});

