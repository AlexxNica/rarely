# rarely
An Javascript Snipper for making Random things that you can control rarity

# Example
```javascript
let rr = new Rarely({ frequency : 1, rareEffeciency : 2 });
	rr.call((chest) => { console.log(`Wow, you got ${ chest} chest`); });
	rr.err((chest) => { console.log(`Oh, no, you not get the ${ chest } chest`); });
	rr.run('Super magical');
```

# License
MIT-License