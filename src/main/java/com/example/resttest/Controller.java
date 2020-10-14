package com.example.resttest;

import java.net.URI;
import java.util.List;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.util.HtmlUtils;

import com.example.resttest.ChatApp.Greeting;
import com.example.resttest.ChatApp.HelloMessage;
import com.example.resttest.CrudTable.Employee;
import com.example.resttest.CrudTable.EmployeeService;
import com.example.resttest.CrudTable.Message;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class Controller {

	@Autowired
	  private EmployeeService courseManagementService;
	
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello world";
    }
    
    @GetMapping("/api/employees2/{id}")
	public Employee getEmployee(@PathVariable Integer id) {
		return courseManagementService.findById(id);
	}
    
	@GetMapping("/api/employees2")
	public List<Employee> getAllCourses() {
		return courseManagementService.findAll();
	}
	
	  @PutMapping("/api/employees2/{id}")
	  public ResponseEntity<Employee> updateCourse(@PathVariable Integer id,
	      @RequestBody Employee employee) {
		  Employee employeeUpdated = courseManagementService.save(employee);
	    return new ResponseEntity<Employee>(employeeUpdated, HttpStatus.OK);
	  }
	  
	  @PostMapping("/api/employees2")
	  public ResponseEntity<Void> createEmployee(@RequestBody Employee employee) {
		  Employee createdEmployee = courseManagementService.save(employee);
	    // Location
	    // Get current resource url
	    /// {id}
	    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdEmployee.getId())
	        .toUri();
	    return ResponseEntity.created(uri).build();
	  }
	
	@DeleteMapping("/api/employees2/{id}")
	  public ResponseEntity<Void> deleteCourse(@PathVariable Integer id) {
	    Employee employee = courseManagementService.deleteById(id);
	    if (employee != null) {
	      return ResponseEntity.noContent().build();
	    }
	    return ResponseEntity.notFound().build();
	  }
    
   
    @GetMapping("/api/message")
    public Message greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Message(name);
    }
    
    @GetMapping("/api/corona1")
	public static String getDailyData() throws IOException{

		HttpURLConnection connection = (HttpURLConnection) new URL("https://covid19.mathdro.id/api/daily").openConnection();
		
		connection.setRequestMethod("GET");

		int responseCode = connection.getResponseCode();
		if(responseCode == 200){
			String response = "";
			Scanner scanner = new Scanner(connection.getInputStream());
			while(scanner.hasNextLine()){
				response += scanner.nextLine();
				
			}
			scanner.close();
			return response;

		}
		return "Corona api unavaible";
	}


	    
	    @GetMapping("/api/corona2")
		public static String getCoronaData() throws IOException{

			HttpURLConnection connection = (HttpURLConnection) new URL("https://api.covid19api.com/summary").openConnection();
			
			connection.setRequestMethod("GET");

			int responseCode = connection.getResponseCode();
			if(responseCode == 200){
				String response = "";
				Scanner scanner = new Scanner(connection.getInputStream());
				while(scanner.hasNextLine()){
					response += scanner.nextLine();
					
				}
				scanner.close();
				return response;

			}
			return "Corona api unavaible";
		}
	    
	    @MessageMapping("/hello")
	    @SendTo("/topic/greetings")
	    public Greeting greeting(HelloMessage message) {
	  	  String s1="Help";  
	  	  String s2="I can not log";  
	  	  String s3="Forgotten Password";  
	  	  String s4=message.getName(); 
	  	  String s5=message.getMsg();
	  	 
	  	  if (s5.contentEquals(s1)) {		 
	  		   		return new Greeting(" In order to get help please use these messages: 'I can not log', 'Forgotten Password'");
	  		}
	  		else if(s5.contentEquals(s2)) {
	  			 
	  			    return new Greeting("If you can not log please send us a message at xxx@xxx.cz");
	  		}
	  		else if (s5.contentEquals(s3) ) {
	  			
	  			    return new Greeting("To request an reset of your password please visit following link: xxx.com/dda");
	  		}	
	  		else {
	  			return new Greeting("Hello, " + s4 + " how can I help you? You can write me 'Help' to see available options");
	  	}
	     
	  		
	    }
	    

    
    
    }
