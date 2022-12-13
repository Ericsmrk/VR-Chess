# Software Engineering: VR-Chess 
# System Requirements and Design Document
> Version 1.0 
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
This version of VR-Chess is a web-based Virtual reality experience. The purpose of this document is to provide a detailed description of the features and behavior of VR-Chess Version 1.0. This document also gives an overall description of the software components used during the design and development phases. Sections of this document apply directly to the design of VR-Chess.
### 1.2 Product Scope
This product aims to bring a fully functional chess game to a virtual setting for use by one or two players. VR Chess will benefit anyone who wants to experience a game of Chess in semi immersive virtual reality. VR_Chess will provide an outlet to practice Chess skills and communicate with Chess friends. The user experience will be of utmost importance when designing the look and feel of the VR Chess experience. The software development team for VR Chess will strive to create an experience that could be transitioned over to the upcoming Metaverse, providing competition for the first Chess experience on the platform. This look to the future value of Chess in the Metaverse brings the most value to potential investors.
### 1.3 Intended Audience
This document will be helpful to the clients and developers involved with developing and maintaining the VR-Chess software. It will provide a roadmap for the development team to follow when implementing the product's features. This System Requirements document looks into the development process for stakeholders and other relevant parties. 
### 1.4 Document Conventions
This document will be submitted as a deliverable for a project submission in a college-level software engineering course. There are sections that are pertaining to the software design including the functionality and timeline of the finished product.  
The Functional Requirement Overview in section 2.2 provides a hierarchy of specific functional requirements that are either at the highest level or are dependant on other requirements being implemented first. All requirements that aren't a part of the final proof of concept submission are labeled IP. In section 3.2, there is more information on each requirement.  
### 1.5 Glossary of Terms
NAF -> Networked A-Frame  
DFD -> Data Flow Diagram  
FR -> Functional Requirement  
NFR -> Non-Functional Requirement  
UML -> Unified Modeling Language  
DB -> DataBase  
VR -> Virtual Reality  
TBD -> To Be Determined
IP -> In Progress

## Overall Description
### 2.1 Product Overview
This version of VR-Chess is a new self-contained product that utilizes the web browser on phones, tablets, computers, and headsets to play a game of chess over the internet in semi-immersive virtual reality. This game provides a simulated 3D environment using 3D graphics to give online chess play a realistic, immersive feel. The VR-Chess interface is simple and accessible by a wide range of devices, so players of all skill ranges can play. This software version is web-based to provide access to people who don't have access to VR-Headsets. This software version is strictly for two players, providing a virtual space for players to practice their chess skills with others online. This version of the VR-Chess experience is the WebVR-based component of a more extensive VR-Chess system (below) designed for use in the Metaverse.
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/Larger_System.png)

### 2.2 Functional Requirement Overview
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/DFD0.PNG)This product functionality overview section provides the hierarchy of the systems functional requirements the software must perform or must be present for the user to carry out the specific use case. These functional requirements are components within the Data Flow Diagram (highest level) shown above. More design details and UML diagrams for each requirement will be provided in Section 3; only a high-level summary is available here.  
* FR1: Store User Account Details
    * Description: The software must be able to store user account details. 
    * Dependency: DB
* FR2: Account Creation
    * Description: The user must be able to create an account.
    * Dependency: FR1
* FR3: User Login 
    * Description: The user must be able to log in with a registered account.
    * Dependency: DB, FR1
* FR4: Google Authentication 
    * Description: The software must have the option to use Google Login API.
    * Dependency: DB
* FR5: Store Password Securely (IP)
    * Description: The database must store the password securely.
    * Dependency: DB, FR3
* FR6: Multiple Environments
    * Description: The user must be able to choose from three or more choices for the VR environment.
    * Dependency: None
* FR7: Choose Piece Color 
    * Description: The user must be able to choose from five different piece color options.
    * Dependency: None
* FR8: Dynamic Rooms 
    * Description: The software must allocate resources for a new room when new game is started.
    * Dependency: None
* FR9: Dynamic Room Code
    * Description: The software must assign a room code for other players to join game.
    * Dependency: FR8
* FR10: Start VR Scene
    * Description: The user must be able to start the VR scene.
    * Dependency: FR3, FR4, FR6, FR7, FR9
* FR:11 Control Avatar in Virtual Environment
    * Description: The user must be able to control the user's avatar with functionality for moving forward, backward, left, and right.
    * Dependency: FR10
* FR12: Select Seat 
    * Description: The user must be able to sit virtually at the chess table by selecting black or white.
    * Dependency: FR10
* FR13: Choose to be a Spectator
    * Description: The user must be able to watch other players play in the virtual space.
    * Dependency: FR11
* FR14: Board: Preset Positions of Pieces 
    * Description: The board must have the game pieces present when the user sits at the chess table.
    * Dependency: FR12
* FR15: Board Game Logic: King 
    * Description: King piece logic must be designed to follow standard Chess rules.
    * Dependency: None
* FR16: Board Game Logic: Queen 
    * Description: Queen piece logic must be designed to follow standard Chess rules.
    * Dependency: None
* FR17: Board Game Logic: Bishop  
    * Description: Bishop piece logic must be designed to follow standard Chess rules.
    * Dependency: None
* FR18: Board Game Logic: Knight  
    * Description: Knight piece logic must be designed to follow standard Chess rules.
    * Dependency: None
* FR19: Board Game Logic: Pawn  
    * Description: Pawn piece logic must be designed to follow standard Chess rules.
    * Dependency: None
* FR20: Board Game Logic: Rook   
    * Description: Rook piece logic must be designed to follow standard Chess rules.
    * Dependency: None
* FR21: Board: Piece Movement 
    * Description: The user must be able to move only one of their pieces when it is their turn.
    * Dependency: FR15-FR20
* FR22: Board Game Logic: Kill  
    * Description: The user must be able to make a legal chess kill by standard Chess rules. 
    * Dependency: FR21
* FR23: Board: Store Killed Pieces  
    * Description: The software must place all taken pieces neatly to the user's right on the virtual table.
    * Dependency: FR22
* FR24: Board: Red Square Highlight  
    * Description: When the user selects a piece the square is highlighted red for two seconds.
    * Dependency: FR21
* FR25: Board: Green Square Highlight 
    * Description: When the user drops a piece the square is highlighted blue for two seconds.
    * Dependency: FR21
* FR26: Board Game Logic: King Death (IP)
    * Description: The software must stop chess board piece movement when the death of a King piece occurs.
    * Dependency: FR22
* FR27: Board Game Logic: Detect Win (IP)
    * Description: The software must notify the user when the game has been won.
    * Dependency: FR26
* FR28: Board Game Logic: Detect Loss (IP)
    * Description: The software must notify the user when the game has been lost.
    * Dependency: FR26
* FR29: Website Deployment 
    * Description: The software must be available online.
    * Dependency: DB

### 2.3 Design and Implementation Constraints
Certain hardware limitations are present during development due to no financial support for the team to use to purchase VR headsets, VR-ready laptops, and other tools necessary for development with Virtual Reality companants. This means that development for this software will be strictly limited to using packages, frameworks, deployment tools, and hardware that are of the free tier. The software is limited to HTML and JavaScript programming languages and will utilize the A-Frame web framework for Three.js until further notice. All programming must be documented within the code files for easy understanding by developers who might not have seen the code before. The current version of AFrame that must be maintained is version 1.3.0. Other implementation constraints are TBD. The standard for diagrams has been changing over time, but nonetheless, diagrams should utilize UML when possible.

### 2.4 Assumptions and Dependencies
* The real-time 3D experience uses Networked A-Frame and WebSockets
* All hardware used can access the internet
* All hardware used has compatable graphics software
* Standard wasd-controls are utilized

## 3 Specific Requirements
There are three stages to Vr-Chess: Login, preference selection, and gameplay. Below is a general flowchart of the user experience when running the software.
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/User_Journey.png)
### 3.1 External Interface Requirements
(diagram with different hardware options with user stuffs)
### 3.1.1 User Interfaces
* Landing Page
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/Landing_wireframe.png)
* Google Login
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/Google_Login.png)
* Database Login
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/Database_Login.png)
* Register Account
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/Register.png)
* Change Password
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/Password_Reset_Taskflow.png)
* Chess Board
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/Board.png)
### 3.1.2 Hardware Interfaces
The hardware needed for using the VR-Chess software includes all modern personal computers, laptops, tablets, and mobile devices. This version of VR-Chess uses semi-immersive VR; implementation for VR-Headsets will be implemented in a future version and must be accessible by all modern VR headsets such as the Meta Oculus.
### 3.1.3 Software Interfaces
Implementation constraints for Vr-Chess include using Networked A-Frame. Networked A-Frame is a library for creating multi-user, real-time 3D experiences using WebVR and the A-Frame web framework. Networked A-Frame utilizes EasyRTC and WebSockets to provide an easy way to create real-time, multi-user experiences. Accessing EasyRTC abstracts away the complexities of setting up WebSockets and provides an API to send messages between VR-Chess users easily, such as moves made by each player. This allows users to play the game in real-time, communicating each action to the other player's clients. The library also provides an API to easily synchronize the game state between users, ensuring that each user sees the same game board.

Websockets provide a way for users to communicate with each other in real time using the same protocol as HTTP. This provides bi-directional communication, meaning that data will be sent from both the client and the server. This feature makes Websockets ideal for real-time applications such as VR-Chess.

Other implementation constraints include using MongoDB for the database and Horoku for deployment. MongoDB utilizes NoSQL and is document oriented so a database schema is not required for implementation. Horoku is a platform the allows VR-Chess to operate entirely in the cloud.

### 3.2 Functional Requirements
* FR1: Store User Account Details  
The software must have a working database that can be accessed securely on the server to store information about the user.
* FR2: Account Creation  
The user must be able to register a VR-Chess account. On the landing page, the user must have a button to click that brings them to the login page. Once at the login page, the user can choose to register an account. In order for the user to register, they must create a unique username and a unique password. To be considered unique, these must be at lease 8 characters long and not present in the database already.
* FR3: User Login  
The user must be able to access the VR-Chess game through the login page by entering their email and their password correctly. If entered correctly the user is taken back to the landing page. If entered incorrectly, the user is shown an error. 
* FR4: Google Authentication  
The user must be able to access the VR-Chess game through the Google Authentication. Once the Google login method is shown, the user is given an option to choose a google account. Once the account is chosen, the user is returned to the landing page. If the user is already logged in with a Google account, this process is done automatically.
* FR5: Store Password Securely (IP)  
The password must be stored in the database securely. This can be done with a hashing algorithm.
* FR6: Multiple Environments  
The user must have the ability to choose from a selection of enviroments for gameplay. The required environments are: Woods, Checker, Waves, and Volcano.
* FR7: Choose Piece Color   
The user must have the ability to choose from a selection of piece colors for gameplay. The required piece colors are left to the developer's descretion.
* FR8: Dynamic Rooms   
The software must create rooms dynamically when users request a room.
* FR9: Dynamic Room Code  
The software must provide the option to select a room by entering a code. This is done on the landing page. The user enters the landing page and enters the room number in the room number bar input line.
* FR10: Start VR Scene  
The software will start a VR scene when prompted by the user. This is done after the user selects their preferences and logs in.
* FR:11 Control Avatar in Virtual Environment  
The user must be given the ability to move around in the virtual space freely if and only if they are in spectator mode. This is done with the arrow buttons and with standard wasd-controls.
* FR12: Select Seat   
When the user enters the scene, they are prompted to select either the white pieces, the black pieces if they are going to be a player.
* FR13: Choose to be a Spectator  
When the user enters the scene, they are given the option to become a spectator rather than a player.
* FR14: Board: Preset Positions of Pieces  
When the game is started, all of the pieces are in the correct positions on the board.
* FR15: Board Game Logic: King  
A King piece can only make moves that are valid moves according to standard Chess rules. This includes not moving off the board or moving onto an occupied space. If the King cannot move and it is in check, the game is over. If the King is put into check, it must move to a space that takes it out of check.
* FR16: Board Game Logic: Queen  
A Queen piece can only make moves that are valid moves according to standard Chess rules. This includes not moving off the board or moving onto an occupied space.
* FR17: Board Game Logic: Bishop  
A Bishop piece can only make moves that are valid moves according to standard Chess rules. This includes not moving off the board or moving onto an occupied space.
* FR18: Board Game Logic: Knight  
A Knight piece can only make moves that are valid moves according to standard Chess rules. This includes not moving off the board or moving onto an occupied space.
* FR19: Board Game Logic: Pawn  
A Pawn piece can only make moves that are valid moves according to standard Chess rules. This includes not moving off the board or moving onto an occupied space.
* FR20: Board Game Logic: Rook   
A Rook piece can only make moves that are valid moves according to standard Chess rules. This includes not moving off the board or moving onto an occupied space.
* FR21: Board: Piece Movement  
The user cannot move pieces that are not theirs. They can only move the pieces that they selected at the start of the game.
* FR22: Board Game Logic: Kill  
A player can kill another piece when they make a legal move to a square that is occupied by another by the opponents piece. This can only occur when it is the players turn.
* FR23: Board: Store Killed Pieces  
After making a legal kill on the Chess board, the taken piec is places to the left of the player.
* FR24: Board: Red Square Highlight  
When a piece is selected, the square that the piece was on turns the color red until the player releases the piece.
* FR25: Board: Green Square Highlight  
When a piece is selected, the square that the piece is moved too turns the color Green when the player releases the piece.
* FR26: Board Game Logic: King Death (IP)  
When the King is put into checkmate, the software presents the user with information about who won the game.
* FR27: Board Game Logic: Detect Win (IP)  
Information about winning the game is displayed to the user.
* FR28: Board Game Logic: Detect Loss (IP)  
Information about losing the game is displayed to the user.
* FR29: Website Deployment  
The website is deployed to the cloud using Horoku.  
### 3.3 UML Diagrams
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/Login_Sequence_diagram.png)
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/System_Use_case.png)

### 3.4 Database
The database used is MongoDB and Mongoose is used for data transfer. The only table to be stored is the users information. Here is a high level diagram showing how that database interacts with the cloud deployment.
![](https://github.com/Ericsmrk/VR-Chess/blob/main/images/DeploymentwithDB.png)
## 4 Non-Functional Requirements
### 4.1 Performance Requirements
The performance requirements for VR-Chess relate to the user experiencing any lag when running the software. Care should be taken by the implementation team to make sure the code performs at a rate that will prevent any lag between processes.
### 4.2 Safety Requirements
A notice should be displayed to the user before entering VR about the dangers with epileptic seizures. The user must be notified that the use of the software is at the users own risk. 
### 4.3 Security Requirements
The database needs to be secure by using a hashing algorithm for storing information. The development team will be responsible for adding safeguards to protect hackers from accessing the users IP address.
### 4.4 Software Quality Attributes
VR-Chess provides an easily accessible experience to users. Being able to access the game very quickly without having to login or anything is an important feature to this software. Being accessible accross devices gives portability value to the software. There is not a steep learning curve for new VR users with this software. It could be advertised as grab and go.
