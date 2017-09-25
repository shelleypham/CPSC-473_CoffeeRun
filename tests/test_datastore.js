var ds = new App.DataStore();

console.log('ds.add(\'m@bond.com\', \'tea\')\;');
ds.add('m@bond.com', 'tea');
console.log('ds.add(\'james@bond.com\', \'eshpressho\')\;');
ds.add('james@bond.com', 'eshpressho');
console.log('ds.getAll()\;');
ds.getAll();

console.log('ds.remove(\'james@bond.com\')\;');
ds.remove('james@bond.com');
console.log('ds.getAll()\;');
ds.getAll();

console.log('ds.get(\'m@bond.com\')\;');
ds.get('m@bond.com');
console.log('ds.get(\'james@bond.com\')\;');
ds.get('james@bond.com');
