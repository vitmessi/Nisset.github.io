let products = {
  data: [
    {
      title: "Content Writer",
      company: "Digital Content Creators",
      location: "New York, NY",
      description: "Create engaging and informative content for various digital platforms. The ideal candidate will have strong writing skills and experience in content creation.",
      requirements: ["Bachelor's degree in English, Journalism, or related field", "Experience in digital content creation", "Excellent writing and editing skills"],
      category: "ContentCreation",
      image: "https://example.com/content_writer_image.jpg", // Example image URL
      postedDate: "2024-01-27",
      deadline: "2024-02-27",
      salary:3390,
    },
    {
      title: "Network Administrator",
      company: "Network Solutions Inc.",
      location: "San Francisco, CA",
      description: "Manage and optimize computer networks for efficiency and security. The ideal candidate will have experience in network administration and IT security.",
      requirements: ["Bachelor's degree in IT or related field", "Experience in network administration", "Knowledge of IT security practices"],
      category: "Technology",
      image: "https://example.com/network_admin_image.jpg", // Example image URL
      postedDate: "2024-01-28",
      deadline: "2024-02-28",
      salary:1200,
    },
    {
      title: "Public Relations Specialist",
      company: "PR Strategies Agency",
      location: "Chicago, IL",
      description: "Develop and execute PR campaigns to enhance the public image of clients. The ideal candidate will have a background in public relations and strong communication skills.",
      requirements: ["Bachelor's degree in Public Relations or related field", "Experience in PR campaigns", "Excellent communication and media relations skills"],
      category: "PublicRelations",
      image: "https://example.com/pr_specialist_image.jpg", // Example image URL
      postedDate: "2024-01-29",
      deadline: "2024-02-29",
      salary:5729,
    },
    {
      title: "Pharmacist",
      company: "Healthcare Pharmacy",
      location: "Philadelphia, PA",
      description: "Dispense medications and provide pharmaceutical care to patients. The ideal candidate will have a Doctor of Pharmacy (Pharm.D.) degree and a valid pharmacist license.",
      requirements: ["Doctor of Pharmacy (Pharm.D.) degree", "Valid pharmacist license", "Experience in pharmacy practice"],
      category: "Healthcare",
      image:"image/pharma.png", // Example image URL
      postedDate: "2024-01-30",
      deadline: "2024-02-30",
      salary:3000,
    },
    /////////////////////////////////////////////
    {
      title: "Data Analyst",
      company: "Data Insights Co.",
      location: "Dallas, TX",
      description: "Analyze and interpret data to provide valuable insights. The ideal candidate will have strong analytical skills and experience in data analysis tools.",
      requirements: ["Bachelor's degree in Statistics, Mathematics, or related field", "Experience in data analysis", "Proficiency in tools like Python or R"],
      category: "Technology",
      image: "https://example.com/data_analyst_image.jpg", // Example image URL
      postedDate: "2024-02-01",
      deadline: "2024-03-01"
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.title.toUpperCase();
  container.appendChild(name);
  //salary
  let salary = document.createElement("h6");
  salary.innerText = "$" + i.salary;
  container.appendChild(salary);
  //company
  
  let company = document.createElement("h6");
  company.innerText = "COMPAMY: " + i.company;
  container.appendChild(company);

   //button
   let newButton = document.createElement('button');
   newButton.textContent = 'ADD to fav!'+ '' ;
   container.appendChild(newButton); 
   

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
    //button
    let applyButton = document.createElement('button');
    applyButton.textContent = 'Apply' + '+';
    
    // Add a click event listener to the button
    applyButton.addEventListener('click', function() {
        // Redirect to the new page
        window.location.href = 'applyforjob.html';
    });
    
    // Append the button to the container
    container.appendChild(applyButton); 
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("None");
};