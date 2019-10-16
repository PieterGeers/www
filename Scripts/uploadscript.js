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
			var data = this.responseText;
			console.log(data);	
		}

		xhr.open('post', 'Php/upload.php')
		xhr.send(formData);
	}

}());