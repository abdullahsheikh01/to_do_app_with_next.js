# To-Do App

This To-Do app allows users to manage their tasks efficiently with an intuitive UI, offering both Light and Dark themes. The themes were designed in Figma and implemented in Next.js with Tailwind CSS for responsive styling. This app was built using functional components, `useState` for state management, and includes features like dynamic theme switching and task deletion.

## Features
- **Dynamic Theme Switching**: Easily switch between Light and Dark themes with a single click.
- **Task Management**: Add, view, and delete tasks with a smooth user experience.
- **Figma Design**: Themes were initially designed in Figma to ensure a consistent and visually appealing UI.

## Figma Designs
Check out the [theme designs](https://www.figma.com/design/LmYJGRwUlBKHULKEp8gKyq/To-do-App-Design?node-id=0-1&t=Qugv5uzCDhJFShRe-1) created in Figma:
- **Light Theme**: Clean and minimal, designed for bright, day-time usage.
- **Dark Theme**: Soft on the eyes, perfect for use in low-light environments.

## Usage
1. **Add a Task**:
   - Enter a title in the "Title" field.
   - Enter a description in the "Description" field.
   - Click the **Add** button to create a new task card.
   - The task will appear as a card in the main section of the app.
   
2. **Switch Theme**:
   - The theme toggle button at the top allows switching between Light and Dark themes.
   - The theme changes dynamically, altering the background, text, and button colors.

3. **Delete a Task**:
   - Each task card has a **Delete** button.
   - Click **Delete** to remove the specific task from the list.

4. **Delete all Tasks**:
   - Clear all tasks by Click **Clear All**
   - Each and every task will be delete
## Code Structure

- **`ToDoApp` Component**: The main functional component of the app, located in `ToDoApp.tsx`.
  - Handles the core functionalities: adding tasks, deleting tasks, and theme toggling.
  
- **State Management**:
  - **Title and Description**: Stored using `useState` hooks to manage the input fields for each task.
  - **Tasks List**: Maintained as an array of objects (each with a title and description) in the `todos` state.

- **Theme Toggle**:
  - Uses `themeChanger()` function to switch themes based on the current `theme` state.
  - Updates colors for background and text by toggling between predefined values (`Black Theme` and `White Theme`).

- **Task Management**:
  - **Form Handler**: `FormsubmitHandler` function adds a new task to `todos` when the form is submitted.
  - **Delete Functionality**: `deleteButtonHandler` function removes a task based on its index in the array.

- **Dynamic Styling**:
  - Tailwind CSS classes are dynamically set based on state variables to adapt the UI to the selected theme and device size.

- **Conditional Rendering**:
  - The component conditionally renders tasks and adjusts layout based on the number of tasks (e.g., grid view for multiple tasks, centered message for empty list).
- **Clear All Functionality**:
  - It delete all the todos.

This structure allows for clean, modular, and responsive code, ensuring that each feature is organized and easy to maintain.

# Live Website Link:
https://todo-app-6601.vercel.app/

# My LinkedIn id:
[Click](https://www.linkedin.com/in/abdullah-shaikh-29699b302/) to vist my LinkedIn Id.