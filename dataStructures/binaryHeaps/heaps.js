
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
}

let h = new Heaps()

h.insert(6)
h.insert(24)
h.insert(13)
h.insert(4)
h.insert(23)

h.getTree()
