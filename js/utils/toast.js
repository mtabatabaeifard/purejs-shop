function toast(title, message,state) {
  const toastShow = `
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11" data-bs-autohide="true">
  <div id="liveToast" class="toast ${state}" role="alert" aria-live="assertive"  aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">${title}</strong>
      <small>now</small>
      
    </div>
    <div class="toast-body">
      ${message}
    </div>
  </div>
</div>
    `;
  
    return toastShow;
}

export default toast;
