package com.example.demo.payload.request;

import javax.validation.constraints.NotBlank;

public class CommentBody {

    @NotBlank
    private String content;
    private String replyTo;

    public String getReplyTo() {
        return replyTo;
    }

    public void setReplyTo(String replyTo) {
        this.replyTo = replyTo;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
