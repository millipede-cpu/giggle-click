// this type will be used throughout the app so it's best to have it in it's own type declaration file.
// import * as Babel from "@babel/core";

// export = babelPluginMacros;

interface Joke {
  text: string;
  complete: boolean;
}

interface NextButton {
  onClick: () => void;
}

type ToggleJoke = (selectedJoke: Jokes) => void;

type AddJokes = (text: string) => void;
// declare namespace babelPluginMacros {
//   interface References {
//     [key: string]: Babel.NodePath[];
//   }

//   interface Options {
//     configName?: string | undefined;
//   }

//   interface MacroParams {
//     references: { default: Babel.NodePath[] } & References;
//     state: Babel.PluginPass;
//     babel: typeof Babel;
//     config?: { [key: string]: any } | undefined;
//   }

//   type MacroHandler = (params: MacroParams) => void;

//   class MacroError extends Error {}

//   function createMacro(handler: MacroHandler, options?: Options): any;
// }

// declare function babelPluginMacros(
//   babel: typeof Babel,
//   options: any
// ): Babel.PluginObj;
