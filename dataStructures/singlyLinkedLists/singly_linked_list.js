class Node{
	constructor(val){
		this.val = val
		this.next = null
	}
}

class SinglyLinkedList {
	constructor(){
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val){
		var newNode = new Node(val)
		if(!this.head){
			this.head = newNode
			this.tail = newNode
		}
		else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
		
		return this
	}

	// prof solution
	pop(){
		if(!this.head) return undefined
		var current = this.head
		var newTail = current
		while(current.next){
			newTail = current
			current = current.next
		}
		this.tail = newTail
		this.tail.next = null
		this.length--
		if(this.length === 0){
			this.head = null
			this.tail = null
		}

		return current
	}
	
	// my solution
	// pop(){
	// 	if(this.length < 1) return undefined
	// 	else {
	// 		const toReturn = this.tail
	// 		let newSLL = new SinglyLinkedList()
	// 		let node = this.head
	// 		for(let i = 0; i < this.length - 1; i++){
	// 			if(i > 0)node = node.next
	// 			newSLL.push(node.val)
	// 		}
	// 		this.head = newSLL.head
	// 		this.tail = newSLL.tail
	// 		this.length = newSLL.length
	// 		
	// 		return toReturn
	// 	}
	// 		
	// }

	shift(){
		if(!this.head) return undefined	
		let toReturn = this.head
		this.head = toReturn.next
		toReturn.next = null
		this.length--
		if(this.length < 1) this.tail = null

		return toReturn
	}
	
	unshift(val){
		var newNode = new Node(val)
		if(!this.head){
			this.head = newNode
			this.tail = newNode
		}
		else {
			newNode.next = this.head
			this.head = newNode
		}
		this.length++
		
		return this
	}

	// here i replace the value of the node at the index arg
	set(index, value){
		let node = this.get(index)
		if(node) {
			node.val = value
			return true
		}

		return false
	}

	get(index) {
		if(this.length <= index || index < 0) return undefined
		let count = 0
		let current = this.head
		while(count != index){
			current = current.next
			count++
		}

		return current

		// my solution
		// if(this.length <= index || index < 0) return undefined
		// let nodeRef = this.head
		// for(let i = 0; i < index; i++) nodeRef = nodeRef.next

		// return nodeRef.val
	}

	insert(index, value) {
		// prof
		if(index > this.length || index < 0) return false
		if(index === this.length) return !!this.push(value)
		if(index === 0) return !!this.unshift(value)
		let nodeRef = this.get(index - 1)
		let newNode = new Node(value)
		newNode.next = nodeRef.next
		nodeRef.next = newNode

		this.length++

		return true

		// my solution
		// if(index > this.length || index < 0) return false
		// if(index === this.length) {
		// 	this.push(value)

		// 	return true
		// }
		// let nodeRef = this.get(index)
		// let currentNode = Object.assign({}, nodeRef)
		// nodeRef.val = value
		// nodeRef.next = currentNode
		// this.length++

		// return true
	}

	// thats wrong....555
	// get(index) {
	// 	if(this.length < index) return undefined
	// 	let nodeRef = this.head
	// 	let i = 0
	// 	while( i < index ){
	// 		nodeRef = nodeRef.next
	// 		i++
	// 	}
	// 	let newObj = Object.assign({}, nodeRef)
	// 	if(newObj.next) newObj.next = null

	// 	return newObj
	// }

	getTail(){
		console.log(this.tail, " - ", this.length)	
	}

	testNode(){
		console.log(this.head)
	}
}


var sll = new SinglyLinkedList()
sll.push(2)
sll.push(23)
sll.push(1)

// sll.getNode()

sll.getTail()
sll.testNode()
console.log("=================")

sll.set(1, 45)
console.log("ouou: ", sll.set(3,5657))

sll.insert(1, 345)
sll.insert(0, 0000)
sll.insert(5, "gtyty")

// console.log("set1: ", sll.get(-5))
console.log("get1: ", sll.get(1))
console.log("get2: ", sll.get(3))
console.log("get3: ", sll.get(4))
console.log("get4: ", sll.get(5))


// console.log(sll.shift())
// console.log(sll.shift())
// console.log(sll.shift())



// console.log(sll.unshift(44))
// console.log(sll.unshift(55))

// sll.push(100)

// console.log(sll.pop())

sll.getTail()
sll.testNode()



// var first = new Node("hi")
// var first.next = new Node("there")
// var first.next.next = new Node("how")
// var first.next.next.next = new Node("are")
// var first.next.next.next.next = new Node("you")
