class EventEmitter {

    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (typeof this.events[event] !== 'object') {
            this.events[event] = [];
        }
        this.events[event].push(listener);
        return () => this.removeListener(event, listener);
    }

    removeListener(event, listener) {
        if (typeof this.events[event] === 'object') {
            const idx = this.events[event].indexOf(listener);
            if (idx > -1) {
                this.events[event].splice(idx, 1);
            }
        }
    }

    emit(event, ...args) {
        if (typeof this.events[event] === 'object') {
            this.events[event].forEach(listener => listener.apply(this, args));
        }
    }

    once(event, listener) {
        const remove = this.on(event, (...args) => {
            remove();
            listener.apply(this, args);
        });
    }
}

/**
 *
 * @return {EventEmitter}
 */
export function getEventEmitter() {
    if (typeof window.visOnboarding === 'undefined') window.visOnboarding = {};
    if (typeof window.visOnboarding.eventEmitter === 'undefined') {
        window.visOnboarding.eventEmitter = new EventEmitter();
    }
    return window.visOnboarding.eventEmitter;
}