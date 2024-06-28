pm2 delete bl.website
npm run clean
npm run build
pm2 start npm --name bl.website -- run start