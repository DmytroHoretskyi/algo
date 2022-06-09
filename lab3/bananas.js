function bananas(piles, h){
   let k = 1
    let newH = h + 1

    if (!piles.every((x) => {return x > 1})){
        return -1
    }


        if (piles.length > h || piles.length < 1){
            return -1
        }
        while (newH > h){
            newH = 0
            piles.forEach((x) =>{
                if (k >= x){
                    newH +=1
                }
                else if (k === 1 ||  x % k === 0){
                    newH += Math.floor(x/k)
                }
                else {
                 newH += Math.floor(1 + x / k)
                }

            })
            if (newH > h){
                k+= 1
            }
        }

        return k
}
console.log(bananas([30, 11, 23, 4, 20], 5))
console.log(bananas([3,6,7,11], 8))
console.log(bananas([30, 11, 23, 4, 20], 6))

module.exports = bananas
