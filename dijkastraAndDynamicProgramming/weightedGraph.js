class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2, weight){
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }
    removeEdge(vertex1,vertex2){
	    
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v.node !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
		v => v.node !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
		const adjacentVertex = this.adjacencyList[vertex].pop();
		this.removeEdge(vertex, adjacentVertex.node);
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            	if(!vertex) return null;
            	visited[vertex] = true;
            	result.push(vertex);
		// console.log("grrr: ", adjacencyList[vertex])
            	adjacencyList[vertex].forEach(neighbor => {
           		if(!visited[neighbor.node]){
                   		return dfs(neighbor.node)
                	}	
            	});
        })(start);

        return result;
    }
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);
		
            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor.node]){
                   visited[neighbor.node] = true;
                   stack.push(neighbor.node)
               } 
            });
        }
        return result;
    }

	getGraph(){
		console.log(this.adjacencyList)
	}
}

let g = new WeightedGraph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B", 4)
g.addEdge("A", "C", 2)
g.addEdge("B","E", 3)
g.addEdge("C","D", 2)
g.addEdge("C","F", 4)
g.addEdge("D","E", 3)
g.addEdge("D","F", 1)
g.addEdge("F","E", 1)


g.getGraph()

const list = g.depthFirstRecursive("A")

let distance = {}
let previous = {}
for(let i =0; i < list.length; i++){
	distance[list[i]]= Infinity
	previous[list[i]]= ""
} 

const visited = []
const queue = []

function getPath(nodeStart, distanceOrigine, destination){

	if(visited.length < list.length) {
		// find a way to return as soon as possible
		// logic to lookup the path and calcul dist
		return distance
	}

	// add nodeStart in visited
	
	// same loop
	// neighbor = itere neighbor of nodeStart
	// add IF: distance[nodeNeighbor] === Infinity
		// each distance[nodeNeighbor] = weightNeighbor 
		// && previous[nodeNeighbor] = nodeStart
	// else 
		// newDist = distanceOrigine + weightNeighbor
		// if newDist <  distance[nodeNeighbor] 
			// => distance[nodeNeighbor] = newDist
			// => 	previous[nodeNeighbor] = nodeStart

	
	// get key of smallestDist in distance && not in visited && not destination
	// if 2 same distance take the first one of iteration
	// getPath(key, distance[key], destination)
}



