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

		let tree = this.root
		// let newTail = current
		let ref = this.root 
		
		
		function rec(tree){

			if(tree === null) {
				ref = new Node(val)
				tree = new Node(val)
				return 
			}

			// console.log("tree1: ", tree)
			if(val < tree.value && tree.left !== null) {			
				rec(tree.left)
			} 
			if(val > tree.value && tree.right !== null){
				rec(tree.right)
			}

			let newNode = new Node(val)
			// console.log("tree2: ", tree)
		    	// end cases
			if(tree.left === null && val < tree.value){
				tree.left = newNode
				tree = newNode
				return
			} 

			if(tree.right === null && val > tree.value){
				tree.right = newNode
				tree = newNode
				return
			}
	// 	
			// // case between nodes.value and node.side
			// if(val > this.root.left && val < this.root.value && this.root.left.right === null){
			// 	this.root.left.right = new Node(val)
			// 	return
			// }

			// if(val > this.root.value && val < this.root.right && this.root.right.left === null){
			// 	this.root.right.left = new Node(val)
			// 	return
			// }

			// synthetise this part in a recursive way
					}

		rec(tree)

		this.root = ref

	}

	get(){
		console.log(this.root)
	}				
	
}

let bst = new BinarySearchTree()

bst.insert(2)
bst.insert(3)
bst.insert(1)
bst.insert(4)
bst.insert(6)
bst.insert(0)

bst.get()

// case all left or all right
			// if(val < tree.left && val < tree.right){
			// 	ref.left = new Node(val)
			// 	return ref
			// }

			// if(val > tree.left && val > tree.right){
			// 	// console.log("first; ", tree)
			// 	// console.log("val: ", val)
			// 	// console.log("------------")

			// 	ref.right = new Node(val)
			// 	// console.log(ref)
			// 	return ref
			// }



// if(this.root === null) {
		// 	this.root = new Node(val)
		// 	// this.rec = new Node(val)
		// 	return
		// }
		
			
		// console.log("aaa: ", this)

		// // end cases
		// if(this.root.left === null && val < this.root.value){
		// 	this.root.left = new Node(val)
		// 	return
		// } 

		// if(this.root.right === null && val > this.root.value){
		// 	this.root.right = new Node(val)
		// 	return
		// }

		// // case all left or all right
		// if(val < this.root.left && val < this.root.right){
		// 	this.root.left.left = new Node(val)
		// 	return
		// }

		// if(val > this.root.left && val > this.root.right){
		// 	this.root.right.right = new Node(val)
		// 	return
		// }

		// // case between nodes.value and node.side
		// if(val > this.root.left && val < this.root.value && this.root.left.right === null){
		// 	this.root.left.right = new Node(val)
		// 	return
		// }

		// if(val > this.root.value && val < this.root.right && this.root.right.left === null){
		// 	this.root.right.left = new Node(val)
		// 	return
		// }

		// // synthetise this part in a recursive way
		// if(val < this.root.val) {
		// 
		// 	var temp = this.root.left
		// 	this.root = temp

		// 	this.insert(val)
		// } else {
		// 	
		// 	var temp = this.root.right
		// 	console.log('temp: ', temp)
		// 	this.root = temp
		// 		
		// 	this.insert(val)
		// }
// if(this.root === null) {
// 			this.root = new Node(val)
// 			this.tail = new Node(val) 
// 			return
// 		}
// 
// 		
// 
// 		let newNode = new Node(val)
// 		while(current.left && val < current.value){
// 			current = current.left
// 		}
// 
// 		while(current.right && val > current.value){
// 			current = current.right
// 		}
// 
// 		// if(val > this.root.value) {
// 		// 	this.tail.next = newNode
// 		// 	this.tail = newNode
// 		// }
// 		// end cases
// 		if(current.left === null && val < current.value){
// 			current.left = newNode
// 			current = newNode
// 			this.root = current
// 		} 
// 
// 		if(current.right === null && val > current.value){
// 			console.log("oo: ")
// 			current = current.right
// 			current.right = newNode
// 			current = newNode
// 		}
// 
