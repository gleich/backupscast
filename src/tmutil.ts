import { exec } from "child_process";

export async function getStatus(): Promise<string> {
  return new Promise((resolve, reject) => {
    exec("/usr/bin/tmutil status", (err, stdout) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(
        stdout
          .split("\n")
          .map((l) => l.trim())
          .join("\n")
      );
    });
  });
}
