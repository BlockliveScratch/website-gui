export const assetsUrl = 'http://localhost:4103';
export const projectsUrl = 'http://localhost:3001';
// export const assetsUrl = '';


export function doAddWebStore(storage) {
    storage.addWebStore(
        [storage.AssetType.ImageVector, storage.AssetType.ImageBitmap, storage.AssetType.Sound],
        asset => `${assetsUrl}/asset/${asset.assetId}.${asset.dataFormat}/get/`, // get
        asset => `${assetsUrl}/asset/${asset.assetId}.${asset.dataFormat}/create/`, // create
        asset => `${assetsUrl}/asset/${asset.assetId}.${asset.dataFormat}/update/` // update
    );
}