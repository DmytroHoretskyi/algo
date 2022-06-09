let S = "ABC DEF ABB BBA ABCABC"
let subS = "DEF"
let pi = [0]

function kmp(S, subS, pi) {
    let l = 0, k = 0, quantity = 0
    let result = []
    prefix(subS, pi)
    while (l !== S.length) {
        if (S[k] === subS[l]) {
            k++
            l++
            if (l === subS.length) {
                //console.log(`Found at index ${k-l}`)
                quantity++
                result.push((k-l))
            }
        }
        else if (l === 0) {
            k++
            if (k === S.length) {
                if (quantity === 0) {
                    return "pattern not found"
                }
                //console.log("End of pattern")
                return result
            }
        }
        else {
            l=pi[l-1]
        }
    }
    return result
}

// O(subS)
function prefix(subS, pi) {
    let i = 1
    let j = 0
    while (i !== subS.length) {
        if (subS[i] === subS[j]) {
            pi[i]=j+1
            i++
            j++
        }
        else {
            if (j === 0) {
                pi[i] = 0
                i++
            }
            else {
                j=pi[j-1]
            }
        }
    }
}

//console.log(kmp(S, subS, pi))
module.exports = kmp
