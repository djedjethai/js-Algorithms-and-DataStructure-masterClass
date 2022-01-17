class Node{
	constructor(v, pri){
		this.val = v
		this.priority = pri
	}	
}


class PriorityQueue {
    	constructor(){
    	    	this.values = [];
    	}

    	Enqueue(element){
    	    	this.values.push(element);
    	    	this.bubbleUp();
    	}

    	bubbleUp(){
    	    	let idx = this.values.length - 1;
    	    	const element = this.values[idx];
    	    	while(idx > 0){
    	        	let parentIdx = Math.floor((idx - 1)/2);
    	        	let parent = this.values[parentIdx];
    	        	if(element.priority >= parent.priority) break;
    	        	this.values[parentIdx] = element;
    	        	this.values[idx] = parent;
    	        	idx = parentIdx;
    	    	}
    	}

	Dequeue(){
		const min = this.values[0]
		const end = this.values.pop()
		if(this.values.length > 0){
			this.values[0] = end
			this.sinkDown()
		}
		return min
	}

	sinkDown(){
		let idx = 0;
		const length = this.values.length
		const element = this.values[0]
		while(true){
			let leftChildIdx = 2 * idx + 1
			let rightChildIdx = 2 * idx + 2
			let leftChild, rightChild
			let swap = null

			if(leftChildIdx < length){
				leftChild = this.values[leftChildIdx]
				if(leftChild.priority < element.priority){
					swap = leftChildIdx
				}
			}
			if(rightChildIdx < length){
				rightChild = this.values[rightChildIdx]
				if(
				(swap === null && rightChild.priority < element.priority) || 
				(swap !== null && rightChild.priority < leftChild.priority)
				){
					swap = rightChildIdx
				}
			}
			if(swap === null) break
			this.values[idx] =  this.values[swap]
			this.values[swap] = element
			idx = swap
		}
	}

	get(){
		console.log(this.values)
	}
}


let n2 = new Node("n2", 2)
let n4 = new Node("n4", 4)
let n1 = new Node("n1", 1)
let n3 = new Node("n3", 3)


let pq = new PriorityQueue()
pq.Enqueue(n1)
pq.Enqueue(n2)
pq.Enqueue(n3)
pq.Enqueue(n4)

pq.get()

pq.Dequeue()
pq.Dequeue()
pq.Dequeue()
pq.Dequeue()

pq.Dequeue()

pq.get()

