const skills = [
    {id: 125223, Skill: 'Vanilla Javascript', done: true},
    {id: 127904, Skill: 'Learn Express', done: false},
    {id: 139608, Skill: 'learn mongoose next', done: false}
  ];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    const idx = skills.findIndex(Skill => Skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function getAll() {
    return skills;
}

function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(Skill => Skill.id === parseInt(id));
}

function create(Skill) {
    // Add the id
    Skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    Skill.done = false;
    skills.push(Skill);
  }