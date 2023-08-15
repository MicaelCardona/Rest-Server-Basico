const {response,request}= require('express');


const usuariosGet=(req=request, res=response) => {
  //En los json se manda objects
  const{q,name='No name',page='1',limit}=req.query;
  res.json({
    Empleado: 'Ganyu',
    msg: 'get Micael-Controlador',
    q,
    name,
    page,
    limit
  })
}

const usuariosPut=(req, res) => {
  //En los json se manda objects
  res.json({
    Empleado: 'Ganyu',
    msg: 'put Micael'
  })
}

const usuariosPost=(req,res)=>{
  const {Virus,PID}=req.body; //El request es lo que me envia el usuario y el response es lo que le respondo
  res.json({
    Empleado: 'Ganyu',
    msg: 'post Micael',
    Virus,PID
  })
}

const usuariosDelete=(req, res) => {
  //En los json se manda objects
  res.json({
    Empleado: 'Ganyu',
    msg: 'delete Micael'
  })
}



module.exports={
usuariosGet,
usuariosPut,
usuariosPost,
usuariosDelete
}