document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
  
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("show");
    });
  
    const startTime = document.getElementById("start-time");
    const endTime = document.getElementById("end-time");
    const locationDropdown = document.getElementById("location-dropdown");  
    const dropdownToggle = locationDropdown.querySelector(".dropdown-toggle");
    const dropdownMenu = locationDropdown.querySelector(".dropdown-menu");
  
    for (let hour = 0; hour < 24; hour++) {
      const hourText = new Date(0, 0, 0, hour).toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      const option1 = document.createElement("option");
      option1.value = option1.text = hourText;
      const option2 = option1.cloneNode(true);
      startTime.appendChild(option1);
      endTime.appendChild(option2);
    }
  
    const faculties = [
      "Arts and Social Sciences",
      "Business",
      "Computing",
      "Continuing and Lifelong Education",
      "Dentistry",
      "Design and Environment",
      "Duke-NUS Medical School",
      "Engineering",
      "Integrative Sciences and Engineering",
      "Law",
      "Medicine",
      "Music",
      "Public Health",
      "Public Policy",
      "Science",
      "University Scholars Programme",
      "Yale-NUS College",
    ];
  
    faculties.forEach(faculty => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = faculty;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(faculty));
        dropdownMenu.appendChild(label);
    });

    dropdownToggle.addEventListener("click", () => {
        locationDropdown.classList.toggle("open");
      });

    dropdownMenu.addEventListener("change", (e) => {
        const checkboxes = dropdownMenu.querySelectorAll("input[type='checkbox']");
        if (e.target.value === "All Faculties") {
          const allChecked = e.target.checked;
          checkboxes.forEach(cb => {
            if (cb.value !== "All Faculties") cb.checked = allChecked;
          });
        } else {
          const allFac = [...checkboxes].find(cb => cb.value === "All Faculties");
          const others = [...checkboxes].filter(cb => cb.value !== "All Faculties");
          allFac.checked = others.every(cb => cb.checked);
        }
      });
      
      document.addEventListener("click", (e) => {
        if (!locationDropdown.contains(e.target)) {
          locationDropdown.classList.remove("open");
        }
      });
  
    const tagsContainer = document.querySelector(".tags");
    const tags = [
      "Aircon",
      "Quiet",
      "Outlets",
      "Library",
      "Classroom",
      "Benches",
      "Cafeteria",
      "Canteen",
    ];
  
    tags.forEach((tag) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = tag;
      span.addEventListener("click", () => {
        span.classList.toggle("selected");
      });
      tagsContainer.appendChild(span);
    });
});

document.getElementById("home-btn").addEventListener("click", () => {
    location.reload();
});
  

  const selectedTags = new Set();
  const tagElements = document.querySelectorAll(".tag");
  
  tagElements.forEach(tag => {
    tag.addEventListener("click", () => {
      tag.classList.toggle("selected");
      const tagText = tag.textContent;
      if (tag.classList.contains("selected")) {
        selectedTags.add(tagText);
      } else {
        selectedTags.delete(tagText);
      }
      filterSpots();
    });
  });
  
  const locationCheckboxes = document.querySelectorAll("#location-dropdown input[type='checkbox']");
  locationCheckboxes.forEach(cb => {
    cb.addEventListener("change", filterSpots);
  });
  
  function getSelectedLocations() {
    return Array.from(locationCheckboxes)
      .filter(cb => cb.checked && cb.value !== "All Faculties")
      .map(cb => cb.value);
  }
  
  function filterSpots() {
    const selectedLocations = getSelectedLocations();
    const spots = document.querySelectorAll(".spot");
  
    spots.forEach(spot => {
      const location = spot.dataset.location;
      const tags = spot.dataset.tags.split(",");
  
      const locationMatch = selectedLocations.length === 0 || selectedLocations.includes(location);
      const tagMatch = selectedTags.size === 0 || Array.from(selectedTags).every(tag => tags.includes(tag));
  
      if (locationMatch && tagMatch) {
        spot.style.display = "";
      } else {
        spot.style.display = "none";
      }
    });
  }
  