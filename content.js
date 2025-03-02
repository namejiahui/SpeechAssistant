chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "speak" && message.text) {
        const utterance = new SpeechSynthesisUtterance(message.text);
        utterance.lang = "en-US";
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        speechSynthesis.speak(utterance);
    }
});
