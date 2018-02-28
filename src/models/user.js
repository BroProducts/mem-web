class ModelUser {
  constructor(obj) {
    var obj = obj || {};
    this.id = obj.id || undefined;
    this.displayName = obj.displayName || '';
    this.email = obj.email || '';
  }
}
export default ModelUser;
