# Software Engineering: VR-Chess 
# System Requirements Specification Document
> Version 1.0 Note: This document is under construction final version will be uploaded on or before 12/11/2022
> Prepared by Eric Smrkovsky
> California State University, Fresno

## VR-Chess Team Members
| Team Member | Role | 
| -- | -- | 
| Eric Smrkovsky | Project Manager |  
| Jose Fernando Jimenez Chavez | Lead Technical Designer |
| Brett Harris | Graphics Design and Visuals |      
| Jacob Miller | Front End Developer |   
| Christian Leon | Back End Developer |            

## 1. Introduction
### 1.1 Purpose 
This version of VR-Chess is a web-based Virtual reality experience. The purpose of this document is to provide a detailed overview of the system requirements for VR-Chess Version 1.0. This document also gives an overall description of the software components used during the design and development phases.
### 1.2 Product Scope
This product aims to bring a fully functional chess game to a virtual setting for use by one or two players. VR Chess will benefit anyone who wants to experience a game of Chess in fully immersive virtual reality. VR_Chess will provide an outlet to practice Chess skills and communicate with Chess friends. The user experience will be of utmost importance when designing the look and feel of the VR Chess experience. The software development team for VR Chess will strive to create an experience that could be transitioned over to the upcoming Metaverse, providing competition for the first Chess experience on the platform. This look to the future value of Chess in the Metaverse brings the most value to potential investors.
### 1.3 Intended Audience
This document will be helpful to the clients and developers involved with developing and maintaining the VR-Chess software. It will provide a roadmap for the development team to follow when implementing the product's features. This System Requirements document looks into the development process for stakeholders and other relevant parties. 
### 1.4 Document Conventions
This document was designed to be submitted as a deliverable for a project submission in a college-level software engineering course. Some sections will pertain to specific project requirements, such as System Requirement Specification, Github Workflow Documentation, and Resources Learned. The highest level requirement in this document is described as a milestone. A milestone is a functional version containing requirements related to the features from within the scope of the specified version of VR-Chess.
### 1.5 Glossary of Terms
NAF -> Networked A-Frame  
DFD -> Data Flow Diagram  
FR -> Functional Requirement  
NFR -> Non-Functional Requirement  
UML -> Unified Modeling Language  
DB -> DataBase  
VR -> Virtual Reality  
TBD -> To Be Determined

## Overall Description
### 2.1 Product Overview
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/User_Journey.png)This version of VR-Chess is a new self-contained product that utilizes the web browser on phones, tablets, computers, and headsets to play a game of chess over the internet in semi-immersive virtual reality. This game provides a simulated 3D environment using 3D graphics to give online chess play a realistic, immersive feel. The VR-Chess interface is simple and accessible by a wide range of devices, so players of all skill ranges can play. This software version is web-based to provide access to people who don't have access to VR-Headsets. This software version is strictly for two players, providing a virtual space for players to practice their chess skills with others online. This version of the VR-Chess experience is the WebVR-based component of a more extensive VR-Chess system (below) designed for use in the Metaverse.

### 2.2 Functional Requirement Overview
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/DFD0.PNG)This product functionality section summarizes the primary functional requirements the software must perform or must be present for the user to carry out the specific use case. These functional requirements are components within the Data Flow Diagram (highest level) shown above. More details and diagrams for each requirement will be provided in Section 3; only a high-level summary is available here. 
* FR1: Store User Information
    * Description: The software must be able to store user account details. 
    * Dependency: DB
* FR2: Account Creation
    * Description: The user must be able to create an account.
    * Dependency: FR1
* FR3: User Login 
    * Description: The user must be able to log in with a registered account.
    * Dependency: DB
* FR4: Store Password Securely
    * Description: The database must store the password securely.
    * Dependency: DB, FR3
* FR5: Multiple Environments
    * Description: The user must be able to choose from three or more choices for the VR environment.
    * Dependency: FR3
* FR6: Multiple Chess Board Designs
    * Description: The user must be able to choose from two or more Chess board designs available.
    * Dependency: FR3
* FR7: Choose Piece Color 
    * Description: The user must be able to choose from white, black, green, red, yellow, and blue for the piece color.
    * Dependency: FR3
* FR8: Viewable VR-Chess Instructions
    * Description: The user must be able to view the instructions for operating the game. 
    * Dependency: VR-Chess Instructions Document
* FR9: Viewable Chess Game Rules
    * Description: The user must be able to view the instructions for operating the game.
    * Dependency: Chess Game Rules Document
* FR10: Multiple Avatars
    * Description: The user must be able to choose from multiple avatars.
    * Dependency: FR3
* FR11: Store User Preferences
    * Description: The software must store the user's preferences. 
    * Dependency: FR5, FR6, FR7, FR10, DB
* FR12: Start VR Scene
    * Description: The user must be able to start the VR scene.
    *Dependency: FR5, FR6, FR7, FR10, FR13
* FR13: Access User Preferences
    * Description: The user must be able to choose to load saved preferences.
    * Dependency: FR5, FR6, FR7, FR10, FR11
* FR14: Record Game Move History
    * Description: The software must record all game moves for each game.
    * Dependency: F12, DB
* FR15: Store Game Move History Log
    * Description: The software must store the move log from each game.
    * Dependency: F12, DB
* FR16: View Game Logs
    * Description: The user must be able to view the record of all game logs.
    * Dependency: F12, DB
* FR17: Pause Menu
    * Description: The user must be able to pause the game, which triggers the menu.
    * Dependency: F12
* FR18: Pause Menu: View Game Logs
    * Description: The user must be able to select the option to view game logs from the pause menu.
    * Dependency: FR16, FR17, DB
* FR19: Pause Menu: Instructions
    * Description: The user must be able to select the option to view the VR-Chess Instructions document from the pause menu.
    * Dependency: FR8, FR17
* FR20: Pause Menu: Rules
    * Description: The user must be able to select the option to view the Chess Game Rules document from the pause menu.
    * Dependency: FR9, FR17
* FR21: Pause Menu: Quit Game
    * Description: The user must be able to select the option to quit the game from the pause menu.
    * Dependency: FR9, FR17
* FR:22 Control Avatar in Virtual Environment
    * Description: The user must be able to control the user's avatar with functionality for moving forward, backward, left, and right.
    * Dependency: FR12
* FR23: Take a Seat at Table by peice selection  
    * Description: The user must be able to sit virtually at the chess table when the peice is chosen.
    * Dependency: FR22
* FR24: Board: Preset Positions of Pieces 
    * Description: The board must have the game pieces present when the user sits at the chess table.
    * Dependency: FR23
* FR25: Board Game Logic: King 
    * Description: King piece logic must be designed to follow the rules stated in the Chess Game Rules document.
    * Dependency: Chess Game Rules document
* FR26: Board Game Logic: Queen 
    * Description: Queen piece logic must be designed to follow the rules stated in the Chess Game Rules document.
    * Dependency: Chess Game Rules document
* FR27: Board Game Logic: Bishop  
    * Description: Bishop piece logic must be designed to follow the rules stated in the Chess Game Rules document.
    * Dependency: Chess Game Rules document
* FR28: Board Game Logic: Knight  
    * Description: Knight piece logic must be designed to follow the rules stated in the Chess Game Rules document.
    * Dependency: Chess Game Rules document
* FR29: Board Game Logic: Pawn  
    * Description: Pawn piece logic must be designed to follow the rules stated in the Chess Game Rules document.
    * Dependency: Chess Game Rules document
* FR30: Board Game Logic: Rook   
    * Description: Rook piece logic must be designed to follow the rules stated in the Chess Game Rules document.
    * Dependency: Chess Game Rules document
* FR31: Board: Piece Movement 
    * Description: The user must be able to move only one of their pieces when it is their turn.
    * Dependency: FR23, FR25-FR30
* FR32: Board Game Logic: Kill  
    * Description: The user must be able to make a legal chess kill. 
    * Dependency: FR25-FR31
* FR33: Board: Store Killed Pieces  
    * Description: The software must place all taken pieces neatly to the user's right on the virtual table.
    * Dependency: FR32
* FR34: Board: Red Square Highlight  
    * Description: When the user selects a square that is not a legal move, the square is highlighted red for two seconds.
    * Dependency: FR31
* FR35: Board: Green Square Highlight 
    * Description: When the user hovers over a square that is a legal move, the square is highlighted green until the square is selected.
    * Dependency: FR31
* FR36: Board Game Logic: King Death 
    * Description: The software will stop chess board piece movement when the death of a King piece occurs.
    * Dependency: FR32
* FR37: Board Game Logic: Detect Win 
    * Description: The software must notify the user when the game has been won.
    * Dependency: FR36
* FR38: Board Game Logic: Detect Loss 
    * Description: The software must notify the user when the game has been lost.
    * Dependency: FR36
* FR39: Board Game Logic: Piece Ownership 
    * Description: Only the player who owns the pieces can move them.
    * Dependency: FR31
* FR40: Dynamic Rooms 
    * Description: The software must allocate resources for a new room when new game is started.
    * Dependency: FR23
* FR41: Dynamic Room Code
    * Description: The software must assign a room code for other players to join game.
    * Dependency: FR40
* FR42: Google Authentication 
    * Description: The software must utilize the Google Login API.
    * Dependency: DB
* FR43: Horoku Cloud Deployment 
    * Description: The software must utilize the Google Login API.
    * Dependency: None


### 2.3 Design and Implementation Constraints
Certain hardware limitations are present during development due to no financial support for the team to use to purchase VR headsets, VR-ready laptops, and other tools necessary for development with Unity. This means that development for this software will be strictly limited to using packages, frameworks, deployment tools, and hardware that are of the free tier. The software is limited to HTML and JavaScript programming languages and will utilize the A-Frame web framework for Three.js until further notice. All programming must be documented within the code files for easy understanding by developers who might not have seen the code before. The current version of AFrame that must be maintained is version 1.3.0. Other implementation constraints are TBD. The standard for diagrams has been changing over time, but nonetheless, diagrams should utilize UML when possible.

Note: This document is currently under construction due to changes to the final design of the software.
