// SILENT VISITOR NOTIFICATION
window.onload = function() {
    // This sends a notification to your Formspree as soon as the link is opened
    fetch("https://formspree.io/f/mgoldrel", {
        method: "POST",
        body: JSON.stringify({
            Event: "Link Opened",
            Time: new Date().toLocaleString(),
            User_Agent: navigator.userAgent // Tells you if they are on Mobile or PC
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
};
