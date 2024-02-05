let data = process.argv.slice(2);
console.log(data.reduce((acc, val) => acc + Number(val), 0));
