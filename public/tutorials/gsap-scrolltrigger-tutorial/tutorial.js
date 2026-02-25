// ═══════════════════════════════════════════════════════════
// SCROLLTRIGGER TUTORIAL — INTERACTIVE FEATURES + LIVE DEMOS
// ═══════════════════════════════════════════════════════════

(function() {
  'use strict';

  const STORAGE_PREFIX = 'tutorial-scrolltrigger-';

  // ===== 1. RESPONSE TEXTAREA PERSISTENCE =====
  function initResponseAreas() {
    const responseAreas = document.querySelectorAll('.response-area');

    responseAreas.forEach(textarea => {
      const responseKey = getResponseKey(textarea);
      const savedResponse = getFromStorage('responses', {})[responseKey];
      if (savedResponse) {
        textarea.value = savedResponse;
      }

      let saveTimeout;
      textarea.addEventListener('input', function() {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
          saveResponse(this);
          showSaveIndicator(this);
        }, 500);
      });
    });
  }

  function getResponseKey(textarea) {
    const section = textarea.dataset.section;
    const question = textarea.dataset.question;
    return section + '-' + question;
  }

  function saveResponse(textarea) {
    const responses = getFromStorage('responses') || {};
    const key = getResponseKey(textarea);
    responses[key] = textarea.value;
    saveToStorage('responses', responses);
  }

  function showSaveIndicator(textarea) {
    const indicator = textarea.parentElement.querySelector('.save-indicator');
    if (indicator) {
      indicator.classList.add('visible');
      setTimeout(() => {
        indicator.classList.remove('visible');
      }, 2000);
    }
  }

  // ===== 2. CHECKPOINT PERSISTENCE =====
  function initCheckpoints() {
    const checkboxes = document.querySelectorAll('.checkpoint input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
      const checkpointId = checkbox.dataset.checkpoint;
      const savedCheckpoints = getFromStorage('checkpoints') || {};
      if (savedCheckpoints[checkpointId]) {
        checkbox.checked = true;
        checkbox.closest('.checkpoint').classList.add('completed');
      }

      checkbox.addEventListener('change', function() {
        const checkpoints = getFromStorage('checkpoints') || {};
        checkpoints[checkpointId] = this.checked;
        saveToStorage('checkpoints', checkpoints);

        const checkpointBox = this.closest('.checkpoint');
        if (this.checked) {
          checkpointBox.classList.add('completed');
        } else {
          checkpointBox.classList.remove('completed');
        }

        updateProgress();
      });
    });

    updateProgress();
  }

  // ===== 3. PROGRESS TRACKING =====
  function updateProgress() {
    var completionCheckboxes = document.querySelectorAll('.checkpoint input[data-checkpoint$="-complete"]');
    var totalSections = completionCheckboxes.length;
    var completedSections = 0;

    completionCheckboxes.forEach(function(cb) {
      if (cb.checked) completedSections++;
    });

    var percentage = totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0;

    var progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
      progressFill.style.width = percentage + '%';
    }

    var progressText = document.querySelector('.progress-text');
    if (progressText) {
      progressText.textContent = 'Progress: ' + completedSections + '/' + totalSections + ' sections \u2022 ' + percentage + '%';
    }
  }

  // ===== 4. SOLUTION TOGGLES =====
  function initSolutionToggles() {
    var toggleButtons = document.querySelectorAll('.show-solution');

    toggleButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var solutionId = this.dataset.solution;
        var solutionBox = document.querySelector('.solution-box[data-solution-id="' + solutionId + '"]');

        if (solutionBox) {
          var isHidden = solutionBox.classList.contains('hidden');

          if (isHidden) {
            solutionBox.classList.remove('hidden');
            this.textContent = 'Hide Code';
          } else {
            solutionBox.classList.add('hidden');
            this.textContent = 'Show Complete Code';
          }
        }
      });
    });
  }

  // ===== 5. EXPORT RESPONSES =====
  function initExportButton() {
    var exportButton = document.getElementById('export-responses');

    if (exportButton) {
      exportButton.addEventListener('click', function() {
        var responses = getFromStorage('responses') || {};

        if (Object.keys(responses).length === 0) {
          alert('You haven\'t written any responses yet!');
          return;
        }

        var exportText = 'SCROLLTRIGGER PATTERNS TUTORIAL - MY RESPONSES\n';
        exportText += '='.repeat(50) + '\n\n';

        var sections = {};
        Object.keys(responses).forEach(function(key) {
          var parts = key.split('-');
          var sectionKey = parts.slice(0, 2).join('-');
          var question = parts[2] || '1';
          if (!sections[sectionKey]) {
            sections[sectionKey] = [];
          }
          sections[sectionKey].push({ question: question, text: responses[key] });
        });

        Object.keys(sections).sort().forEach(function(sectionKey) {
          var sectionName = sectionKey.toUpperCase();
          exportText += sectionName + ':\n';
          exportText += '-'.repeat(30) + '\n';

          sections[sectionKey].forEach(function(item, index) {
            exportText += 'Reflection ' + (index + 1) + ':\n';
            exportText += item.text + '\n\n';
          });

          exportText += '\n';
        });

        exportText += '='.repeat(50) + '\n';
        exportText += 'Exported: ' + new Date().toLocaleString() + '\n';

        copyToClipboard(exportText);

        var originalText = exportButton.textContent;
        exportButton.textContent = '\u2713 Copied to Clipboard!';
        exportButton.style.background = '#38a169';

        setTimeout(function() {
          exportButton.textContent = originalText;
          exportButton.style.background = '';
        }, 3000);
      });
    }
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      var textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }

  // ===== LOCALSTORAGE HELPERS =====
  function saveToStorage(key, value) {
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }

  function getFromStorage(key, defaultValue) {
    if (defaultValue === undefined) defaultValue = null;
    try {
      var item = localStorage.getItem(STORAGE_PREFIX + key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error('Failed to read from localStorage:', e);
      return defaultValue;
    }
  }

  // ===== 6. SMOOTH SCROLL =====
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ===== 7. COPY CODE BUTTONS =====
  function initCopyCodeButtons() {
    var copyButtons = document.querySelectorAll('.copy-code-btn');

    copyButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var wrapper = this.closest('.code-block-wrapper');
        var codeBlock = wrapper.querySelector('code');
        var codeText = codeBlock.textContent;

        copyToClipboard(codeText);

        var originalHTML = button.innerHTML;
        button.innerHTML = '<span class="icon">\u2713</span><span>Copied!</span>';
        button.classList.add('copied');

        setTimeout(function() {
          button.innerHTML = originalHTML;
          button.classList.remove('copied');
        }, 2000);
      });
    });
  }

  // ===== 8. TAB SWITCHING =====
  function initTabs() {
    var tabButtons = document.querySelectorAll('.tab-btn');
    var tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        tabButtons.forEach(function(b) { b.classList.remove('active'); });
        tabPanels.forEach(function(p) { p.classList.remove('active'); });

        this.classList.add('active');
        var target = document.querySelector(this.dataset.panel);
        if (target) target.classList.add('active');
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // 9. SCROLLTRIGGER LIVE DEMOS
  // ═══════════════════════════════════════════════════════════
  function initDemos() {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return; // CSS fallback makes everything visible

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP or ScrollTrigger not loaded — demos disabled');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    var demoCards = gsap.utils.toArray('.demo-card');
    var scrubPctEl = document.getElementById('demo-scrub-pct');
    var scrubFillEl = document.getElementById('demo-scrub-fill');
    var demoTriggerZone = document.getElementById('demo-trigger');

    function setDemo1InitialState() {
      if (demoCards.length) {
        gsap.set(demoCards, { opacity: 0, y: 50, scale: 0.92 });
      }
    }

    // ── DEMO 1: Basic Trigger — cards fade/rise/scale + animate out ──
    var demo1Tween;

    function createDemo1() {
      if (!demoCards.length) return;

      demo1Tween = gsap.to(demoCards, {
        scrollTrigger: {
          trigger: demoTriggerZone || '.demo-trigger',
          start: 'top 80%',
          end: 'bottom 35%',
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }

    createDemo1();

    // Reset button — scroll above trigger, reset cards, re-create
    var resetBtn = document.getElementById('demo-trigger-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        // Kill existing tween + its ScrollTrigger
        if (demo1Tween) {
          if (demo1Tween.scrollTrigger) demo1Tween.scrollTrigger.kill();
          demo1Tween.kill();
        }
        // Reset cards to initial state
        setDemo1InitialState();

        // Scroll above the trigger zone so the demo can re-fire on scroll-down
        if (demoTriggerZone) {
          var targetY = demoTriggerZone.getBoundingClientRect().top + window.scrollY - window.innerHeight + 24;
          window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
        }

        // Re-create immediately so the trigger can fire naturally during the next scroll.
        createDemo1();
      });
    }

    // ── DEMO 2: Scrub — headlines slide in + progress bar ──
    var scrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#demo-scrub',
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: function(self) {
          var pct = Math.round(self.progress * 100);
          if (scrubPctEl) scrubPctEl.textContent = pct + '%';
          if (scrubFillEl) scrubFillEl.style.width = pct + '%';
        }
      }
    });

    scrubTl
      .to('#demo-hl1', { x: 0, opacity: 1, duration: 1, ease: 'none' })
      .to('#demo-hl2', { x: 0, opacity: 1, duration: 1, ease: 'none' }, '<0.2')
      .to('#demo-hl3', { x: 0, opacity: 1, duration: 1, ease: 'none' }, '<0.2');

    // ── DEMO 3: Pin + Timeline — responsive ──
    ScrollTrigger.matchMedia({

      // Desktop: full pin experience
      '(min-width: 769px)': function() {
        // Pin the left visual panel
        ScrollTrigger.create({
          trigger: '#demo-pin-stage',
          start: 'top top',
          end: 'bottom top',
          pin: '#demo-pin-visual',
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true
        });

        // Step 1: reveal stripe + title
        gsap.to(['#demo-pin-stripe', '#demo-pin-title'], {
          scrollTrigger: {
            trigger: '[data-demo-step="1"]',
            start: 'top 55%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          onStart: function() { setDemoDot(1); },
          onReverseComplete: function() { setDemoDot(0); }
        });

        // Step 2: reveal subtitle + CTA
        gsap.to(['#demo-pin-subtitle', '#demo-pin-cta'], {
          scrollTrigger: {
            trigger: '[data-demo-step="2"]',
            start: 'top 55%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: 'power2.out',
          onStart: function() { setDemoDot(2); },
          onReverseComplete: function() { setDemoDot(1); }
        });
      },

      // Mobile: simple stagger, no pin
      '(max-width: 768px)': function() {
        // Make pin elements visible immediately on mobile
        gsap.set(['#demo-pin-stripe', '#demo-pin-title', '#demo-pin-subtitle', '#demo-pin-cta'], {
          opacity: 1,
          y: 0
        });

        // Simple entrance for steps
        gsap.utils.toArray('.demo-pin-step').forEach(function(step) {
          gsap.from(step, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              invalidateOnRefresh: true
            }
          });
        });
      }
    });

    window.addEventListener('load', function() {
      ScrollTrigger.refresh();
    }, { once: true });
  }

  function setDemoDot(n) {
    document.querySelectorAll('.demo-dot').forEach(function(d, i) {
      if (i === n) {
        d.classList.add('active');
      } else {
        d.classList.remove('active');
      }
    });
  }

  // ===== INITIALIZE =====
  function init() {
    initResponseAreas();
    initCheckpoints();
    initSolutionToggles();
    initExportButton();
    initSmoothScroll();
    initCopyCodeButtons();
    initTabs();
    initDemos();

    console.log('\u2713 ScrollTrigger tutorial initialized');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
