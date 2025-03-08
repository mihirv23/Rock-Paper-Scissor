# Rock Paper Scissors Game

## Overview
This project is a simple Rock Paper Scissors game implemented using **HTML, CSS, and JavaScript**. The game allows a user to play against the computer, which randomly selects a move. The score is tracked and displayed dynamically.

## Features
- Interactive UI with clickable options (Rock, Paper, Scissors)
- Random move generation for the computer
- Score tracking for both the user and the computer
- Real-time message updates based on the game outcome
- Responsive and visually appealing design

## Technologies Used
- **HTML**: Structure of the webpage
- **CSS**: Styling and layout
- **JavaScript**: Game logic and interactivity

## Game Logic
1. **User Selection**: The user clicks on one of the choices (Rock, Paper, or Scissors).
2. **Computer Selection**: A random choice is generated for the computer.
3. **Winner Determination**:
   - If both choices are the same, it's a **draw**.
   - Otherwise, the winner is decided based on the standard Rock Paper Scissors rules:
     - Rock beats Scissors
     - Scissors beats Paper
     - Paper beats Rock
4. **Score Update**: The score for the user or computer is incremented based on the result.
5. **Message Display**: A message is displayed indicating whether the user won, lost, or the game was a draw.

## Key Concepts Used
### JavaScript
- **Event Listeners**: Used to detect user clicks on the choices.
- **DOM Manipulation**: Updating elements like scores and messages dynamically.
- **Functions**:
  - `playGame(userChoice)`: Handles the game flow.
  - `genCompChoice()`: Generates a random choice for the computer.
  - `drawGame()`: Displays a message when the game is a draw.
  - `showWinner(userWin)`: Updates the score and displays the result.
- **Randomization**: Generating a random index to pick the computer's move.

### CSS
- **Flexbox**: Used for centering elements and layout alignment.
- **Hover Effects**: Provides feedback when hovering over choices.
- **Styling Elements Dynamically**: JavaScript updates background colors based on game outcomes.

## How to Play
1. Open the `index.html` file in a browser.
2. Click on Rock, Paper, or Scissors to make a selection.
3. The computer will choose randomly.
4. The result will be displayed along with updated scores.
5. Play as many rounds as you like!

## Visual Representation



## File Structure
```
/rock-paper-scissors/
├── index.html  # Main HTML file
├── style.css   # Stylesheet for UI
├── app.js      # JavaScript logic
├── images/     # Folder containing rock, paper, scissors images
```

## Future Improvements
- Add sound effects for interactions
- Include animations for better user experience
- Implement multiplayer mode
- Track game history and display past results




