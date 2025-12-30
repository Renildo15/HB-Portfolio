import { ArrayField, IconField, ImageField, TextField, TitleField } from "./section"

export type HeaderConfig = {
  title: "Header"
  fields: (
    | TitleField
    | ImageField
    | TextField
    | IconField
    | ArrayField
  )[]
}
