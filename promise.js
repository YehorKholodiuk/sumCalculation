const sum = (...args) => new Promise ((res,rej) => {res( args.reduce((a, c)=> a + (Number.isNaN(+c) ? 0 : +c ),0))
rej('Error')
});
sum (1,'2',3,9, 'qwe').then (console.log)
