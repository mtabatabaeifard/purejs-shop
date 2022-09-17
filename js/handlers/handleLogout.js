function handleLogout(){
    localStorage.setItem("logged in",false);
    location.reload();
}
export default handleLogout;