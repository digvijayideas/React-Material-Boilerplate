import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { isEmpty } from 'lodash-es'

export default function EmptyTextField() {
    const [emptyEmailError, setEmailEmptyError] = useState(false);
    const emptyTextField = (event) => {
        if (isEmpty(event.currentTarget.value)) {
            setEmailEmptyError(true)
        } else {
            setEmailEmptyError(false);
        }
    }
    return (
        <div>
            <TextField
                margin="normal"
                required
                fullWidth
                id="yourTextFieldName"
                label="YOUR TEXT FIELD NAME"
                name="yourTextFieldName"
                autoFocus
                error={emptyEmailError}
                helperText={emptyEmailError ? 'Textfield is required and should not be empty' : ' '}
                InputProps={{
                    style: {
                        borderRadius: "10px",
                    },
                    required: true
                }}
                onChange={emptyTextField}
            />
        </div>
    );
}