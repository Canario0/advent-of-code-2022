const CD_COMMAND = "cd";
const LS_COMMAND = "ls";
const FOLDER_ID = "dir";
const MAX_FOLDER_SIZE = 100000;
const COMMAND_REGEX = new RegExp(/\$ (\w+)( (?:\.\.|\w+))?/);

class Node {
  public readonly name: string;
  public size = 0;
  public parent: Node | null;
  private _childs = new Map<string, Node>();

  constructor(name: string, parent?: Node) {
    this.name = name;
    this.parent = parent ?? null;
  }

  public get childs() {
    return Array.from(this._childs.values());
  }

  public getChild(folder: string): Node | null {
    return this._childs.get(folder) ?? null;
  }

  public setChild(folder: string) {
    this._childs.set(folder, new Node(folder, this));
  }
}

function processCommand(command: string): string[] {
  return COMMAND_REGEX.exec(command)?.slice(1) ?? [];
}

function computeSize(root: Node): number[] {
  const childs = root.childs;
  if (!childs.length) {
    return [root.size];
  }
  const sizes = childs.reduce(
    (acc, node) => [...acc, ...computeSize(node)],
    [] as number[]
  );
  root.size = childs.reduce((acc, child) => acc + child.size, root.size);
  return [root.size, ...sizes];
}

export function solve(input: string[]): number {
  const commands = input.slice(1).reverse();
  const root = new Node("/");
  let currentFolder: Node | null = root;
  while (commands.length) {
    const row = commands.pop();
    let [command, folder] = processCommand(row!);
    if (command === CD_COMMAND) {
      folder = folder.trim();
      if (folder === "..") {
        currentFolder = currentFolder!.parent;
        if (currentFolder === null) {
          throw Error("Invalid Root Folder");
        }
      } else {
        currentFolder = currentFolder!.getChild(folder);
      }
    } else if (command === LS_COMMAND) {
      let fileRow = commands.pop() ?? "";
      while (!processCommand(fileRow).length && fileRow !== "") {
        const [weightOrDir, folder] = fileRow.split(" ");
        if (weightOrDir !== FOLDER_ID) {
          currentFolder!.size += Number(weightOrDir);
        } else {
          currentFolder!.setChild(folder);
        }
        fileRow = commands.pop() ?? "";
      }
      if (fileRow) {
        commands.push(fileRow);
      }
    }
  }
  return computeSize(root)
    .filter((size) => size <= MAX_FOLDER_SIZE)
    .reduce((acc, size) => acc + size, 0);
}
