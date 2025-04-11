# Personal_Development_Tracker

## Objective
This project aims to create a simple, client-side Personal Development Tracker application. The application allows users to define goals, track their progress, and record daily logs. The application utilizes HTML, CSS, and JavaScript to provide a user-friendly interface for managing personal development activities. Key features include goal creation, progress tracking (marking goals complete/incomplete), goal deletion, daily log entries and a dark/light mode toggle. Data is currently managed in-memory, and the user interface uses Bootstrap for styling and validation.

## Output
<iframe src="https://niat-web.github.io/Personal_Development_Tracker/" height="1000" width="300" title="Personal_Development_Tracker"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript, Bootstrap

## Features to Implement
- Add goals with name, type, description, and deadline.
- Mark goals as complete or incomplete.
- Delete goals.

## UI Enhancements
- Implement Dark/Light mode using JavaScript and CSS.
- Display success/error notifications.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement goal submission form | Form captures goal details and adds a new goal object to the goals array. |
| Implement goal list display |  Displays goals with relevant details and complete/delete buttons. |
| Implement goal completion toggle |  Toggles the `completed` property of a goal when the "Mark Complete" button is clicked. |
| Implement goal deletion | Removes a goal from the `goals` array when the "Delete" button is clicked. |
| Implement daily log submission form | Captures daily log entries with date and text. |
| Implement statistics display | Updates the UI to show the number of completed goals, goals in progress, and total goals. |
| Implement validation | Validates form entries, displaying notifications for missing or invalid input. |
| Implement dark mode toggle | Allows users to switch between light and dark themes. |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM manipulation | Used to dynamically update the goal list, statistics, and notifications. |
| Event listeners | Used to handle form submissions, button clicks, and dark mode toggle. |
| Arrays and objects | Used to store and manage goal data. |
| Local Storage | Would be used for storing the `goals` array (not currently implemented)|
| Functions | Used to encapsulate reusable logic, such as `updateGoalList`, `updateStats`, `toggleComplete`, and `deleteGoal`. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| N/A | N/A | No external APIs are used in the current implementation. |