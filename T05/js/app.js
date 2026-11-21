document.addEventListener('DOMContentLoaded', () => {
  const testimonials = [
    {
      quote: "The developer ergonomics and attention to bytecode optimization are top-tier. Clean, resilient architecture that performs seamlessly under heavy workloads.",
      name: "Sarah Chen",
      role: "Staff Software Engineer",
      avatar: "SC",
      color: "#2563eb"
    },
    {
      quote: "An exceptional maintainer who consistently authors reliable open-source patches. Working together on browser internals and Chromium mods was a true pleasure.",
      name: "Alex Rivera",
      role: "Open-Source Lead",
      avatar: "AR",
      color: "#059669"
    },
    {
      quote: "Minimalist, distraction-free interface design with flawless responsiveness across every device. The attention to micro-interactions makes a huge difference.",
      name: "Elena Rostova",
      role: "UI/UX Designer",
      avatar: "ER",
      color: "#7c3aed"
    },
    {
      quote: "Code quality is consistently top-notch. Every commit is concise, well-tested, and easy to review. Exactly what every high-performing team needs.",
      name: "David Kim",
      role: "Systems Architect",
      avatar: "DK",
      color: "#d97706"
    }
  ];

  let currentIndex = 0;
  const quoteText = document.getElementById('quote-text');
  const authorAvatar = document.getElementById('author-avatar');
  const authorName = document.getElementById('author-name');
  const authorRole = document.getElementById('author-role');
  const authorBlock = document.getElementById('author-block');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const dotsWrapper = document.getElementById('dots-wrapper');

  function renderDots() {
    dotsWrapper.innerHTML = '';
    testimonials.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = index === currentIndex
        ? 'h-2 w-6 rounded-full bg-blue-600 transition-all duration-200'
        : 'h-2 w-2 rounded-full bg-slate-300 hover:bg-slate-400 transition-all duration-200';
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      dot.addEventListener('click', () => updateTestimonial(index));
      dotsWrapper.appendChild(dot);
    });
  }

  function updateTestimonial(newIndex) {
    if (newIndex === currentIndex) return;

    quoteText.classList.add('opacity-0', 'translate-y-1');
    authorBlock.classList.add('opacity-0');

    setTimeout(() => {
      currentIndex = newIndex;
      const item = testimonials[currentIndex];

      quoteText.textContent = item.quote;
      authorAvatar.textContent = item.avatar;
      authorAvatar.style.backgroundColor = item.color;
      authorName.textContent = item.name;
      authorRole.textContent = item.role;

      quoteText.classList.remove('opacity-0', 'translate-y-1');
      authorBlock.classList.remove('opacity-0');

      const dots = dotsWrapper.querySelectorAll('button');
      dots.forEach((dot, idx) => {
        dot.className = idx === currentIndex
          ? 'h-2 w-6 rounded-full bg-blue-600 transition-all duration-200'
          : 'h-2 w-2 rounded-full bg-slate-300 hover:bg-slate-400 transition-all duration-200';
      });
    }, 180);
  }

  function init() {
    const item = testimonials[currentIndex];
    quoteText.textContent = item.quote;
    authorAvatar.textContent = item.avatar;
    authorAvatar.style.backgroundColor = item.color;
    authorName.textContent = item.name;
    authorRole.textContent = item.role;
    renderDots();

    prevBtn.addEventListener('click', () => {
      const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(newIndex);
    });

    nextBtn.addEventListener('click', () => {
      const newIndex = (currentIndex + 1) % testimonials.length;
      updateTestimonial(newIndex);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(newIndex);
      } else if (e.key === 'ArrowRight') {
        const newIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(newIndex);
      }
    });
  }

  init();
});
