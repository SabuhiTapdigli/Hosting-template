import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box';

const Star = () => {
    const [value, setValue] = React.useState([5]);

  return (
        <div>
        <Box component="fieldset" mb={0} borderColor="transparent">
            <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue([newValue]);
            }}
            />
        </Box>
        </div>
  )

        }

export default Star
