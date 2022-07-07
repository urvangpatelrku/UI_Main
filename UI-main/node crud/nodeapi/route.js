var express = require('express');
var stud = require('./model/stud')
var route = express.Router();


route.get('/stu',async(req,res)=>{
  var student = await stud.find();
  res.send(student);

})

// Delete
route.delete("/stu/:id",async(req,res)=>{
    await student.deleteOne({_id:req.params.id},(err,msg)=>{
        if(err){
            res.status(500).json({"err":err})
        }
        else{
            res.status(200).json({"Message":msg})
        }
    });
});

//insert data
route.post('/stud',async(req,res)=>{
    const isave = new stud({
        name:req.body.name,
        age:req.body.age,
        active:req.body.active
    })
    console.log(isave);
    await isave.save((err,msg)=>
    {
        if(err){
            res.send(err);
        }
        else
        {
            res.send(msg);
        }
    });
})

//update
route.patch("/stu/:id",async(req,res)=>{
    const iupdate = await stud.findOne({_id:req.params.id});
    iupdate.name = req.body.name;
    iupdate.age = req.body.age;
    iupdate.active = req.body.active;

    await iupdate.save((err,msg)=>{
        if(err)
        {
            res.status(500).json({"err":err})
        }
        else
        {
            res.status(200).json({"msg":msg})
        }
    })
})

module.exports = route;