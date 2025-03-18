// import React, { useState, useEffect } from 'react';
// import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Grid, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
// import axios from 'axios'; 

// function Student() {
//   const [formData, setFormData] = useState({
//     name: '',
//     gender: '',
//     address: '',
//     contact_phone: '',
//     contact_email: '',
//   });
//   const [students, setStudents] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false); 
//   const [editingStudentId,  setEditingStudentId] = useState(null); 
  
  
  // useEffect(() => {
  //   const fetchStudents = async () => {
  //     setLoading(true); 
  //     try {
  //       const response = await axios.get('http://localhost:2002/std/students');
  //       setStudents(response.data);
  //     } catch (err) {
  //       console.error(err);
  //       setError('Failed to fetch students. Please try again later.');
  //     } finally {
  //       setLoading(false); 
  //     }
  //   };
  //   fetchStudents();
  // }, []);

//   // Handle input changes in the form
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission (create new student or update existing student)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

    // if (!formData.name ||  !formData.gender || !formData.address || !formData.contact_phone || !formData.contact_email) {
    //   setError('All fields are required!');
    //   return;
    // }

    // setLoading(true); 
//     try {
//       if (editingStudentId) {
        
//         await axios.put(`http://localhost:2002/std/update/${editingStudentId}`, formData);
//         alert('Student updated successfully!');
//       } else {
        
//         await axios.post('http://localhost:2002/std/create', formData); 
//         alert('Student created successfully!');
//       }

//       setFormData({
//         name: '',
//         gender: '',
//         address: '',
//         contact_phone: '',
//         contact_email: '',
//       });
//       setError(null); 
//       setEditingStudentId(null); 
      
//       const response = await axios.get('http://localhost:2002/std/students');
//       setStudents(response.data);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to submit the form. Please try again.');
//     } finally {
//       setLoading(false); 
//     }
//   };

//   // Handle deletion of a student
//   const handleDelete = async (studentId) => {
//     setLoading(true);
//     try {
//       await axios.delete(`http://localhost:2002/std/remove/${studentId}`);
//       alert('Student deleted successfully!');
//       const response = await axios.get('http://localhost:2002/std/students');
//       setStudents(response.data);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to delete student');
//     } finally {
//       setLoading(false); 
//     }
//   };

//   // Handle updating student (populate form with current data)
//   const handleEdit = (student) => {
//     setFormData({
//       name: student.name,
//       gender: student.gender,
//       address: student.address,
//       contact_phone: student.contact_phone,
//       contact_email: student.contact_email,
//     });
//     setEditingStudentId(student.student_id); 
//   };

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         {editingStudentId ? 'Edit Student' : 'Student Information Form'}
//       </Typography>

//       {error && <Typography color="error">{error}</Typography>} 

//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           {/* Name Field */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Full Name"
//               variant="outlined"
//               fullWidth
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </Grid>

         

//           {/* Gender Field */}
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel>Gender</InputLabel>
//               <Select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 label="Gender"
//               >
//                 <MenuItem value="Male">Male</MenuItem>
//                 <MenuItem value="Female">Female</MenuItem>
//                 <MenuItem value="Other">Other</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>

//           {/* Address Field */}
//           <Grid item xs={12}>
//             <TextField
//               label="Address"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={3}
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//             />
//           </Grid>

//           {/* Contact Phone Field */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Contact Number"
//               variant="outlined"
//               fullWidth
//               name="contact_phone"
//               value={formData.contact_phone}
//               onChange={handleChange}
//             />
//           </Grid>

//           {/* Contact Email Field */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Contact Email"
//               variant="outlined"
//               type="email"
//               fullWidth
//               name="contact_email"
//               value={formData.contact_email}
//               onChange={handleChange}
//             />
//           </Grid>

//           {/* Submit Button */}
//           <Grid item xs={12}>
//             <Button type="submit" variant="contained" color="primary" >
//               {editingStudentId ? 'Update Student' : 'Submit'}
//             </Button>
//           </Grid>
//         </Grid>
//       </form>

//       {/* Loading Indicator */}
//       {loading && <CircularProgress />}

//       {/* Table of Students */}
//       <Box sx={{ marginTop: 4 }}>
//         <Typography variant="h5" gutterBottom>
//           Student List
//         </Typography>

//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Gender</TableCell>
//                 <TableCell>Address</TableCell>
//                 <TableCell>Contact Phone</TableCell>
//                 <TableCell>Contact Email</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
            // <TableBody>
            //   {students.map((student) => (
            //     <TableRow key={student.student_id}>
            //       <TableCell>{student.name}</TableCell>
            //       <TableCell>{student.gender}</TableCell>
            //       <TableCell>{student.address}</TableCell>
            //       <TableCell>{student.contact_phone}</TableCell>
            //       <TableCell>{student.contact_email}</TableCell>
            //       <TableCell>
            //         <Button
            //           variant="outlined"
            //           color="primary"
            //           onClick={() => handleEdit(student)} 
            //         >
            //           Edit
            //         </Button>
            //         <Button
            //           variant="outlined"
            //           color="secondary"
            //           onClick={() => handleDelete(student.student_id)} 
            //           style={{ marginLeft: '10px' }}
            //         >
            //           Delete
            //         </Button>
            //       </TableCell>
            //     </TableRow>
            //   ))}
            // </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </Box>
//   );
// }

// export default Student;

import React, { useEffect, useState } from 'react'
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Grid, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Grid2 } from '@mui/material';
import axios from 'axios';

function Student() {
  const [formData, setFormData] = useState({
    name:'',
    gender:'',
    address:'',
    contact_phone:'',
    contact_email:''
  });
  const [students, setStudents] = useState([]);
  const [error, setError] =useState(null);
  const [loading, setLoading] = useState(false)
  const [editingStudentId, setEditingStudentId] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(()=>{
    const fetchStudent = async ()=>{
      setLoading(true)
      try{
      const response = await axios.get("http://localhost:2002/std/students")
      console.log(response.data);
      
      setStudents(response.data)
    }catch(err){
      console.error(err);
      setError('Failed to the fetch student. Please try again... ')
    }finally{
      setLoading(false)
    }
  }
    fetchStudent()
  },[])
  


  const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]:value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault;

   
    if (!formData.name ||  !formData.gender || !formData.address || !formData.contact_phone || !formData.contact_email) {
      setError('All fields are required!');
      return;
    }

    setLoading(true); 

    try{
      if(editingStudentId){
        await axios.put(`http://localhost:2002/std/update/${editingStudentId}`,formData)
        alert('Student Update SuccessFully!!!')
      }else{
        await axios.post('http://localhost:2002/std/create',formData)
        alert('Student Created SuccessFully!!!')
      }

      setFormData({
        name:'',
        gender:'',
        address:'',
        contact_phone:'',
        contact_email:''
      })
      setError(null)
      setEditingStudentId(null)

      const response = await axios.get('http://localhost:2002/std/students')
      setStudents(response.data)
      
    }catch(err){
      console.error(err);
      setError('Failed to submit the from . Please try again...!')
      
    }finally{
      setLoading(false)
    }
  }

  const handleEdit = async (student) => {
    setFormData({
      name:student.name,
      gender:student.gender,
      address:student.address,
      contact_phone:student.contact_phone,
      contact_email:student.contact_email,
    });
    setEditingStudentId(student.student_id)
  }

  const handleDelete = async(studentId) => {
    setLoading(true)

    try{
      await axios.delete(`http://localhost:2002/std/remove/${studentId}`)
      alert('Student Delete SuccessFully....')

      const response = await axios.get('http://localhost:2002/std/students')
      setStudents(response.data)
    }catch(err){
      console.error(err);
      setError('Failed the Student Delete. Please Try Again')
      
    }finally{
      setLoading(false)
    }

  }

  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearch(query)
     if(query){
      const filtered = students.filter((student) => 
      student.name.toLowerCase().includes(query.toLowerCase()) ||
      student.gender.toLowerCase().includes(query.toLowerCase()) ||
      student.address.toLowerCase().includes(query.toLowerCase()) ||
      student.contact_phone.includes(query) ||
      student.contact_email.toLowerCase().includes(query.toLowerCase())
      )
      setStudents(filtered)
     }else {
      setStudents(students);
    }
  }

  return (
    <Box sx={{padding:3}}>
      <Typography variant='h4' gutterBottom >
        {editingStudentId ? 'Edit Students' : 'Students Information From'} 
      </Typography>
      {error && <Typography variant='h4' color='error'>{error}</Typography>}

    <form 
    onSubmit={handleSubmit}
     >
      <Grid container spacing={2}>
        <Grid item sm={12}>
            <TextField
            sx={{width:'300px'}}
            label='Full Name'
            variant='outlined'
            name='name'
            value={formData.name}
            onChange={handleChange}
            />

          
        </Grid>
        <Grid item sx={12}>
          <FormControl
            sx={{width:'300px'}}
          // fullWidth
          >
            <InputLabel>Gender</InputLabel>
            <Select
            variant='outlined'
            name='gender'
            value={formData.gender}
            onChange={handleChange}
            label='Gender'
            >
              <MenuItem value='Male' >Male</MenuItem>
              <MenuItem value='Female' >Female</MenuItem>
              <MenuItem value='Other' >Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12}>
          <TextField
          sx={{width:'300px'}}
          variant='outlined'
          label='Address'
          name='address'
          value={formData.address}
          multiline
          rows={2}
          onChange={handleChange}
          ></TextField>
        </Grid>
        <Grid item sm={12}>
          <TextField
            sx={{width:'300px'}}
          variant='outlined'
          label='Contact Number'
          name='contact_phone'
          value={formData.contact_phone}
          onChange={handleChange}
          ></TextField>
        </Grid>
        <Grid item sm={12}>
          <TextField
          sx={{width:'300px'}}
          variant='outlined'
          label='Contact Mail'
          name='contact_email'
          value={formData.contact_email}
          onChange={handleChange}
          ></TextField>
        </Grid>
        <Grid item sm={12}>
          <Button
          type='submit'
          variant='contained'
          color='primary'
          >
            {editingStudentId ? 'Update Students' : 'Submit'}
          </Button>
        </Grid>
       
      </Grid>
    </form>
      {/* Search Input */}
      <Box sx={{ marginTop: '15px' }}>
        <TextField
          label="Search Students"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          sx={{ width: '300px' }}
        />
      </Box>

   

    <Box sx={{marginTop:'15px'}}>
     <Typography variant='h4' gutterBottom >
      Student List
     </Typography>

     <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Contact Number</TableCell>
            <TableCell>Contact Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {students.map((student)=>(
            <TableRow key={student.student_id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.address}</TableCell>
              <TableCell>{student.contact_phone}</TableCell>
              <TableCell>{student.contact_email}</TableCell>
              <TableCell>
                <Button
                variant='outlined'
                color='success'
                onClick={()=>handleEdit(student)}
                >Edit</Button>

                <Button
                variant='outlined'
                color='error'
                onClick={()=>handleDelete(student.student_id)}
                style={{ marginLeft: '10px' }}
                >Delete</Button>
              </TableCell>
            </TableRow>
         ))}
        </TableBody>
      
      </Table>
     </TableContainer>
    </Box> 
    
    </Box>
  )
}

export default Student