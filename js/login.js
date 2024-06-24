function redirectTo(role) {
  if (role === 'donor') {
    open= 'donor.html';
  } else if (role === 'recipient') {
    window.location.href = 'recipient.html';
  }
}
