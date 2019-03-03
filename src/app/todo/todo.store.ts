export class TodoStore<T> {
  private localStore: any;

  constructor() {
    this.localStore = sessionStorage;
  }

  getStore(item: {key: string, value: T}) {
    return JSON.parse(this.localStore.getItem(item.key));
  }

  setStore(item: {key: string, value: T}) {
    this.localStore.setItem(item.key, JSON.stringify(item.value));
  }
}