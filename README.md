# Sudoku-Solver

## Algorithm Used : Backtracking algorithm.
## The rules to solve the puzzle are:

             User can fill empty cells with digits 1 to 9 once 
                     i)   in row 
                     ii)  in column
                     iii) in any 3x3 board  
- **GetPuzzle**: When the user clicks on this button, gets a puzzle to be solved.

  In the code we have made get request to the following API :
  [Link To The API](https://sugoku.herokuapp.com/board)
  
  Arguments -
        easy, medium, hard or random
       
  Example:
  https://sugoku.herokuapp.com/board?difficulty=easy
  
- **SolvePuzzle**: When the user clicks on the button, the puzzle gets solved.
## C++ Implementation for SolvePuzzle
**Let's first try to code our logic to solve the puzzle using backtracking algorithm in C++ programming language.**

![image](https://user-images.githubusercontent.com/92745924/167242465-bff61120-f905-472c-b604-d010ae1b8fa5.png)

# The final screenshots of the website 
**After incorporating the logic from C++ in Javascript :**

## The Landing Page
![image](https://user-images.githubusercontent.com/92745924/167245453-d4e06817-f67e-41d7-a99f-dbbfab675d0c.png)

## When User Clicks Get Puzzle
![image](https://user-images.githubusercontent.com/92745924/167245466-70f09fe8-7405-4585-b46f-096c337a0062.png)

## When User Clicks Solve Puzzle
![image](https://user-images.githubusercontent.com/92745924/167245481-f04aedc2-bbf9-4cb2-97cc-1555e15f95e6.png)
