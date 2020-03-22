function eval() {

    return;
}

function expressionCalculator(expr) {
    expr=expr.replace(/\s+/g,'');

    let valueZero = expr.match(/\d*\/0/);
    if (expr.split("(").length !== expr.split(")").length ) {
        throw new Error("ExpressionError: Brackets must be paired");
    }
    let som = valueZero;
    if(som){
        throw new Error ("TypeError: Division by zero.");
    }

    let value = expr.match(/(^[0-9*/+-]+$)/);
    let sum = new Function('return '+ value );

    return sum();
}

module.exports = {
    expressionCalculator
};

