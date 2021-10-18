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

	get(index) {
		if(this.length < index) return undefined
		let nodeRef = this.head
		let i = 0
		while( i < index ){
			nodeRef = nodeRef.next
			i++
		}
		let newObj = Object.assign({}, nodeRef)
		if(newObj.next) newObj.next = null

		return newObj
	}

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

console.log("get1: ", sll.get(0))
console.log("get2: ", sll.get(1))
console.log("get2: ", sll.get(2))
console.log("get2: ", sll.get(10))


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
