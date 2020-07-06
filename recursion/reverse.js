function reverse(str) {

	let res = [];
	const lgt = Object.keys(str).length;

	if (lgt === 0) {
		return res;
	}

	res.push(str[0]);
	
	str.slice(1);

	console.log(str[0]);
	// voir precedentes recurse de ce style...
//	res = res.concat( reverse(str));
	return str;
}

console.log(reverse('clavie'));
