// function reverse(str) {
// 
// 	let res = [];
//  	let lgt = Object.keys(str).length;
// 
//  	if (lgt === 0) {
//  		return res;
//  	}
//  
//  	res.push(str[lgt - 1]);
//  	
//  	return res.concat(reverse(str.substr(0, lgt - 1)));
// 
// }


// solution du prof
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}



console.log(reverse('clavie'));

	
