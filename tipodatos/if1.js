let dato = true;
function vale (n)
{
    if ( n == true)
    {
    return "es true";
    }
    else 
    {
    return "es false";
    }
}
console.log(vale(n));

// corregido gratis. tmb se puede usar el "includes" comparando con un booleano

let lenguaje = 'esto es jabaskript papá';
let lenguaje2 = 'esto es javascript papá';

function diferencia (lenguajes)
{
    if (lenguajes.indexOf ('javascript') != -1)
        {
            return 'Estoy aprendiendo';
        }
    else
        {
            return 'Lo aprenderé más adelante';
        }
}
console.log(diferencia(lenguaje2));