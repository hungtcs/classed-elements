import classed from "../lib";

const Wrapper = classed.div`relative w-[100px] h-[100px] bg-blue-500`;

export function App() {
  return <Wrapper>App Content</Wrapper>;
}
