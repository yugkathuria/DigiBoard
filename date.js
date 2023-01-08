module.exports.getDate=function(){
    var today=new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric",
        
    };
    return today.toLocaleDateString("EN-IN",options);
};
