/*var name = "Kendall Agbulos";
var formattedname = HTMLheaderName.replace("%data%",name);
var formattedrole = HTMLheaderRole.replace("%data%", "Software Engineer");
$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);



var bio = {

	"name": "Kendall Agbulo",
	"role": "Software Engineer",
	"conact_info":"9512830939",
	"welcome_message":"Hello!",
	"skills": "programming guru"
}

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.conact_info);
$("#main").append(bio.welcome_message);
$("#main").append(bio.skills);


var work ={};
work.position = "Software Engineer";
work.employer = "BCL";
work.years = "2014-2015";
work.city = "San Jose";


var education = {};
education["name"] = "UC Berkeley";
education["years"] = "2009-2013";

$("#main").append(work["position"]);
$("#main").append(education.name);

var education = {
	"schools":[
	{
		"name": "Berkeley",
		"city": "Berkeley",
		"degree": "BA",
		"major": "CS"

	},
	{
		"name": "La Sierra HS",
		"city": "Riverside",
		"degree": "N/a",
		"major": "Awesome"
	}
	]

}*/


    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('topContacts').style.display = 'none';
    }
    if(document.getElementsByTagName('h1').length === 0) {
      document.getElementById('header').style.display = 'none';
    }
    if(document.getElementsByClassName('work-entry').length === 0) {
      document.getElementById('workExperience').style.display = 'none';
    }
    if(document.getElementsByClassName('project-entry').length === 0) {
      document.getElementById('projects').style.display = 'none';
    }
    if(document.getElementsByClassName('education-entry').length === 0) {
      document.getElementById('education').style.display = 'none';
    }
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('letsConnect').style.display = 'none';
    }
    if(document.getElementById('map') === null) {
      document.getElementById('mapDiv').style.display = 'none';







var bio = {
  "name": "Kendall Agbulos",
  "role": "Coding Ninja",
  "contacts":{
    "mobile":9512830939,
    "email":"kagbulos1@gmail.com",
    "github":"kagbulos",
    "twitter":"CodingNinja",
    "locations":"Berkeley,CA"
  },
  "welcome_message": "Thank you for taking the time to visit my awesome page",
  "skills":[
  "Works well with others",
  "Hard working",
  "Solves problems creatively"
  ],
  "biopic": "images\\fry.jpg",
  "display": function(){
      var formattedname = HTMLheaderName.replace("%data%",bio.name);
      var formattedrole = HTMLheaderRole.replace("%data%",bio.role);
      $("#header").prepend(formattedrole);
      $("#header").prepend(formattedname);


      var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      $("#header").append(formattedmobile);
      var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
      $("#header").append(formattedemail);
      var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
      $("#header").append(formattedgithub);
      var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter)
      $("#header").append(formattedtwitter);
      var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.locations)
      $("#header").append(formattedlocation);
      var formattedbiopicurl = HTMLbioPic.replace("%data%", bio.biopic);
      $("#header").append(formattedbiopicurl);

      var formattedwelcomemessage = HTMLWelcomeMsg.replace("%data%", bio.welcome_message);

      $("#header").append(formattedwelcomemessage);

      if (bio.skills.length > 0) {
          $("#header").append(HTMLskillsStart);
          for(skill in bio.skills)
          {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
          }
      }
  }
}

var education = {
  "schools":[
  {
    "name": "University of California Berkeley",
    "location": "Berkeley, CA",
    "degree": "BA",
    "majors":["Cognitive Science", "Computer Science"],
    "dates":2013,
    "url": "http://berkeley.edu/index.html"
  }
  ],
  "onlineCourses":[
  {
    "title": "Front-End Web Developer",
    "school": "Udacity",
    "dates": 2015,
    "url": "https://www.udacity.com/nanodegree"
  },
  {
    "title": "iPhone Game development",
    "school": "Make Games With Us",
    "dates": 2014,
    "url": "https://www.makeschool.com/online-academy"
  }
  ],
  "display":function(){
    if (education.schools.length > 0) {
      $("#education").append(HTMLschoolStart);
      for(school in education.schools)
          {
            var formattedschoolname = HTMLschoolName.replace("%data%",education.schools[school].name);
            var formatteddegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
            var formattedschoolnameanddegree = formattedschoolname + formatteddegree;
            $(".education-entry:last").append(formattedschoolnameanddegree);
            var formatteddates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
            $(".education-entry:last").append(formatteddates);
            var formattedlocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
            $(".education-entry:last").append(formattedlocation);
            var formattedmajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
            $(".education-entry:last").append(formattedmajor);
            var formattedurl = HTMLonlineURL.replace("%data%",education.schools[school].url);
            $(".education-entry:last").append(formattedurl);

        };
    }
    if (education.onlineCourses.length > 0) {
      $(".education-entry:last").append(HTMLonlineClasses);
      for(course in education.onlineCourses)
          {

            var formattedonlinetitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
            var formattedonlineschool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
            var formattedonlinetileandschool = formattedonlinetitle + formattedonlineschool;
            $(".education-entry:last").append(formattedonlinetileandschool);
            var formattedonlinedates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedonlinedates);
            var formattedonlineurl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedonlineurl);
        };
    }
  }
}

var work = {
  "jobs":[
  {
    "employer": "BCL Technologies",
    "title": "Software Engineer",
    "locations": "San Jose, CA",
    "dates": "2014-present ",
    "description": "The company works on pdf conversion technologies and my job involves creating custom projects related to financial data extraction from pdf"
  }
  ],
  "display": function(){
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);
          for(job in work.jobs)
          {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formatteddates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formatteddates);

            var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].locations);
            $(".work-entry:last").append(formattedlocation);

            var formattedworkdescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedworkdescription);
        }
      };
  }
}

var projects = {
  "projects":[
  {
    "title": "Flappy Bird Mock",
    "dates": "2014",
    "description": "A project in which I attempted to recreate the game Flappy Bird to learn game development technologies (i.e. Cocos 2d) and methodologies",
    "images": [
    "images\\flappybird.jpg", "images\\flappybird2.jpg"
    ]
  },
  {
    "title": "Pdf Mock",
    "dates": "2015",
    "description": "Given a pdf, create a replica of the style/fonts/etc. using html and css (bootstrap)",
    "images": [
    "images\\mockup.jpg", "images\\mockup2.jpg"
    ]
  },
  {
    "title":"Financial Tables Converter",
    "dates": "2014-present",
    "description": "Extract financial information from a pdf document and display it in a meaningful way",
    "images": [
    "images\\pdf.jpg","images\\pdf2.jpg"
    ]
  }
  ],
  "display":function()
  {
    if (projects.projects.length > 0) {
      $("#projects").append(HTMLprojectStart);
          for(project in projects.projects)
          {
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formatteddates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formatteddates);

            var formatteddescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formatteddescription);

            if (projects.projects[project].images.length > 0) {
              for(image in projects.projects[project].images)
              {
                var formattedprojectimage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedprojectimage);
              }
            };
          }
      };
  }
}

