import { ArrayField, CheckboxField, TextField, TitleField } from "./section"

export type SkillConfig = {
  title: "Skill"
  fields: (
    | CheckboxField
    | TitleField
    | TextField
    | ArrayField
  )[]
}
