import './popover.css';

const root = document.getElementById('root');

root.innerHTML = `
  <div class="popover-container">
    <div class="popover" role="tooltip" id="popover">
      <div class="popover-header">Popover title</div>
      <div class="popover-body">
        And here's some amazing content. It's very engaging. Right?
      </div>
    </div>
    <button id="toggle-button" class="btn">Click to toggle popover</button>
  </div>
`;

const popover = document.getElementById('popover');
const button = document.getElementById('toggle-button');

button.addEventListener('click', () => {
  if (popover.style.display === 'block') {
    popover.style.display = 'none';
  } else {
    popover.style.display = 'block';
  }
});

