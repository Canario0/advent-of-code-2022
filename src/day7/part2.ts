const CD_COMMAND = "cd";
const LS_COMMAND = "ls";
const FOLDER_ID = "dir";
const MAX_FREE_SPACE = 30000000;
const SYSTEM_TOTAL_SIZE = 70000000;
const COMMAND_REGEX = new RegExp(/\$ (\w+)( (?:\.\.|\w+))?/);

class Node {
  public readonly name: string;
  public _size = 0;
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

  public addFile(size: number) {
    this._size += size;
  }

  public get size(): number {
    return this.childs.reduce((acc, node) => acc + node.size, this._size);
  }
}

function processCommand(command: string): string[] {
  return COMMAND_REGEX.exec(command)?.slice(1) ?? [];
}

export function solve(input: string[]): number {
  const commands = input.slice(1).reverse();
  const root = new Node("/");
  let currentFolder: Node | null = root;
  const folders: Node[] = [root];
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
          currentFolder!.addFile(Number(weightOrDir));
        } else {
          currentFolder!.setChild(folder);
          folders.push(currentFolder!.getChild(folder)!);
        }
        fileRow = commands.pop() ?? "";
      }
      if (fileRow) {
        commands.push(fileRow);
      }
    }
  }
  const toFree = MAX_FREE_SPACE - (SYSTEM_TOTAL_SIZE - root.size);
  const candidates = folders
    .map((node) => node.size)
    .filter((size) => size >= toFree)
    .sort((a, b) => a - b);
  return candidates[0];
}
