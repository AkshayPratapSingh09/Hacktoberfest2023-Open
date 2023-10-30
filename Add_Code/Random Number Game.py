import random

def play_game():
    print("Welcome to the Random Number Game!")
    print("Choose a difficulty level:")
    print("1. Easy (1-50 range, 10 guesses)")
    print("2. Medium (1-100 range, 7 guesses)")
    print("3. Hard (1-200 range, 5 guesses)")
    
    difficulty = input("Enter the number of your chosen difficulty: ")
    
    if difficulty == '1':
        secret_number = random.randint(1, 50)
        max_guesses = 10
    elif difficulty == '2':
        secret_number = random.randint(1, 100)
        max_guesses = 7
    elif difficulty == '3':
        secret_number = random.randint(1, 200)
        max_guesses = 5
    else:
        print("Invalid difficulty level. Please choose 1, 2, or 3.")
        return

    guesses = 0

    while guesses < max_guesses:
        try:
            guess = int(input("Enter your guess: "))
            guesses += 1

            if guess < secret_number:
                print("Too low! Try again.")
            elif guess > secret_number:
                print("Too high! Try again.")
            else:
                print(f"Congratulations! You've guessed the number in {guesses} guesses.")
                break

        except ValueError:
            print("Please enter a valid number.")

    if guesses == max_guesses:
        print(f"Sorry, you've run out of guesses. The secret number was {secret_number}.")

play_game()

while input("Play again? (yes/no): ").lower() == "yes":
    play_game()
