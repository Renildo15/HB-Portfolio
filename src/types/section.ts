import { AboutConfig } from "./about"
import { ContactConfig } from "./contactme"
import { ExperienceConfig } from "./experience"
import { FooterConfig } from "./footer"
import { HeaderConfig } from "./header"
import { HeroConfig } from "./hero"
import { ProjectConfig } from "./project"
import { SkillConfig } from "./skills"

export type SectionType<T = SectionConfig> = {
  id: number
  name: string
  type: string
  configs_json: T
  created_at: string
  updated_at: string
}

export type BaseField = {
  type: string
  name?: string
  label: string
}

export type TitleField = {
  type: "title"
  label: string
}

export type TextField = {
  type: "text"
  name: string
  label: string
}

export type NumberField = {
  type: "number"
  name: string
  label: string
}

export  type ImageField = {
  type: "image"
  name: string
  label: string
}

export type CheckboxField = {
  type: "checkbox"
  name: string
  label: string
}

export type DateField = {
  type: "date"
  name: string
  label: string
}

export type IconField = {
  type: "icon"
  name: string
  label: string
}


export type ArrayField = {
  type: "array"
  name: string
  label: string
  fields: Field[]
}


export type Field =
  | TitleField
  | TextField
  | NumberField
  | ImageField
  | CheckboxField
  | DateField
  | IconField
  | ArrayField


export type SectionConfigBase = {
  title: string
  fields: Field[]
}


export type SectionConfig =
  | HeaderConfig
  | ExperienceConfig
  | AboutConfig
  | FooterConfig
  | HeroConfig
  | ProjectConfig
  | ContactConfig
  | SkillConfig
