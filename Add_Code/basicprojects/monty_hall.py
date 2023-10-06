import random

# Function to generate a random number between minimum and maximum (inclusive)
def random_number(minimum, maximum):
    return random.randint(minimum, maximum)

# Chooses the door containing the prize
prize_door = random_number(1, 3)

# The participant chooses a door
chosen_door = int(input("Choose a door (1, 2, or 3): "))

# The host opens one of the doors that does not contain the prize
if prize_door != chosen_door:
    # If the participant didn't choose the prize door, the host opens the door that doesn't contain the prize and wasn't chosen
    opened_door = 6 - prize_door - chosen_door
else:
    # If the participant chose the prize door, the host randomly opens one of the other doors
    opened_door = random_number(1, 3)
    while opened_door == chosen_door or opened_door == prize_door:
        opened_door = random_number(1, 3)

# Asks the participant if they want to switch doors
switch_door = int(input("Door " + str(opened_door) + " contains a goat.\nDo you want to switch doors (1 for yes, 0 for no)? "))

# Checks if the participant won the prize
if switch_door == 1:
    # The participant chooses a new door
    chosen_door = 6 - chosen_door - opened_door

if chosen_door == prize_door:
    print("Congratulations! You won the prize!")
else:
    print("Too bad, you didn't win the prize.\nThe prize door was", prize_door, ".")
