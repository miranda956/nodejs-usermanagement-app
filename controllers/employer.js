const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const Employee=mongoose.model('Employee');

/*router.get('/',(req,res)=>{
    res.render('employee/list',{
        viewTitle:'employee/addoredit'
    })
})*/
router.get('/',(req,res)=>{
    res.send('hello');
})

router.post('/employee',(req,res)=>{
    var employee=new Employee();
    employee.fullname=req.body.fullname;
    employee.email=req.body.email;
    employee.contact=req.body.contact;
    employee.city=req.body.city;
    employee.save((err,doc)=>{
        if(err)
        return handleError(err);
        res.render('/employee/list',{
            list:doc 
        })
    })
});

router.get('/employee/list',(req,res)=>{
    var query= employee.find({});
    query.select('fullname email contact city ');
    query.exec((err,doc)=>{
        if(err)
        return handleError(err);
        res.render('employee/list',{
            list:doc 
        })
    })
})
//


// update an employee 
router.put('/employee/edit',(req,res)=>{
    const employeeId=req.body.employee_id;
    const fullname=req.body.fullname;
    const email=req.body.email;
    const contact =req.body.contact;
    const city=req.body.city
    employee.findById(employeeId).then((Employee)=>{
        return Object.assign(Employee,{fullname:new fullname},{email:new email},{contact:new contact},{city:new city})

    }).then((Employee)=>{
        return Employee.save();
    }).then((updatedEmployee)=>{
        res.json({
            msg:'updated employee',
            updatedEmployee
        });
    }).catch((err)=>{
        if(err){
            res.send(err)
        }
    })
    res.redirect('/employee/list')
})
router.get('/employee/:id/',(req,res)=>{
    var query=employee.findById({id:req.params.id});
    query.select('fullname email contact city');
    query.exec((err,doc)=>{
        if(err)
        return handleEror(err)
        res.render('/employee/edit',{
            
        })
    })
})

// delete an emlployee 
router.delete('/delete/:id/',(req,res)=>{
    var query=employee.findByIdAndRemove({id:req.params.id});
    query.exec((err)=>{
        if(err) return handleError(err);
        res.redirect('/employee/list')
    })
})
module.exports=router;