const libraryOptions = {
  bigIntCompat: false
};

function getBigIntCompat() {
  return libraryOptions.bigIntCompat;
};

function setBigIntCompat(val) {
  if (typeof val !== 'boolean') {
    throw new Error('dbus.setBigIntCompat() must be called with a boolean parameter');
  }
  libraryOptions.bigIntCompat = val;
};

module.exports.getBigIntCompat = getBigIntCompat;
module.exports.setBigIntCompat = setBigIntCompat;
