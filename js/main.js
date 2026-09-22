document.documentElement.classList.add("js");

document.querySelectorAll("#year").forEach(function (el) {
  el.textContent = String(new Date().getFullYear());
});

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  var nodes = document.querySelectorAll(".reveal");
  if (nodes.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    nodes.forEach(function (node) {
      io.observe(node);
    });
  } else {
    nodes.forEach(function (node) {
      node.classList.add("visible");
    });
  }
} else {
  document.querySelectorAll(".reveal").forEach(function (node) {
    node.classList.add("visible");
  });
}
