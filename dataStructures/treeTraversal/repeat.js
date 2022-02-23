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
	
	build(node){
		if(this.root === null){
			this.root = node
			return
		}

		let ref = this.root
		let queue = []

		queue.push(node)

		let add = true
		
		function recurs(ref){
			if(ref.left === null) {
				ref.left = node 
				return
			} else if(ref.right === null) {
				ref.right = node
				return
			} else { 
					
				if(add) recurs(ref.left)
				else recurs(ref.right)
			}
		}

		recurs(ref)
	}

	get() {
		console.log(this.root)
	}
}



