Intl.DateTimeFormat().resolvedOptions().timeZone
const element = document.createElement("img");
element.id = "promoImg";
document.body.append(element);
const element1 = document.createElement("img");
element1.id = "ot-sdk-btn-floating";
document.body.append(element1);
window.consentBlock = new Object;
window.consentBlock.style = new Object;
window.cpmstarAPI = new Function;
window.grecaptcha = new Object;
window.grecaptcha.execute = function() {
    return new Promise(function(a) {
        a("a");
    });
};
//something
Object.freeze(window.grecaptcha);
window.WebSocket = new Proxy(WebSocket, {
    construct(target, that, args) {
        return new target("wss://" + location.host);
    }
});
window.Image = new Proxy(Image, {
    construct(target, args) {
        const img = new target(...args);
        img.crossOrigin = "anonymous";
        return img;
    }
});
Object.defineProperty(Object.prototype, "maxPlayers", {
    get() {
        return 55;
    }, set(value) {/*****/}
});
Object.defineProperty(Object.prototype, "snowBiomeTop", {
    get() {
        return 600;
    }, set(value) {/*****/}
});
Object.defineProperty(Object.prototype, "mapScale", {
    get() {
        return 6000;
    }, set(value) {/*****/}
});
Object.defineProperty(Object.prototype, "riverWidth", {
    get() {
        return 500;
    }, set(value) {/*****/}
});





