export function fileRead(fileRoute: string): string {
  return Deno.readTextFileSync(fileRoute);
}

export function readAll(fileRoute: string): string[] {
  const data: string[] = fileRead(fileRoute)
    .split("\n")
    .map((a) => a.replace("\r", ""));
  data.pop();
  return data;
}
