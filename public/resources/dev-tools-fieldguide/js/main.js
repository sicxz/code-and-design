/**
 * DevTools Field Guide - Main JavaScript
 * Scroll spy for table of contents active states
 */

(function() {
  'use strict';

  // Scroll spy for TOC
  function initScrollSpy() {
    const tocLinks = document.querySelectorAll('.toc a');
    const sections = [];

    // Gather all sections that TOC links point to
    tocLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
          sections.push({ element: section, link: link });
        }
      }
    });

    if (sections.length === 0) return;

    function updateActiveLink() {
      const scrollPos = window.scrollY + 120; // Offset for header

      // Find the current section
      let currentSection = sections[0];

      for (const section of sections) {
        if (section.element.offsetTop <= scrollPos) {
          currentSection = section;
        }
      }

      // Update active states
      tocLinks.forEach(link => link.classList.remove('active'));
      if (currentSection) {
        currentSection.link.classList.add('active');
      }
    }

    // Throttled scroll handler
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          updateActiveLink();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Initial update
    updateActiveLink();
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL without jumping
          history.pushState(null, null, href);
        }
      });
    });
  }

  // Mobile menu toggle (for responsive sidebar)
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
      menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        this.setAttribute('aria-expanded',
          sidebar.classList.contains('open') ? 'true' : 'false'
        );
      });

      // Close sidebar when clicking outside
      document.addEventListener('click', function(e) {
        if (sidebar.classList.contains('open') &&
            !sidebar.contains(e.target) &&
            !menuToggle.contains(e.target)) {
          sidebar.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  // Copy code button functionality
  function initCodeCopy() {
    document.querySelectorAll('pre').forEach(pre => {
      // Skip if already has copy button
      if (pre.querySelector('.copy-btn')) return;

      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.textContent = 'Copy';
      copyBtn.setAttribute('aria-label', 'Copy code to clipboard');

      copyBtn.addEventListener('click', async function() {
        const code = pre.querySelector('code');
        if (code) {
          try {
            await navigator.clipboard.writeText(code.textContent);
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
              copyBtn.textContent = 'Copy';
            }, 2000);
          } catch (err) {
            copyBtn.textContent = 'Failed';
            setTimeout(() => {
              copyBtn.textContent = 'Copy';
            }, 2000);
          }
        }
      });

      pre.style.position = 'relative';
      pre.appendChild(copyBtn);
    });
  }

  // Initialize all functionality when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initScrollSpy();
    initSmoothScroll();
    initMobileMenu();
    initCodeCopy();
  }
})();
