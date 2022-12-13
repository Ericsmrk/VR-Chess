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

* FR2: Account Creation

* FR3: User Login 

* FR4: Google Authentication 

* FR5: Store Password Securely (IP)

* FR6: Multiple Environments

* FR7: Choose Piece Color 

* FR8: Dynamic Rooms 

* FR9: Dynamic Room Code

* FR10: Start VR Scene

* FR:11 Control Avatar in Virtual Environment

* FR12: Select Seat 

* FR13: Choose to be a Spectator

* FR14: Board: Preset Positions of Pieces 

* FR15: Board Game Logic: King 

* FR16: Board Game Logic: Queen 

* FR17: Board Game Logic: Bishop  

* FR18: Board Game Logic: Knight  

* FR19: Board Game Logic: Pawn  

* FR20: Board Game Logic: Rook   

* FR21: Board: Piece Movement 

* FR22: Board Game Logic: Kill  

* FR23: Board: Store Killed Pieces  

* FR24: Board: Red Square Highlight  

* FR25: Board: Green Square Highlight 

* FR26: Board Game Logic: King Death (IP)

* FR27: Board Game Logic: Detect Win (IP)

* FR28: Board Game Logic: Detect Loss (IP)

* FR29: Website Deployment 
### 3.3 UMl Diagrams
### 3.4 Database
## 4 Non-Functional Requirements
### 4.1 Performance Requirements
If there are performance requirements for the product under various circumstances, state them here and explain their rationale, to help the developers understand the intent and make suitable design choices. Specify the timing relationships for real time systems. Make such requirements as specific as possible. You may need to state performance requirements for individual functional requirements or features.
### 4.2 Safety Requirements
Specify those requirements that are concerned with possible loss, damage, or harm that could result from the use of the product. Define any safeguards or actions that must be taken, as well as actions that must be prevented. Refer to any external policies or regulations that state safety issues that affect the product’s design or use. Define any safety certifications that must be satisfied.
### 4.3 Security Requirements
Specify any requirements regarding security or privacy issues surrounding use of the product or protection of the data used or created by the product. Define any user identity authentication requirements. Refer to any external policies or regulations containing security issues that affect the product. Define any security or privacy certifications that must be satisfied.
### 4.4 Software Quality Attributes
Specify any additional quality characteristics for the product that will be important to either the customers or the developers. Some to consider are: adaptability, availability, correctness, flexibility, interoperability, maintainability, portability, reliability, reusability, robustness, testability, and usability. Write these to be specific, quantitative, and verifiable when possible. At the least, clarify the relative preferences for various attributes, such as ease of use over ease of learning.
4.4.1 Adaptability
4.4.2 Interoperability
4.5.3 Reliability
Specify the factors required to establish the required reliability of the software system at time of delivery.

4.4.4 Availability
Specify the factors required to guarantee a defined availability level for the entire system such as checkpoint, recovery, and restart.

3.5 Design and Implementation
3.5.1 Installation
Constraints to ensure that the software-to-be will run smoothly on the target implementation platform.

3.5.2 Distribution
Constraints on software components to fit the geographically distributed structure of the host organization, the distribution of data to be processed, or the distribution of devices to be controlled.

3.5.3 Maintainability
Specify attributes of software that relate to the ease of maintenance of the software itself. These may include requirements for certain modularity, interfaces, or complexity limitation. Requirements should not be placed here just because they are thought to be good design practices.

3.5.4 Reusability
3.5.5 Portability
Specify attributes of software that relate to the ease of porting the software to other host machines and/or operating systems.

3.5.6 Cost
Specify monetary cost of the software product.

3.5.7 Deadline
Specify schedule for delivery of the software product.

3.5.8 Proof of Concept


## 5. Appendixes
### 5.1


