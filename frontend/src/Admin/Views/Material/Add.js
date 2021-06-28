import React,{useState} from 'react'
import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb';

const AddMaterial = () =>{
    var titles = [
        {name : 'Admin',link : '/admin'},
        {name : 'Material',link : '/material'},
        {name : 'Add Material',link : '/add'}
    ]
    
     const [uid,setUid] = useState();
     const [name,setName] = useState();
     const [tags,setTags] = useState();
     const [description,setDescription] = useState();
     const [images,setImages] = useState();
     const [type,setType] = useState();
     const [eventId,setEventId] = useState();
     const [document,setDocument] = useState();
     const [isPaid,setIsPaid] = useState();
     const [isApproved,setIsApproved] = useState();

    const onSubmit = (e) =>{
        e.preventDefault();
        setinit(false);
        onValidate();
        if(formValid){
            let material = {
                uid ,
                name,
                tags,
                description, 
                // images:[imageSchema],
                type,
                eventId,
                // document[documentSchema],
                isPaid,
                isApproved
            }
            axios.post('http://localhost:3000/material',material)
            .then(response=>{
                console.log(response);
                alert("Successfully Inserted")
            })
            .catch((error)=>{
                if (error.response) {
                    setFormError(error.response.data.message);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
        }else{
            setError("Invalid");
        }
    }
    return(
        <>
            <Breadcrumb titles={titles} />
            <hr />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Add Material</h5>
                    <hr />
                    <form method="POST" onSubmit={onSubmit}>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="name" className="form-label">Material Name</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="name"
                                    id="name" 
                                    onChange = {(e)=>setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="eventId" className="form-label">Event</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="eventId"
                                    id="eventId" 
                                    onChange = {(e)=>setEventId(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="type" className="form-label">Material Type</label>
                                <br />
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="type" 
                                        id="type1" 
                                        onChange = {(e)=>setType(e.target.value)}
                                        value="Workshop" 
                                    />
                                    <label className="form-check-label" htmlFor="prole1">Workshop</label>
                                </div>
                                    <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="type" 
                                        id="type2" 
                                        onChange = {(e)=>setType(e.target.value)}
                                        value="Research" 
                                    />
                                    <label className="form-check-label" htmlFor="prole1">Research</label>
                                </div>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="tags" className="form-label">Tags</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="tags"
                                    id="tags" 
                                    onChange = {(e)=>setTags(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="images" className="form-label">Images</label>
                                <input 
                                    type="file"
                                    className="form-control" 
                                    name="images"
                                    id="images" 
                                    onChange = {(e)=>setImages(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="document" className="form-label">Main Documnet</label>
                                <input 
                                    type="file"
                                    className="form-control" 
                                    name="document"
                                    id="document" 
                                    onChange = {(e)=>setDocument(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="isPaid" className="form-label">isPaid</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="isPaid"
                                    id="isPaid" 
                                    onChange = {(e)=>setIsPaid(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="userId" className="form-label">userId</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="userId"
                                    id="userId" 
                                    onChange = {(e)=>setUid(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );

}

export default AddMaterial;