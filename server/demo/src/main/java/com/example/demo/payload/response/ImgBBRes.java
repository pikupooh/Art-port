package com.example.demo.payload.response;

public class ImgBBRes {
	private Detail data;

	private boolean success;

	private String status;

	public Detail getData() {
		return data;
	}

	public void setData(Detail data) {
		this.data = data;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public class Detail {
		private String display_url;

		private String size;

		private String delete_url;

		private String expiration;

		private String id;

		private String time;

		private String title;

		private String url_viewer;

		private String url;

		public String getDisplay_url() {
			return display_url;
		}

		public void setDisplay_url(String display_url) {
			this.display_url = display_url;
		}

		public String getSize() {
			return size;
		}

		public void setSize(String size) {
			this.size = size;
		}

		public String getDelete_url() {
			return delete_url;
		}

		public void setDelete_url(String delete_url) {
			this.delete_url = delete_url;
		}

		public String getExpiration() {
			return expiration;
		}

		public void setExpiration(String expiration) {
			this.expiration = expiration;
		}

		public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}

		public String getTime() {
			return time;
		}

		public void setTime(String time) {
			this.time = time;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getUrl_viewer() {
			return url_viewer;
		}

		public void setUrl_viewer(String url_viewer) {
			this.url_viewer = url_viewer;
		}

		public String getUrl() {
			return url;
		}

		public void setUrl(String url) {
			this.url = url;
		}

		@Override
		public String toString() {
			return "Detail [display_url=" + display_url + ", size=" + size + ", delete_url=" + delete_url
					+ ", expiration=" + expiration + ", id=" + id + ", time=" + time + ", title=" + title
					+ ", url_viewer=" + url_viewer + ", url=" + url + "]";
		}

	}
}
