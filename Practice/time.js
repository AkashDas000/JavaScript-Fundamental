setInterval(() => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").innerText = time
},1000)