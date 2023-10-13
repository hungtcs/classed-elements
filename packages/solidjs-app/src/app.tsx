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
