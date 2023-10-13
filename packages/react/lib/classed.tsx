import { domElements, type SupportedHTMLElements } from "@classed-elements/utils";
import type { ComponentProps, ComponentType, ElementType } from "react";

export type ClassedElement<C extends ElementType> = (
  classes: TemplateStringsArray
) => ComponentType<ComponentProps<C> & { className?: string }>;

function baseClassed<C extends ElementType>(component: C): ClassedElement<C> {
  return (classes: TemplateStringsArray) => {
    return function (props) {
      const Component = component as ComponentType<ComponentProps<C> & { className: string }>;
      return <Component {...props} className={[classes, props.className].join(" ").trim()} />;
    };
  };
}

const classed = baseClassed as typeof baseClassed & {
  [E in SupportedHTMLElements]: ClassedElement<SupportedHTMLElements>;
};

for (const element of domElements) {
  classed[element as SupportedHTMLElements] = classed(element);
}

export { classed };
