import React from "react";

class TagComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tagInput: "",
        };
    }

    handleChange = (e) => {
        this.setState({
            tagInput: e.target.value,
        });
    };
    inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === "Enter" && val) {
            this.props.addTag(val);
            this.setState({
                tagInput: "",
            });
        }
    };

    render() {
        const { tags } = this.props;

        return (
            <div className="input-tag">
                <ul className="input-tag_tags">
                    {tags.map((tag, i) => (
                        <li key={i}>
                            {tag}
                            <button
                                type="button"
                                onClick={() => {
                                    this.props.removeTag(i);
                                }}
                            >
                                +
                            </button>
                        </li>
                    ))}
                    <li className="input-tag__tags__input">
                        <input
                            type="text"
                            onKeyDown={this.inputKeyDown}
                            value={this.state.tagInput}
                            onChange={this.handleChange}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

export default TagComponent;
