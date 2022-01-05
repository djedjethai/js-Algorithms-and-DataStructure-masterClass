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
    	        	if(element <= parent) break;
    	        	this.values[parentIdx] = element;
    	        	this.values[idx] = parent;
    	        	idx = parentIdx;
    	    	}
    	}

	Dequeue(){
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

