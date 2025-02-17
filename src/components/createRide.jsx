import React,{useState}from 'react'
import './createRide.css';
import axios from 'axios'
import Headers from './Header/headers';
import Footer from './Footer/Footer'
import { toast, Toaster } from "react-hot-toast";
import {MDBBtn} from 'mdb-react-ui-kit';
function CreateRide() {
    const [Value,setValues] =useState({
        vehicleNumber:"",
        SourcePlace:"",
        DestinationPlace:"",
        typeOfTrip:"",
        dateOfTrip:"",
        timeOfTrip:"",
        availableSeat:"",
        PhoneNumber:""
      })

    const handleChange= async()=>{
        try {
            console.log(Value);
            
            let response =await axios.post(`http://localhost:4000/rider/post`,{
            vehicleNumber:Value.vehicleNumber,
            SourcePlace:Value.SourcePlace,
            DestinationPlace:Value.DestinationPlace,
            typeOfTrip:Value.typeOfTrip,
            dateOfTrip:Value.dateOfTrip,
            timeOfTrip:Value.timeOfTrip,
            availableSeat:Value.availableSeat,
            PhoneNumber:Value.availableSeat,
            IsRider:true
        })
                        toast.success(response.data);
        } catch (error) {
            console.log(error);  
        }
                    
    }
    return (
        <div className='create-ride'>
            <Headers/>
             <Toaster toastOptions={{ duration: 4000 }} />
            <div className='form-create'>
                <label for="vehicleNumber">Vehicle Number</label>
                <input className='v-no input-create' type="text"  onChange={(e)=>setValues((prev)=>({...prev ,vehicleNumber:e.target.value}))} name="vehicleNumber" id="vehicleNumber" placeholder='Vehicle Number'/>
                <br/>
                <br/>
                <label for="source">Source</label>
                <input className='so input-create' type="text"  onChange={(e)=>setValues((prev)=>({...prev ,SourcePlace:e.target.value}))} name="source" id="source" placeholder='Source' />
                <br/>
                <br/>
                <label for="destination">Destination</label>
                <input className='dest input-create' type="text"  onChange={(e)=>setValues((prev)=>({...prev ,DestinationPlace:e.target.value}))}name="destination" id="destination" placeholder='Destination' />
                <br/>
                <br/>
                <label for="typeOfTrip">Type Of Trip</label>
                <input className='trip input-create' type="check"  onChange={(e)=>setValues((prev)=>({...prev ,typeOfTrip:e.target.value}))} name="typeOfTrip" id="typeOfTrip" placeholder='1 way / 2 way'/>
                <br/>
                <br/>
                <label for="dateOfTrip">Date Of Trip</label>
                <input className='date input-create' type="date" onChange={(e)=>setValues((prev)=>({...prev ,dateOfTrip:e.target.value}))} name="dateOfTrip" id="dateOfTrip" placeholder='Date'/>
                <br/>
                <br/>
                <label for="timeOfTrip">Time Of Trip</label>
                <input className='time input-create' type="time"  onChange={(e)=>setValues((prev)=>({...prev ,timeOfTrip:e.target.value}))} name="timeOfTrip" id="timeOfTrip" placeholder='Time'/>
                <br/>
                <br/>
                <label for="availableSeat">Available Seat</label>
                <input className='av-seat input-create' type="number" onChange={(e)=>setValues((prev)=>({...prev ,availableSeat:e.target.value}))} name="availableSeat" id="availableSeat" placeholder='Available Seat'/>
                <br/>
                <br/>
                <label for="phoneNumber">Phone Number</label>
                <input className='phone input-create' type="number"  onChange={(e)=>setValues((prev)=>({...prev ,PhoneNumber:e.target.value}))} name="phoneNumber" id="phoneNumber" placeholder='Phone Number'/>
                <img src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'} alt='img-create' className='img-create'/>
            </div>
                <MDBBtn className="mb-45 py-45 px-5 btn-info" onClick={handleChange} size='lg'>Register as Rider</MDBBtn>
            <Footer className="foot"/>
        </div>
    )
}

export default CreateRide