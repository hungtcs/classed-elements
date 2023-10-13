import type { Component, ComponentProps, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";
import domElements, { SupportedHTMLElements } from "./dom-elements";

export type ClassedElement<C extends ValidComponent> = (classes: TemplateStringsArray) => Component<ComponentProps<C>>;

function baseClassed<C extends ValidComponent>(component: C): ClassedElement<C> {
  return (classes: TemplateStringsArray) => {
    return function (props) {
      return <Dynamic<C> component={component} {...props} class={[classes, props.class].join(" ").trim()} />;
    };
  };
}

const classed = baseClassed as typeof baseClassed & {
  [E in SupportedHTMLElements]: ClassedElement<E>;
};

for (const element of domElements) {
  classed[element as SupportedHTMLElements] = classed(element);
}

export { classed };
