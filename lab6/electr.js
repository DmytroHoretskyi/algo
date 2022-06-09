function electr(N, A, n, w){
    for (let i = 0; i < n -1; i++){
      let a = Math.sqrt((N[i][1] - 1) ** 2 + w ** 2 );
      A += a
   }
    return A

}
let w = 4;
let N = [[1,6],[1,8],[1,4]]
let n = N.length
let r = 0
let A = 0
let a = 0
let S =  new Set([-1])
for (let i = 0; i < n; i++){
    if (N[i][1] === 1) {
        r += 1
        if (r === n){
            A = w * (n - 1)
            console.log("Всі стовпи з висотою 1, потрібно дороту:", A)
        }
    }else if (N[0][1] === N[i][1]){
        r += 1
        if (r === n){
            let o = electr(N, A, n, w)
            console.log("Всі стовпи мають однакову максимальну висоту, потрібно дроту:", o)
        }
    }else {
        for (let i = 0; i < n -1; i++){
            if (N[i][1] >= N[i + 1][1]){
                N[i +1][1] = 1
                a = Math.sqrt((N[i][1] - 1) ** 2 + w ** 2)
                A += a
            } else {
                if (S.forEach((x) => x === i) && N[i + 1][1] - N[i][1] >= N[i][1] - 1){
                    a = Math.sqrt((N[i + 1][1] - N[i][1]) ** 2 + w ** 2)
                    A += a
                    S.add(i)
                    S.add(i + 1)
                }else if (S.forEach((x) => x === i) && N[i + 1][1] - N[i][1] < N[i][1] - 1){
                    N[i + 1][1] = 1
                    a = Math.sqrt((N[i][1] - 1) ** 2 + w ** 2)
                    A += a
                    S.add(i)
                    S.add(i + 1)
                } else {
                    N[i][1] = 1
                    a = Math.sqrt((N[i + 1][1] - 1) ** 2 + w ** 2)
                    A += a
                    S.add(i)
                    S.add(i + 1)
                }
            }
        }
        console.log("Потрібна довжина дроту:", A)
    }
}


