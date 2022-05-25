import { useFormContext, FieldError } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { ReactNode } from "react";

interface Props {
  name: string;
  label: string;
  error?: FieldError;
  type?: string;
  endAdornment?: ReactNode;
  multiline?: boolean;
}

const CustomTextField: React.FC<Props> = ({ name, label, error, type, endAdornment, multiline }) => {
  const { register } = useFormContext();
  return (
    <FormControl error={error ? true : false} sx={{ width: "100%"}}>
      <InputLabel htmlFor={name}>
        {label}
      </InputLabel>
      <OutlinedInput
        id={name}
        label={label}
        type={type ? type : "text"}
        endAdornment={endAdornment}
        multiline={multiline}
        sx={{
          borderRadius: "5px",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
        }}
        {...register(name)}
      />
      <FormHelperText>{error && error.message}</FormHelperText>
    </FormControl>
  );
};

export default CustomTextField;