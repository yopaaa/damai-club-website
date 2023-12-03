import YoutubePlayer from "../components/YoutubePlayer";
import Button from "./Button";

function H2({ children }) {
  return <h2 className="text-white">{children}</h2>
}

const shortcodes = {
  Button,
  YoutubePlayer,
  h2: H2
};

export default shortcodes;
