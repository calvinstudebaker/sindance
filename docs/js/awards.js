const numAwards = 61;

document.addEventListener('DOMContentLoaded', function() {
    const scrollGallery = document.querySelector('.scroll-gallery');
    
    // Add first 20 award images
    for (let i = 1; i <= 20; i++) {
        const img = document.createElement('img');
        img.src = `https://sindance-public.s3.us-west-1.amazonaws.com/Sindance+2025+Awards/${i}.gif`;
        img.classList.add('award-tile');
        img.alt = `Award ${i}`;
        scrollGallery.appendChild(img);
    }

    const mainAward = document.getElementById('mainAward');

    // Add click handlers to thumbnails
    scrollGallery.addEventListener('click', function(e) {
        if (e.target.classList.contains('award-tile')) {
            mainAward.src = e.target.src;
            e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    });

    // Add keyboard navigation for awards
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            // Prevent default behavior for arrow keys
            e.preventDefault();
            const currentSrc = mainAward.src;
            const currentNum = parseInt(currentSrc.match(/(\d+)\.gif$/)[1]);
            
            let nextNum;
            if (e.key === 'ArrowLeft') {
                nextNum = currentNum === 1 ? numAwards : currentNum - 1;
            } else {
                nextNum = currentNum === numAwards ? 1 : currentNum + 1;
            }

            mainAward.src = `https://sindance-public.s3.us-west-1.amazonaws.com/Sindance+2025+Awards/${nextNum}.gif`;
            
            // Find and scroll the thumbnail into view if it exists
            const thumbnails = scrollGallery.querySelectorAll('.award-tile');
            const nextThumb = Array.from(thumbnails).find(img => img.src.includes(`${nextNum}.gif`));
            if (nextThumb) {
                nextThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    });

    // Track the last loaded award number
    let lastLoadedAward = 20;

    // Add scroll event listener to load more awards
    scrollGallery.addEventListener('scroll', function() {
        // Check if scrolled to right edge
        if (scrollGallery.scrollLeft + scrollGallery.clientWidth >= scrollGallery.scrollWidth - 20) {
            // Load next 10 awards if we haven't hit the max
            if (lastLoadedAward < numAwards) {
                const loadUntil = Math.min(lastLoadedAward + 10, numAwards);
                
                for (let i = lastLoadedAward + 1; i <= loadUntil; i++) {
                    const img = document.createElement('img');
                    img.src = `https://sindance-public.s3.us-west-1.amazonaws.com/Sindance+2025+Awards/${i}.gif`;
                    img.classList.add('award-tile');
                    img.alt = `Award ${i}`;
                    scrollGallery.appendChild(img);
                }
                
                lastLoadedAward = loadUntil;
            }
        }
    });
});
