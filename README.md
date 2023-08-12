# gem-quest-app

A social networking app for GeMs (gender minorities)!

## Tech Stack

- React Native
- Expo
- Firebase (Authentication and Firestore)

## Project Structure

- src/assets: Houses images, fonts, and other **static resources**.
- src/classes: Houses our JavaScript Class files.
- src/components: Stores reusable UI components.
- src/navigation: Includes navigation-related files.
- src/screens: Contains individual application screens.
- src/utils: Holds utility functions or helper modules.

## Running the app locally

1. Navigate to the Directory: `cd gem-quest-app`
2. Install Dependencies: `npm install`
   - Note: Ensure you have Node.js and npm installed on your system.
3. Run the App
   - If using npm: `npm run web`
   - If using Expo:
     - First, ensure you have the Expo CLI installed: :`npm install -g expo-cli`
     - `expo start --web`
4. Access the App in Your Browser
   - To view the app as intended for mobile:
     - Right-click on the webpage and select 'Inspect' or 'Inspect Element'.
     - Within the developer tools panel, locate and click on the icon that represents a mobile device (often called "Toggle Device Toolbar" in browsers like Chrome).
     - From the device dropdown list, select 'iPhone SE' to simulate the mobile view as intended.
