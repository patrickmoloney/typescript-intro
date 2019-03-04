export class TodoStore<T extends object> {
  private localStore: Storage;

  constructor() {
    this.localStore = sessionStorage;
  }

  public getStore(key: string): T {
    return JSON.parse(this.localStore.getItem(key) || "[]");
  }

  public setStore(item: {key: string, value: T}) {
    this.localStore.setItem(item.key, JSON.stringify(item.value));
  }
}
