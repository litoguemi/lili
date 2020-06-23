These configuration is for node watson server


  1. Create an empty folder an open it in visual studio code.

	2. Abrir terminal
  
	3. In a new terminal window inside visual studio code write: npm init
  
	4. Let the default values
  
	5. Inside the folder of the project type:
    
    o npm install express --save

    o npm install body-parser –save 

    o npm install cors –save 

    o npm install ibm-watson@^5.5.0
    
    o npm install nodemon
    	
  7. nodemon -g (it allows the server to be updated with the code)
		
    a. Sometimes the app gives an erro about policy restrictions, so type: Set-ExecutionPolicy Unrestricted
	
  8. Create post methods
	
  9. Add body parser, you can copy from npm page
	
  10. Do the integration to IBM-cloud, you have to copy the API key and the URL from the assistant
	
  11. Run the server
		
    a. nodemon  .\server\server.js
