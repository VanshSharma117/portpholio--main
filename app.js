  // Show project demo
      function showProject(id) {
        document
          .querySelectorAll(".demo")
          .forEach((d) => (d.style.display = "none"));
        document.getElementById(id).style.display = "block";
      }
