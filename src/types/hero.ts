import { ArrayField, CheckboxField, TextField, TitleField, ImageField } from "./section"

export type HeroConfig = {
  title: "Hero"
  fields: (
    | CheckboxField
    | TitleField
    | TextField
    | ImageField
    | ArrayField
  )[]
}
