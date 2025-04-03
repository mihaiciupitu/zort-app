gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".phone-section",
    start: "top top",
    end: "+=3000",
    scrub: 1,
    pin: ".phone-sticky",
  },
});

// Image and Button Animations
timeline
  // Slide 1
  .to(".slide1", { opacity: 1, duration: 1 })
  .to(".btn1", { opacity: 1, y: -50, duration: 1 }, "-=0.8") // First button
  .to(".right h2", { opacity: 1, y: -50, duration: 1 }, "-=0.8")
  .to(".btn2", { opacity: 1, y: -30, duration: 1 }, "-=0.6") // Second button appears below
  .to(".right h1", { opacity: 0, duration: 0.5 }, "-=0.5") // Fade out text
  .set(".right h1", { textContent: "Seamless" }) // Change text
  .to(".right h1", { opacity: 1, duration: 0.5 }) // Fade in new text
  .to(".slide1", { opacity: 0, duration: 1 }, "+=1") // Slide fades out

  // Slide 2
  .to(".slide2", { opacity: 1, duration: 1 })
  .to(".btn1", { backgroundColor: "#000", color: "#fff", duration: 0.5 }) // Invert button color
  .to(
    ".btn2",
    { backgroundColor: "#fff", color: "#000", duration: 0.5 },
    "-=0.5"
  ) // Alternate color
  .to(".right h1", { opacity: 0, duration: 0.5 }, "-=0.5")
  .set(".right h1", { textContent: "Powerful" })
  .to(".right h1", { opacity: 1, duration: 0.5 })
  .to(".slide2", { opacity: 0, duration: 1 }, "+=1")

  // Slide 3
  .to(".slide3", { opacity: 1, duration: 1 })
  .to(".btn1", { backgroundColor: "#fff", color: "#000", duration: 0.5 })
  .to(
    ".btn2",
    { backgroundColor: "#000", color: "#fff", duration: 0.5 },
    "-=0.5"
  )
  .to(".right h1", { opacity: 0, duration: 0.5 }, "-=0.5")
  .set(".right h1", { textContent: "Intuitive" })
  .to(".right h1", { opacity: 1, duration: 0.5 })
  .to(".slide3", { opacity: 0, duration: 1 }, "+=1")

  .set([".slide1", ".slide2", ".slide3"], { opacity: 0 });

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle("active");
  });
});
