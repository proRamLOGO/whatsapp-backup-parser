export function requestFullScreen( fullScreen ) {

    var doc = window.document;
    var docEl = doc.documentElement;      
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (fullScreen==='enabled') {
        cancelFullScreen.call(doc);
    } else {
        requestFullScreen.call(docEl);
    }

    return true;

}
