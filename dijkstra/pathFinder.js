/*
This is a implementation of Dijkstra's algorithm in javascript
This is so we can find the closest path between the user's current location and
their final location
*/

// As an aside, I'm so sorry that the graph is stored as a global variable in this place

// The graph setup. 
var libGraph = {
    // vertex "7a" is on the first floor, "7b" is on the second
    // I changed the numbering because it was messed up anyways. Now 1->0 and so on until 7 and then it should be correct.
    // The 7 on the second floor is mapped to 6 and the 7 on the first floor should be correct. 
    // This gets extra confusing when you consider the second floor has the starting numbers
    
    vertexes: ["0", "1", "2", "3", "4", "5", "6",
               "7", "8", "9", "10", "11", "12",
               "13", "14", "15", "16", "17", "18", "19",
               "20", "21", "22", "23"],
    
    // please god help me and tell me I didn't mess this up
    edges: [
        [{to: 1}, {to: 2}],                             // 0
        [{to: 0}, {to: 3}],                             // 1
        [{to: 0}, {to: 4}, {to: 7}],                    // 2
        [{to: 1}, {to: 4}, {to: 5}],                    // 3
        [{to: 2}, {to: 3}, {to: 5}, {to: 6}],           // 4
        [{to: 1}, {to: 3}, {to: 4}, {to: 6}],           // 5
        [{to: 4}, {to: 5}, {to: 10}, {to: 18}],         // 6
        [{to: 2}, {to: 8}, {to: 10}],                   // 7
        [{to: 7}, {to: 9}],                             // 8
        [{to: 8}],                                      // 9
        [{to: 7}, {to: 11}],                            // 10
        [{to: 10}, {to: 12}],                           // 11
        [{to: 11}],                                     // 12 This is outside the library for reference
        [{to: 2}, {to: 14}, {to: 16}],                  // 13
        [{to: 1}, {to: 13}, {to: 15}],                  // 14
        [{to: 14}, {to: 16}, {to: 19}, {to: 20}],       // 15
        [{to: 17}, {to: 15}, {to: 18}],                 // 16
        [{to: 16}],                                     // 17
        [{to: 15}, {to: 16}, {to: 19}, {to: 6}],        // 18
        [{to: 15}, {to: 18}, {to: 20}, {to: 22}],       // 19
        [{to: 15}, {to: 19}, {to: 21}],                 // 20
        [{to: 20}, {to: 22}, {to: 23}],                 // 21
        [{to: 19}, {to: 21}, {to: 23}],                 // 22
        [{to: 21}, {to: 22}]                            // 23
    ]
};
