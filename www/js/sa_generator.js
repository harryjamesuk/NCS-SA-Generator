document.getElementById('generate-bar').addEventListener('click', function() {
  var idea = generateIdea();
  displayIdea(idea);
});

people = [
  "Refugees",
  "Veterans",
  "Disabled people",
  "Young Carers",
  "Homeless People",
  "Children",
  "Older people",
  "Offenders"
];
problems = [
  "Lack opportunities to mix with the wider community",
  "Lack opportunities to experience art and culture",
  "Do not know how to stay healthy",
  "Are misunderstood by the local community",
  "Struggle to keep warm in winter",
  "Lack opportunities to have their voices heard",
  "Have low levels of literacy",
  "Have low confidence and self esteem"
];
types = [
  "Campaign",
  "Art Project",
  "Awareness raising event",
  "Film",
  "Social Event",
  "Community make-over"
];

function generateIdea() {
  var person = people[Math.floor((Math.random() * people.length))];
  var problem = problems[Math.floor((Math.random() * problems.length))];
  var socialType = types[Math.floor((Math.random() * types.length))];
  var idea = [person, problem, socialType];
  return idea;
}

function displayIdea(ideaArr) {
  var personHolder = document.getElementById('person-idea');
  var problemHolder = document.getElementById('problem-idea');
  var socialTypeHolder = document.getElementById('type-of-idea');

  personHolder.innerText = ideaArr[0];
  problemHolder.innerText = ideaArr[1];
  socialTypeHolder.innerText = ideaArr[2];
}
