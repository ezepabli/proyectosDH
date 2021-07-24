let notas = [8,5,2,7,1,3];
console.log('El array es: '+notas);
console.log('Tiene '+notas.length+' caracteres de largo');
console.log('Ahora agregamos un 5 y un 8');
notas.push(5,8);
console.log(notas);
let elUltimoQuitado = notas.pop();
console.log(notas);
console.log(elUltimoQuitado);
notas.shift()
console.log(notas);

// notas.push agrega uno al final notas.pop() saca al final 1
// notas.shift() saca uno del principio y notas.unshift(2) agrega los que quieras al principio