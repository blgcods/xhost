self.addEventListener('connect', event => {
    event.ports[0].addEventListener('message', event => {
        var request = new XMLHttpRequest();
        request.withCredentials = true;
        request.open('GET', "/php/api/channel/getInfo", true);
        request.send(null);
    });
});
