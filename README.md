Overview
This is a simple React application that displays Star Wars characters' profile cards using data from the SWAPI API. The profile cards will include the character's Name, Height, and Film Names. 
This README will guide you through the installation, setup, and usage of the app.

Table of Contents:
- Features
- Installation
- Usage

Features
1. Character Profile Cards: The application fetches character data from the SWAPI API and displays their profile cards with the following information:
- Name
- Height
- Film Names
2. Initial Display: Upon loading the app, the first 3 character cards are displayed.

3. Add Button: The "Add" button allows you to add one more character card to the list of displayed cards.

4. Close Icon: If the total number of cards is greater than 3, a close icon (x) appears in the top-right corner of each card. Clicking the close icon will remove the specific card and update the remaining cards accordingly.

Installation
- Clone the repository: git clone https://github.com/ayushibhadauria2/StarCards
- Install dependencies: 
    npm install

Usage
- Start the development server: npm start
- Open your web browser and navigate to http://localhost:3000 to access the app.
- Add character and remove them as needed.