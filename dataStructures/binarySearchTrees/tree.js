class Node {
	constructor(value){
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null
	}

	insert(val){
		if(this.root.value === null) {
			this.root = new Node(val)
			return
		}
		
		function recurs(val) {

		// end cases
		if(val < this.root.left && val < this.root.right){
			this.root.left.left = new Node(val)
			return
		}

		if(val > this.root.left && val < this.root.right && this.root.right.right === null){
			this.root.right.left = new Node(val)
			return
		}

		if(val > this.root.left && val < this.root.right && this.root.left.left === null){
			this.root.left.right = new Node(val)
			return
		}

		if(val > this.root.left && val > this.root.right){
			this.root.right.right = new Node(val)
			return
		}

		// synthetise this part in a recursive way
		if(val < this.root.val) {
			this.root = this.root.left

			recurs(val)				
		} else {
			this.root = this.root.right

			recurs(val)
		}
	}

		// synthetise this part in a recursive way
		// if(val < this.root.val) {
		// 	this.root = this.root.left
		// 	if(val < this.root.val){
		// 		this.root = this.root.left
		// 		
		// 	} else {
		// 		this.root = this.root.right
		// 	}
		// } else {
		// 	this.root = this.root.right
		// }
		
	}
}
