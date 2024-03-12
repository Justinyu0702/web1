document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', function() {
        const section = this.getAttribute('onclick').replace("window.location='", "").replace("';", "");
        if (section.startsWith('#')) {
            // Smooth scroll to the section
            document.querySelector(section).scrollIntoView({ 
                behavior: 'smooth' 
            });
        } else {
            // Redirect to another webpage
            window.location.href = section;
        }
    });
});
