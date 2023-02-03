import { Button, Grid, MenuItem, TextField } from '@mui/material';
import React, { useReducer } from 'react';

const NewStudentForm = () => {
    const initialState = {
        firstname: '',
        middlename: '',
        lastname: '',
        class: 0,
        division: '',
        roll: 0,
        address1: '',
        address2: '',
        landmark: '',
        city: '',
        pincode: '',


    };
    const reducer = (state, action) => {
        console.log(action)
        switch (action.type) {
            case 'INPUT':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                }
            case 'NUMBER':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                }
            default:
                return state
        }
        // if (action.type === "INPUT") {
        //     return {
        //         ...state,
        //         [action.payload.name]: action.payload.value,
        //     }
        // }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSubmit = e => {
        e.preventDefault();
        console.log(state)
        fetch('http://localhost:5000/student', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(state)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const studentClass = [
        {
            value: 1,
            label: 1,
        },
        {
            value: 2,
            label: 2,
        },
        {
            value: 3,
            label: 3,
        },
        {
            value: 4,
            label: 4,
        },
        {
            value: 5,
            label: 5,
        },
        {
            value: 6,
            label: 6,
        },
        {
            value: 7,
            label: 7,
        },
        {
            value: 8,
            label: 8,
        },
        {
            value: 9,
            label: 9,
        },
        {
            value: 10,
            label: 10,
        },
        {
            value: 11,
            label: 11,
        },
        {
            value: 12,
            label: 12,
        },
    ];
    const division = [
        {
            value: 'A',
            label: 'A',
        },
        {
            value: 'B',
            label: 'B',
        },
        {
            value: 'C',
            label: 'C',
        },
        {
            value: 'D',
            label: 'D',
        },
        {
            value: 'E',
            label: 'E',
        },
    ]
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} columns={12}>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="outlined-basic"
                            fullWidth label="First Name"
                            name='firstname'
                            onBlur={(e) =>
                                dispatch({
                                    type: 'INPUT',
                                    payload: { name: e.target.name, value: e.target.value },
                                })

                            }
                            variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="outlined-basic"
                            fullWidth label="Middle Name"
                            name='middlename'
                            onBlur={(e) =>
                                dispatch({
                                    type: 'INPUT',
                                    payload: { name: e.target.name, value: e.target.value },
                                })

                            }
                            variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="outlined-basic"
                            fullWidth
                            label="Last Name"
                            name='lastname'
                            onBlur={(e) =>
                                dispatch({
                                    type: 'INPUT',
                                    payload: { name: e.target.name, value: e.target.value },
                                })

                            }
                            variant="outlined" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2} columns={12}>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="outlined-select-currency"
                            select
                            fullWidth
                            label="Select Class"
                            name='class'
                            onBlur={(e) =>
                                dispatch({
                                    type: 'NUMBER',
                                    payload: { name: e.target.name, value: e.target.value },
                                })

                            }
                            defaultValue="1"
                        >
                            {studentClass.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="outlined-select-currency"
                            select
                            fullWidth
                            label="Select Division"
                            name='division'
                            onBlur={(e) =>
                                dispatch({
                                    type: 'INPUT',
                                    payload: { name: e.target.name, value: e.target.value },
                                })

                            }
                            defaultValue="A"
                        >
                            {division.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="outlined-number"
                            type="number"
                            fullWidth
                            label="Enter Roll Number in Digits"
                            name='roll'
                            onBlur={(e) =>
                                dispatch({
                                    type: 'NUMBER',
                                    payload: { name: e.target.name, value: e.target.value },
                                })

                            }
                            variant="outlined" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={4} columns={12}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="outlined-basic"
                            fullWidth
                            label="Address line 1"
                            name='address1'
                            onBlur={(e) =>
                                dispatch({
                                    type: 'INPUT',
                                    payload: { name: e.target.name, value: e.target.value },
                                })

                            }
                            variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="outlined-basic"
                            fullWidth
                            label="Address line 2"
                            name='address2'
                            onBlur={(e) =>
                                dispatch({
                                    type: 'INPUT',
                                    payload: { name: e.target.name, value: e.target.value },
                                })

                            }
                            variant="outlined" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2} columns={12}>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="outlined-basic"
                            fullWidth
                            label="Landmark"
                            name='landmark'
                            onBlur={(e) =>
                                dispatch({
                                    type: 'INPUT',
                                    payload: { name: e.target.name, value: e.target.value },
                                })

                            }
                            variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="outlined-basic"
                            fullWidth
                            label="City"
                            name='city'
                            onBlur={(e) =>
                                dispatch({
                                    type: 'INPUT',
                                    payload: { name: e.target.name, value: e.target.value },
                                })

                            }
                            variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="outlined-basic"
                            fullWidth type='password'
                            name='pincode'
                            label="Pincode"
                            onBlur={(e) =>
                                dispatch({
                                    type: 'INPUT',
                                    payload: { name: e.target.name, value: e.target.value },
                                })

                            }
                            variant="outlined" />
                    </Grid>
                </Grid>
                <Button mt={2} type='submit' variant="contained">Add Student</Button>
            </form>
        </div>
    );
};

export default NewStudentForm;