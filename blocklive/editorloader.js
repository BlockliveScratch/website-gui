// import './editor.js'

// process editor.js
async function getProcessed() {
    let editorScript = await (await fetch('./blocklive/editor.js')).text()
    let topAppend = await (await fetch('./blocklive/top.js')).text()
    let bottomAppend = await (await fetch('./blocklive/bottom.js')).text()
    let comms = await (await fetch('./blocklive/comms.js')).text()
    let auth = await (await fetch('./blocklive/auth.js')).text()


    
    // let processed;
    // remove marked lines
    // processed=editorScript.split('\n').filter(line=>!line.includes('!@#')).join('\n')


    let processed = '';
    processed=auth+'\n'+processed;

    let deleting = false;

    const marker = '//?'

    editorScript=editorScript.replace(/chrome\.runtime\.sendMessage/g,'onExternalMessage')
    for (line of editorScript.split('\n')) {
        let args = line.split(marker)
        let operation = args[1]
        operation=operation?operation.trim():null
        let overridden=false;

        switch (operation) {
            case '!':
                continue;
            case '{':
                deleting=true;
                continue;
            case '}':
                deleting=false;
                continue;
            case '+':
                overridden=true;
                break;
        }
        if(deleting && !overridden) {continue;}

        // otherwise, add line
        processed = processed+line+'\n';

    }

    processed=comms+'\n'+processed;
    processed=topAppend+'\n'+processed;
    processed=processed+'\n'+bottomAppend;

    return processed;
}
// getProcessed()


async function require(url) {
    let script = document.createElement('script')
    let prom = new Promise(res=>script.addEventListener('load',res))
    script.src=url;
    document.head.appendChild(script)
    return prom;
}

async function inject() {

    await require('https://cdn.socket.io/4.6.0/socket.io.min.js')


    let script = document.createElement('script')
    // script.src='./blocklive/editor.js'
    script.type='text/javascript';
    processed=await getProcessed()
    console.log(processed)
    script.text=processed
    document.head.appendChild(script)

}
inject()