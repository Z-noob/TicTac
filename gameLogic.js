// winning combines
// [111][xxx][xxx] /
// [xxx][111][xxx] /
// [xxx][xxx][111]
// [1xx][1xx][1xx] /
// [x1x][x1x][x1x] /
// [xx1][xx1][xx1] /
// [1xx][x1x][xx1] /
// [xx1][x1x][1xx] /

const grid = [[1,1,1], [0,2,0], [0,0,2]]
const oldgrid = [[1,2,3], [4,5,6], [7,8,9]]

//player x, player y

const checkForWin = (placed) => {
    if(grid[0][0] === placed && grid[0][1] === placed && grid[0][2] === placed){ return true }
    if(grid[0][0] === placed && grid[1][0] === placed && grid[2][0] === placed){ return true }
    if(grid[0][0] === placed && grid[1][1] === placed && grid[2][2] === placed){ return true }
    if(grid[1][0] === placed && grid[1][1] === placed && grid[1][2] === placed){ return true }
    if(grid[0][1] === placed && grid[1][1] === placed && grid[2][1] === placed){ return true }
    if(grid[2][0] === placed && grid[2][1] === placed && grid[2][2] === placed){ return true }
    if(grid[0][2] === placed && grid[1][2] === placed && grid[2][2] === placed){ return true }
    if(grid[0][2] === placed && grid[1][1] === placed && grid[2][0] === placed){ return true }

    return false 
}

console.log("The file ran successfully!");

console.log(checkForWin(1))
console.log(checkForWin(grid[1][1]))
console.log(checkForWin(grid[2][1]))
console.log(checkForWin(grid[0][0]))















