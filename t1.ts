const subjects:readonly String[]=["Maths","Science"];

// subjects.push("History")
//to make your array read only likho readOnly

// ? mark matlab compulsion nahi lagta age is optional
const students:{id:number,name:string,marks:number,age?:number}={
    id:101,
    name:"Sanika",
    marks:89
}


// ========================================================
//interface is act for blusprint of objects

interface isEmployee
{
    employeeId:number,
    employeeName:String,
    employyeSalary?:number
    // details is a function string is return type
    details():string
}

const e1:isEmployee={
    employeeId:101,
    employeeName:"Nisha",
    details:function ()
    {
        return ""
    }
}

const e2:isEmployee={
    employeeId:102,
    employeeName:"Akshata",
    employyeSalary:40000,
    details:function ()
    {
        return ""
    }
}

interface isStudent
{
    id:number,
    name?:string,
    details(a:number):string
}

const s1:isStudent={
   id:101,
   name:"sanika",
   details: function(a:number)
   {
    return ""
   }
}