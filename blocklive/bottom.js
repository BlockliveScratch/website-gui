// save periodically

setInterval(
    saveNow,
    1000 * 20
)

injectLoadingOverlay()
injectJSandCSS()


console.log(
document.querySelector("body > div.index_app_3Qs6X > div > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp > div.menu-bar_account-info-group_MeJZP > div:nth-child(3) > div:nth-child(1) > div"))





async function saveNow() {
    let storage = vm.runtime.storage

    console.log('saving now')
    const assets = vm.assets

    await Promise.all(assets
        .filter(asset => !asset.clean)
        .filter(asset => !asset.uploaded)
        .map(
            asset => storage.store(
                asset.assetType,
                asset.dataFormat,
                asset.data,
                asset.assetId
            ).then(response => {
                // Asset servers respond with {status: ok} for successful POSTs
                if (response.status !== 'ok') {
                    // Errors include a `code` property, e.g. "Forbidden"
                    return Promise.reject(response.code);
                }
                asset.clean = true;
            }).catch(console.error)
        )
    );


    assets.forEach(asset=>asset.uploaded=true)

    await chrome.runtime.sendMessage(exId,{meta:'projectSavedJSON',blId,json:vm.toJSON(),version:blVersion,force:true})
    console.log('done saving')
}
async function getVM() {
    let reactInst = Object.values(await getObj('div[class^="stage-wrapper_stage-wrapper_"]')).find((x) => x.child);
    let vm = reactInst.child.child.child.stateNode.props.vm;
    return vm;
}

blId=new URL(document.location).searchParams.get('id')
document.getElementById('joinLink').value=`${location.origin}/?id=${blId}`
document.getElementById('changeRoom').onclick=function(){
    let newId = prompt('Enter new room key',blId);
    if(!newId) return;
    if(newId!=blId){window.location.href=`/?id=${newId}`}
}
document.title=`Blocklive Playground / ${blId}`

async function createBLProjectIfNotExists(id) {
    let exists = (await (await fetch(`${apiUrl}/projectExists/${id}`)).json()).exists;

    if(!exists) await fetch(`${apiUrl}/newProject/${uname}/${blId}`,{method:'post',body:JSON.stringify({blDefault:true}), headers:{'Content-Type': 'application/json'}});
}
createBLProjectIfNotExists(blId).then(
    onTabLoad
)


goToDefaultProject()