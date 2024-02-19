import style from "./App.module.css";
import Button from "./components/buttons/Button";
import InputField from "./components/text-inputs/InputField";

function App() {
    return (
        <div className={style.blog}>
            <form className={style["blog-form"]}>
                <div className={style["blog-inputs"]}>
                    <InputField name="title" label="Title" value="" onChange={() => {}} />
                    <InputField name="text" label="Blog Text" value="" onChange={() => {}} />
                    <InputField name="author" label="Author" value="" onChange={() => {}} />
                </div>
                <div className={style["blog-form-actions"]}>
                    <Button type="submit" onClick={() => {}}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default App;
