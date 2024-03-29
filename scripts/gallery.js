function enlargeImage(img) {
    // Get the modal
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("enlargedImage");
    var captionText = document.getElementById("caption");
  
    // Display the image in the modal
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
}
