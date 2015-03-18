var bio = {
    "name" : "Brendan Drobek",
    "role" : "Web Developer",
    "contacts" : {
        "mobile": "555-555-5555",
        "github": "Kleinbottled",
        "location": "San Diego CA, USA",
        "email": "BrendanDrobek@gmail.com"
    },
    "picUrl" : "images/profile.jpg",
    "welcome": "Hi and thank you for reviewing my interactive resume",
    "skills" : [
    	"HTML", 
    	"CSS3", 
    	"Javascript",
    	"JQuery",
    	"bootstrap"
    	]
}

var work = {
	"jobs" : [
	  {
	  	"employer" : "CVS Pharmacy",
	  	"title" : "Assistant Manager",
	  	"location" : "San Diego CA, US",
	  	"dates" : "April 2011, October 2014",
	  	"description" : "A CVS manager performs essential administrative and labor management duties in order to ensure efficient day-to-day store operations. Administrative duties a manager performs include filing paper work, budgeting payroll, ordering products and store supplies, and analyzing sales numbers. Labor management duties a CVS manager performs include interviewing potential associates, training new hire employees, creating employee schedules, monitoring team performance, and coaching team members."
	  },
	  {
	  	"employer" : "Various Restaurants",
	  	"title" : "Pastry Chef, Cook",
	  	"location" : "San Diego CA, US",
	  	"dates" : "early 2000, March 2011",
	  	"description" : "The Pastry Chef demonstrates strong leadership qualities with attention to detail in elevating and sustaining a competitive edge. The Chef is accountable for the quality and consistency of all pastry products produced and served including the efficiencies, consistency, associate training and accountability of costs associated with the pastry department. The Pastry Chef works directly with the Executive Chef on the creation, development and implementation of new desserts and creative menu developments."
	  }
	]
}

var projects = {
	"project" : [
		{
		  "title" : "Hello World!",
		  "dates" : "March 5th 2015, March 7th 2015",
		  "description" : "Learning a little HTML",
		  "images" :  [
		  	"http://www.placekitten.com/180/249",
		  	"http://www.placesheen.com/210/247",
		  	"http://www.placekitten.com/200/208"
		  	]
		},
		{
		  "title" : "Portfolio",
		  "dates" : "March 8th 2015, March 9th 2015",
		  "description" : "Learning a little more HTML",
		  "images" :  [
		  "http://www.placesheen.com/200/290",
		  "http://www.placekitten.com/205/241",
		  "http://www.placesheen.com/145/252"
		  ]	
		}
	]	
}

var education = {
	"schools": [
	  {
	  	"name" : "University City High School",
	  	"location" : "San Diego, CA, US",
	  	"degree" : "Graduated",
	  	"major" : "Graduated",
	  	"dates" :"'94-'97",
	  },
	  {	
	    "name" : "Vista Community College",
	    "location" : "Berkeley, CA, US",
	    "degree" : "incomplete",
	    "major" : "Sociology - Incomplete",
	    "dates" :"'98-'99"
      }
    ],
    "onlineEducation" : [
      {
      	"school" : "Udacity.com",
    	"onlineUrl" : "https://www.udacity.com",
      	"title" : "Front-end Web Development: Nanodegree",
      	"dates" : "March 4th '15 - March 16th '15"
      }
    ]
}
$('#header').prepend(internationalizeButton);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
$('#header').prepend(formattedRole);
var formattedName = HTMLheaderName.replace('%data%', bio.name);
$('#header').prepend(formattedName);
var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
$('#header').append(formattedMobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
$('#header').append(formattedEmail);
var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
$('#header').append(formattedGithub);
var formattedcurlo = HTMLlocation.replace('%data%', bio.contacts.location);
$('#header').append(formattedcurlo);
var formattedbiopic = HTMLbioPic.replace('%data%', bio.picUrl);
$('#header').append(formattedbiopic);
var formattedWM = HTMLwelcomeMsg.replace('%data%', bio.welcome);
$('#header').append(formattedWM);



if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);
	for (x in bio.skills) {
	var formattedSkill = HTMLskills.replace('%data%', bio.skills[x]);
	$("#skills").append(formattedSkill);
	}
}
function displayWork() {

for (job in work.jobs) {
	

	var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location)
	var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates)
	var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description)

	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

projects.display =function() {

for (proj in projects.project) {

	var formattedprojTitle = HTMLprojectTitle.replace('%data%', projects.project[proj].title);
	var formattedprojDates = HTMLprojectDates.replace('%data%', projects.project[proj].dates);
	var formattedprojDescription = HTMLworkDescription.replace('%data%', projects.project[proj].description);
	$("#projects").append(HTMLprojectStart);
	$(".project-entry:last").append(formattedprojTitle);
	$(".project-entry:last").append(formattedprojDates);
	$(".project-entry:last").append(formattedprojDescription);
	for(image in projects.project[proj].images) {
		var formattedprojImage = HTMLprojectImage.replace('%data%', projects.project[proj].images[image]);
		$(".project-entry:last").append(formattedprojImage);
		}	
	}
}

projects.display();

education.display =function() {
	$('#education').append(HTMLschoolStart);
	for (school in education.schools) {
		var formattedschoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
		var formattedschoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		var formattedschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		var formattedschoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);

		$(".education-entry:last").append(formattedschoolName);
		$(".education-entry:last").append(formattedschoolDates);
		$(".education-entry:last").append(formattedschoolLocation);
		$(".education-entry:last").append(formattedschoolMajor);
	}
	$('.education-entry:last').append(HTMLonlineClasses);
	for (classy in education.onlineEducation) {

		var formattedonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineEducation[classy].title);
		var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineEducation[classy].school);
		var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineEducation[classy].dates);
		var formattedonlineUrl = HTMLonlineURL.replace(/#|%data%/g, education.onlineEducation[classy].onlineUrl);

        $(".education-entry:last").append(formattedonlineTitle);
        $(".education-entry:last").append(formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineUrl);
    }

}
education.display()

$('#mapDiv').append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

//$("#main").prepend(bio.name);
//$("#main").append(bio.role);
//$("#main").append(bio.contactInfo);
//$("#picture").append(bio.pictureURL);
//$("#main").append(bio.welcomeMessage);
//$("#main").append(bio.skills);
//$("#header").prepend(bio.role);

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[1] +" "+name[0];
  }       

