 const graph2 = {
     start: {A: 3, B: 1},
     A: {C: 2, D: 2},
     B: {D: 5},
     C: {F: 3},
     D: {F: 1},
     F: {}
 }

const graph = {
    start: { A: 10, C: 30 },
    A: { start: 10, B: 50 },
    B: { A: 50, D: 10 },
    C: { B: 20, D: 60 },
    D: {  },
}


function minDist (distances, unvisited) {
    let curDist = {}
    for (let i = 0; i < Object.keys(unvisited).length; i++) {
        if (Object.values(unvisited)[i] === false) {
            curDist[Object.keys(unvisited)[i]] = Object.values(distances)[i]
        }
    }
    let min = Object.values(curDist).indexOf(Math.min(...Object.values(curDist)))
    let minIDX = [Object.keys(curDist)[min]]
    return minIDX
}

function dijkstra(graph, start) {
    let unvisited = {}
    let distances = {}
    let current = undefined

    Object.keys(graph).forEach(el => {
        distances[el] = Infinity
        unvisited[el] = false
    })

    let startIDX = (Object.keys(graph).indexOf(start))
    distances[Object.keys(graph)[startIDX]] = 0

    let currentIDX = minDist(distances, unvisited)
    current = graph[currentIDX]

    while (unvisited !== []) {
        if (current === undefined) {
            unvisited[currentIDX] = true;
            currentIDX = minDist(distances, unvisited)
            current = graph[currentIDX]
            return current
        }
        for (let i = 0; i < Object.keys(current).length; i++) {
            let sum = distances[currentIDX] + Object.values(current)[i]
            if (sum < distances[Object.keys(current)[i]]) {
                distances[Object.keys(current)[i]] = sum
            }
        }
        unvisited[currentIDX] = true;
        currentIDX = minDist(distances, unvisited)
        current = graph[currentIDX]
        console.log(distances)
    }

}

dijkstra(graph, "start")
