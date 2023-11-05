import ComponentA from "./components/component-a.js";
import ComponentB from "./components/component-b.js";

(() => {
    console.log('Entry A');

    const a = new ComponentA();
    const b = new ComponentB();
    a.on('test', (data) => {
        console.log(data);
        b.testMe();
    });

    b.on('test', (data) => {
        console.log(data);
    })

    a.testMe();
})();

