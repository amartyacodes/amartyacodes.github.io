export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Amartya Bhattacharya, undergraduate research assistant at Banerjee Lab, Arizona State University and currently a final year student at University of Calcutta.",
				"I am a curious soul who loves to solve problems in  Deep Learning, Computer Vision,NLP and applications of AI in Healthcare through research work.",
				"Also involved in competitive programming and love to know about global politics",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for a research project, job opportunity, or to just say hi, feel free to send me an email. My email address is: amartya.bhattacharya1729@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "Python, C++, MATLAB, JavaScript", 
			color: "1",
			percentage: "85",
		},
		{
			title: "Frameworks",
			skillName: "TensorFlow, PyTorch, SQL",
			color: "6",
			percentage: "90",
		},
		{
			title: "Libraries",
			skillName: "OpenCV, Keras, Scikit Learn",
			color: "2",
			percentage: "80",
		},
		{
			title: "Clouds",
			skillName: "AWS(EC2), Heroku, Netlify",
			color: "3",
			percentage: "30",
		},
		{
			title: "Design",
			skillName: "HTML, SCSS",
			color: "4",
			percentage: "40",
		},
		{
			title: "Version Control",
			skillName: "GitHub",
			color: "7",
			percentage: "60",
		},
		{
			title: "CS Core Subjects",
			skillName: "Data Structures and Algorithms, DBMS, Computer Networks,Operating System",
			color: "3",
			percentage: "70",
		},
		{
			title: "Applications of Deep Learning",
			skillName: "Computer Vision",
			color: "5",
			percentage: "90",
		},
		{
			title: "Applications of Deep Learning",
			skillName: "NLP",
			color: "6",
			percentage: "70",
		},
	],
	projects: {
		web: [
			{
				projectName: "ARAMBHML-An Auto ML Platform for Beginners",
				image: "images/arambhml.png",
				summary:
					"Developed a beginner-friendly auto ML platform capable of solving classification tasks using CSV data",
				preview: "https://pypi.org/project/ARAMBHML/",
				techStack: [
					"Python",
					"Pandas",
					"ScikitLearn",
					"ML Algorithms",
					"PyPi",
				],
			},
			{
				projectName: "End to End Dog Breed Classifier with Rest API",
				image: "images/breed.png",
				summary:
					"Developed a Rest API application capable of classifying the breeds of dogs from the images",
				preview: "https://github.com/amartyacodes/DogBreedClassification-",
				techStack: ["Python", "Open CV", "TensorFlow", "Rest API"],
			},
			{
				projectName: "Analysis of Machine Learning Algorithms for Prediction of Diabetes",
				image: "images/diabetes.png",
				summary:
					"Research paper on the analysis of ML algorithms for diabetes classification task and importance of each features, published on Taylor&Francis Group",
				preview: "https://www.researchgate.net/publication/355902066_Analysis_of_Machine_Learning_Algorithms_for_Prediction_of_Diabetes",
				techStack: ["Python", "Scikit-Learn"],
			},

		],
		software: [
			{
				projectName: "A Novel Deep Learning Based Model for Classification of Rice Leaf Diseases",
				image: "images/dlproject.png",
				summary:
					"A research paper on rice leaf detection using deep learning model, published in IEEE Access",
				preview:
					"https://ieeexplore.ieee.org/abstract/document/9638278",
				techStack: ["Python", "TensorFlow"],
			},
			{
				projectName: "Application of Federated Learning in Building a Robust COVID-19 Chest X-ray Classification Model",
				image: "images/Fl.png",
				summary:
					"Research Paper on application of Federated Learning in classification of COVID-19 chest X-rays, published on arxiv",
				preview: "https://arxiv.org/abs/2204.10505",
				techStack: ["Python", "TensorFlow Federated", "Federated Learning"],
			},
		],
		android: [
			{
				projectName: "Cell-Detection-Using-Image-Processing",
				image: "images/cell1.jpg",
				summary:
					"An automated White Blood Cells(WBCs) detection technique from bone marrow",
				preview: "https://github.com/amartyacodes/Cell-Detection-Using-Image-Processing",
				techStack: ["Python", "Open CV"],
			},
			{
				projectName: "Exudate Segmentation from Retinal Images",
				image: "images/exudate.png",
				summary:
					"An automated exudate segmentation technique from retinal images using image processing techniques",
				preview: "https://github.com/amartyacodes/Exudate-Segmentation",
				techStack: ["Python","Open CV"],
			},
			{
				projectName: "Multiclass-U-Net-for-Fetal-Feature-Extraction",
				image: "images/munet.png",
				summary:
					"Built the Multiclass U-Net model from scratch for segmentation of Fetal Features",
				preview: "https://github.com/amartyacodes/Multiclass-U-Net-for-Fetal-Feature-Extraction",
				techStack: ["Python","TensorFlow","Numpy"],
			},

		],
		freelance: [
			{
				projectName: "Unsupervised-WBC-Segmentation",
				image: "images/cell2.png",
				summary:
					"Applied Unsupervised ML technique in order to segment White Blood Cells from bone marrow images.",
				preview: "https://github.com/amartyacodes/Unsupervised-WBC-Segmentation",
				techStack: ["Python","TensorFlow","Numpy"],
			},
		],
	},
	experience: [
		{
			title: "Arizona State University: Banerjee Lab",
			duration: "Dec 2021 - Present",
			subtitle: "Undergraduate Research Assistant",
			details: [
				"Developed the code for conversion of ECG images to plots using Python and Matplotlib.",
				"Developed a multimodal neural network model to predict adverse healthcare outcomes from ECG images and EHR Data."
			],
			tags: [
				"Python",
				"MATLAB",
				"Open CV",
				"TensorFlow",
				"LIME",
				
			],
			icon: "heartbeat",
		},
		{
			title: "DeepTek Inc",
			duration: "August 2021 - Feb 2022",
			subtitle: "Machine Learning Intern",
			details: [
				"Worked on Federated Learning(FL) algorithms and building a model using TensorFlow Federated for detecting diseases from CT scan and X ray images",
				"Built a Deep Learning Model using a FL framework, from scratch for classification of Covid 19 Chest X-Ray images which increased the AUC score by 5% than the deep learning models trained without FL framework",
			    "Paper Available on Arxiv/NASA ADS/Semantic Scholar"
			], 
			tags: [
				"Python",
				"TensorFlow",
				"TFF",
				"Grad-CAM",
			],
			icon: "heartbeat",
		},
		{
			title: "Indian Space Research Organisation(ISRO)",
			duration: "August 2021 - Dec 2021",
			subtitle: "AI Research Intern",
			details: [
				"Worked at MOSDAC, ISRO under Dr.Bipasha Paul Shukla,on building a model for identification of seeding condition ofclouds using Machine Learning with Python",
				"Analyzed the Australian Cloud Seeding Experimentresults using Python in orderto judge the factors that affected the cloud seeding experiments",
			    "Analyzed and used unsupervised learning to create a model from Japan Aerospace Exploration Agency(JAXA) data to study the factors related to cloud seeding."
			],
			tags: ["Python", "Scikit Learn", "Matplotlib", "Seaborn", "H5py"],
			icon: "group",
		},
		{
			title: "Center of Development of Advanced Computing(CDAC)",
			duration: "May 2021 - July 2021",
			subtitle: "Machine Learning Research Intern",
			details: [
				"Analysed the diabetes,stroke and heart attack detection data using Python,Matplotlib and Seaborn..",
				"Built an Auto ML framework named ARAMBHML, capable of analysing the data and applying different machine learningalgorithms and showing their accuracy."
			],
			tags: [
				"Python",
				"Scikit-Learn"

				
			],
			icon: "heartbeat",
		},
		{
			title: "Data Science Lab: University of Calcutta",
			duration: "March 2021 - Dec 2021",
			subtitle: "Undergraduate Research Assistant",
			details: [
				"Underthe supervision of Dr.Amlan Chakrabarti, worked on deep learning based image segmentation techniques using Python, TensorFlow and Keras to segment cells from bone marrow slide images with over 97% dice coefficient score.",
				"Built a Covolutional Neural Network model for classification of different types of cells present in the slide with an AUC score of 94.62%.",
				"Built a Novel Instance Segmentation model which can segment cells from the slide and classify ."
			],
			tags: [
				"Python",
				"Open CV",
				"TensorFlow"
			],
			icon: "heartbeat",
		}
	],
	education: [
		{
			title: "Bachelors in Computer Science and Engineering",
			duration: "2018-2022",
			subtitle: "Universiy of Calcutta",
			details: [
				"CGPA: 8.12",
				"Active Competitive Programmer with CodeChef Rating 4*.",
				"Kaggle 2x Expert with highest achieved rank of 497 out of 300,000 data scientists from around the world. ",
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Computer Networks",
				"Compiler Designing",
				"Cloud Computing",
			],
			icon: "graduation-cap",
		},
		{
			title: "Class 11-12th in Science and Mathematics",
			duration: "",
			subtitle: "South Point High School",
			details: [
				"Qualified JEE Advanced, Main & BITSAT.",
				"Secured 99.5 percentile in Class 12th Boards Examinations.",
			],
			tags: ["Physics", "Chemistry", "Mathematics"],
			icon: "book",
		}
	],
	footer: [
		{
			label: "Dev/Research Profiles",
			data: [
				{
					text: "Google Scholar",
					link: "https://scholar.google.com/citations?user=0GiZhbkAAAAJ&hl=en",					
				},
				{
					text: "Kaggle",
					link: "https://www.kaggle.com/amartyabhattacharya",
				},
				{
					text: "GitHub",
					link: "https://github.com/amartyacodes",
				},
				{
					text: "Codechef",
					link: "https://www.codechef.com/users/blaze1729",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://github.com/amartyacodes/amartyacodes.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/amartya-bhattacharya-1a4069175/",
				},
				{
					text: "Facebook",
					link: "https://www.facebook.com/amartya.bhattacharya.14/",
				},

			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Amartya Bhattacharya with inspiration from Vinay Somawat.",
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
