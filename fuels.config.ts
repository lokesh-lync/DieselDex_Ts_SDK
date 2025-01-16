import { createConfig } from "fuels";

export default createConfig({
  workspace: "./tmp_abis/diesel-v1-periphery",
  output: "./sway_abis",
  forcBuildFlags: ["--release"],
  privateKey: "0x001",
});
