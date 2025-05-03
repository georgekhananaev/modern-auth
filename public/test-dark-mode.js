// This is a test script to check if dark mode is working
document.addEventListener('DOMContentLoaded', function() {
  // Force dark mode on
  document.documentElement.classList.add('dark');
  console.log('Dark mode forced ON for testing');
  
  // Log current classes on html element
  console.log('Current classes on HTML element:', document.documentElement.className);
  
  // Create a button to toggle dark mode
  const button = document.createElement('button');
  button.textContent = 'Toggle Dark Mode';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.zIndex = '9999';
  button.style.padding = '10px';
  button.style.background = '#4F46E5';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  
  button.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    console.log('Dark mode toggled, current state:', document.documentElement.classList.contains('dark'));
  });
  
  document.body.appendChild(button);
});