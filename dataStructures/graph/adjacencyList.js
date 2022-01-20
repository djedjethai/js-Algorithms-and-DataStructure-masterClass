
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
		if(this.adjacencyList[vertex1]){
			if(this.adjacencyList[vertex1].length > 1){
				let origin = this.adjacencyList[vertex1]
				this.adjacencyList[vertex1] = []

				for(let i=0; i < origin.length; i++){
					if(origin[i] !== vertex2){
						this.adjacencyList[vertex1].push(origin[i])
					}
				}
			} else this.adjacencyList[vertex1] = []
		} 
		
		if(this.adjacencyList[vertex2]){
			if(this.adjacencyList[vertex2].length > 1){
				let origin = this.adjacencyList[vertex2]
				this.adjacencyList[vertex2] = []

				for(let i=0; i < origin.length; i++){
					if(origin[i] !== vertex1){
						this.adjacencyList[vertex2].push(origin[i])
					}
				}
			} else this.adjacencyList[vertex2] = []
		} 
	}

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

gr.removeEdges("test", "new-York")

gr.get()
