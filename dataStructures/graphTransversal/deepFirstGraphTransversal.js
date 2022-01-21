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
	// my solution
	// removeVertex(vertex){
	// 	for(let key in this.adjacencyList){
	// 		if(key === vertex) delete this.adjacencyList[key]
	// 		else this.adjacencyList[key] = this.adjacencyList[key].filter(v => v != vertex)
	// 	}
	// 	
	// }

	get(){
		console.log(this.adjacencyList)
	}
}

const gr = new Graph()

gr.addVertex("test")
gr.addVertex("test")
gr.addVertex("te")

gr.adjacencyList["test"].push("ta mere")

gr.addEdges("test", "new-York")

gr.get()

gr.removeVertex("new-York")

gr.get()
// gr.removeEdges("new-York", "test")

