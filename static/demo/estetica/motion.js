if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const targets = document.querySelectorAll('.service-image, .visit-photo, .location-image');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.12 });
  for (const target of targets) observer.observe(target);
  document.documentElement.classList.add('motion-on');
}
