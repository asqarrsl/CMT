import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb';

const EditMaterial = () =>{
    var titles = [
        {name : 'Admin',link : '/admin'},
        {name : 'Material',link : '/material'},
        {name : 'Edit',link : '/edit'}
    ]
    
    const [init, setinit] = useState(true)

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

    const [events,setEvents] = useState([]);
    const [users,setUsers] = useState([]);
    const [eventoptions,setEventoptions] = useState([]);
    const [useroptions,setUseroptions] = useState([]);
    const [formError,setFormError] = useState(false);


    useEffect(() => {
       axios.get('http://localhost:3000/event')
       .then(response=>{
           console.log(response.data);
           let data =[];
           response.data.events.map((item,index)=>{
               let event = {
                   value: item._id,
                   label: item.eventName
               }
               data.push(event);
           })
           setEventoptions(data);
       })

       axios.get('http://localhost:3000/users')
       .then(response=>{
           let data1 =[];
           response.data.Users.map((item,index)=>{
               let user = {
                   value: item._id,
                   label: item.name
               }
               data1.push(user);
           })
           setUseroptions(data1);
       })
   },[])

   const checknull = (value)=>{
       if(value.trim()==null || value.trim()==''){
           return false;
       }else{
           return true;
       }
   }

   const checkstring = (value)=>{
       if(typeof value != "string"){
           return false;
       }
   }

   const onValidate = () => {
       if(
           checknull(uid) && checknull(name) && checknull(tags) && 
           checknull(description) && checknull(type) &&
           checknull(isPaid) && checknull(isApproved)
       ){
           setFormValid(true);
           return true;
       }else{
           setFormValid(false);
           return false;
       }
   }

   const onSubmit = (e) =>{
       e.preventDefault();
       setinit(false);
       if(onValidate){
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
                   console.log(error.response.data);
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
                    <h5 className="card-title">Edit Material</h5>
                    <hr />
                    <form>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="name" className="form-label">Material Name</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="name"
                                    id="name" 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="eventId" className="form-label">Event</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="eventId"
                                    id="eventId" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="type" className="form-label">Material Type</label>
                                <br />
                                <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input"
                                        type="radio" 
                                        name="type" 
                                        id="type1" 
                                        value="Workshop" 
                                    />
                                    <label class="form-check-label" for="prole1">Workshop</label>
                                </div>
                                    <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input"
                                        type="radio" 
                                        name="type" 
                                        id="type2" 
                                        value="Research" 
                                    />
                                    <label class="form-check-label" for="prole1">Research</label>
                                </div>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="tags" className="form-label">Tags</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="tags"
                                    id="tags" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="images" className="form-label">Images</label>
                                <input 
                                    type="file"
                                    className="form-control" 
                                    name="images"
                                    id="images" 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="document" className="form-label">Main Documnet</label>
                                <input 
                                    type="file"
                                    className="form-control" 
                                    name="document"
                                    id="document" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="isPaid" className="form-label">isPaid</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="isPaid"
                                    id="isPaid" 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="userId" className="form-label">userId</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="userId"
                                    id="userId" 
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

export default EditMaterial;