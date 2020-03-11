import { ActionBoiler } from "boiler-dev"

export const generate: ActionBoiler = async () => {
  const actions = []

  actions.push({
    action: "write",
    path: "src/depGraph.ts",
    sourcePath: "tsignore/depGraph.ts",
  })

  return actions
}
