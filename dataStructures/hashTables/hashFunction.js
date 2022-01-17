class HashTable{
	constructor(size=53){
		this.keyMap = new Array(size)
	}

	_hash(key){
		let total = 0
		let WEIRD_PRIME = 31
		for(let i = 0; i < Math.min(key.length, 100); i++){
			let char = key[i]
			let value = char.charCodeAt(0) - 96
			total = (total * WEIRD_PRIME + value) % this.keyMap.length
		}
		return total
	}

	set(key, value){
		const hash = this._hash(key)
		const keyValArr = [key, value]
		if(!this.keyMap[hash]){
			this.keyMap[hash] = new Array()
		}
		this.keyMap[hash].push(keyValArr)
	}

	get(key){
		const hash = this._hash(key)
		if(this.keyMap[hash]){
			for(let i=0; i < this.keyMap[hash].length; i++){
				if(this.keyMap[hash][i][0] === key ){
					return this.keyMap[hash][i][1]
				}
			} 
		} 
		// else if(this.keyMap[hash].length > 0) { return this.keyMap[hash][0] } 
		else return undefined
	}
}

const ht = new HashTable()
let res = ht.set("maroon", "harru")
res = ht.set("yellow", "yel")

res = ht.set("larry", "susu")

console.log(ht.get('maroon'))
console.log(ht.get('larry'))
console.log(ht.get('yellow'))





