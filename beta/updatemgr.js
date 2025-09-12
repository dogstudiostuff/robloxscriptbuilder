const CURRENT_VERSION = "1.0.1"

if (localStorage.getItem("gotUpdfor_" + CURRENT_VERSION) == null) {
    localStorage.setItem("gotUpdfor_" + CURRENT_VERSION, true)
    window.location.href = "whats_new.html"
}