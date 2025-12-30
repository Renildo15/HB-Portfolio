import { ArrayField, CheckboxField, TextField, TitleField } from "./section"

export type ExperienceConfig = {
  title: "Experience"
  fields: (
    | CheckboxField
    | TitleField
    | TextField
    | ArrayField
  )[]
}
