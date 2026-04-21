
    // Step 1: FIND the toggle button
    const toggle = document.querySelector('.theme-toggle');
    
    // Step 2: LISTEN for click events
    toggle.addEventListener('click', function() {
      
      // Step 3: CHANGE the state (toggle 'dark' class on body)
     document.body.classList.toggle('dark');
      
    });
    
    // ----------------------------------------
    // That's it. Three lines of real work.
    // JavaScript toggles the class.
    // CSS responds to the class.
    // ----------------------------------------
