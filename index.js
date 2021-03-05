const faqQuestion = [
  { title: 'How many team members can I invite?', answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.' },
  { title: 'Can I cancel my subscription?', answer: 'Yes! Send us a message and we’ll process your request no questions asked.' },
  { title: 'How do I reset my password?', answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you' },
  { title: 'Do you provide additional support?', answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.' },
  { title: 'What is the maximum file upload size?', answer: 'No more than 2GB. All files in your account must fit your allotted storage space.' },
];

window.onload = function(){  
  const faqComponent = document.getElementById('faq');
  faqQuestion.forEach(element => {
    faqComponent.append(createAccordion(element));
    const hrComponent = document.createElement('hr');
    hrComponent.classList = 'divider';
    faqComponent.append(hrComponent);
  });
}  

const createAccordion = (element) => { 
  const div = document.createElement('div');
  div.classList = 'accordion';
  div.dataset.open = false;
  div.addEventListener('click', () => rowClick(div))
  const title = document.createElement('div');
  title.classList = 'accordion-title';
  title.innerText = element.title;
  const answer = document.createElement('div');
  answer.classList = 'accordion-content';
  answer.innerText = element.answer;
  div.append(title);
  div.append(answer);
  return div;
}

const rowClick = (element) => { 
  const status = element.dataset.open;
  closeAllRows();
  document.querySelectorAll('.accordion')
  element.dataset.open = status === 'true' ? 'false' : 'true';
  element.classList = `accordion${element.dataset.open === 'true' ? ' accordion--active' : ''}`
}

const closeAllRows = () => { 
  Array.from(document.querySelectorAll('.accordion')).forEach(e => {
    e.dataset.open = false;
    e.classList = 'accordion';
  })
}