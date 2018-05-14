var registered_post_type = ["Default"];

function PostType() {
	this.register_post_type = function (name, args) {
		registered_post_type.push(name);
	}

	this.getPostTypes = function () {
		return registered_post_type;
	}
}


module.exports = PostType;
