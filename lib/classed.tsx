import type { ComponentProps, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

export function classed<C extends ValidComponent>(component: C) {
  return (classes: TemplateStringsArray) => {
    return function (props: ComponentProps<C>) {
      return (
        <Dynamic<C>
          component={component}
          {...props}
          class={[classes, props.class].join(" ").trim()}
        />
      );
    };
  };
}

classed.a = classed("a");
classed.p = classed("p");
classed.h1 = classed("h1");
classed.h2 = classed("h2");
classed.h3 = classed("h3");
classed.h4 = classed("h4");
classed.h5 = classed("h5");
classed.h6 = classed("h6");
classed.div = classed("div");
classed.span = classed("span");
classed.main = classed("main");
classed.aside = classed("aside");
classed.header = classed("header");
classed.button = classed("button");
classed.section = classed("section");
