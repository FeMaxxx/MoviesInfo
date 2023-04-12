import { ColorRing } from "react-loader-spinner";
import { LoaderBox } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderBox>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={[
          "rgb(197, 255, 250)",
          "rgb(120, 255, 244)",
          "rgb(197, 255, 250)",
          "rgb(120, 255, 244)",
          "rgb(197, 255, 250)",
        ]}
      />
    </LoaderBox>
  );
};

export default Loader;
