// this will be the component that shows the individual student that was selected 
// get that fetches student with the info and any notes/comments 
// put that allows user to add a new note 
// post that updates the notes 
// delete to get rid of the the note 

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function StudentView() {
//consts here 

 //get post put deletes here 

//return here 
return(
<div className="studentContainer">
    {/* insert container here */}
<CssBaseline />
<Container fixed>
<Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
    <p> test data</p>
</Box>
</Container>

</div>
    )
}

export default StudentView;
  