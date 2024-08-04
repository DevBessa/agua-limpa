function navigate(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
      section.classList.add('hidden');
    });
  
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.classList.remove('hidden');
    }
  }
  
  // Navegar para a seção inicial
  navigate('home');
  