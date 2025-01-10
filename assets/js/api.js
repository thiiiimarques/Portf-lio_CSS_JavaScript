async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/thiiiimarques/Portf-lio_CSS_JavaScript/refs/heads/main/data/profile.json'
  const fetching = await fetch(url);
  return await fetching.json();
}