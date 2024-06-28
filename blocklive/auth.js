// let demoUsernames = ['aVerySexyScratchUser','rgantzos','ilhp10','scratch-cat']
// let uname = demoUsernames[Math.floor(Math.random()*demoUsernames.length)]+String(Math.floor(Math.random()*100))
// console.log(uname)

const randomUname = `monke${Math.floor(Math.random()*1000)}`
function askForUsername() {
    uname = prompt('enter a username (click on profile in top right to change it again)')
    saveUsername(uname)
}
function loadDefaultUsername() {
    uname = localStorage.getItem('username')
    if(!uname) {setUsernameSession(randomUname); return false}
    else setUsernameSession(uname)
    return true
}
let inputted=loadDefaultUsername();
if(!inputted) {askForUsername()}
function saveUsername(username) {
    localStorage.setItem('username',uname);
    setUsernameSession(username)
}
function setUsernameSession(username) {
    uname = username;
    try{
        let userDropdown = document.querySelector("body > div.index_app_3Qs6X > div > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp > div.menu-bar_account-info-group_MeJZP > div.menu-bar_menu-bar-item_oLDa-.menu-bar_hoverable_c6WFB")
        userDropdown.querySelector('span').innerText=username;
        userDropdown.querySelector('img').src = getPic(username)
    } catch(e){console.error(e)}
    try{
        liveMessage({type:'changeUsername',uname})
    } catch (e) {console.error(e)}
}

try{
    document.querySelector("body > div.index_app_3Qs6X > div > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp > div.menu-bar_account-info-group_MeJZP > div.menu-bar_menu-bar-item_oLDa-.menu-bar_hoverable_c6WFB").addEventListener('click',askForUsername)
}catch(e){console.error(e)}
localStorage.setItem('username',uname)

