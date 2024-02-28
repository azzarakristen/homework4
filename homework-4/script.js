document.addEventListener("DOMContentLoaded", function() {
   
    const artworks = document.querySelectorAll('.artwork');

    artworks.forEach(function(artwork) {
        
        const artworkInfo = artwork.querySelector('.artwork-info');

        // track state of zindex
        let zIndexState = false; 

        // click event listener for each artwork div
        artwork.addEventListener("click", function() {
            // toggle
            if (zIndexState) {
                artworkInfo.style.zIndex = "-1"; // og index
            } else {
                artworkInfo.style.zIndex = "2"; // bring forward
            }
            // flip boolean for each click
            zIndexState = !zIndexState;
        });
    });
});
