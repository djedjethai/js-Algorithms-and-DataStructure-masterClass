// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!

	// does number impaire
	if (str % 0) return false;
	// the stop recursion is at half obj floor()
	if (str.length === Math.floor(str/2)) {
		return false;
	}
	// then recursive return
	isPalindrome(str.slice()) // voir reverse.....
	// compare each recursive return with each leaving elmt 
	// if no match return false => end


}
