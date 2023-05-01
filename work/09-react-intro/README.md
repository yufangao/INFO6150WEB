# React Intro Assignment

**Due Mar 22, 11:59pm ET**

## Goal

Create a react project that:
- Has a component with state that is modified
- Conditionally displays another component
- This other component uses a callback to modify the ancestors state
- Uses CSS on elements in a component
- Uses a CSS animation to show a fade-in effect


## Setup Requirements

- Create a react project named "inventory" using create-react-app inside this directory
- Modify the files in the src/ directory inside inventory/ to meet the requirements
- For css, you can add/modify as many css files as you want in /src, including src/index.css that is also applied to the output.
- Remember to meet the initial changes required in class:
  - change your App.js to App.jsx (requires a server restart)
  - change/replace the default css className(s) to be kebab-case
- You will need to create a Reorder.jsx for the Reorder Component
- The Reorder component should only accept one prop, "onReorder", which should be a function that takes no arguments.  When called, it will set the count to 5.

## Functional Requirements

Your App component:
- displays a count for an inventory
  - Hint: This will be a state in the App Component
- allows you to increase/decrease the displayed count using +/- buttons
- offers a "Reorder" button when the count is 0
  - implement this in a Reorder component that is only shown when the count is 0
    - Hint: This means the Reorder Component is conditionally rendered inside App Component
  - Clicking the Reorder button will adds 5 to the count
- does not allow you to decrease the count below 0
  - Hint: put a `disabled={!count}` prop on the decrease button.  This will disable the button when the count is 0.
- Pressing the Reorder button sets the inventory count to 5
  - Hint: The Reorder button will need to change state that is defined in the App component.  This means you will need to pass a function to the Reorder component. Per the Setup Requirements, the passed "onReorder" prop is a function that takes no arguments, so App.jsx will have to define a function that does the state change and pass that function as "onReorder" to the Reorder component.

## Visual Requirements
- The buttons should have some space between them and each other as well as the output text
- the inventory count, the +/- buttons, and the Reorder button should all appear on the same line
- The Reorder button is only shown when the Count is 0
- When it appears, the reorder button will have a "fade in" animation
  - hint: set a CSS animation on the element or a wrapper of the element to animate from opacity 0 to opacity 1.  Use a CSS animation (with keyframes) instead of a CSS transition.

## Restrictions

- Do not use table, CSS table-cell, floats, or other related concepts for layout
- Do not use outside JS or CSS libraries (including any outside React libraries, which are JS libraries).  Only use create-react-app as shown in class.
- Follow the methods used in class or described in this README

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'react-intro' (`git checkout -b react-intro`)
* add the necessary files in this directory to have the required features
* add, commit, and push the branch to github
  - You will merge ALL the files created by create-react-app, not just the files you personally modify
  - Except for `node_modules/` and `build/` (which should automatically be ignored by the .gitignore file create-react-app creates) you want to commit all the files create=react=app creates so that anyone getting your project from github can use it without making changes.
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

