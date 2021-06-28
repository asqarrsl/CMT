const Material = require('../models/materials');
const {cloudinary} = require('../cloudinary')

module.exports.index = async (req,res)=>{
    const materials = await Material.find({isActive:'1'});
    res
      .status(202)
      .send({
          message:"Successfully Updated the materials!",
          materials
        });
}


module.exports.store = async (req,res)=>{
    const materials = new Material(req.body.materials);
    materials.uid = req.user._id;
    console.log(req);
    materials.document = req.files.map(f=>({url:f.path,filename:f.filename}));
    await materials.save();
    
    res
      .status(202)
      .send({
          message:"Successfully Updated the materials!",
          materials
        });
}
module.exports.show = async (req,res)=>{
    const materials = await Material.findById(req.params.id).populate('uid');
    if(!materials){
        res
      .status(202)
      .send({
          message:"Successfully Updated the materials!",
          materials
        });
    }
    console.log(materials);
    res
      .status(202)
      .send({
          message:"Successfully Updated the materials!",
          materials
        });
}
module.exports.edit = async (req,res)=>{  
    const materials = await Material.findById(req.params.id);
    if(!materials){
        res
      .status(202)
      .send({
          message:"Successfully Updated the materials!",
          materials
        });
    }
    res
      .status(202)
      .send({
          message:"Successfully Updated the materials!",
          materials
        });
}
module.exports.update = async (req,res)=>{
    const {id} = req.params
    const materials = await Material.findByIdAndUpdate(id, {...req.body.materials});
    const editedDoc = req.files.map(f=>({url:f.path,filename:f.filename}))
    materials.reviewerId = req.user._id;
    materials.isApproved = 0 ;
    if(req.user.role == 'editor'){
        materials.editedVersion.push(...editedDoc);
    }else{
        materials.document.push(...editedDoc);
    }
    await materials.save();
    res
      .status(202)
      .send({
          message:"Successfully Updated the materials!",
          materials
        });
}

module.exports.review = async (req,res)=>{
    const {id} = req.params
    const materials = await Material.findByIdAndUpdate(id, {...req.body.materials});
    const editedDoc = req.files.map(f=>({url:f.path,filename:f.filename}))
    materials.editorId = req.user._id;
    materials.reviewdVersion.push(...editedDoc);
    await materials.save();
    res
      .status(202)
      .send({
          message:"Successfully Updated the materials!",
          materials
        });
}

module.exports.approve = async (req,res)=>{
    const {id} = req.params
    const materials = await Material.findById(id);
    materials.isApproved = req.body.isApproved;
    // materials.reviewdVersion.push(...editedDoc);
    await materials.save();
    res
      .status(202)
      .send({
          message:"Successfully Updated the materials!",
          materials
        });
}

module.exports.deleteRequest = async (req,res)=>{
    const {id} = req.params    
    const materials = await Material.findById(id);
    materials.isDeleteReq = 1;
    res
      .status(202)
      .send({
          message:"Successfully Updated the materials!",
          materials
        });
}

module.exports.delete = async (req,res)=>{
    const {id} = req.params    
    const materials = await Material.findById(id);
    materials.isActive = '0';
    res
      .status(202)
      .send({
          message:"Successfully Updated the materials!",
          materials
        });
}