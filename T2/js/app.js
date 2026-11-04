document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-text');
  const copyIcon = document.getElementById('copy-icon');

  if (copyBtn && copyText) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-email');
      if (!email) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const temp = document.createElement('input');
          temp.value = email;
          document.body.appendChild(temp);
          temp.select();
          document.execCommand('copy');
          document.body.removeChild(temp);
        }

        const originalText = copyText.textContent;
        copyText.textContent = 'Copied!';
        copyBtn.style.color = '#15803d';
        copyBtn.style.borderColor = '#15803d';

        if (copyIcon) {
          copyIcon.innerHTML = '<polyline points="20 6 9 17 4 12"/>';
        }

        setTimeout(() => {
          copyText.textContent = originalText;
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
          if (copyIcon) {
            copyIcon.innerHTML = '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>';
          }
        }, 1800);
      } catch (err) {
        console.error('Copy failed: ', err);
      }
    });
  }
});
