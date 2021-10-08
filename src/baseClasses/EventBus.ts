// eslint-disable-next-line no-unused-vars
type CallBackFunction = (...args: any[]) => {};

export default class EventBus {
  listeners: Record<string, Array<(CallBackFunction)>>

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: CallBackFunction) {
    if (!this.listeners[event]) {
      this.listeners[event].push(callback);
    }
  }

  emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) {
      throw new Error('No such event exists');
    }
    this.listeners[event].forEach((listener) => {
      listener(args);
    });
  }
}