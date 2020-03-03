import { join } from "path"
import { GenerateBoiler } from "boiler-dev"

export const generate: GenerateBoiler = async ({
  cwdPath,
  files,
}) => {
  const actions = []

  for (const file of files) {
    const { name, source } = file

    if (name === "depGraph.ts") {
      actions.push({
        action: "write",
        path: join(cwdPath, "src", name),
        source,
      })
    }
  }

  return actions
}
