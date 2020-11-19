const Skill = require('../models/skill');

module.exports = {
    index,
    new: newSkill,
    create,
    show,
    delete: deleteSkill
};

function deleteSkill(req, res) {
    console.log(Skill);
    Skill.deleteOne({_id: req.params.id});
    res.redirect('/skills')
}

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
}

function index(req, res) {

    //showing index page
    res.render('skills/index',  {
        skills: Skill.getAll(),
        time: req.time
    });
}

function newSkill(req,res){
    //showing new skills page
    res.render('skills/new');
}

function show(req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: req.params.id
    });
}