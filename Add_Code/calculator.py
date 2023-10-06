import math

def perform_operation(num1, num2, operator):
    if operator == '+':
        return num1 + num2
    elif operator == '-':
        return num1 - num2
    elif operator == '*':
        return num1 * num2
    elif operator == '/':
        if num2 != 0:
            return num1 / num2
        else:
            print("Error: Division by zero!")
            exit(1)
    else:
        print("Error: Invalid operator!")
        exit(1)

def perform_scientific_operation(num, sci_op):
    if sci_op == 's':
        return math.sqrt(num)
    elif sci_op == 'p':
        return num ** 2
    else:
        print("Error: Invalid scientific operator!")
        exit(1)

def main():
    num1 = float(input("Enter first number: "))
    operator = input("Enter operator (+, -, *, /): ")

    if operator in ['+', '-', '*', '/']:
        num2 = float(input("Enter second number: "))
        result = perform_operation(num1, num2, operator)
        print("Result:", result)
    else:
        print("Invalid operator!")
        exit(1)

    choice = input("Do you want to perform a scientific operation? (y/n): ")

    if choice.lower() == 'y':
        sci_op = input("Enter scientific operation (s for square root, p for power): ")
        result = perform_scientific_operation(result, sci_op)
        print("Result after scientific operation:", result)

if __name__ == "__main__":
    main()
