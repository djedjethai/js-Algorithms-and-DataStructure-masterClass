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
	
	pop(){
		const toReturn = this.tail
		if(this.length < 1) return
		else {
			let newSLL = new SinglyLinkedList()
			let node = this.head
			for(let i = 0; i < this.length - 1; i++){
				if(i > 0)node = node.next
				newSLL.push(node.val)
			}
			this.head = newSLL.head
			this.tail = newSLL.tail
			this.length = newSLL.length
			
		}
			
		return toReturn
	}
	
	unshift(val){
		var newNode = new Node(val)
		if(!this.head){
			this.head = newNode
			this.tail = newNode
		}
		else {
			const previousHead = this.head
			this.head = newNode
			this.head.next = previousHead
		}
		this.length++
		
		return this
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
console.log("res from pop: ", sll.pop())
// 
sll.getTail()
sll.testNode()



// var first = new Node("hi")
// var first.next = new Node("there")
// var first.next.next = new Node("how")
// var first.next.next.next = new Node("are")
// var first.next.next.next.next = new Node("you")
