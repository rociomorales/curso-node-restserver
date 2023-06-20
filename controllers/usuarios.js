const {reponse ,request}=require('express');

const usuariosGet = (req=request,res=reponse)=>{
    
    const {q,nombre='no name',apikey,page=1,limit}=req.query;
    
    res.json({
        mgs:'get api-usuarioGet',
        q,
        nombre,
        apikey,
        page,
        limit

    });
}
const usuariosPut= (req,res=reponse)=>{
    const {id}=req.params;
    res.json({
        mgs:'put api-usuariosPut',
        id
    });
}
const usuariosPost = (req,res=reponse)=>{

    const body =req.body;
    res.json({
        mgs:'post api-usuariosPost'
    });
}
const usuariosPatch = (req,res=reponse)=>{
    res.json({
        mgs:'post api-usuariosPatch',
        nombre,
        edad
    });
}
const usuariosDelete = (req,res=reponse)=>{
    res.json({
        mgs:' delete api-usuariosDelete'
    });          


}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,

}