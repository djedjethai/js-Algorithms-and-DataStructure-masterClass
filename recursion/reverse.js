function reverse(str) {

	let res = '';
	const lgt = Object.keys(str).length;

	if (lgt === 0) {
		return res;
	}

	res = str[lgt - 1];
	// console.log(res);
	
	str = str.substr(0, lgt - 1);

	// voir precedentes recurse de ce style...
	res.concat('', reverse(str));
	return res;
}

console.log(reverse('clavie'));

// let res = [];
// 	const lgt = Object.keys(str).length;
// 
// 	if (lgt === 0) {
// 		return res;
// 	}
// 
// 	res.push(str[lgt - 1]);
// 	console.log(res);
// 	
// 	str = str.substr(0, lgt - 1);
// 
// 	console.log(str[0]);
// 	// voir precedentes recurse de ce style...
// 	res = res.concat( reverse(str));
// 	return res;

