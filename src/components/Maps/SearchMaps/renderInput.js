import React from 'react'
// import {creat} from '@material-ui/core/style'
import TextField from './TextField';

function renderInput(props) {
    const { InputProps, classes, ref, ...other } = props;

    return (
        <TextField
            style={{
                marginLeft: 0,
                flex: 1,
                content: "",
            }}
            InputProps={{
                inputRef: ref,
                classes: {
                    root: classes.inputRoot,
                    input: classes.inputInput,
                },
                ...InputProps,
            }}
            {...other}
        />
    );
}

export default renderInput;