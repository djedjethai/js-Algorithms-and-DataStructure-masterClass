
class Graph{
	constructor(){
		this.adjacencyList = {}
	}

	// write method wich set the vertex first
	addVertex(vertex){
		if(!this.adjacencyList[vertex]){
			this.adjacencyList[vertex] = []
		}
	}

	addEdges(vertex1, vertex2){
		if(!this.adjacencyList[vertex1]){
			this.adjacencyList[vertex1] = []
			this.adjacencyList[vertex1].push(vertex2)
		} else {	
			this.adjacencyList[vertex1].push(vertex2)
		}

		if(!this.adjacencyList[vertex2]){
			this.adjacencyList[vertex2] = []
			this.adjacencyList[vertex2].push(vertex1)
		} else {	
			this.adjacencyList[vertex2].push(vertex1)
		}
	}

	removeEdges(vertex1, vertex2){
		// my solution
		if (this.adjacencyList[vertex1] && this.adjacencyList[vertex1].length > 1){
			let origin = this.adjacencyList[vertex1]
			this.adjacencyList[vertex1] = []

			for(let i=0; i < origin.length; i++){
				if(origin[i] !== vertex2){
					this.adjacencyList[vertex1].push(origin[i])
				}
			}
		}
		else if(this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = []
		
		// le prof use filter() func
		if(this.adjacencyList[vertex2]){
			this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(val => {
				return val != vertex1
			})
		}
	}

	// solution du prof, much better...grrr...
	removeVertex(vertex){
		if(this.adjacencyList[vertex]){
			while(this.adjacencyList[vertex].length){
				const adjacentVertex = this.adjacencyList[vertex].pop()
				this.removeEdges(vertex, adjacentVertex)
			}
			delete this.adjacencyList[vertex]
		}
	}

	// works but oder "depth" is not perfect(see prof correction)
	depthFirstIterative(start){
		const visited = {}
		const vert = []
	
		let datasLgt = Object.keys(this.adjacencyList).length

		if(datasLgt < 1) return vert

		while(vert.length < datasLgt){
			this.adjacencyList[start].forEach(child => {
				if(!visited[child]){
					visited[child] = true
					vert.push(child)
					start = child
				}
			})
		}

		return vert
	}

	// works but oder "depth" is not perfect(see prof correction)
	depthFirstRecursive(start){		
		const visited = {}
		const vert = []
	
		let datas = Object.keys(this.adjacencyList).length
		let origin = this.adjacencyList

		function recurse(start){
			for(let i = 0; i < origin[start].length; i++){	
				if(datas === vert.length) return vert
				else if(!visited[origin[start][i]]){
					visited[origin[start][i]] = true
					vert.push(origin[start][i])
					recurse(origin[start][i])
				} 
			}
		}
		
		if(datas < 1) return vert
		else return recurse(start)
	}


	breadthFirst(start){
		const visited = {}
		const queue = []
		const vert = []
		let current

		queue.push(start)
		visited[start] = true
		while(queue.length > 0){
			current = queue.shift()
			vert.push(current)
			this.adjacencyList[current].forEach(child => { 
				if(!visited[child]){
					visited[child] = true
					queue.push(child)
				}
			})
		}

		return vert
	}

	get(){
		console.log(this.adjacencyList)
	}
}

const gr = new Graph()

// data start
gr.addVertex("a")
gr.addVertex("b")
gr.addVertex("c")
gr.addVertex("d")
gr.addVertex("e")
gr.addVertex("f")
gr.addEdges("a", "b")
gr.addEdges("a", "c")
gr.addEdges("b", "d")
gr.addEdges("c", "e")
gr.addEdges("d", "e")
gr.addEdges("d", "f")
gr.addEdges("e", "f")
gr.get()

// get all vertex
console.log(gr.breadthFirst("a"))

// gr.removeEdges("new-York", "test")


