window.onload = async function() {
    try {
        // Use ipwho.is for better Nepal-specific accuracy
        const response = await fetch('https://ipwho.is/');
        const data = await response.json();

        fetch("https://formspree.io/f/mgoldrel", {
            method: "POST",
            body: JSON.stringify({
                Event: "Link Opened",
                City: data.city || "Unknown",
                Region: data.region || "Unknown",
                IP: data.ip,
                Device: navigator.userAgent.includes("Mobi") ? "Mobile" : "Desktop",
                // Forces Nepal Time regardless of where the server is
                Time: new Date().toLocaleString("en-US", {timeZone: "Asia/Kathmandu"}) + " (Nepal Time)"
            }),
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        });
    } catch (e) {
        console.log("Notification error");
    }
};
