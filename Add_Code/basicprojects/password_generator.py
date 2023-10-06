import random

print('\n')
uppercase_alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
lowercase_alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
numbers = ['0','1','2','3','4','5','6','7','8','9']
symbols = ['*','/','.','?','[]',';','@','!','$','#','^','%','&','+','-']

positive_response = ['y','yes','ok','Y']
negative_response = ['n','N','no']

include = input("Include Symbols? (y/n) ")

if include in positive_response:
    characters = uppercase_alphabet + lowercase_alphabet + numbers + symbols
elif include in negative_response:
    characters = uppercase_alphabet + lowercase_alphabet + numbers

print('\n')

length = int(input('Password Length: '))

n = 0
password = ""
index = len(characters)

while length != n:
    password = password + characters[random.randint(0,index - 1)]        
    n = n + 1

print('\n')
print(password)
