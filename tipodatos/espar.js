function esPar(n)
{
    if (n % 2 == 0)
    {
        return true
    } 
    else 
    {
        return false
    }
}
function devuelve (num) {
    if (esPar(num) == true){
    return "Este número es par"}
    else 
    {
        return "Este numero es impar"
        }}
        console.log(devuelve(5));