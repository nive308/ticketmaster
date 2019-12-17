const Department = require('../models/department')

module.exports.list=('/departments',(req,res)=>{
    Department.find()
    .then((department)=>{
      res.json(department)
    })
    .catch((err)=>{
        res.json(err)
    })
})

module.exports.create=('/departments',(req,res)=>{
  const {body}=req
  const department=new Department(body)
  department.save()
  .then((department)=>{
    res.json(department)
  })
  .catch((err)=>{
      res.json(err)
  })
})

module.exports.show=('/departments/:id',(req,res)=>{
  const id=req.params.id
 Department.findById(id)
  .then((department=>{
   if(department){
       res.json(department)
   }else{
       res.json({})
   }
  }))
  .catch((err)=>{
      res.json(err)
  })
})

module.exports.update = ('/depatrments/:id',(req, res) => {
  const id = req.params.id 
  const body = req.body 
  Department.findByIdAndUpdate(id, body, { new: true, runValidators: true })
      .then((department) => {
          if(department) {
              res.json(department)
          } else {
              res.json({})
          }
      })
      .catch((err) => {
          res.json(err)
      })
})

module.exports.destroy =('/departments/:id',(req,res)=>{
  const id=req.params.id
  Department.findByIdAndDelete(id)
  .then((department)=>{
    if(department){
      res.json(department)
    }else{
      res.json({})
    }
  })
  .catch((err)=>{
    res.json(err)
  })
})
