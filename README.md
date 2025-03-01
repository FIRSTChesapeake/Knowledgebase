Welcome to the Chesapeake Knowledgebase repository. This repository is intended to host instructions for the setup of equipment at [FRC](https://www.firstinspires.org/robotics/frc/) and [FTC](https://www.firstinspires.org/robotics/ftc/) events that are hosted by [FIRST Chesapeake](https://firstchesapeake.org/). 

Current scope:
- FRC
	- Audio/Visual (A/V) setup instructions

Desired future additions:
- FRC
	- Pit power setup instructions
- FTC
	- Audio/Visual (A/V) setup instructions
	- Scoring system setup instructions
	- Field display Raspberry Pi setup instructions

# Contributing
Required software: [Obsidian](https://obsidian.md) and [Node.JS](https://nodejs.org) v20 or higher.
1. Clone the repository.
2. Navigate to the folder of the cloned repository and issue:
   `npm i`.
3. Open Obsidian, then select the "Open Folder as Vault" option.
4. Navigate to the folder of the cloned repository and select the "content" folder within it, then select "Open Folder".
5. Make any changes (which are saved automatically by Obsidian). Execute
   `npx quartz sync` to sync changes with the Github repository.

When editing, it is suggested to enable the live Web preview by executing:
`npx quartz build --serve`. This will start a website on your local machine at http://localhost:8080 that automatically refreshes as content changes are made. The preview on Obsidian can sometimes be inaccurate to the final Web appearance.

Please minimize the number of commits made to this repository, as there are a limited number of deployments allowed to the main site each month.

