var bio = {
	"name": "Kendall Agbulos",
	"role": "Software Engineer",
	"contacts":{
		"mobile":9512830939,
		"email":"kagbulos1@gmail.com",
		"github":"github.com/kagbulos",
		"location":"Berkeley,CA"
	},
	"welcome_message": "<div>Thank you for taking the time to visit page.</div> <div>I love connecting with colleagues, hiring managers and like minded individuals.</div> <div>Please don't hesitate to contact me.</div>",
	"skills":[
	"Works well with others",
	"Hard working",
	"Solves problems creatively"
	],
	"languages":[
	"C++",
	"CSS",
	"HTML",
	"Java",
	"Javascript"
	],
	"biopic": "images\\rsz_profilepic.jpg",
	"display": function(){
	    var formattedname = HTMLheaderName.replace("%data%",bio.name);
	    var formattedrole = HTMLheaderRole.replace("%data%",bio.role);
	    $("#header").prepend(formattedrole);
	    $("#header").prepend(formattedname);

	    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	    $("#header").append(formattedmobile);
	    $("#letsConnect").append(formattedmobile);
	    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
	    $("#header").append(formattedemail);
	    $("#letsConnect").append(formattedemail);
	    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	    $("#header").append(formattedgithub);
	    $("#letsConnect").append(formattedgithub);
	    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location)
	    $("#header").append(formattedlocation);
	    $("#letsConnect").append(formattedlocation);
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

	  	if (bio.languages.length > 0) {
	      	$("#header").append(HTMLlanguagesStart);
	      	for(language in bio.languages)
	      	{
	      		var formattedLanguage = HTMLlanguages.replace("%data%", bio.languages[language]);
	      		$("#languages").append(formattedLanguage);
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
		"majors":[
		"Cognitive Science",
		],
		"minors":[
		"Computer Science"
		],
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
	      		var formattedminor = HTMLschoolMinor.replace("%data%",education.schools[school].minors);
	      		$(".education-entry:last").append(formattedminor);
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
		"location": "San Jose, CA",
		"dates": "2014-present ",
		"description": "<div>-Designed and created multiple custom applications involving the conversion of financial pdfs</Div><Div>-Managed interns </Div>"
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

		        var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
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
		"title": "Rando",
		"dates": "2015",
		"description": "<div>-Single-page, responsive application built with Knockout.js framework and utilizes API such as Flickr and google maps</div><div>-An application with a friendly interface that will help the user decide what to eat based off of pictures from local restaurants</div><div>-Pictures of food are generated by AJAX requests to Flickr API</div>",
		"images": [
		"images\\flickr.jpg",
		"images\\knockout.jpg"
		]
	},
	{
		"title":"Financial Text Extractor",
		"dates": "2014-present",
		"description": "<div>-Application designed to extract financial information from pdf files and present the information in a unique and meaningful way</div><div>-Project was written in C++ and utilizes in house software and standard libraries</div>",
		"images": [
		"images\\pdf.jpg",
		"images\\pdf2.jpg"
		]
	},
	{
		"title": "Flappy Bird Mock",
		"dates": "2014",
		"description": "-A project in which I attempted to recreate the game Flappy Bird to learn game development technologies (i.e. Cocos 2d) and methodologies",
		"images": [
		"images\\flappybird.jpg",
		"images\\flappybird2.jpg"
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

