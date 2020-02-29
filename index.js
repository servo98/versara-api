import {app} from './api/app.js'

app.listen(process.env.PORT, () => {
    console.log(`Versara Server Running on port ${process.env.PORT}`);
})