const id = "SpeechAssistant";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id,
    title: "Speech '%s'",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === id && info.selectionText) {
      chrome.tabs.sendMessage(tab.id, { action: "speak", text: info.selectionText });
  }
});
