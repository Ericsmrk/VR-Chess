

$ = (queryString) => document.querySelector(queryString);

const shiftHue = (hue) => (hue + 1) % 360;

let hue = 0;

const animate = () => {
    hue = shiftHue(hue);
    const color = `hsl(${hue}, 100%, 50%)`;
 

    const rotation = `0 ${100*Math.sin(Date.now()/1000)} 0`;
    $('a-box').setAttribute('rotation', rotation);
    requestAnimationFrame(animate);
};


requestAnimationFrame(animate);
