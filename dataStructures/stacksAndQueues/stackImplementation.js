// my Implementation, better 
class Elt{
	constructor(val){
		this.val = val
		this.prev = null
	}
}

class Stack{

	constructor(){
		this.tail = null
		this.length = 0
	}

	push(elt) {
		let e = new Elt(elt)
		if(this.tail){
			e.prev = this.tail
			this.tail = e
		} else {
			this.tail = e
		}		
		this.length++

		return this.length
	}

	pop(){
		if(this.length === 0){
			return undefined
		}
		let ret = this.tail.val
		this.tail = this.tail.prev
		this.length--

		return ret
	}

	get(){
		console.log(this.tail)
	}
}

let st = new Stack()
console.log(st.push(1))
console.log(st.push(2))
st.push(6)
st.get()
console.log("from pop: ", st.pop())
console.log("from pop: ", st.pop())
console.log("from pop: ", st.pop())
console.log("from pop: ", st.pop())
st.get()

