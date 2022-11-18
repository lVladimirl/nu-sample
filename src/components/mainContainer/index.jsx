import FormTransaction from "../formTransaction";
import "./index.css";
export const MainContainer = ({list, setList}) => {
  return (
    <main className="MainContainer">
        <FormTransaction list={list} setList={setList}/>
    </main>
  );
};

export default MainContainer;
