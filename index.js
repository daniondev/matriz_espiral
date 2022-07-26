// MATRIZ EN ESPIRAL
function solution(s) {
    const newMatriz = []
    let sFilas = s.length;
    let sColumnas = s[0].length;
    const cantidad = sFilas * sColumnas;
    
    let inicioFila = 0;
    let inicioColumna = 0;
    while(newMatriz.length < cantidad){
            let izq = [];
            let ultimo = [];
        for(let i = inicioFila; i < sFilas; i++){
            for(let j = inicioColumna; j < sColumnas; j++){
                if(i == inicioFila){
                  newMatriz.push(s[i][j]);
                }else if(i > inicioFila && i < sFilas - 1){
                      if(j == inicioColumna){
                                              izq.push(s[i][j])                
                        }
                      
                      if(j == sColumnas - 1){
                          newMatriz.push(s[i][j])                
                    }
                }else{
                          ultimo.push(s[i][j]);
                }
            }
        }
            
            newMatriz.push(...ultimo.reverse());
            newMatriz.push(...izq.reverse());
      
          inicioFila++;
            inicioColumna++;
          sFilas--;
          sColumnas--;
    }
    
    return newMatriz;
  }
  
  const matrix1 =
  [
   [ 1, 2, 3 ],
   [ 8, 9, 4 ],
   [ 7, 6, 5 ]
  ]
  
  const matrix2 =
  [
   [ 1, 2, 3, 4 ],
   [ 12, 13, 14, 5 ],
   [ 11, 16, 15, 6 ],
   [ 10, 9, 8, 7 ]
  ]
  
  const matrix3 =
  [
   [ 1, 2, 3, 4, 5 ],
   [ 16, 17, 18, 19, 6 ],
   [ 15, 24, 25, 20, 7 ],
   [ 14, 23, 22, 21, 8 ],
   [ 13, 12, 11, 10, 9 ]
  ]

  console.log(matrix3);
  console.log(solution(matrix3));