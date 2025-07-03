//your JS code here. If required.
const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Helper function to strip articles
function stripArticle(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort ignoring 'A', 'An', 'The'
const sortedBands = bands.sort((a, b) => {
  const bandA = stripArticle(a).toLowerCase();
  const bandB = stripArticle(b).toLowerCase();
  return bandA.localeCompare(bandB);
});

// Insert into DOM
const ul = document.getElementById('band');
ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
