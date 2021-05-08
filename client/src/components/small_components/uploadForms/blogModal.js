import React from "react";
import { categories } from "../../../shared/categories";
import M from "materialize-css";

class BlogModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            content: "",
        };

        this.fileInput = React.createRef();
    }

    componentDidMount() {
        console.log("mounted1");
        document.addEventListener("DOMContentLoaded", function () {
            var elems = document.querySelectorAll(".fixed-action-btn");
            var instances = M.FloatingActionButton.init(elems, {});
            elems = document.querySelectorAll(".modal");
            instances = M.Modal.init(elems, {
                dismissible: false,
            });
            elems = document.querySelectorAll(".chips");
            instances = M.Chips.init(elems, {
                placeholder: "Enter a tag",
                secondaryPlaceholder: "+Tag",
            });
        });
    }

    handleClose(e) {
        document.getElementById("blog-form").reset();
    }

    handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData();
        formData.append("title", this.state.title);
        formData.append("description", this.state.description);
        formData.append("content", this.state.content);

        let instance = M.Chips.getInstance(document.getElementById("chip"));
        console.log(instance.chipsData);

        let arr = [];
        instance.chipsData.map((chip) => arr.push(chip["tag"]));

        formData.append("tags", arr);
        formData.append("files", this.fileInput.current.files);

        console.log(this.fileInput.current.files);

        for (var pair of formData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }

        document.getElementById("blog-form").reset();

        document.getElementById("post-form").reset();
        instance = M.Modal.getInstance(document.getElementById("blog-modal"));
        instance.close();
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value,
        });

        console.log(this.state);
    }

    render() {
        return (
            <div id="blog-modal" class="modal post-modal-body">
                <form id="blog-form" onSubmit={(e) => this.handleSubmit(e)}>
                    <div class="right-align" style={{ marginRight: "2%" }}>
                        <a
                            class="waves-effect waves-light btn-small modal-close"
                            onClick={(e) => {
                                this.handleClose(e);
                            }}
                        >
                            <i class="material-icons">close</i>
                        </a>
                    </div>
                    <div class="input-field col s12">
                        <input
                            placeholder="Title"
                            id="title"
                            type="text"
                            class="validate"
                            onChange={(e) => {
                                this.handleChange(e);
                            }}
                            required
                        />
                    </div>

                    <div class="input-field col s12">
                        <input
                            placeholder="Description"
                            id="description"
                            type="text"
                            class="validate"
                            onChange={(e) => {
                                this.handleChange(e);
                            }}
                            required
                        />
                    </div>

                    <div class="input-field col s12">
                        <label for="content">Content</label>
                        <textarea
                            id="content"
                            class="materialize-textarea"
                            onChange={(e) => {
                                this.handleChange(e);
                            }}
                            required
                        ></textarea>
                    </div>

                    <div class="file-field input-field col s12">
                        <div class="btn">
                            <span>Choose file</span>
                            <input type="file" ref={this.fileInput} />
                        </div>
                        <div class="file-path-wrapper">
                            <input
                                class="file-path validate"
                                type="text"
                                placeholder="Upload file"
                                required
                            />
                        </div>
                    </div>

                    <div
                        class="chips chips-placeholder input-field col s12"
                        id="chip"
                    ></div>

                    <div class="center-align">
                        <button
                            class="btn waves-effect waves-light"
                            type="submit"
                            name="action"
                        >
                            Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BlogModal;
