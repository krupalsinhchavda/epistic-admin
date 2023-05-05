function togglepassword() {
    var passwordInput = document.getElementById('password');
    var passStatus = document.getElementById('pass-status');
    if (passwordInput.type == 'password') {
        passwordInput.type = 'text';
        passStatus.className = 'fa fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        passStatus.className = 'fa fa-eye';
    }
}

function togglepasswordConfirm() {
    var ConfirmpasswordInput = document.getElementById('Confirmpassword');
    var Confirmpassstatus = document.getElementById('Confirm-pass-status');
    if (ConfirmpasswordInput.type == 'password') {
        ConfirmpasswordInput.type = 'text';
        Confirmpassstatus.className = 'fa fa-eye-slash';
    } else {
        ConfirmpasswordInput.type = 'password';
        Confirmpassstatus.className = 'fa fa-eye';
    }
}