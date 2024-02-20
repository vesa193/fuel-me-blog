import { FormEvent, useId, useReducer, useState } from "react";
import style from "./App.module.css";
import Button from "./components/buttons/Button";
import Card from "./components/cards/Card";
import InputField from "./components/text-inputs/InputField";

enum typeActions {
    ON_CHANGE_FIELD = "ON_CHANGE_FIELD",
    RESET = "RESET",
}

type ReducerState = {
    title: string;
    text: string;
    author: string;
};

type ReducerAction = {
    type: string;
    fieldName: "title" | "text" | "author";
    payload: string;
};

function reducer(state: ReducerState, action: ReducerAction) {
    switch (action.type) {
        case typeActions.ON_CHANGE_FIELD:
            return {
                ...state,
                [action.fieldName]: action.payload,
            };

        case typeActions.RESET:
            return intialState;

        default:
            return state;
    }
}

const intialState = {
    title: "",
    text: "",
    author: "",
};

type Blog = {
    id: string;
    title: string;
    text: string;
    author: string;
};

function App() {
    const [state, dispatch] = useReducer(reducer, intialState);
    const [blogsList, setBlogsList] = useState<Blog[]>([]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { title, text, author } = state;
        const id = new Date().toISOString();
        if (!(state.title && state.text && state.author)) {
            alert("Fill in all the fields!");
            return;
        }

        setBlogsList([...blogsList, { id, title, text, author }]);
        dispatch({
            type: typeActions.RESET,
            fieldName: "title",
            payload: "",
        });
    };

    return (
        <div className={style.blog}>
            <form className={style["blog-form"]} onSubmit={handleSubmit}>
                <div className={style["blog-inputs"]}>
                    <InputField
                        name="title"
                        label="Title"
                        value={state.title}
                        onChange={(inputValue: string) =>
                            dispatch({ type: typeActions.ON_CHANGE_FIELD, fieldName: "title", payload: inputValue })
                        }
                    />
                    <InputField
                        name="text"
                        label="Blog Text"
                        value={state.text}
                        onChange={(inputValue: string) =>
                            dispatch({ type: typeActions.ON_CHANGE_FIELD, fieldName: "text", payload: inputValue })
                        }
                    />
                    <InputField
                        name="author"
                        label="Author"
                        value={state.author}
                        onChange={(inputValue: string) =>
                            dispatch({ type: typeActions.ON_CHANGE_FIELD, fieldName: "author", payload: inputValue })
                        }
                    />
                </div>
                <div className={style["blog-form-actions"]}>
                    <Button type="submit" onClick={() => {}}>
                        Submit
                    </Button>
                </div>
            </form>
            <br />
            <br />
            <br />
            <div
                className={style["blog-cards"]}
                // style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1rem" }}
            >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default App;
