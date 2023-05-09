
const body = document.querySelector('body');

const heading = document.createElement('h1');

heading.textContent = 'Hello Everyone';

body.style.maxHeight='100px';

body.style.display = 'flex';

body.style.justifyContent = 'center';

heading.style.textAlign = 'center';

body.append(heading);

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'pink'];

let colorIndex = 0;

setInterval(() => {
  
  const color = colors[colorIndex];
  
  body.style.backgroundColor = color;
  
  colorIndex++;
 
  if (colorIndex === colors.length) {
    colorIndex = 0;
  }
}, 1000);
