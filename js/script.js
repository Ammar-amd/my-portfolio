const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}



const copyEmailBtn = document.getElementById("copyEmailBtn");
const emailAddress = document.getElementById("emailAddress");
const copyEmailMessage = document.getElementById("copyMessage");

if (copyEmailBtn && emailAddress && copyEmailMessage) {
  const originalEmailIcon = copyEmailBtn.innerHTML;

  copyEmailBtn.addEventListener("click", async () => {
    const email = emailAddress.textContent.trim();

    try {
      await navigator.clipboard.writeText(email);

      copyEmailBtn.innerHTML = "✓";
      copyEmailBtn.setAttribute("aria-label", "Email copied");
      copyEmailBtn.setAttribute("title", "Email copied");

      copyEmailMessage.textContent = "Email copied to clipboard!";

      setTimeout(() => {
        copyEmailBtn.innerHTML = originalEmailIcon;
        copyEmailBtn.setAttribute("aria-label", "Copy email address");
        copyEmailBtn.setAttribute("title", "Copy email address");

        copyEmailMessage.textContent = "";
      }, 2000);

    } catch (error) {
      copyEmailMessage.textContent =
        "Copy unavailable. Please copy the email manually.";
    }
  });
}


const copyLinkedInBtn = document.getElementById("copyLinkedInBtn");
const linkedinUrl = document.getElementById("linkedinUrl");
const copyLinkedInMessage = document.getElementById("copyLinkedInMessage");

if (copyLinkedInBtn && linkedinUrl && copyLinkedInMessage) {
  const originalLinkedInIcon = copyLinkedInBtn.innerHTML;

  copyLinkedInBtn.addEventListener("click", async () => {
    const link = linkedinUrl.textContent.trim();

    try {
      await navigator.clipboard.writeText(link);

      copyLinkedInBtn.innerHTML = "✓";
      copyLinkedInBtn.setAttribute(
        "aria-label",
        "LinkedIn link copied"
      );
      copyLinkedInBtn.setAttribute(
        "title",
        "LinkedIn link copied"
      );

      copyLinkedInMessage.textContent =
        "LinkedIn link copied to clipboard!";

      setTimeout(() => {
        copyLinkedInBtn.innerHTML = originalLinkedInIcon;

        copyLinkedInBtn.setAttribute(
          "aria-label",
          "Copy LinkedIn profile URL"
        );
        copyLinkedInBtn.setAttribute(
          "title",
          "Copy LinkedIn URL"
        );

        copyLinkedInMessage.textContent = "";
      }, 2000);

    } catch (error) {
      copyLinkedInMessage.textContent =
        "Copy unavailable. Please copy the LinkedIn link manually.";
    }
  });
}




const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Home Lab Accordion
// Only one dropdown open + automatic scrolling

const labItems = document.querySelectorAll(".lab-item");

labItems.forEach((item) => {

    item.addEventListener("toggle", () => {

        if (item.open) {

            // Close other dropdowns
            labItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.open = false;
                }
            });

            // Scroll to the newly opened dropdown
            setTimeout(() => {
                item.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 150);

        }

    });

});