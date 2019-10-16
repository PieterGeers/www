(function(){
	var dropzone = document.getElementById('dropzone');

	dropzone.ondragover = function() {
		dropzone.className = "dropzone dragover";
		return false;
	}

	dropzone.ondragleave = function() {
		dropzone.className = "dropzone";
		return false;
	}

	dropzone.ondrop = function(e) {
		e.preventDefault();
		dropzone.className = "dropzone";
		upload(e.dataTransfer.files);
	}

	function upload(files) {
		var formData = new FormData(), 
		xhr = new XMLHttpRequest(),
		x;

		for (x = 0; x < files.length; ++x)
		{
			formData.append('file[]', files[x]);
		}

		xhr.onload = function() {
			console.log(this.responseText);
			var data = JSON.parse(this.responseText);
			displayUploads(data);
		}

		xhr.open('post', 'upload.php')
		xhr.send(formData);
	}

	function displayUploads(data) {
		var uploads = document.getElementById('uploads'), 
			anchor,
			x;

		for(x = 0; x < data.length; ++x) {
			anchor = document.createElement('a');
			anchor.href = data[x].file;
			anchor.innerText = data[x].name;

			uploads.appendChild(anchor);
		}
	}

}());