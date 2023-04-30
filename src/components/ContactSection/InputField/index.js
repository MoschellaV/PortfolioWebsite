import React, { useState } from "react";
import { TextField, useTheme } from "@mui/material";

const InputField = ({ isMultiline, textFieldWidth, value, setValue }) => {
    const theme = useTheme();
    const [userIsFocused, setUserIsFocused] = useState(false);

    return (
        <TextField
            sx={{
                "& .MuiInput-underline:before": {
                    borderBottomColor: "white",
                },
                "& .MuiInput-underline:hover:before": {
                    borderBottomColor: theme.palette.orange.main,
                },
                "&:focus-within .MuiInput-underline:before": {
                    borderBottomColor: theme.palette.secondary.main,
                },
                "& .MuiInput-underline:after": {
                    borderBottomColor: theme.palette.orange.bright,
                },
                "& .MuiInputBase-input": {
                    color: "white",
                    marginTop: isMultiline && "0.8vw",
                    fontSize: "clamp(0.9rem, 1.15vw, 1.4rem)",
                    textAlign: value && !userIsFocused && !isMultiline ? "center" : "left",
                    width: `${textFieldWidth}vw`,
                },
            }}
            multiline={isMultiline}
            hiddenLabel
            id="name"
            variant="standard"
            value={value}
            onChange={(event) => {
                setValue(event.target.value);
            }}
            onFocus={() => {
                setUserIsFocused(true);
            }}
            onBlur={() => {
                setUserIsFocused(false);
            }}
        />
    );
};

export default InputField;
