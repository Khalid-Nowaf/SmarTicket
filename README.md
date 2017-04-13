SmarTicket Brief description 
===================
SmarTicket is a mobile application that used to manage visitors physical access in secure building or organization. One of the simple uses cases: an employee issue tickets for  a visitor to enter the company building, while the the security scans the tickets in order to validate it.  

----------

Application Components
-----------------------------------

 - Ticket Manager "Mobile App"
 - Gate Keeper Scanner  "Mobile App"
 - Ticket Viewer "Hosted backend"

  >**NOTE**
  > both Ticket Manger and Gate Keeper Scanner bundled in one app
  > while the Ticket Viewer is hosted in public domain for public access


--------------------------
Application users
-------------

 1. Employee, that uses the App for issuing Tickets for vistors
 2. Gate Keeper or security  uses the App to scan the Tickets in order check the validity of the ticket
 3. Visitor uses the Ticket Viewer to display the Ticket

----------------------
Technologies used
------------------------

 1. Ionic 2 Framework for building Hybrid Application (IOS,ANDROID,WEB)
 2. Firebase Realtime database  **Backend*
 3. Firebase Authntication         **Backend*
 4. Firebase Crush Reports        **Backend*
 5. Firebase Web Hosting         **Backend*
 6. QR Code Generator            **Backend*
 7. AngularFire                        **used for Observable*
 
 -------------------------------------

Simple Workflow
-------------------------

 1. Employee Create new Ticket for A visitor
 2. Employee send the new Ticket **URL** to the Visitor Via **Email**,**SMS**, ...ect
 3. Vistor Open the new Ticket **URL** and see the new Ticket.
 4. Visitor Shows the Gate Keeper the Ticket.
 5. Gate Keeper Scan the Ticket to Check the ticket validation.
 6. Gate Keeper get immediate notification wether the Ticket is valid or not. 
 7. The Employee get immediate notification about the visitor  


Application Features
-----------------------------

 1. Authentication, Only used for the Ticket Manager "Employee login only"
 2. Reset Password
 3. Ticket Management "create,delete,update and edit"
 4. Notification and visitor logs
 3. QR Barcode Scanner
 4. Realtime and reactive implantation using Observable, thus any change in one side, will be sync with the other size. E.g. " when the Ticket get expired will be changed in real time in both Visitor Browser and the Employee Application
 5.   QR Code Generation
 6. Web base Ticket Viewer to render tickets.



Screen Shots
-------------------
### Login
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/login.png?raw=true" width="400">


### Signup

------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/singup.png?raw=true" width="400">


### Forgot Password

------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/forgotPass.png?raw=true" width="400">


### Ticket Manger Home

---------------------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/TicketHome.png?raw=true" width="400">


### Ticket Manger Home 2

----------------------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/TicketHome2.png?raw=true" width="400">

### Update Ticket

-------------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/TicketUpdate.png?raw=true" width="400">


### Share Ticket

-------------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/TicketShare.png?raw=true" width="400">


### Visitor Log

----------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/VisitorLogNotiv.png?raw=true" width="400">



### Gate Keeper Scanner

----------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/GateKeeperScanner.png?raw=true" width="400">


### Gate Keeper Scan valid Ticket

------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/ScannS.png?raw=true" width="400">


### Gate Keeper Scan invalid Ticket

------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/ScannF.png?raw=true" width="400">



### Ticket Viewer "Web Page, hosted in public domain"
**This is not part of the mobile application, this is just a URL sent to the visitor and the visitor opens the link using smart phone with browser, **

>  [ sample ticket URL](https://smarticket-627ee.firebaseapp.com/?ffN4ZYASl7ZttbJ5MaYboa0yLJU2?-KgmB4r3JuVE2CN0lxrm)


------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/TicketView1.png?raw=true" width="400">


------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/TicketView2.png?raw=true" width="400">


------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/TicketView3.png?raw=true" width="400">


------------
<img src="https://github.com/Khalid-Nowaf/SmarTicket/blob/master/screenshots/TicketView4.png?raw=true" width="400">












