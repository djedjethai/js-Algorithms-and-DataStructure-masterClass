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
		if(index < 0 || index >= this.length) return null
		var i, node
		if(index <= this.length / 2){
			i = 0
			node = this.head
			while(i !== index){
				node = node.next
				i++
			}
			
		} else {
			i = this.length - 1
			node = this.tail
			while(index !== i){
				node = node.prev
				i--
			}
		}

		return node
	}

	set(index, val) {
		let indexVal = this.get(index)
		if(indexVal !== null){
			indexVal.val = val
			return true
		}
		
		return false
	}


	insert(index, val) {	
		if(index === 0) return !!this.unshift(val)
		if(index === this.length) return !!this.push(val)
		let indexVal = this.get(index)
		if(indexVal !== null){
			let prevIndexVal = indexVal.prev
			let newNode = new Node(val)
			indexVal.prev = newNode, newNode.next = indexVal
			prevIndexVal.next = newNode, newNode.prev = prevIndexVal
			this.length++
		
			return true
		}

		return false
	}

	remove(index) {
		if(index === 0) return this.shift()
		if(index === this.length -1) return this.pop()
		let indexVal = this.get(index)
		if(indexVal !== null){
			let nextVal = indexVal.next
			let prevVal = indexVal.prev
			nextVal.prev = prevVal
			prevVal.next = nextVal

			indexVal.next = null, indexVal.prev = null
			this.length--
			return indexVal
		}
		return undefined

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
// dl.push(5)
console.log("ook: ", dl.remove(-1))

// console.log(dl.get(0))

console.log("get Head: ", dl.getHead())

