class Node{
	constructor(val){
		this.val = val
		this.next = null
	}
}

class Queue{
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val){
		let newNode = new Node(val)
		if(this.length > 0){
			this.tail.next = newNode
			this.tail = newNode
		} else {
			this.head = newNode
			this.tail = newNode
		}
		return ++this.length
	}

	shift(){
		if(this.length < 1) return undefined
		let ret = this.head
		this.head = this.head.next
		ret.next = null
		this.length--
		return ret
	}

	getHead(){
		console.log(this.head)
	}
}

let q = new Queue()
q.push(1)
console.log(q.push(2))
q.push(3)

q.getHead()
console.log("from shft: ", q.shift())
console.log("from shft: ", q.shift())
console.log("from shft: ", q.shift())
console.log("from shft: ", q.shift())

q.getHead()
q.push(1)
console.log(q.push(2))
q.push(3)

q.getHead()

