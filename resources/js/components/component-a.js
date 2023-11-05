/**
 *
 * @typedef { import('event-emitter') } EventEmitter
 * @property { function } emit
 * @property { function } on
 */
import ee from 'event-emitter';


/**
 * @class
 * @extends EventEmitter
 */
class ComponentA {
    constructor(props) {
        console.log('component a');
        console.log(ee);
    }
}

ee(ComponentA.prototype);

ComponentA.prototype.testMe = function () {
    this.emit('test', {data: 'A was tested'});
}

export default ComponentA;
