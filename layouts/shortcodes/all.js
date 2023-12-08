import YoutubePlayer from "../components/YoutubePlayer";
import Button from "./Button";

function H1({ children }) {
  return <h1 className="text-white">{children}</h1>;
}
function H2({ children }) {
  return <h2 className="text-white">{children}</h2>;
}
function H3({ children }) {
  return <h3 className="text-white">{children}</h3>;
}
function H4({ children }) {
  return <h4 className="text-white">{children}</h4>;
}
function H5({ children }) {
  return <h5 className="text-white">{children}</h5>;
}
function Angker(data) {
  return <a className="text-white" href={data.href} target="_blank" rel="noreferrer">{data.children}</a>;
}
const shortcodes = {
  Button,
  YoutubePlayer,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  a: Angker
};

export default shortcodes;
