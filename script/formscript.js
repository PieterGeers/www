const name = document.getElementById('name');
const mail = document.getElementById('mail');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('contact-form');
const nameError = document.getElementById('errorname');
const subjectError = document.getElementById('errorsubject');
const messageError = document.getElementById('errortext')
const mailError = document.getElementById('errormail');

const pattern = {
	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}


form.addEventListener('submit', (e) => {
	var int = 0;
	if (name.value == '' || name.value == null || name.value.length == 1) {
		++int;
		nameError.innerText = 'Name is required';
	}

	if (subject.value == '' || subject.value == null || subject.value.length <= 3) {
		++int;
		subjectError.innerText = 'Subject is required'
	}

	if (!pattern[email].test(mail.value)){
		++int;
		mailError.innerText = 'Email is required and must be valid. Ex: me@domain.com'
	}

	if (message.value.length <= 20) {
		++int;
		messageError.innerText = 'Message must contain at least 20 characters'
	}

	if (int > 0) {
		e.preventDefault();
	}
});