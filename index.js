function setActiveLink(clickedElement) {
        // Remove the 'active' class from all links
        var links = document.querySelectorAll('li a');
        console.log(links)
        links.forEach(function(link) {
            link.classList.remove('active');
        });

        // Add the 'active' class to the clicked link
        clickedElement.classList.add('active');
}