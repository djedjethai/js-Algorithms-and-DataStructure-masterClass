
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


	getVertexes(start){
		
		const visited = {}
		const vert = []
	
		let datas = Object.keys(this.adjacencyList).length
		let origin = this.adjacencyList

		// console.log("dts start: ", datas)

		function recurse(start, origin, datas, vert){
			// start a => itere add elem to visited
			for(let i = 0; i < origin[start].length; i++){	
				// console.log("in i: ", origin[start][i])
				if(datas === vert.length){
					// console.log("bf ret:", vert)
					return vert
				} else if(!visited[origin[start][i]]){
					// console.log("visited: ", visited)
					// console.log("element: ", vert)
					visited[origin[start][i]] = true
					vert.push(origin[start][i])
					recurse(origin[start][i], origin, datas, vert)
				} 
			}
		}

		return recurse(start, origin, datas, vert)
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
console.log(gr.getVertexes("a"))

// gr.removeEdges("new-York", "test")


