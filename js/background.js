chrome.tabs.onUpdated.addListener(checkUpdate);
var timeLeft= 1800000;
function checkUpdate(integer tabId, object changeInfo, Tab tab) {    
    if (changeInfo.contains("buzzfeed") {
        chrome.alarms.create("alarm", Date.now() + timeLeft);
    } else {
        chrome.alarms.get("alarm", function(Alarm al) {
          timeLeft = al.when-Date.now();
        });
        chrome.alarms.clear("alarm");
        chrome.alarms.create("calm", Date.now() + 1200000);
    }
    
}
