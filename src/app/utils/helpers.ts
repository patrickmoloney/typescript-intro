function token(): string {
  return Math.floor((Math.random() + 1) * 0x10000)
    .toString(16);
}

export function guid(): string {
  return [token(), token(), token()].join('-');
}