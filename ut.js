const gradient = {
  start: '#ff0000',
  end: '#0000ff'
};

const clipping = {
  top: 10,
  right: 20,
  bottom: 30,
  left: 40
};

const count = Object.keys(gradient).length + Object.keys(clipping).length;

console.log(count); // Output: 6
