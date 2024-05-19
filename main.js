String.prototype.toJadenCase = function () {
    let str = this.split(' ').map((x) => x[0].toUpperCase() + x.slice(1)).join(' ')
    return str
  };