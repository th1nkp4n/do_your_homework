chrome.tabs.onUpdated.addListener(checkUpdate);
var timeLeft= 1800000;
function checkUpdate(integer tabId, object changeInfo, Tab tab) {    
    if (changeInfo.contains("buzzfeed") {
        chrome.alarms.create("alarm", Date.now() + timeLeft);
        chrome.alarms.clear("calm");
    } else {
        var good = true;//checks to see if 
        alarms.getAll(function(Al) {
            for (alarm a: Al) {
                if (a.name == "calm") {
                    good = false;
                }
            }
        });
        chrome.alarms.get("alarm", function(Alarm al) {
          timeLeft = al.when-Date.now();
        });
        chrome.alarms.clear("alarm");
        if (good) {
            chrome.alarms.create("calm", Date.now() + 1200000);
        }        
    }
    
}
chrome.browserAction.onAlarm.addListener(function(Alarm al) {
      if(al.name.equals("calm")) {
          timeLeft= 1800000;
      } else {
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "alarm_action"});
          });
      }
});
