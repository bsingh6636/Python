
// function starPattern (n){
//     for(let i =0 ; i < n ; i++ ){
//             let row = ''
//             for(let j=0; j < n; j++){
//                row += '* '
//             }
//             console.log(row)
//     }
// }

// starPattern(5);
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

// function startPattern2(n){
//     for(let i=0; i < n; i++){
//         let row = '';
//         for(let j=0; j<= i; j++){
//             row += '* '
//         }
//         console.log(row)
//     }
// }

// startPattern2(5);
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

// function numPattern(n){
//     for(let i =n; i >= 1 ; i--){
//         let row = '';
//         for(let j = 1 ; j <= i; j++ ){
//             row += j
//             row += ' '
//         }
//         console.log(row);
//     }
// }

// numPattern(5);

// function startPattern3 (n){
//     for(let i = 1 ; i <= n ; i++ ){
//         let printableRow = '';
//         for(let j = 1 ; j <= n - i ; j++){
//                 printableRow += '  '
//         }
//          for(let j = 1 ; j <= i ; j++){
//             printableRow+= '* '
//         }
//         console.log(printableRow);
//         // process.stdout.write(printableRow);
//     }
// }

// startPattern3(5)


// function zeron1Pattern (n){
//     for(let i = 1 ; i <= n ; i++){
//         let row =''
//         for(let j=1 ; j <=i ; j++){
//            row+= j & 1 ? '1 ' : '0 '
//         }
//         console.log(row)
//     }
// }

// zeron1Pattern(5);

// function zeron1Pattern2 (n){
//     let myswitch = true;
//     for(let i = 1 ; i <= n ; i ++){
//         let row = ''
//         for(let j=1 ; j <=i ; j++){
//             row += `${Number(myswitch)} `
//             myswitch = !myswitch
//         }
//         console.log(row)
//     }
// }

// zeron1Pattern2(5)