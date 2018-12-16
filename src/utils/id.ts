export function generateId() {
  return 'dpxxxxxxxxxxx'.replace(/[x]/g, function (_) {
    // tslint:disable-next-line:no-bitwise
    const val = Math.random() * 16 | 0;
    return val.toString(16);
  });
}
