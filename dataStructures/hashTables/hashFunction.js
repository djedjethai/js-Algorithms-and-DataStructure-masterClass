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

	// set() is not really efficient as duplicate keys should overwrite the previous one
	// instead here it just add them, and in get() we will get the first one
	// which actually should be more logic to get the last one...
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

	keys(){
		const keys = []
		for(let i=0; i < this.keyMap.length; i++){
			if(this.keyMap[i]){
				for(let y=0; y < this.keyMap[i].length; y++){
					let exist = false
					for(let z=0; z < keys.length; z++){
						if(this.keyMap[i][y][0] === keys[z]) exist = true
					}
					if(!exist) keys.push(this.keyMap[i][y][0])

				}
			}
		}

		return keys
	}

	// with the build-in method include(), same as with for loop	
	values(){
		const values = []
		for(let i=0; i < this.keyMap.length; i++){
			if(this.keyMap[i]){
				for(let y=0; y < this.keyMap[i].length; y++){
					if(!values.includes(this.keyMap[i][y][1])){ 
						values.push(this.keyMap[i][y][1])
					}
				}
			}
		}

		return values
	}

}

const ht = new HashTable()
let res = ht.set("maroon", "harru")
res = ht.set("yellow", "yel")
res = ht.set("yellow", "yel")
res = ht.set("yellow", "yel")

res = ht.set("larry", "susu")

console.log(ht.get('maroon'))
console.log(ht.get('larry'))
console.log(ht.get('yellow'))

console.log(ht.keys())
console.log(ht.values())



