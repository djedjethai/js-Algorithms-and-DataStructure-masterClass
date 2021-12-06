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
	
	depthFirst(){
		const res = []		
		function traverse(node){
			if(node !== null && node.left) traverse(node.left)
			if(node !== null && node.right) traverse(node.right)
			if(node !== null)res.push(node.value)
			return
		}
		traverse(this.root)
		return res
	}

	insert(val){
		let tree = this.root
		let ref = this.root 
			
		function rec(tree){
			if(tree === null) {
				ref = new Node(val)
				tree = new Node(val)
				return 
			}

			if(val < tree.value && tree.left !== null) rec(tree.left)
			if(val > tree.value && tree.right !== null) rec(tree.right)

			let newNode = new Node(val)
		    	
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
	 	
			// case between nodes.value and node.side
			if(val > tree.left && val < tree.value && tree.left.right === null){
				tree.left.right = newNode
				return
			}
			if(val > tree.value && val < tree.right && tree.right.left === null){
				tree.right.left = newNode
				return
			}
		}
		rec(tree)

		this.root = ref
		return this
	}

	find(val){
		if(this.root === null) return false
		let current = this.root
		while(true) {
			if(val === current.value) return val
			if(val > current.value && current.right) current = current.right
			else if(val < current.value && current.left)current = current.left
			else return false
		}
	}

	get(){
		console.log(this.root)
	}				
	
}

let bst = new BinarySearchTree()

bst.insert(10)
bst.insert(6)
bst.insert(3)
bst.insert(8)
bst.insert(15)
bst.insert(20)

// console.log(bst.find(7))
console.log(bst.depthFirst())

// bst.get()


