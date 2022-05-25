import * as yup from "yup";
import { formats } from "../env";

export const schema = yup.object({
  name: yup.string().max(50, "max length is 50 chars").required(),
  username: yup
    .string()
    .lowercase()
    .max(25, "max length is 25 chars")
    .required(),
  picture: yup
    .mixed()
    .test(
      "FileSize",
      "File must be under 1MB",
      (value) => !value[0] || (value[0] && value[0].size <= 1024 * 1024)
    )
    .test(
      "FileType",
      "File must be an image",
      (value) => !value[0] || (value[0] && formats.includes(value[0].type))
    ),
  bio: yup.string().max(250, "max length is 250 chars"),
});
