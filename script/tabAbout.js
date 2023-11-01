export function tabAbout() {
    document.addEventListener("DOMContentLoaded", function () {
        const tabLinks = document.querySelectorAll(".tab-link");
        const sections = document.querySelectorAll(".info, .members, .certificat");

        // Initialize the first tab as active
        tabLinks[0].classList.add("active");
        sections[0].classList.add("active");

        // Add click event listeners to the tab links
        tabLinks.forEach((tabLink) => {
            tabLink.addEventListener("click", () => {
                // Remove the "active" class from all tabs and sections
                tabLinks.forEach((tab) => tab.classList.remove("active"));
                sections.forEach((section) => section.classList.remove("active"));

                // Add the "active" class to the clicked tab and corresponding section
                tabLink.classList.add("active");
                const targetSection = document.getElementById(tabLink.getAttribute("data-target"));
                if (targetSection) {

                targetSection.classList.add("active");
                }
            });
        });
    });
}
