import dynamic from "next/dynamic";
const DynamicImportedComponent = dynamic(() =>
  import("../src/ExampleComponent")
);

const Home = () => <DynamicImportedComponent />;

export default Home;
