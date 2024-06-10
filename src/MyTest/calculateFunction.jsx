const calculateFunction = () => {
    try {
        let result = 0;
        const operators = [];
        const operands = [];
    
        const tokens = number.match(/\d+|[-+*/]/g);
    
        if (!tokens || tokens.length === 0) {
            setNumber('');
            return;
        }
    
        const precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
        };
    
        const SwitchCase = (a, b, operation) => {
            switch (operation) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
                default:
                    break;
            }
        };
    
        let isNegative = false;
    
        tokens.forEach((token, index) => {
            if (!isNaN(token)) {
                if (index === 0 && token === '-') {
                    isNegative = true;
                } else {
                    operands.push(parseFloat(isNegative ? `-${token}` : token));
                    isNegative = false;
                }
            } else {
                while (
                    operators.length > 0 &&
                    precedence[operators[operators.length - 1]] >= precedence[token]
                ) {
                    const b = operands.pop();
                    const a = operands.pop();
                    const operation = operators.pop();
                    SwitchCase(a, b, operation);
                    operands.push(result);
                }
                operators.push(token);
            }
        });
    
        while (operators.length > 0) {
            const b = operands.pop();
            const a = operands.pop();
            const operation = operators.pop();
            SwitchCase(a, b, operation);
            operands.push(result);
        }
    
        setNumber(result.toString());
    }
    catch (error) {
        console.error("Calculation error:", error);
    }
};

export default calculateFunction;