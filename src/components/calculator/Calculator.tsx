import { useState } from 'react';
import styled from 'styled-components';

// Styled Components for the Calculator layout and appearance

// Main container for the calculator
const CalculatorContainer = styled.div`
    width: 35%;
    min-height: 25%;
    background-color: #2c2f3f;
    border-radius: 15px; 
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; 
    box-shadow: 4px 10px rgba(0, 0, 0, 0.5); /* Shadow for depth */

    @media (max-width: 900px) {
        width: 40%; /* Adjust width for smaller screens */
    }
`;

// Styled input fields for entering numbers
const StyledInput = styled.input`
    background-color: #3b3f54;
    color: white;
    font-size: calc(3px + 1vw);
    border: none; 
    border-radius: 10px;
    padding: 1vh 1vw; 
    margin-bottom: 1vh;
    width: 100%; 
    text-align: center;
    box-shadow: 2px 4px rgba(0, 0, 0, 0.5); /* Subtle shadow for depth */

    &::placeholder {
        /* Placeholder text color */
        color: #ddd;
    }
`;

// Grid layout for calculator buttons
const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns in each row of the grid*/
    gap: 10px; /* Spacing between buttons */
`;

// Styled button component
const StyledButton = styled.button`
    background-color: #3b3f54; 
    color: white; 
    font-size: calc(5px + 1vw); 
    border: none; 
    padding: 2%; 
    box-shadow: 2px 5px rgba(0, 0, 0, 0.5); 
    border-radius: 10px; 
`;

// Styled output area to display results or error messages
const StyledOutput = styled.div`
    background-color: #3b3f54;
    color: white;
    font-size: calc(2px + 1vw); 
    text-align: center; 
    padding: 1vh 1vw; 
    border-radius: 10px;
    box-shadow: 1px 4px rgba(0, 0, 0, 0.5); 
    margin-top: 2vh;
`;


// Main Calculator Component
export default function Calculator() {
    // State variables to store user input and calculation result
    const [firstNumber, setFirstNumber] = useState<string>(''); // First number input
    const [secondNumber, setSecondNumber] = useState<string>(''); // Second number input
    const [result, setResult] = useState<string | number>('Result'); // Result or error message

    // Function to perform calculations based on the selected operation
    const performOperation = (operation: string) => {
        const num1 = parseFloat(firstNumber); // Convert first input to a number
        const num2 = parseFloat(secondNumber); // Convert second input to a number

        if (isNaN(num1) || isNaN(num2)) {
            setResult('ERROR: Invalid input'); // Display error if inputs are not valid numbers
            return;
        }

        // Initialization of the output with default values
        let output: number | string = 0;

        // Matches the button that the user clicks with the correct operation.
        // If a case is matched, then the operation is performed and the matching process ends with the break.
        // SetResult will then take the output and update its useState
        switch (operation) {
            case 'addition':
                output = num1 + num2; // Perform addition
                break;
            case 'subtraction':
                output = num1 - num2; // Perform subtraction
                break;
            case 'multiplication':
                output = num1 * num2; // Perform multiplication
                break;
            case 'division':
                output = num1 / num2; // Perform division
                break;
            case 'exponentiation': {
                // Custom exponentiation logic
                if (num2 === 0) {
                    output = 1; // Any number to the power of zero is one
                } else if (num2 < 0) {
                    const newSecondNumber = num2 * -1;
                    let loopNumber = 1;
                    for (let i = 0; i < newSecondNumber; i++) {
                        loopNumber *= num1;
                    }
                    output = 1 / loopNumber; // Handle negative exponents
                } else {
                    output = 1;
                    for (let i = 0; i < num2; i++) {
                        output *= num1;
                    }
                }
                break;
            }
        }

        setResult(output); // Update result state with calculated value or error message
    };

    // Function to clear all inputs and reset the result
    const clearCalculator = () => {
        setFirstNumber(''); // Clear first number input
        setSecondNumber(''); // Clear second number input
        setResult('Result'); // Reset result to default value
    };

    return (
        <CalculatorContainer>
            {/* Styled Input Fields */}
            <div>
                <StyledInput
                    type="text"
                    placeholder="First number"
                    value={firstNumber}
                    onChange={(e) => setFirstNumber(e.target.value)} // Update state on user input
                />
                <StyledInput
                    type="text"
                    placeholder="Second number"
                    value={secondNumber}
                    onChange={(e) => setSecondNumber(e.target.value)} // Update state on user input
                />
            </div>

            {/* Buttons */}
            <ButtonGrid>
                <StyledButton onClick={() => performOperation('addition')}>+</StyledButton>
                <StyledButton onClick={() => performOperation('subtraction')}>-</StyledButton>
                <StyledButton onClick={() => performOperation('multiplication')}>*</StyledButton>
                <StyledButton onClick={() => performOperation('division')}>/</StyledButton>
                <StyledButton onClick={() => performOperation('exponentiation')}>**</StyledButton>
                <StyledButton onClick={clearCalculator}>C</StyledButton> {/* Clear button */}
            </ButtonGrid>

            {/* Styled Output */}
            <StyledOutput
                style={{
                    color:
                        result === 'ERROR: Invalid input' || result === 'Invalid operation'
                            ? 'red' // Display errors in red text
                            : typeof result === 'number' && result < 0
                                ? 'red' // Display negative results in red text
                                : 'white', // Default text color is white
                }}>
                {result} {/* Display result or error message */}
            </StyledOutput>
        </CalculatorContainer>
    );
};
