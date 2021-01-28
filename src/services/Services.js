import { compile, derivative } from 'mathjs';
var Algebrite = require('algebrite');

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
const exactIntegrate = (a, b) => {
    var expr = compile(Algebrite.integral(Algebrite.evaluate(this.state.fx)).toString())
    return expr.evaluate({x:b}) - expr.evaluate({x:a})

}
export { func, funcDiff, error, exactIntegrate };