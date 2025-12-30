import {ImageField, TextField, TitleField } from "./section"

export type FooterConfig = {
  title: "Footer"
  fields: (
    | TitleField
    | ImageField
    | TextField
  )[]
}
