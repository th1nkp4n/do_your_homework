chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "alarm_action" ) {
      console.log("you browsed too long");
    }
  }
);