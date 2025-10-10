## Outline
Create a CLI chat bot to take messages for a bakery. The bot should:
1. Ask the user what message they would like to leave
2. Ask for their first and last name

```
[First Last]: Message
```

For example:
[John Doe]: I was wondering what time the bakery opened.

## Task 1 Assumptions
- We only need the user's name and message
- The user's response to each prompt will be correct
- The user will not give more information than what is requested

## Task 2 Assumptions
- We need to ask the user for an unknown amount of information (DOB, email, phone number, etc)
- The user's input may be poorly formatted
- The user is expecting shortcuts:
  - Pressing "q" should exit the chat
  - Pressing "c" should print out the formatted conversation
  - Pressing "m" should print out the user's message using the following format:

## Setup
1. npm i (optional)
2. npm run dev