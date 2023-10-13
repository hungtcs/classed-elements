import classed from "@classed-elements/react";

function Hello(props: { className?: string; name: string }) {
  return <p className={props.className}>Hello {props.name}!</p>;
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
