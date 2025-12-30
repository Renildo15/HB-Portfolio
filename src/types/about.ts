import { CheckboxField, ImageField, TextField, TitleField } from "./section"

export type AboutConfig = {
  title: "About"
  fields: (
    | CheckboxField
    | TitleField
    | TextField
    | ImageField
  )[]
}

