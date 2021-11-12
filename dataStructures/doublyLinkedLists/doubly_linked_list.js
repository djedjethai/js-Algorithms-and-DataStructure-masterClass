class Node{
	constructor(val){
		this.val = val
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor(){
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val){
		let newNode = new Node(val)
		if(this.length > 0){
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		} else {
			this.head = newNode
			this.tail = newNode
		}
		this.length++
		
		return this
	}	

	pop(){
		if(this.length === 0) return undefined
		let toReturn = this.tail
		if(this.length > 1){
			this.tail = toReturn.prev
			this.tail.next = null
			toReturn.prev = null
		} else if(this.length === 1) {
			this.tail = null
			this.head = null
		}
		this.length--

		return toReturn
	}

	shift(){
		if(this.length === 0) return undefined
		let toReturn = this.head
		if(this.length === 1){
			this.head = null
			this.tail = null
		} else if(this.length > 1){
			this.head = toReturn.next
			this.head.prev = null
			toReturn.next = null
		}
		this.length--

		return toReturn
	}

	unshift(val){
		const newHead = new Node(val)
		if(this.length === 0){
			this.head = newHead
			this.tail = newHead
		}else {
			this.head.prev = newHead 
			newHead.next = this.head
			this.head = newHead
		}
		this.length++
		return this
	}

	get(index) {
		if(this.length === 0) return undefined
		if(index === 0) return this.shift()
		if(index === this.length - 1) return this.pop()

		let i = 0
		let node = this.head
		if(index <= this.length / 2 || index === 0){
			// start from head
			while(i <= index){
				// console.log("node: ", node)
				if(i === index){
					let nextNode = node.next
					let prevNode = node.prev
					nextNode.prev = prevNode
					prevNode.next = nextNode
					return node.val
				}	
				node = node.next
				i++
			}
			
		} else {
			// start from tail
			// implemment here
			console.log("in else")
		}
	}

	getHead(){
		return this.head
	}
}

const dl = new DoublyLinkedList()
//console.log("1: ", dl.push(1))
// console.log("2: ", dl.push(2))
// console.log("3: ", dl.push(3))
 
dl.push(1)
dl.push(2)
dl.push(3)
dl.push(4)
dl.push(5)

console.log(dl.get(2))

console.log("get Head: ", dl.getHead())







// 	push(val){
// 		var newNode = new Node(val)
// 		if(!this.head){
// 			this.head = newNode
// 			this.tail = newNode
// 		}
// 		else {
// 			this.tail.next = newNode
// 			this.tail = newNode
// 		}
// 		this.length++
// 		
// 		return this
// 	}
// 
// 	// prof solution
// 	pop(){
// 		if(!this.head) return undefined
// 		var current = this.head
// 		var newTail = current
// 		while(current.next){
// 			newTail = current
// 			current = current.next
// 		}
// 		this.tail = newTail
// 		this.tail.next = null
// 		this.length--
// 		if(this.length === 0){
// 			this.head = null
// 			this.tail = null
// 		}
// 
// 		return current
// 	}
// 		
// 	shift(){
// 		if(!this.head) return undefined	
// 		let toReturn = this.head
// 		this.head = toReturn.next
// 		toReturn.next = null
// 		this.length--
// 		if(this.length < 1) this.tail = null
// 
// 		return toReturn
// 	}
// 	
// 	unshift(val){
// 		var newNode = new Node(val)
// 		if(!this.head){
// 			this.head = newNode
// 			this.tail = newNode
// 		}
// 		else {
// 			newNode.next = this.head
// 			this.head = newNode
// 		}
// 		this.length++
// 		
// 		return this
// 	}
// 
// 	// here i replace the value of the node at the index arg
// 	set(index, value){
// 		let node = this.get(index)
// 		if(node) {
// 			node.val = value
// 			return true
// 		}
// 
// 		return false
// 	}
// 
// 	get(index) {
// 		if(this.length <= index || index < 0) return undefined
// 		let count = 0
// 		let current = this.head
// 		while(count != index){
// 			current = current.next
// 			count++
// 		}
// 
// 		return current
// 	}
// 
// 	insert(index, value) {
// 		// prof
// 		if(index > this.length || index < 0) return false
// 		if(index === this.length) return !!this.push(value)
// 		if(index === 0) return !!this.unshift(value)
// 		let nodeRef = this.get(index - 1)
// 		let newNode = new Node(value)
// 		newNode.next = nodeRef.next
// 		nodeRef.next = newNode
// 
// 		this.length++
// 
// 		return true
// 	}
// 
// 	remove(index){
// 		if(index > this.length -1 || index < 0) return undefined
// 		if(index === 0) return this.shift(index)
// 		if(index === this.length - 1)return this.pop(index)
// 		let nodeRemoved = this.get(index) 
// 		let previousIndex = this.get(index - 1)
// 		previousIndex.next = previousIndex.next.next
// 		this.length--
// 
// 		return nodeRemoved
// 	}
// 	
// 	reverse(){
// 		// let newNode = new Node(this.head.val)
// 		let node = this.head
// 		this.head = this.tail
// 		this.tail = node
// 		let next
// 		let prev = null
// 		for(let i = 0; i < this.length; i++){
// 			next = node.next
// 			node.next = prev
// 			prev = node
// 			node = next
// 		}
// 		
// 		return this
// 	}
// 	
// 	getTail(){
// 		console.log(this.tail, " - ", this.length)	
// 	}
// 
// 	testNode(){
// 		console.log(this.head)
// 	}
// }
// 
