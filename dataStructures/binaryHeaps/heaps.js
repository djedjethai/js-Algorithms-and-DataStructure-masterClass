
class Heaps{
	constructor(){
		this.tree = [10, 8,7, 5, 3]
	}

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

		if(this.tree[0] < val) return this.tree.unshift(val)
		if(this.tree[this.tree.length - 1] > val) return this.tree.push(val)

		console.log("start: ", this.tree)

		let indexSwitch
		let parentIndex = this.tree.length - 1
		let parentVal = this.tree[parentIndex]
			console.log("passIndexST: ", parentIndex)
			console.log("passValST: ", parentVal)

		while(parentVal < val){
			indexSwitch = parentIndex
			console.log("passIndex: ", parentIndex)
			console.log("passVal: ", parentVal)
			parentIndex = Math.floor((parentIndex - 1) / 2)
			parentVal = this.tree[parentIndex]
		}
		let temp = this.tree[indexSwitch]
		this.tree[indexSwitch] = val
		this.tree.push(temp)
		return 
	
		console.log("parentIndex: ", parentIndex)
		console.log("parentVal: ", parentVal)
	}

	getTree(){
		console.log(this.tree)
	}
}

let h = new Heaps()

h.insert(6)
h.insert(24)
h.insert(13)
h.insert(4)
h.insert(23)

h.getTree()
