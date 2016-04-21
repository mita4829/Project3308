/********************************************************************************************************************
 * This is an implementation of Dijkstra's Algorithm in JavaScript.                                                 *
 * Lots of this is taken from https://github.com/mburst/dijkstras-algorithm/blob/master/dijkstras.js                *
 * including the priority queue implementation.                                                                     *
 *                                                                                                                  *
 * As for functionality, this returns an array that contains the shortest path in order from start to finish        *
 * If you need to modify its output at all, you can find the return statement below.                                *
 * Currently I have it making the output nice and pretty, but if your needs are different feel free to change it    *
 * n.dijkstra(start,finish) should return the array                                                                 *
 ********************************************************************************************************************/

// basic priority queue. only thing making it a priority queue is we can sort it after adding a node
function PriorityQueue() {
    this._nodes = [];
    
    this.enqueue = function (priority, key, doSort) {
        this._nodes.push({
                         key: key,
                         priority: priority
                         });
        // small time improvement, only sort when needed
        if (doSort)
            this.sort();
    };
    this.dequeue = function () {
        return this._nodes.shift().key;
    };
    this.sort = function () {
        this._nodes.sort(function (a, b) {
                         return a.priority - b.priority;
                         });
    };
    this.isEmpty = function () {
        return !this._nodes.length;
    };
}

// on a side note, I could have all the distances be hard coded to one, but I left room to grow.
// some of the nodes in our graph could be updated with longer distances than others if we choose
// I also was having a hard time finding examples of the algoritm where distance wasn't part of it
// javascript sucks
function nSearch() {
    // for readability
    var INT_MAX = Number.MAX_SAFE_INTEGER;
    // initial blank vertice array
    this.vertices = {};
    
    // for building the graph
    // the graph is just an array of arrays. if this were c++ you could call them vectors, but its not...
    this.addVertex = function (name, edges) {
        this.vertices[name] = edges;
    };
    
    // start of pathfinding. This is dijkstra's algorithm
    this.dijkstra = function (start, finish) {
        // create a new empty priority queue for nodes to be added to.
        // The current node gets added and then its neighbors are pushed in. The highest priority goes on top.
        var nodes = new PriorityQueue(),
        path = [],
        previous = {},
        distances = {},
        smallest,
        vertex, neighbor, alt;
        
        // adds all nodes from this into queue
        // when starting, the 'start' is the first priority with all others having INT_MAX priority
        for (vertex in this.vertices) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(0, vertex, false);
            } else {
                distances[vertex] = INT_MAX;
                nodes.enqueue(INT_MAX, vertex, false);
            }
            previous[vertex] = null;
        }
        nodes.sort();
        // finally the loop to go through remaning nodes.
        while (!nodes.isEmpty()) {
            // grab the first node in the queue
            smallest = nodes.dequeue();
            
            // first check for finish case
            if (smallest === finish) {
                // push all of the previous nodes into the path.
                // as soon as we get back to the start break will terminate the function
                // this does push the nodes in the reverse order, but that is something to figure out later
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            // checks to see if it should continue down this path. The INFNINTY checks there is a valid path to the next node
            // since all new nodes are inserted with distance INT_MAX.
            if (!smallest || distances[smallest] === INT_MAX) {
                continue;
            }
            
            // if we have gotten to this point, we need to start searching for neighbors
            // enqueues the smallest neighbor.
            for (neighbor in this.vertices[smallest]) {
                
                // needs to check if it should continue down this path, or go back up one.
                // by adding the next distance with the current distance, it can compare with the
                // other neighbors.
                alt = distances[smallest] + this.vertices[smallest][neighbor];
                
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = smallest;
                    
                    // Now it enqueues smallests neighbor with priority alt
                    // this is to ensure that it gets placed on top
                    nodes.enqueue(alt, neighbor, true);
                }
            }
        }
        // this returns the path. Have to concat start to the array because it isn't added other wise. ALso reverse the whole thing
        // because of the way the path was created by using previous.
        return path.concat(start).reverse();
    };
    
    // now hard coded in so it is easier to access the graph. If you want the graph in another arrangement,
    // let me know or do it yourself :)
    this.addVertex('1', {
                   2: 1,
                   });
    this.addVertex('2', {
                   3: 1,
                   });
    this.addVertex('3', {
                   4: 1,
                   7: 1,
                   12: 1,
                   });
    this.addVertex('4', {
                   5: 1,
                   6: 1,
                   7: 1,
                   });
    this.addVertex('5', {
                   4: 1,
                   });
    this.addVertex('6', {
                   4: 1,
                   7: 1
                   });
    this.addVertex('7', {
                   3: 1,
                   4: 1,
                   6: 1,
                   });
    this.addVertex('8', {
                   9: 1,
                   14: 1
                   });
    this.addVertex('9', {
                   8: 1,
                   10: 1,
                   });
    this.addVertex('10', {
                   11: 1,
                   13: 1
                   });
    this.addVertex('11', {
                   10: 1,
                   12: 1
                   });
    this.addVertex('12', {
                   3: 1,
                   11: 1,
                   13: 1
                   });
    this.addVertex('13', {
                   10: 1,
                   14: 1
                   });
    this.addVertex('14', {
                   5: 1,
                   8: 1,
                   13: 1
                   });
    this.addVertex('15', {
                   16: 1,
                   20: 1
                   });
    this.addVertex('16', {
                   15: 1,
                   17: 1,
                   });
    this.addVertex('17', {
                   16: 1,
                   18: 1,
                   19: 1,
                   20: 1
                   });
    this.addVertex('18', {
                   17: 1,
                   19: 1,
                   24: 1,
                   });
    this.addVertex('19', {
                   17: 1,
                   18: 1,
                   20: 1,
                   12: 1,
                   23: 1,
                   });
    this.addVertex('20', {
                   15: 1,
                   17: 1,
                   19: 1,
                   21: 1
                   });
    this.addVertex('21', {
                   20: 1,
                   });
    this.addVertex('22', {
                   23: 1,
                   24: 1
                   });
    this.addVertex('23', {
                   22: 1,
                   24: 1,
                   27: 1
                   });
    this.addVertex('24', {
                   18: 1,
                   22: 1,
                   23: 1
                   });
    this.addVertex('25', {
                   26: 1,
                   27: 1
                   });
    this.addVertex('26', {
                   25: 1,
                   27: 1
                   });
    this.addVertex('27', {
                   23: 1,
                   25: 1,
                   26: 1
                   });
}
var n = new nSearch();

