const Closed = false;
const Open = true;
const UpdatePending = false;

if (Closed === true) {
    window.location.href = "Denied.html";
    alert("Website access Denied.");
}

if (UpdatePending === true) {
    window.location.href = "Denied.html";
    alert("Website Updating.. Await update..");
    setTimeout(() => {
        window.location.href = "index.html";
        alert("Website updated :D");
    }, 300);
}