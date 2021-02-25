// on loading the page, add animations
const note = document.querySelector(".selected show");
note.innerHTML = `
.selected-show {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background: BLACK;
    border: 1px solid black;
    position: relative;
    backdrop-filter: blur(5px);
  
    /* centers the circle to the middle */
    display: block;
    margin-left: 50px;
    margin-right: auto;
    z-index: 5;
  
    top: 30%;
  }
  
  .movie-img-bubble {
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 6%;
  
    border-radius: 50%;
    height: 87%;
    width: 87%;
  
    background-color: white;
  }
  `;

document.head.appendChild(note);
document.write(note);
