function formSubmit() {
    showError('&nbsp;')

    let requiredFields = ['first', 'last', 'email', 'password']

    let valid = forFields(requiredFields, 'red')
    if (valid) {
        showError('Validating Password...')
        authenticateUser()
    } else {
        showError(validationError)
    }
}

function setBorderColor(fieldName, color) {
    document.getElementById(fieldName).style.borderColor = (document.getElementById(fieldName).value == '') ? color : ''
}

function forFields(arr, color) {
    let valid = true
    for (i = 0; i < arr.length; ++i) {
        setBorderColor(arr[i], color)
        valid = (document.getElementById(arr[i]).value != '') && valid
    }
    return valid
}

function authenticateUser() {
    let uuid = uuidv5(document.getElementById('email').value, siteNamespace)
    setStor('uuid', uuid, false);
    axios.post(apiBaseUrl + '/api/AuthenticateUser', {
      first: document.getElementById('first').value,
      last: document.getElementById('last').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      instagram: document.getElementById('instagram').value,
      uuid: uuid
    })
    .then(function (response) {
      if (isDev) console.log('login success');
      window.location.href = response.data.page;
    })
    .catch(function (error) {
      if (isDev) console.log('login failed');
      showError(passwordError)
      setBorderColor('password', 'red')
    })
    .then(function () {
      // always executed
    });  
}

if (getUrlParameter('error') == 'password') {
    showError(passwordError)
    setBorderColor('password', 'red')
}
