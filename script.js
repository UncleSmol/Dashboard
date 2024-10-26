const manualsContainer = document.getElementById('manuals-container');
const manualsList = document.getElementById('manuals-list');

manualsContainer.addEventListener('click', () => {
	if (manualsList.style.display === 'block') {
		manualsList.style.display = 'none';
	} else {
		manualsList.style.display = 'block';
	}
});

//Show and Hide notifications
const notificationContainer = document.getElementById('notification'); 

function toggleDisplay() {
  notificationContainer.style.opacity = 0;
  notificationContainer.style.display = 'flex';
  let opacity = 0;
  const intervalId = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(intervalId);
      return;
    }
    opacity += 0.01;
    notificationContainer.style.opacity = opacity;
  }, 10); 

  setTimeout(() => {
    const fadeOutIntervalId = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(fadeOutIntervalId);
        notificationContainer.style.display = 'none';
        return;
      }
      opacity -= 0.01;
      notificationContainer.style.opacity = opacity;
    }, 50); 
  }, 2000); 
}

toggleDisplay(); 

function animateAllElements(animationName, duration = 600, easing = 'ease-in-out') {
  const elements = document.querySelectorAll('*'); // Select all elements

  elements.forEach(element => {
    element.style.transition = `all ${duration}ms ${easing}`;
    element.style.animationName = animationName;
  });

  // Remove the animation name after the duration to allow for future animations
  setTimeout(() => {
    elements.forEach(element => {
      element.style.animationName = '';
    });
  }, duration);
}

// Example usage:
animateAllElements('fadeInUp'); 

// Define the 'fadeInUp' animation in your CSS:
/*
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
*/

