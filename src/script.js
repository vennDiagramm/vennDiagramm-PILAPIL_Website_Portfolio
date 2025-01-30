const projectDetails = {
    project1: {
        title: "Admission Chatbot - Website",
        description: "An interactive chatbot for managing admissions-related queries for Mapua Malayan Colleges Mindanao. Created using C# programming language. This web-hosted GUI application is designed to assist prospective students with their admission queries and provide a user-friendly experience.",
        githubLink: "https://github.com/vennDiagramm/Group-4-System-Margatron-Admissions-Buddy"
    },
    project2: {
        title: "M. Family Dormitory Manager - App",
        description: "A dormitory management app designed for both administrators and customers, created with C#. A GUI-based dormitory management system for administrators. Features include user management, room allocation, and billing.",
        githubLink: "https://github.com/vennDiagramm/Dormitory"
    },
    project3: {
        title: "Evergreen Dormitory Manager - App",
        description: "A dormitory management app designed for Evergreen Dormitory, created with Java. A GUI-based dormitory management system for administrators. Features include user management, room allocation, and billing.",
        githubLink: "https://github.com/vennDiagramm/EGD-Management-System"
    },

    project4: {
        title: "Galactic Eco-Guardians - Game",
        description: "A simple game created using Python Turtle. Inspired by the 1978 arcade game created by Tomohiro Nishikado, Space Invaders. The elements of this game incorporates SDG 13: Climate action.",
        githubLink: "https://github.com/vennDiagramm/Galactic-Eco-Guardians"
    },
};

// Hide the modal on page load
window.onload = function() {
    document.getElementById("project-details").style.display = "none";
};


// Function to close the modal
function closeProjectDetails() {
    document.getElementById("project-details").style.display = "none";
}

// Show project details function
function showProjectDetails(projectId) {
    const modal = document.getElementById("project-details");
    const title = document.getElementById("project-title");
    const description = document.getElementById("project-description");
    const githubLink = document.getElementById("github-link");

    const project = projectDetails[projectId];
    if (project) {
        title.textContent = project.title;
        description.textContent = project.description;
        githubLink.href = project.githubLink;

        modal.style.display = "flex"; // Show modal
    }
}

// Close the modal when clicking outside the modal content
window.addEventListener("click", function (event) {
    const modal = document.getElementById("project-details");
    const modalContent = document.querySelector(".modal-content");

    if (event.target === modal) {
        closeProjectDetails(); // Close modal
    }
});
