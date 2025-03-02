const id = "SpeechAssistant"

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id,
    title: "Speech '%s'",
    contexts: ["selection"]
  });
});
  
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === id) {
    chrome.tts.speak(info.selectionText);
  }
});