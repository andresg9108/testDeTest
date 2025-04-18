
interface CalculatorProps {
  a: number;
  b: number;
  operation: "add" | "subtract" | "multiply" | "divide" | string;
}

export default function Calculator({
    a,
    b,
    operation,
}: CalculatorProps) {
    const calculete = () => {
        switch (operation) {
            case "add":
                return a + b;
            case "subtract":
                return a - b;
            case "multiply":
                return a * b;
            case "divide":
                return b !== 0 ? a / b : "Error";
            default:
                return "Invalid operation";
        }
    }

    return <section>Result: {calculete()}</section>;
}