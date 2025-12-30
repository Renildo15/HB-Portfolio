import { ArrayField, CheckboxField, TextField, TitleField } from "./section"

export type ContactConfig = {
  title: "Contact"
  fields: (
    | CheckboxField
    | TitleField
    | TextField
    | ArrayField
  )[]
}
