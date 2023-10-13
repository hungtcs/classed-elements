# @classed-elements/{react/solidjs}

`classed-elements` is a utility that simplifies the process of reusing components with Tailwind CSS in SolidJS or React.
This tool is inspired by styled-components and aims to streamline the development of reusable tailwind css components in your SolidJS / React applications.

## Installation

- [React](./packages/react/README.md)
- [Solidjs](./packages/solidjs/README.md)

## Usage

```tsx
import classed from "@classed-elements/solidjs";

function Hello(props: { class?: string; name: string }) {
  return <p class={props.class}>Hello {props.name}!</p>;
}

const WhiteHello = classed(Hello)`text-white`;

const Wrapper = classed.div`relative w-[200px] h-[100px] bg-blue-500`;

export function App() {
  return (
    <Wrapper>
      <span>App Content</span>
      <Hello name="Github" />
      <WhiteHello name="Classed" />
    </Wrapper>
  );
}
```

In this example, we've created a classed Wrapper component using classed-elements, applying Tailwind CSS classes to it.
You can then use the Wrapper component in your SolidJS application as you would with any other component.

## Working With Tailwind CSS IntelliSense

In order to support tailwind auto-completion,
you need to add the following content in the vscode configuration file `.vscode/settings.json`

```jsonc
{
  "tailwindCSS.experimental.classRegex": ["classed\\(.+\\)`(.*)`", "classed\\.\\w+`(.*)`"]
}
```

## Features

- **Reusability**: Styled components created with Classed-Elements can be reused across your application, reducing code duplication and improving maintainability.

- **TypeScript Support**: Classed-Elements offers seamless integration with TypeScript, ensuring type safety and enhanced development with static typing.
