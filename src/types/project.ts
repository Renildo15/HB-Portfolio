import { ArrayField, CheckboxField, TextField, TitleField } from "./section"

export type ProjectConfig = {
  title: "Project"
  fields: (
    | CheckboxField
    | TitleField
    | TextField
    | ArrayField
  )[]
}
