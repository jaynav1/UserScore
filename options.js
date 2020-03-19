// Saves options to chrome.storage
function save_options() {
    var site = document.getElementById('color').value;
    var enabled = document.getElementById('enabled').checked;
    chrome.storage.sync.set({
      preferredSite: site,
      enabled: enabled
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      preferredSite: 'user',
      enabled: true
    }, function(items) {
      document.getElementById('color').value = items.preferredSite;
      document.getElementById('like').checked = items.enabled;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);