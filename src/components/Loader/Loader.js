import LoaderSpiner from "react-loader-spinner";

export default function Loader({ pictureName }) {
  return (
    <div>
      <LoaderSpiner
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      Ищем {pictureName}
    </div>
  );
}
