# Tic Tac Toe Game in Python

# Initialize the board
board = [" " for _ in range(9)]

def print_board():
    print(f"{board[0]} | {board[1]} | {board[2]}")
    print("---------")
    print(f"{board[3]} | {board[4]} | {board[5]}")
    print("---------")
    print(f"{board[6]} | {board[7]} | {board[8]}")

# Function to check for a win
def check_win(player):
    # Check rows
    for i in range(0, 9, 3):
        if board[i] == board[i + 1] == board[i + 2] == player:
            return True
    # Check columns
    for i in range(3):
        if board[i] == board[i + 3] == board[i + 6] == player:
            return True
    # Check diagonals
    if board[0] == board[4] == board[8] == player:
        return True
    if board[2] == board[4] == board[6] == player:
        return True
    return False

# Function to check if the board is full
def is_board_full():
    return " " not in board

# Main game loop
current_player = "X"
while True:
    print_board()
    print(f"Player {current_player}'s turn.")
    move = int(input("Enter a position (0-8): "))
    
    if move < 0 or move > 8 or board[move] != " ":
        print("Invalid move. Try again.")
        continue
    
    board[move] = current_player
    
    if check_win(current_player):
        print_board()
        print(f"Player {current_player} wins!")
        break
    elif is_board_full():
        print_board()
        print("It's a draw!")
        break
    
    current_player = "O" if current_player == "X" else "X"
