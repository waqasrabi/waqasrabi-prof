const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    const target = tab.getAttribute("data-tab");

    // 1. Remove active from all tabs
    tabs.forEach(t => t.classList.remove("active"));

    // 2. Hide all content
    contents.forEach(c => c.classList.remove("active"));

    // 3. Activate clicked tab
    tab.classList.add("active");

    // 4. Show corresponding content
    document.getElementById(target)
      .classList.add("active");


      


  });

});





document.querySelectorAll(".degree-block").forEach(degreeBlock => {
  const title = degreeBlock.querySelector(".degree-title");
  const sub = degreeBlock.querySelector(".degree-sub");
  const skills = degreeBlock.querySelector(".degree-skills");

  // Initially hide the additional information
  sub.style.display = "none";
  skills.style.display = "none";

  // Make the degree title clickable
  title.style.cursor = "pointer";

  title.addEventListener("click", () => {
      const isExpanded = sub.style.display === "block";

      if (isExpanded) {
          sub.style.display = "none";
          skills.style.display = "none";
      } else {
          sub.style.display = "block";
          skills.style.display = "block";
      }
  });
});
