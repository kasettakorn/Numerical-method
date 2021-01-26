import { compile, derivative } from 'mathjs';
const func = (fx, X) => {
    var expr = compile(fx); // f(x)
    let scope = { x: parseFloat(X) }; //f(x) ; x=input
    return expr.evaluate(scope);
}
const funcDiff = (X) => {
    var expr = derivative(X, 'x');
    let scope = {x:parseFloat(X)};
    return expr.evaluate(scope); 
}
const error = (xnew, xold) => {
    return Math.abs((xnew - xold) / xnew);
}

export { func, funcDiff, error };