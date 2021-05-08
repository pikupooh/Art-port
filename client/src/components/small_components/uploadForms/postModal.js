import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { categories } from "../../../shared/categories";
import M from "materialize-css";
import { createPost } from "../../../redux/thunk/fetchPostData";

class PostModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
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

            elems = document.querySelectorAll("select");
            instances = M.FormSelect.init(elems, {});
        });
    }

    handleClose(e) {
        document.getElementById("post-form").reset();
    }

    handleSubmit(e) {
        e.preventDefault();

        let postformData = {};
        let imageformData = new FormData();
        postformData["title"] = this.state.title;
        postformData["description"] = this.state.description;

        let elem = document.querySelector("select");
        let instance = M.FormSelect.getInstance(elem);
        let category = [];
        instance.getSelectedValues().map((value) => {
            category.push(categories[value]);
        });
        postformData["category"] = category;
        instance = M.Chips.getInstance(document.getElementById("chip"));

        //console.log(instance.chipsData);
        let arr = [];
        instance.chipsData.map((chip) => arr.push(chip["tag"]));

        postformData["tags"] = arr;
        for (var i = 0; i < this.fileInput.current.files.length; i++) {
            
            imageformData.append("files", this.fileInput.current.files[i], this.fileInput.current.files[i].name);

        }
        console.log(this.fileInput.current.files);
        console.log("yo");
        console.log(postformData);
        document.getElementById("post-form").reset();
        instance = M.Modal.getInstance(document.getElementById("post-modal"));
        instance.close();

        this.props.createPost(this.props.userId, postformData, imageformData);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value,
        });

        console.log(this.state);
    }

    render() {
        return (
            <div id="post-modal" class="modal post-modal-body">
                <form id="post-form" onSubmit={(e) => this.handleSubmit(e)}>
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

                    <div class="file-field input-field col s12">
                        <div class="btn">
                            <span>Choose file</span>
                            <input type="file" multiple ref={this.fileInput} />
                        </div>
                        <div class="file-path-wrapper">
                            <input
                                class="file-path validate"
                                type="text"
                                placeholder="Upload one or more files"
                                required
                            />
                        </div>
                    </div>

                    <div
                        class="chips chips-placeholder input-field col s12"
                        id="chip"
                    ></div>
                    <div class="input-field col s12">
                        <label for="categories">Choose your categories</label>
                        <br />
                        <select multiple id="select1" required>
                            {categories.map((category, index) => {
                                return (
                                    <option value={index + 1}>
                                        {category}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
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

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            createPost: createPost,
        },
        dispatch
    );

const mapStateToProps = (state) => {
    return {
        userId: state.user.userId,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
