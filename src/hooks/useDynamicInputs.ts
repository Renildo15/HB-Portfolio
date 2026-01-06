import { useState } from "react";
import { InputType } from "../types/input";

export function useDynamicInputs() {
  const [inputs, setInputs] = useState<InputType[]>([]);

  const addTripleTextInput = () => {
    const id = Date.now();

    setInputs(prev => [
      ...prev,
      {
        id: `${id}-label`,
        label: "Nome",
        name: `label-${prev.length}`,
        type: "text",
      },
      {
        id: `${id}-link`,
        label: "Link",
        name: `link-${prev.length}`,
        type: "text",
      },
      {
        id: `${id}-icon`,
        label: "Icon",
        name: `icon-${prev.length}`,
        type: "text",
      },
    ]);
  };

  return {
    inputs,
    addTripleTextInput,
    setInputs,
  };
}