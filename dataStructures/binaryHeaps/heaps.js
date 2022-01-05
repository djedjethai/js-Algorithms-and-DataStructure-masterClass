
class Heaps{
	constructor(){
		this.tree = []
	}

	// my solution, kind of long......
	insert(val){
		if(this.tree.length < 1 ){
			return this.tree.push(val)
		}

		if(this.tree.length === 1){
			if(this.tree[0] < val){
				let temp  = this.tree[0]
				this.tree[0] = val
				return this.tree.push(temp)
			} else {
				return this.tree.push(val)
			}
		}

		if(this.tree[this.tree.length - 1] > val) return this.tree.push(val)

		let temp
		let ok = 0
		let indexSwitch
		let indexLow
		let parentIndex = this.tree.length - 1
		let parentVal = this.tree[parentIndex]

		while(parentVal < val && parentIndex !== undefined){
			if(ok > 0){ indexLow = indexSwitch }
			ok++
			indexSwitch = parentIndex
			parentIndex = Math.floor((parentIndex - 1) / 2)
			parentVal = this.tree[parentIndex]

			// switch 
			temp = this.tree[indexSwitch]
			if(ok === 1) {
				this.tree[indexSwitch] = val		
				this.tree.push(temp)
			} else {	
				this.tree[indexSwitch] = this.tree[indexLow]
				this.tree[indexLow] = temp
			}
		}
		
		return 
	
	}

	getTree(){
		console.log(this.tree)
	}

	extractMax(){
		const max = this.tree[0]
		const end = this.tree.pop()
		if(this.tree.length > 0){
			this.tree[0] = end
			this.sinkDown()
		}
		return max
	}

	sinkDown(){
		let idx = 0;
		const length = this.tree.length
		const element = this.tree[0]
		while(true){
			let leftChildIdx = 2 * idx + 1
			let rightChildIdx = 2 * idx + 2
			let leftChild, rightChild
			let swap = null

			if(leftChildIdx < length){
				leftChild = this.tree[leftChildIdx]
				if(leftChild > element){
					swap = leftChildIdx
				}
			}
			if(rightChildIdx < length){
				rightChild = this.tree[rightChildIdx]
				if(
				(swap === null && rightChild > element) || 
				(swap !== null && rightChild > leftChild)
				){
					swap = rightChildIdx
				}
			}
			if(swap === null) break
			this.tree[idx] =  this.tree[swap]
			this.tree[swap] = element
			idx = swap
		}
	}

}

let h = new Heaps()

h.insert(41)
h.insert(39)
h.insert(33)
h.insert(18)
h.insert(27)
h.insert(12)
h.insert(55)

h.getTree()

console.log("grrr: ", h.extractMax())
console.log("grrr: ", h.extractMax())
console.log("grrr: ", h.extractMax())
console.log("grrr: ", h.extractMax())
console.log("grrr: ", h.extractMax())
console.log("grrr: ", h.extractMax())
console.log("grrr: ", h.extractMax())
console.log("grrr: ", h.extractMax())
console.log("grrr: ", h.extractMax())
console.log("grrr: ", h.extractMax())
console.log("grrr: ", h.extractMax())

h.getTree()

h.insert(10)
h.insert(99)

h.getTree()
