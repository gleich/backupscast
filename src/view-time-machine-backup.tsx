import { Detail, render } from "@raycast/api";
import { getStatus } from "./tmutil";

async function main() {
  render(<Detail markdown="# Hello World!" />);
  console.log(await getStatus());
}

main();
