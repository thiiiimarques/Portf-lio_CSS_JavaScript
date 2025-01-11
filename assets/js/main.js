

function updateProfileInfo(profileData){
  const photo = document.getElementById('profile.photo');
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById('profile.name')
  name.innerText = profileData.name;

  const job = document.getElementById('profile.job')
  job.innerText = profileData.job
  job.href = profileData.LinkedIn

  const location = document.getElementById('profile.location')
  location.innerText = profileData.location

  const phone = document.getElementById('profile.whatsApp')
  phone.innerText = profileData.phone
  phone.href = `tel:${profileData.phone}`


  const email = document.getElementById('profile.email')
  email.innerText = profileData.email
  email.href = `mailto:${profileData.email}`

}

function updateSoftSkills(profileData){
  const softSkills = document.getElementById('profile.skills.softSkills')
  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
  const hardSkills = document.getElementById('profile.skills.hardSkills')
  hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="Ícone do ${skill.name}" title="${skill.name}"></li>`).join('')
  
}

function updateLanguages(profileData){
  const languages = document.getElementById('profile.languages')
  languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updateProfilePortfolio(profileData){
  const portfolio = document.getElementById('profile.portfolio')
  portfolio.innerHTML = profileData.Portfolio.map(project => {
    return `
      <li>
          <a href="${project.linkGitHub}" target="_blank"><h3 class="github">${project.name}</h3></a>
      </li>
    `
  }).join('')
}

function updateEducationExperience(profileData){
  const EducationExperience = document.getElementById('educationExperience')  
  EducationExperience.innerHTML = profileData.Academic.map(education => {
    return `
      <li>
            <h3 class="title">${education.course}</h3>
            <p class="period">${education.period}</p>
            <p>${education.institution}</p>
      </li>
    `
  }).join('')
}

function updateProfessionalExperience(profileData){
  const professionalExperience = document.getElementById('professionalExperience')
  professionalExperience.innerHTML = profileData.Experiencias.map(experience => {
    return `
      <li>
            <h3 class="title">${experience.name}</h3>
            <p class="period">${experience.period}</p>
            <p>${experience.description}</p>
      </li>
    `
  }).join('')
}



(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updateProfilePortfolio(profileData);
  updateProfessionalExperience(profileData);
  updateEducationExperience(profileData);
})()