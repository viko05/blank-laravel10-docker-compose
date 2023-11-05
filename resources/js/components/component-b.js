/**
 * @typedef { import('event-emitter').methods } EventEmitter
 * @property { function } emit
 * @property { function } on
 */
import ee from 'event-emitter';

/**
 * @extends EventEmitter
 * @constructor
 */
const ComponentB = function () {

}

ee(ComponentB.prototype);

ComponentB.prototype.testMe = function () {
    this.emit('test', {data: 'B was tested'});
}

export default ComponentB;
